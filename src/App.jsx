
import { useState } from 'react'
import './App.css'
import User from './components/User'
import Userlist from './components/Userlist'

function App() {

  const UserList=[{
    id: 15421542,
    email:"ing@gmail.com",
    password:"1245ws",
    firstname:"ingrid",
    lastname:"jimenez",
    birthday:"02/05/1995",
},
{
id: 248674446,
email:"adam@gmail.com",
password:"1245ws",
firstname:"adam",
lastname:"agudelo",
birthday:"17/11/1993",
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
     <Userlist userslistnew={userslistnew}/>
    </div>
  )
}

export default App
