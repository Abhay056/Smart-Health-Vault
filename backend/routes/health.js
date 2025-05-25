const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// Get dashboard data
router.get('/dashboard', auth, async (req, res) => {
  try {
    // Mock dashboard data - replace with actual data from your database
    const dashboardData = {
      vitals: {
        heartRate: '72 bpm',
        bloodPressure: '120/80',
        temperature: '98.6°F',
        oxygenLevel: '98%'
      },
      recentActivities: [
        { date: new Date(), type: 'Exercise', duration: '30 mins' },
        { date: new Date(), type: 'Medication', name: 'Daily Vitamins' }
      ],
      upcomingAppointments: [
        { date: new Date(), doctor: 'Dr. Smith', type: 'Regular Checkup' }
      ]
    };

    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get health insights
router.get('/insights', auth, async (req, res) => {
  try {
    // Mock insights data - replace with actual data from your database
    const insightsData = {
      healthScore: 85,
      recommendations: [
        'Maintain regular exercise routine',
        'Keep up with medication schedule',
        'Schedule next checkup'
      ],
      trends: {
        sleep: [7, 6, 8, 7, 8, 7, 6],
        exercise: [30, 45, 30, 0, 60, 45, 30],
        weight: [70, 70.2, 69.8, 69.5, 69.7]
      }
    };

    res.json(insightsData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 