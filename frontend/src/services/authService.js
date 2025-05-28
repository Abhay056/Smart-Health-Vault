import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Register user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    if (response.data.success) {
      localStorage.setItem('token', response.data.token);
      return response.data;
    }
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      'Registration failed. Please try again.'
    );
  }
};

// Login user
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    if (response.data.success) {
      localStorage.setItem('token', response.data.token);
      return response.data;
    }
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      'Login failed. Please check your credentials.'
    );
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API_URL}/auth/me`, config);
    if (response.data.success) {
      return response.data.user;
    }
  } catch (error) {
    localStorage.removeItem('token');
    throw new Error(
      error.response?.data?.error || 
      'Failed to get user data.'
    );
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token');
}; 