import React, { useState, useEffect } from 'react';
import {
  Grid as MuiGrid,
  Paper,
  Typography,
  Box,
  Card as MuiCard,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faProcedures,
  faDisease,
  faCapsules,
  faTint,
  faDna,
  faVenusMars
} from '@fortawesome/free-solid-svg-icons';

const DashboardContainer = styled.div`
  padding-top: 90px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h1`
  color: #07398f;
  margin-bottom: 30px;
`;

const Container = styled.div`
  background: #222831;
  padding: 25px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
`;

const Card = styled.div`
  background: #2e3440;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #3b4252;
  }
`;

const CardText = styled.span`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  color: white;
`;

const Dots = styled.div`
  display: flex;
  gap: 5px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background: gray;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: ${props => props.variant === 'recent' ? '#008CBA' : '#00ADB5'};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const biomarkers = [
  { icon: faHeartbeat, name: 'Heart', dots: 4 },
  { icon: faProcedures, name: 'Kidney', dots: 4 },
  { icon: faDisease, name: 'Liver', dots: 3 },
  { icon: faCapsules, name: 'Sugar', dots: 3 },
  { icon: faTint, name: 'Blood', dots: 4 },
  { icon: faDna, name: 'Thyroid', dots: 4 },
  { icon: faVenusMars, name: 'Reproductive', dots: 4 }
];

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/health/dashboard');
        setDashboardData(response.data);
      } catch (err) {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <DashboardContainer>
      <Heading>Welcome, {dashboardData?.userName || 'User'} to Smart Health Vault</Heading>
      <Container>
        <h2>Biomarkers</h2>
        <GridContainer>
          {biomarkers.map((marker, index) => (
            <Card key={index}>
              <FontAwesomeIcon icon={marker.icon} color="#FF6B6B" size="lg" />
              <CardText>{marker.name}</CardText>
              <Dots>
                {[...Array(marker.dots)].map((_, i) => (
                  <Dot key={i} />
                ))}
              </Dots>
            </Card>
          ))}
        </GridContainer>
        <ButtonContainer>
          <Button>Add New</Button>
          <Button variant="recent">Recent Reports</Button>
        </ButtonContainer>
      </Container>
    </DashboardContainer>
  );
};

export default Dashboard; 