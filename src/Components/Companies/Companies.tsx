import { Box, Container, styled, Typography } from '@mui/material'
import logosImg from '/Logo3.png'

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: theme.spacing(4),
    },
  }))

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4),
    },
  }))

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Typography
            variant="body2"
            sx={{
              color: '#7D8589',
              fontSize: '16px',
              fontWeight: 'bold',
              mt: 2,
            }}
          >
            Empresas que trabajan con nosotros
          </Typography>
        </CustomBox>
      </CustomContainer>

      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <img src={logosImg} alt="logos" />
      </Container>
    </Box>
  )
}

export default Companies
