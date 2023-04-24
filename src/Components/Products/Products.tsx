import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
  Card,
  CardContent,
  Box,
  Container,
  styled,
  Typography,
  CardActionArea,
  CardMedia,
} from '@mui/material'

const reviews = [
  {
    id: 1,
    name: 'CPU',
    statement:
      'CPU (Unidad Central de Procesamiento), componente principal de una computadora que realiza la mayoría de las tareas de procesamiento.',
    image_url:
      'https://th.bing.com/th/id/R.37022fa4f188f4f6d8c013e648bc92a8?rik=ZXDxudRGtI2jdA&pid=ImgRaw&r=0',
    tag: 'cpu',
  },
  {
    id: 2,
    name: 'Memorias',
    statement: 'Memoria RAM',
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/61tpSXh%2B0lL.jpg',
    position: 'Product Manager at Google',
  },
  {
    id: 3,
    name: 'Discos Duros',
    statement:
      'Disco duro, dispositivo de almacenamiento de datos utilizado en computadoras y otros dispositivos electrónicos.',
    image_url: 'https://nsstore.mx/e-commerce/3476-thickbox_default/disco.jpg',
    position: 'Founder of Crypto',
  },
  {
    id: 4,
    name: 'Tarjetas Graficas',
    statement:
      'Tarjetas gráficas, también conocidas como tarjetas de video o GPU (por sus siglas en inglés, Graphics Processing Unit).',
    image_url:
      'https://th.bing.com/th/id/OIP.Oz-u_xspvwlbyC3bsyggYQHaHa?pid=ImgDet&rs=1',
    position: 'Founder of Crypto',
  },
]

// const PropertiesBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   marginTop: theme.spacing(5),
//   [theme.breakpoints.down('md')]: {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// }))

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}))

export default function Testimonial() {
  //memoria, cpu, discoduro, eMMC, tarjeta de video, NVIDIA, tarjeta Wifi, SSD, moderboards,
  return (
    <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold' }}
          >
            Componentes
          </Typography>
          <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1 }}>
            Componentes que manejamos.
          </Typography>
        </PropertiesTextBox>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {reviews.map((review) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image={review.image_url}
                  alt="green iguana"
                />
                <CardContent sx={{ height: '150px' }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {review.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {review.statement}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Box>
  )
}
