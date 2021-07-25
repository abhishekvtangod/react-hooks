import React, { useEffect, useState } from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('Search');

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
            const resJson = await response.json()
            setUser(resJson[0])
            // fetch("http://localhost:3000/register", {
            //     method: "post",
            //     credentials: "include",
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },

            //     //make sure to serialize your JSON body
            //     body: JSON.stringify({
            //         "username": "abhishek",
            //         "email": "abhishek@gmail.com",
            //         "password": "abhi@1234",
            //         "confirmPassword": "abhi@1234"
            //     })
            //     })
            //     .then( (response) => { 
            //     //do something awesome that makes the world a better place
            //         console.log(response.json())
            //     });
            }
        fetchFunc()
    }, [searchQuery])

    return(
        <Card>
            <input
                type = 'search'
                value = {searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
            />
            {user ? (
                <div>   
                    <h2>{searchQuery}</h2>
                    {/* <h3>{user.name}</h3>
                    <h3> {user.username} </h3>
                    <h3> {user.email} </h3> */}
                </div>
            ) : (
                <p>No user found</p>
            )}
        </Card>
    )

}

export default UseEffectExample;