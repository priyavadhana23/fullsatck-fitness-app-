import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
      position: "relative",
      p: "20px"
    }}>
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px" mt="30px">
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
          color: "#fff",
          textTransform: "none"
        }}
        href="#exercises">
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
        fontSize="200px">
        Exercise
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' }, // Responsive width
          height: 'auto',
          maxWidth: '500px' // Ensuring max-width for large screens
        }}
      >
        <img src={HeroBannerImage} alt="banner" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Box>
  )
}

export default HeroBanner;
