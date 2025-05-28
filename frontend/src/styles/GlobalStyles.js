import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --primary-color: #07398f;
    --secondary-color: #2D3748;
    --accent-color: #4299E1;
    --background-light: #ffffff;
    --text-primary: #2D3748;
    --text-secondary: #4A5568;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    --gradient-primary: linear-gradient(135deg, #07398f 0%, #0d47a1 100%);
    --gradient-background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }

  body {
    background-color: #f5f7fa;
    background-image: 
      radial-gradient(at 47% 33%, hsl(214.74, 95%, 77%) 0, transparent 59%), 
      radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%);
    background-attachment: fixed;
    min-height: 100vh;
    color: #2D3748;
    line-height: 1.6;
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%);
    pointer-events: none;
    z-index: 2;
  }

  #root {
    position: relative;
    z-index: 3;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(241, 241, 241, 0.8);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
  }

  /* Glass effect for components */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export default GlobalStyles; 