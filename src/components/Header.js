import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Button } from "./Button"

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <Nav>
      <NavLink to="/">TRAVELER</NavLink>
      <Bars onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </Bars>
      <NavMenu onClick={handleClick} click={click}>
        <NavItem>
          <NavLinks to="/">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/">Trips</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/">Careers</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/">Content</NavLinks>
        </NavItem>
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}


export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled.h1`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled.div`
  display: none;
  color: #FFF;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -48px;
  list-style: none;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px") };
    opacity: 1;
    transition: all 0.3s ease;
    background: #FFF;
  } 
`

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #000;
    
    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`