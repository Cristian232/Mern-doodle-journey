import UserItem from "./UserItem.jsx";

const UserList = (props) => {

    if (props.items.length === 0) {
        return (
            <>
                <p>No items to show</p>
            </>
        )
    }

    return (
        <ul>
            {props.items.map(user => {
                return <UserItem
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            placeCount={user.places}
                            />
            })}
        </ul>
    );
};

export default UserList;