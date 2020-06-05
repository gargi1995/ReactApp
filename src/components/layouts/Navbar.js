import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarContainer>
        
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            </NavbarContainer>
        

    )
}

export default Navbar;

const NavbarContainer= styled.div`
#nav {
    width: 100%;
    float: left;
    margin: 0 0 3em 0;
    padding: 0;
    list-style: none; }
#nav li {
    float: left; }
    #nav {
        width: 100%;
        float: left;
        margin: 0 0 3em 0;
        padding: 0;
        list-style: none;
        background-color: #f2f2f2;
        border-bottom: 1px solid #ccc; 
        border-top: 1px solid #ccc; }
    
    #nav li a {
            display: block;
            padding: 8px 15px;
            text-decoration: none;
            font-weight: bold;
            color: #069;
            border-right: 1px solid #ccc; }

    div{
        background-color: gray;
    }
`;
