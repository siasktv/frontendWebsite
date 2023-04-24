import bestTeams from '/bestTeams.jpg'
import { styled, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import CustomButton from '../ButtonContainer'

const AboutUs = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(10),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }))

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }))

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
  }))

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: '#7B8087',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  }))

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(5),
    },
  }))

  const Divider = styled('div')(({ theme }) => ({
    width: '13%',
    height: '5px',
    backgroundColor: '#000339',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }))

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={bestTeams} alt="My Team" style={{ maxWidth: '100%' }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: '35px',
                color: '#000339',
                fontWeight: '700',
                my: 3,
              }}
            >
              Brindamos soluciones eficientes a tus necesidades.
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#5A6473',
                lineHeight: '27px',
              }}
            >
              Somos un equipo internacional comprometido en proporcionar
              soluciones en compra y gestión de semiconductores para empresas de
              todo el mundo.
            </Typography>
            <Box sx={{ marginTop: '30px' }}>
              <CustomButton
                backgroundColor="#017dc5"
                color="#fff"
                buttonText="Contáctanos"
                onClick={undefined}
                heroBtn={true}
                guideBtn={undefined}
                getStartedBtn={undefined}
              />
            </Box>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  )
}

export default AboutUs
