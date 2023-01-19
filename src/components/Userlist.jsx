import React from 'react';

const Userlist = ({UserList}) => {



    return (
        <ul>
            {
                UserList.map(users=>(
                <li key={users.Id}> 
                    <p>{users.Id}</p>
                    <p>{users.Email}</p>
                    <p>{users.Password}</p>
                    <p>{users.Firstname}</p>
                    <p>{users.Lastname}</p>
                    <p>{users.Birthday}</p>
                </li>
                ))
            }
        </ul>
    );
};

export default Userlist;