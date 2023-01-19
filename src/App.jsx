
import { useState } from 'react'
import './App.css'
import User from './components/User'
import Userlist from './components/Userlist'

function App() {

  const UserList=[{
    Id: 1,
    Email:"ing@gmail.com",
    Password:"1245ws",
    Firstname:"ingrid",
    Lastname:"jimenez",
    Birthday:"02/05/1995",
},
{
Id: 2,
Email:"adam@gmail.com",
Password:"1245ws",
Firstname:"adam",
Lastname:"agudelo",
Birthday:"17/11/1993",
}
];

const[userslistnew,setUserslistnew] = useState(UserList);

const addusers = (UserNew)=>{
 setUserslistnew([...userslistnew,UserNew]);
alert("usuario creado")
}

  return (
    <div className="App">
     <User addusers={addusers}/>
     <Userlist UserList={UserList}/>
    </div>
  )
}

export default App
