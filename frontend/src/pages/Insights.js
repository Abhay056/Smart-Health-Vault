import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Alert,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import axios from 'axios';

const Insights = () => {
  const [insightsData, setInsightsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInsightsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/health/insights');
        setInsightsData(response.data);
      } catch (err) {
        setError('Failed to load insights data');
      } finally {
        setLoading(false);
      }
    };

    fetchInsightsData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Health Insights
      </Typography>
      <Grid container spacing={3}>
        {/* Health Score Section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Your Health Score
            </Typography>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-flex',
                my: 2,
              }}
            >
              <CircularProgress
                variant="determinate"
                value={insightsData?.healthScore || 0}
                size={120}
                thickness={4}
                color={
                  insightsData?.healthScore >= 80
                    ? 'success'
                    : insightsData?.healthScore >= 60
                    ? 'warning'
                    : 'error'
                }
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" component="div">
                  {insightsData?.healthScore}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Recommendations Section */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recommendations
            </Typography>
            <List>
              {insightsData?.recommendations.map((recommendation, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={recommendation} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Trends Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Health Trends
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(insightsData?.trends || {}).map(([key, values]) => (
                <Grid item xs={12} md={4} key={key}>
                  <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Last 7 days: {values.join(', ')}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                      Average: {(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Insights; 