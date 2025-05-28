import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(7, 57, 143, 0.9) 0%,
      rgba(13, 71, 161, 0.8) 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
    z-index: 2;
  }

  > * {
    position: relative;
    z-index: 3;
  }
`;

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(135deg, rgba(7, 57, 143, 0.05) 0%, transparent 100%),
      linear-gradient(45deg, transparent 0%, rgba(13, 71, 161, 0.05) 100%);
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  height: 500px;
  background: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  margin: 20px;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(7, 57, 143, 0.2),
      rgba(13, 71, 161, 0.1)
    );
    z-index: 1;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 40px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Feature = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 15px;
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform-origin: center;
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
    z-index: 2;

    &::before {
      opacity: 0.05;
    }

    h3 {
      color: var(--primary-color);
      transform: translateY(-2px);
    }

    p {
      transform: translateY(-2px);
    }
  }

  h3 {
    color: var(--secondary-color);
    font-size: 1.5em;
    margin-bottom: 15px;
    position: relative;
    z-index: 2;
    transition: all 0.4s ease;
  }

  p {
    color: var(--text-secondary);
    font-size: 1em;
    line-height: 1.6;
    position: relative;
    z-index: 2;
    transition: all 0.4s ease;
  }
`;

const Heading = styled.div`
  text-align: center;
  padding: 40px 20px;
  grid-column: 1 / -1;

  h3 {
    color: var(--primary-color);
    font-size: 2.5em;
    margin-bottom: 20px;
    animation: ${fadeIn} 1s ease;
  }
`;

const HeroTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 3.5em;
  font-weight: 700;
  animation: ${fadeIn} 1s ease;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const HeroText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease 0.3s both;
  line-height: 1.8;
`;

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  {
    title: "Symptoms Tracker",
    description: "Log all your current symptoms to build an overview of how an illness progresses day-by-day."
  },
  {
    title: "Vital Data Tracker",
    description: "Keep track of all your vital data like blood pressure, hydration, temperature, blood oxygen saturation, and others."
  },
  {
    title: "Analytical Charts",
    description: "Summarize all your collected data in a convenient visual way, using easy-to-read, customizable charts and diagrams."
  },
  {
    title: "Medical Documents Storage",
    description: "Keep all your medical documents available in a secure place, with the option to quickly share them with your doctor."
  },
  {
    title: "Children Profiles",
    description: "Create and manage multiple, fully-functional children profiles."
  },
  {
    title: "Chat and Call Your Doctor",
    description: "Get a remote consultation or advice from your doctor directly in the app. Video/Audio calls and chat features available."
  },
  {
    title: "Reports and Remote Monitor",
    description: "Share your data with your medical team or give them access to monitor your condition remotely."
  },
  {
    title: "High-Level of Security",
    description: "All your data is stored on a dedicated secure server in an encrypted version, ensuring your privacy and security."
  }
];

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>A modern way to track your health</HeroTitle>
        <HeroText>
          Free Website to manage medication plans, log health data, store medical documents, track symptoms, and share info with doctors for remote consultations.
        </HeroText>
      </HeroSection>
      <MainContainer>
        <LeftSection />
        <RightSection>
          <Features>
            <Heading>
              <h3>Our Features</h3>
            </Heading>
            {features.map((feature, index) => (
              <Feature
                key={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Feature>
            ))}
          </Features>
        </RightSection>
      </MainContainer>
    </>
  );
};

export default Home; 