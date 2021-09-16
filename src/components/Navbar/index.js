import React, { Component } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Profile} from './Navbar'

const Navbar = (user) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    
                    <h1>LOGO</h1>
                </NavLink>
                <Bars></Bars>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign up
                    </NavLink>
                    <Profile user = {user} />
                    <NavBtn>
                        <NavBtnLink to="/sign-out">Sign Out</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;

