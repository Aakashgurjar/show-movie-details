import React from 'react';
import Container from 'react-bootstrap/Container';

import "./style.css"

import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosDesktop } from "react-icons/io";
import { MdOutlineLocalMovies } from "react-icons/md";


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link  , useNavigate } from 'react-router-dom';

import logo from "../../Assets/images/movix-logo.svg";





const HeaderComponent = () => {

    const navigate = useNavigate();

    const navData = [

        {
            name:'Home', link:'/'
        },
        {
            name:'Movies', link:'/movies' 
        },
        {
            name:'Tv Series', link:'/series'
        },
        {
            name:'Search', link:'/search'
        },

    ]

    return (

        <header  className='header'>
            <Navbar bg='dark' expand="sm">
                <Container>

                <div className='navbar1  '>

                    <div className='logo' onClick={() => navigate("/")}> 
                    <img src={logo} alt="" />
                    </div>

                    <div className='title2 '> 

                    <Navbar.Toggle aria-controls="navbarScroll" />  

                    <Navbar.Collapse id="navbarScroll">  
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >   
                        


                        <Link to={'/'} >
                         <div className='flex  justify-center   '> 
                         <FaHome className='text-2xl mx-2 my-1    hover:-translate-y-3 delay-250 duration-500 ease-in-out hover:opacity-2'/>
                        </div>

                         <span className='mx-2 my-2'> Home </span> 
                        </Link>
                        
                        
                        <Link to={'/movies'} > 
                        <div className='flex justify-center'> 
                        <MdOutlineLocalMovies className='text-2xl mx-2 my-1   hover:-translate-y-3 delay-250 duration-500 ease-in-out hover:opacity-2  ' />
                         </div>

                         <span className='mx-2 my-2'> movies </span>
                        </Link>


                        <Link to={'/series'} > 
                        <div className='flex justify-center'>                        
                         <IoIosDesktop className ='text-2xl mx-2 my-1   hover:-translate-y-3 delay-250 duration-500 ease-in-out hover:opacity-2' /> 
                         </div>

                         <span> tv series </span>
                        </Link> 

                        
                        <Link to={'/search'} > 
                        <div className='flex justify-center'>                        
                         <FiSearch className ='text-2xl mx-2 my-1     hover:-translate-y-3 delay-250 duration-500 ease-in-out hover:opacity-2' />
                        </div>

                         <span className='px-2'> Search </span>
                        </Link> 

                        
                        
                        



                    </Nav>
                    </Navbar.Collapse>
                    </div>

                </div>
                </Container>
            </Navbar>
                    
        </header>
    )
}

export default HeaderComponent;