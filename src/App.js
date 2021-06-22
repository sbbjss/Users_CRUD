import {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {

    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (user) => {
        setUsersList(prevUsers => {
            return [...prevUsers, user]
        });
    };

    const deleteUserHandler = (userId) => {
        setUsersList(prevUsers => {
            return prevUsers.filter(item => item.key !== userId)
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            {usersList.length > 0 && <UsersList users={usersList} onDeleteUser={deleteUserHandler} />}
        </div>
    );
}

export default App;
