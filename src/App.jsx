
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
const [editusers,setEditusers] = useState(null)
const addusers = (UserNew)=>{
 setUserslistnew([...userslistnew,UserNew]);

}

const deleteusers = (id)=>{
const filterusers = userslistnew.filter(

  users =>users.id !== id
);
setUserslistnew(filterusers)
}

const edit = (users)=>{
  setEditusers(users)
}
console.log(editusers)

  return (
    <div className="App">
     <User  
     addusers={addusers}
     editusers={editusers} 
     />

     <Userlist
      userslistnew={userslistnew}
      deleteusers={deleteusers}
      edit={edit}
      />
    </div>
  )
}

export default App
