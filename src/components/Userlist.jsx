import React from 'react';

const Userlist = ({userslistnew}) => {



    return (
        <ul className='father-container'>
            {
                userslistnew.map(users=>(
                <li className='container-user' key={users.id}> 
                    <p> <b>Id:</b>{users.id}</p>
                    <p><b>Correo:</b> {users.email}</p>
                    {/* <p>{users.password}</p> */}
                    <p><b>Nombre:</b> {users.firstname}</p>
                    <p><b>Apellido:</b> {users.lastname}</p>
                    <p><b>Cumpleaños:</b> {users.birthday}</p>
                </li>
                ))
            }
        </ul>
    );
};

export default Userlist;