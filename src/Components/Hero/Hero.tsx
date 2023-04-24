import { Typography, Box, styled } from '@mui/material'
import { Container } from '@mui/system'
import CustomButton from '../ButtonContainer'

const Hero = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }))

  return (
    <Container>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: '1', marginRight: '2rem' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '18px',
              color: '#687690',
              fontWeight: '500',
              mt: 10,
              mb: 4,
            }}
          >
            Bienvenid@ a CasaTech
          </Typography>
          <Title variant="h1">Encuentra semiconductores de calidad.</Title>
          <Typography
            variant="body2"
            sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
          >
            Somos una empresa comprometida en ayudarte a encontrar
            semiconductores de calidad y al mejor precio a nivel global. Somos
            el puente perfecto entre Asia y America.
          </Typography>
          <CustomButton
            backgroundColor="#017dc5"
            color="#fff"
            buttonText="Contáctanos"
            heroBtn={true}
            guideBtn={undefined}
            getStartedBtn={undefined}
            // onClick={undefined}
          />
        </Box>
        <Box sx={{ flex: '1.25' }}>
          <img
            src={'connect.svg'}
            alt="heroImg"
            style={{
              maxWidth: '100%',
              marginLeft: '2rem',
            }}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Hero
