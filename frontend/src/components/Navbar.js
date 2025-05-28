import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  background-color: #07398f;
  padding: 15px 30px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
    padding: 15px;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const LogoText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 15px;
  transition: 0.3s;
  border-radius: 4px;
  font-weight: ${props => props.active ? '600' : '400'};
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const LogoutButton = styled.button`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 15px;
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  min-width: 200px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const NavGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const UserInfo = styled.span`
  color: white;
  font-size: 14px;
  margin-right: 15px;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`;

const Navbar = () => {
  const { currentUser, logout, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const isActive = (path) => location.pathname === path;

  // Don't render navbar while authentication is being checked
  if (loading) {
    return null;
  }

  return (
    <Nav>
      <LogoLink to="/">
        <Logo src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Health Vault" />
        <LogoText>Smart Health Vault</LogoText>
      </LogoLink>
      <NavLinks>
        <NavGroup>
          <NavLink to="/home" active={isActive('/home').toString()}>
            Home
          </NavLink>
          {currentUser ? (
            <>
              {currentUser.name && (
                <UserInfo>Welcome, {currentUser.name}</UserInfo>
              )}
              <NavLink to="/dashboard" active={isActive('/dashboard').toString()}>
                Dashboard
              </NavLink>
              <NavLink to="/insights" active={isActive('/insights').toString()}>
                Insights
              </NavLink>
              <NavLink to="/contact" active={isActive('/contact').toString()}>
                Contact
              </NavLink>
              <LogoutButton onClick={handleLogout}>
                Logout
              </LogoutButton>
            </>
          ) : (
            <NavLink to="/login" active={isActive('/login').toString()}>
             Login
            </NavLink>
          )}
        </NavGroup>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 