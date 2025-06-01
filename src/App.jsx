import { Card, Carousel, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Custom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faCarSide, faCookie, faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

import oatmealRaisin from './assets/oatmealRaisin.png';
import aboutImg from './assets/aboutImg.jpg';
import chocolateChip from './assets/chocolateChip.png';
import heroImg from './assets/heroImg.png';
import logo from './assets/logo.png';
import nurse from './assets/nurse.png';
import snickerdoodle from './assets/Snickerdoodle.png';
import volleyball from './assets/volleyball.png';
import whiteChocolateChip from './assets/whiteChocolateChip.png';

import baseball from './assets/carouselPhotos/baseball.jpg';
import chocolateChip4 from './assets/carouselPhotos/chocolatechip4.jpg';
import flowers from './assets/carouselPhotos/flowers.jpg';
import peanutButter from './assets/carouselPhotos/peanutButter.jpg';
import texasCactus from './assets/carouselPhotos/Texascactus.jpg';
import valentine from './assets/carouselPhotos/valentineHearts.jpg';



function App() {

  return (
    <>
      <div>
        <Navbar sticky='top' expand='md' className='nav-color pacifico-regular'>
          <Container className='nav-container'>
            <Navbar.Brand className='nav-text'><img
              className='logoImg'
              src={logo}
            />Bake Your Day SA</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
              <Nav>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#pricing'>Pricing</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section id='home' className='shadow section-padding pacifico-regular'>
          <Container className='about-card'>
            <Row className='justify-content-center'>
              <Col lg='9' md='6'>
                <Card>
                  <Card.Header className='text-center'><h2>Let Me Bake Your Day!</h2></Card.Header>
                  <Carousel>
                    <Carousel.Item>
                      <Container className='justify-content-center'>
                        <Image className='home-img' src={baseball} />
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className='home-img' src={chocolateChip4} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className='home-img' src={flowers} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className='home-img' src={peanutButter} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className='home-img' src={texasCactus} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className='home-img' src={valentine} />
                    </Carousel.Item>
                  </Carousel>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        
        <div id='cookies' className='cookie-section'>
          <Container className='pacifico-regular'>
            <div className='cookie-header text-center'>
              <h2 className='section-title wow fadeInDown'>Cookies</h2>
            </div>
            <Row>
              <Col className='cookie-col' lg='4' md='6'>
                <Card className='shadow cookie-card'>
                  <Card.Img className='cookie-imgs' src={chocolateChip} />
                </Card>
              </Col>
              <Col className='cookie-col' lg='4' md='6'>
                <Card className='shadow cookie-card'>
                  <Card.Img className='cookie-imgs' src={nurse} />
                </Card>
              </Col>
              <Col className='cookie-col' lg='4' md='6'>
                <Card className='shadow cookie-card'>
                  <Card.Img className='cookie-imgs' src={whiteChocolateChip} />
                </Card>
              </Col>
              <Col className='cookie-col' lg='4' md='6'>
                <Card className='shadow cookie-card'>
                  <Card.Img className='cookie-imgs' src={oatmealRaisin} />
                </Card>
              </Col>
              <Col className='cookie-col' lg='4' md='6'>
                <Card className='shadow cookie-card'>
                  <Card.Img className='cookie-imgs' src={volleyball} />
                </Card>
              </Col>
              <Col className='cookie-col' lg='4' md='6'>
                <Card className='shadow cookie-card'>
                  <Card.Img className='cookie-imgs' src={snickerdoodle} />
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <section id='about' className='shadow section-padding pacifico-regular'>
          <Container className='about-card'>
            <Row className='justify-content-center'>
              <Col lg='7' className='align-self-center'>
                <h2>About Me</h2>
                <p className='about-font'>I’m a cottage food baker in San Antonio. My cookies are baked with quality ingredients only and are delicious!  My kitchen is NOT peanut/tree nut free.  All orders can be placed by text or email 3 days in advance for regular cookies and 5 days for iced.  Payment upon delivery unless the order is 5 dozen or more.  Then require ½ down.</p>
              </Col>
              <Col lg='5' md='6'>
                <Image className='home-img' fluid src={aboutImg}></Image>
              </Col>
            </Row>
          </Container>
        </section>

        <section id='pricing' className='shadow section-padding pacifico-regular'>
          <Container>
              <h1  className='text-center'>Pricing</h1>
            <Container className='section-padding'>
              <Row>
                <Col lg='4'>
                  <Card>
                    <Card.Header className='text-center'>
                      <FontAwesomeIcon className='fa-icon' icon={faCookie} />
                      <br></br>
                      <h2>$3.00-$3.50</h2><h5>/Per Cookie</h5>
                    </Card.Header>
                    <Card.Body>
                      <h3 className='text-center'>Regular Cookies</h3>
                      <ul>
                        <li>Chocolate Chip w/ Pecans</li>
                        <li>Peanut Butter</li>
                        <li>Snicker Doodle</li>
                        <li>Oatmeal Raisin</li>
                        <li>Macadamia</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg='4'>
                  <Card>
                    <Card.Header className='text-center'>
                      <FontAwesomeIcon className='fa-icon' icon={faCarrot} />
                      <br></br>
                      <h2>$3.25-$4.00</h2><h5>/Per Cookie</h5>
                    </Card.Header>
                    <Card.Body>
                      <h3 className='text-center'>Iced Cookies</h3>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg='4'>
                  <Card>
                    <Card.Header className='text-center'>
                      <FontAwesomeIcon className='fa-icon' icon={faCarSide} />
                      <br></br>
                      <h2>$7.00/h2</h2><h5>/Delivery Fee</h5>                      
                    </Card.Header>
                    <Card.Body>
                      <ul>
                        <li>Must order 2 dozen or more</li>
                        <li>Will deliver in San Antonio area at place of businesss or safe location.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>

        <section id='contact' className='section-padding footer-style pacifico-regular'>
          <Container>
            <Row className='justify-content-between'>
              <Col lg='4' >
                <h3>Bake Your Day SA</h3>
              </Col>
              <Col lg='4' >
                <h3>Contact</h3>
                <ul className='address'>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Rose <br></br> San Antonio, TX
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} /> <a href="tel:2102042953">P: 210-204-2953</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelopeOpen} /> <a href="mailto:bakeyourdat@att.net">E: bakeyourday@att.net</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default App
