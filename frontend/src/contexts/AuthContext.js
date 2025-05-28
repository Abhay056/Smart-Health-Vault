import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Verify token and get user data
      axios.get('http://localhost:5000/api/auth/me')
        .then(response => {
          setCurrentUser(response.data.user || { name: 'Test User' }); // Temporary fallback for testing
        })
        .catch(() => {
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorization'];
          setCurrentUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (username, password) => {
    try {
      // For testing purposes, simulate a successful login
      // Remove this block when backend is ready
      if (username === 'test' && password === 'test') {
        const mockUser = {
          id: 1,
          name: 'Test User',
          email: 'test@example.com'
        };
        const mockToken = 'mock-jwt-token';
        setCurrentUser(mockUser);
        localStorage.setItem('token', mockToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${mockToken}`;
        return { user: mockUser, token: mockToken };
      }

      // Real API call - uncomment when backend is ready
      // const response = await axios.post('http://localhost:5000/api/auth/login', {
      //   username,
      //   password
      // });
      // setCurrentUser(response.data.user);
      // localStorage.setItem('token', response.data.token);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      // return response.data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      });
      setCurrentUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 