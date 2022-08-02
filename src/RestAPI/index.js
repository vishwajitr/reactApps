import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const RestAPI = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                console.log(users)

            });
    }, [])


    let usersList =
        users.map((user, index) => {
            return (
                <li style={{ marginLeft: '20px' }}> {user.name} == {user.email}</li >
            )
        })

    return (
        <div>
            <ul>
                {usersList}
            </ul>
        </div>
    )
}


export default RestAPI;