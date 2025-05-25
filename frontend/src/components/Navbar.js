import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  background-color: #07398f;
  padding: 15px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 15px;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="Health Vault" />
      </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/insights">Insights</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 