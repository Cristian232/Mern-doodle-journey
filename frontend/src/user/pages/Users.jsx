import UserList from "../components/UserList.jsx";

const Users = () => {
    const USERS = [{
        id: "user1",
        name: "Chris",
        image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
        places: 3
        }];

    return (
        <UserList items={USERS}/>
    );
};

export default Users;