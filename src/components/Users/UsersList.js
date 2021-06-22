import Card from "../UI/Card";

import styles from './UsersList.module.css'


const UsersList = props => {

    const deleteUserHandler = user => {
        console.log(user.name);
        console.log(user.age)
        console.log(user.key);
        // props.onDeleteUser(user.key);
    }

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => (
                    <li
                        key={user.id}
                        onClick={deleteUserHandler}
                    >
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;