import {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
        const [enteredUsername, setEnteredUsername] = useState('');
        const [enteredAge, setEnteredAge] = useState('');
        const [error, setError] = useState();

        const usernameChangeHandler = event => {
            setEnteredUsername(event.target.value);
        };

        const ageChangeHandler = event => {
            setEnteredAge(event.target.value);
        };

        const addUserHandler = (event) => {
            event.preventDefault();

            const notValid = (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)

            if (notValid) {
                setError({
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non-empty values).'
                });
                return;
            }

            if (+enteredAge < 1) {
                setError({
                    title: 'Invalid age',
                    message: 'Please enter a valid age (> 0).'
                });
                return;
            }

            const personData = {
                name: enteredUsername,
                age: enteredAge,
                id: Math.floor(Math.random() * 100).toString()
            };

            props.onAddUser(personData);

            setEnteredUsername('');
            setEnteredAge('');
        }

        const errorHandler = () => {
            setError('');
        }

        return (
            <div>
                {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onCloseError={errorHandler}
                />}
                <Card className={styles.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                        />
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            type="number"
                            value={enteredAge}
                            onChange={ageChangeHandler}/>
                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
            </div>
        );
    }
;

export default AddUser;