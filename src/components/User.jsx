import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const User = ({addusers}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[firstname,setFirstname] = useState("");
const[lastname,setLastname] = useState("");
const[birthday,setBirthday] = useState("");

const submit = (e) => {
e.preventDefault(); 

    const UserNew = {
        id: Date.now(),
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname,
        birthday:birthday,
    };

    addusers(UserNew);
console.log(UserNew);
};


  return (
    <div>

      <>
        <Button variant="primary" onClick={handleShow}>
          Crear usuarios
        </Button>

        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Crear usuario</Modal.Title>
          </Modal.Header>
         
          <form onSubmit={submit} className="form--container">
            <div> 
                <label className="label--name" htmlFor="Email">Email</label>
                <input value={email} onChange={ e => setEmail(e.target.value)} className="input--campo" type="Email" placeholder=" correo" required/>
            </div> 

            <div> 
                <label className="label--name" htmlFor="Password">Password</label>
                <input value={password} onChange={ e => setPassword(e.target.value)} className="input--campo" type="Password" placeholder=" contraseña" required/>
            </div> 

            <div> 
                <label className="label--name" htmlFor="First name">First name</label>
                <input value={firstname} onChange={ e => setFirstname(e.target.value)} className="input--campo" type="text" placeholder=" Nombres" required/>
            </div> 

          
            <div> 
                <label className="label--name" htmlFor="Last name">Last name</label>
                <input value={lastname} onChange={ e => setLastname(e.target.value)} className="input--campo" type="text" placeholder="Apellidos" />
            </div> 

            
            <div> 
                <label className="label--name" htmlFor="Birthday">Birthday</label>
                <input value={birthday} onChange={ e => setBirthday(e.target.value)} className="input--campo" type="date" placeholder="fecha de cumpleaños " />
            </div> <br />
            <Button type="submit">Agregar Usuarioss</Button>
          </form><br />
        </Modal>
      </>
    </div>
  );
};

export default User;
