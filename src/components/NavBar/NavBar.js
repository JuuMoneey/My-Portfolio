import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import React, { useState } from 'react';

export default function NavBar(){
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false)

    return (
<nav className="navBar">
<div className="page" id="nav">NavBar</div>
  <div>
    <ul>
      <Link className="navBarLi" onClick={() => setClick(!click)} to='home' smooth={true}>Home Landing</Link>
      <Link className="navBarLi" onClick={() => setClick(!click)} to='about' smooth={true}>About Me</Link>
      <Link className="navBarLi" onClick={() => setClick(!click)} to='portfolio' smooth={true}>Portfolio</Link>
      <Link className="navBarLi" onClick={() => setClick(!click)} to='priorExp' smooth={true}>Prior Experience</Link>
      <Link className="navBarLi" onClick={() => setClick(!click)} to='contact' smooth={true}>Contact</Link>
      <a className="navBarLi resume" target='_blank' href="https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing">Resume</a>
    </ul>
  </div>
    <div className='navHamburger' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => setClick(!click)}>
  {!hover && !click ? <AiOutlineMenuUnfold/> : <AiOutlineMenu/>}
   </div>
</nav>
    );
}
