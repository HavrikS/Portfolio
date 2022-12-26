import React from 'react'
import { NavLink } from 'react-router-dom';

const navItems = [   
    { href: '/', text: 'Home' }, 
    { href: 'progects', text: 'Progects' },
    { href: 'skills', text: 'Skills' },
    { href: 'certificate', text: 'Certificate' },
    { href: 'contacts', text: 'Contacts' },
];



const NavMenu = () => {
    return (
        <ul>
            {navItems.map(({ href, text }) => (
                <NavLink key={href} to={href}>
                    {text}
                </NavLink>
            ))}
        </ul>

    );
};

export default NavMenu;