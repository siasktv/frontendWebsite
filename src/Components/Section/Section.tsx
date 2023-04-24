import { Box, styled, Typography } from '@mui/material'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'

const Section = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
  }))

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    gap: '150px',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0',
      flexDirection: 'column',
    },
  }))

  const GuideBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(5),

    width: '50%',
    flexBasis: '0',
    flexGrow: 1,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }))

  const LearnMoreBox = styled(Box)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          width: '5%',
          height: '5px',
          backgroundColor: '#000339',
          margin: '0 auto',
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}
      >
        Como funciona?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#5A6473',
            textAlign: 'center',
          }}
        >
          Ayudamos a los clientes a manejar situaciones extremas en sus cadenas
          de suministro de semiconductores como: CPUs, memoria, baterías,
          adaptadores, HDDs, LCD -Todo en un solo lugar.
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <EngineeringOutlinedIcon sx={{ fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
              textAlign: 'center',
            }}
          >
            Contamos con un equipo internacional capacitado para atender las
            necesidades de nuestros clientes.
          </Typography>
        </GuideBox>

        <GuideBox>
          <AllInclusiveIcon sx={{ fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
              textAlign: 'center',
            }}
          >
            Colaboramos con marcas líderes en el mercado a nivel mundial para
            asegurar la calidad de los semiconductores.
          </Typography>
        </GuideBox>

        <GuideBox>
          <PaidOutlinedIcon sx={{ fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
              textAlign: 'center',
            }}
          >
            A través de nuestro acuerdo de compra con nuestros socios, también
            aseguramos el mejor precio.
          </Typography>
        </GuideBox>
      </GuidesBox>
    </Box>
  )
}

export default Section
