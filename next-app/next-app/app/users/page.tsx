import React from 'react'


interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}})
    const users = await res.json()
  return (

    
   <>
   <h1>Users List</h1>
   <p>{new Date().toLocaleTimeString()}</p>
   {users.map((user: User) => (
     
       <div key={user.id}>
           <h2>{user.name}</h2>
           
       </div>
   ))}
   </>
  )
}

export default UsersPage