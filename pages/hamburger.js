import { useEffect } from 'react';

export default function Hamburger(){
    useEffect(() => {
        const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


    }, []);
}
