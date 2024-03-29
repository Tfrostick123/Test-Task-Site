import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

export const Nav = styled.nav`
    background: #000000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    top: 0px;
    width: 100%;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 0rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display:none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate( -100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: --24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
     
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #256ce1;
    }
`
export function Profile ({user}) {
    console.log(user);
   return (
        <div className = "profile">
            <div className= "name">{user.name}</div>
            
        </div>
    )
}

//export default { Nav, NavLink, Bars, NavMenu, NavLink, NavBtn, NavBtnLink}