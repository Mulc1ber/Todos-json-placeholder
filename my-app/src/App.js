import {useState, useEffect} from 'react'
import styles from './App.module.css';

export const App = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных')
            }
            return response.json()
        })
        .then((data) => {
            console.log(data);
            setTodos(data)
        })
        .catch((error) => console.log(error))
    }, [])

    const randomIndex = Math.floor(Math.random() * todos.length);

    return (
        <div className={styles.App}>
            <h1>Todos json placeholder</h1>
            <div>
                <ul>
                    {/* {todos.map(({id, title}, index) => {
                        if (index === 1) {
                            return <li key={id} className={styles.Title}>{title}</li>;
                        }
                        return null;
                    })} */}

                    {todos[randomIndex] && (
                        <li key={todos[randomIndex].id} className={styles.Title}>
                            {todos[randomIndex].title}
                        </li>
                    )}

                </ul>
            </div>
        </div>
    );
};
