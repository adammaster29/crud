import React from 'react';

const Userlist = ({userslistnew}) => {



    return (
        <ul>
            {
                userslistnew.map(users=>(
                <li key={users.id}> 
                    <p>id:{users.id}</p>
                    <p>correo: {users.email}</p>
                    {/* <p>{users.password}</p> */}
                    <p>nombres: {users.firstname}</p>
                    <p>apellidos: {users.lastname}</p>
                    <p>cumpleaños: {users.birthday}</p>
                </li>
                ))
            }
        </ul>
    );
};

export default Userlist;