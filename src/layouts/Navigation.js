import React, { useState } from 'react'
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Excel from '../pages/Excel'
import { useEffect } from 'react'

export default function Navigation() {
    const mostrar=false;
    const username=localStorage.getItem('current_user_name')
    const [valor,setValor] = useState('no existe');
   

    const handleLogout = () =>{
       
        localStorage.setItem('secret_token','no existe')
        setValor(false);
        console.log('esta es la llave')
        console.log(localStorage.getItem('secret_token'))
        console.log('esta es la llave')
        console.log(localStorage.getItem('secret_token') != null)
      
    }
    
    useEffect(() => {
        if (localStorage.getItem('secret_token') !== 'no existe') {
          setValor(true);
        }
      }, []);
    
     
  return (
    <Navbar class="navbar" bg='success' variant='dark' expand='lg'>
       <Navbar.Brand as={NavLink} to={'/home'}>
            <img
                src = "https://www.unbosque.edu.co/sites/default/files/logo.png" 
                alt='Logo'
                background-size = "cover"
                background-repeat = "no-repeat"
                background-position = "left"
                width = "200px"
                height = "50px"
                border = "none"
            /></Navbar.Brand>
        <Navbar.Collapse id="main-menu">
            <Nav>


                {valor != false &&(<NavDropdown title="Formularios" id="menu-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/formulario profesor'} className="nav">Formulario Profesor</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/Formulario estudiante'} className="nav">Encuesta egresado</Nav.Link></NavDropdown.Item>
                </NavDropdown>)}
                {valor != false && (<NavDropdown title="Estudiantes" id="menu_estudiantes-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/estudiantes'}  className="nav">Ver Estudiantes</Nav.Link></NavDropdown.Item>
                </NavDropdown>)}

                
                {valor != false && (<NavDropdown title="Egresados" id="menu_estudiantes-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/egresados'}  className="nav">Ver Egresados</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/egresados_form'}  className="nav">Registrar un egresado</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/excel'} className="nav">Subir Archivos</Nav.Link></NavDropdown.Item>
                </NavDropdown>)}

                {valor == false &&<Nav.Link as={NavLink} to={'/signin'} >Log in</Nav.Link>}
               
 
                
            </Nav>
            

            


            
           
           
            {valor != false && (<Nav  className="navbar-right" style={{ position: 'absolute', left: '1750px'}}>
            <NavDropdown title={username} id="menu-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/perfil'} className="nav">Perfil</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>Cerrar Sesion</NavDropdown.Item>
                </NavDropdown>
                </Nav>)}

        </Navbar.Collapse>
    </Navbar>
  )
}
