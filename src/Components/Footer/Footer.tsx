import { styled, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }))

  //   const IconBox = styled(Box)(({ theme }) => ({
  //     display: 'flex',
  //     alignItems: 'center',
  //     gap: '1rem',
  //     [theme.breakpoints.down('sm')]: {
  //       justifyContent: 'center',
  //     },
  //   }))

  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: '#7A7A7E',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  }))

  return (
    <Container
      sx={{
        py: 10,
        px: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: '20px',
            color: '#1C1C1D',
            fontWeight: '700',
            mb: 2,
          }}
        >
          CasaTech
        </Typography>

        <FooterLink>Nosotros</FooterLink>
        <br />
        <FooterLink>Empresas</FooterLink>
        <br />
        <FooterLink>Productos</FooterLink>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '20px',
            color: '#1C1C1D',
            fontWeight: '700',
            mb: 2,
          }}
        >
          Comunícate con nosotros
        </Typography>

        <Typography
          sx={{
            fontSize: '16px',
            color: '#7A7A7E',
            fontWeight: '500',
            mb: 2,
          }}
        >
          Escríbenos para mayor información.
        </Typography>

        {/* <IconBox></IconBox> */}
      </Box>
    </Container>
  )
}

export default Footer
