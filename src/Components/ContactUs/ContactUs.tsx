import { Box, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Form from './Form'

const ContactUs = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#17275F',
    height: '700px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3, 3, 0, 3),
      width: '90%',
    },
  }))

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  }))

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: '35px', color: 'white', fontWeight: '700' }}
          >
            Contáctanos
          </Typography>
          <Typography
            sx={{ fontSize: '16px', color: '#ccc', fontWeight: '500', my: 3 }}
          >
            ¿Necesitas ayuda? Comunícate con nosotros.
          </Typography>
        </Box>
        <Box>
          <Form />
        </Box>
      </CustomContainer>
    </CustomBox>
  )
}

export default ContactUs
