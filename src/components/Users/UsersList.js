import Card from "../UI/Card";

import styles from './UsersList.module.css'


const UsersList = props => {

    const {onDeleteUser, users} = props;

    return (
        <Card className={styles.users}>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        onClick={() => onDeleteUser(user.id)}
                    >
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;