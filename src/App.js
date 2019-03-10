import React, { Component } from 'react';
import { Container, Row, Col, Media, Alert, Badge, Button, Breadcrumb,
  ButtonToolbar, ButtonGroup, Card, Carousel, Dropdown, Form, InputGroup,
  FormControl, Image, Figure, Jumbotron, ListGroup, Modal, Nav, Navbar,
  NavDropdown, OverlayTrigger, Popover, Pagination, ProgressBar, Table, Tabs,
  Tab, Collapse } from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render() {
    const munculPopover = (
      <Popover title="informasi">Selamat Kamu Berhasil</Popover>
    );
    return (
      <div>
        <Container>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
          </Navbar>

          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>


          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg "
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png "
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg "
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <hr/>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <hr/>
          <Row>
            <Col>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h4>Sate Madura</h4>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla.
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h4>Sate Madura</h4>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla.
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert variant='primary'>
                This is a primary alert—check it out!
              </Alert>
            </Col>
            <Col>
              <h4>
                Example Badge <Badge variant="secondary">New</Badge>
              </h4>
              <Button variant="primary">
                Profile <Badge variant="light">9</Badge>
              </Button>
            </Col>
            <Col>
              <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="outline-primary">Outline Primary</Button>
              </ButtonToolbar>
              <br/>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </ButtonGroup>

                <ButtonGroup className="mr-2" aria-label="Second group">
                  <Button>5</Button>
                  <Button>6</Button>
                  <Button>7</Button>
                </ButtonGroup>

                <ButtonGroup aria-label="Third group">
                  <Button>8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png " />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card></Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  title="Success"
                  variant="success"
                  id="dropdown-variants-Success"
                  key="Success" >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/">Action</Dropdown.Item>
                  <Dropdown.Item href="/">Another action</Dropdown.Item>
                  <Dropdown.Item href="/" active>Active Item</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <hr/>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <hr/>
              <Tabs defaultActiveKey="info">
                <Tab eventKey="home" title="home">
                  <p>Ini Halaman Home...</p>
                </Tab>
                <Tab eventKey="info" title="info">
                  <p>Ini Halaman Info...</p>
                </Tab>
                <Tab eventKey="Profile" title="Profile">
                  <p>Ini Halaman Profile...</p>
                </Tab>
              </Tabs>

            </Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

              <hr/>
              <Image
                height={150}
                width={150}
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg"
                roundedCircle />
              <hr/>
              <Figure>
                <Figure.Image
                  width={200}
                  height={180}
                  alt="171x180"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                  Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save changes</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Col>
            <Col>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={munculPopover}
              >
                <Button variant="primary">Munculkan Overlay</Button>
              </OverlayTrigger>
              <hr/>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item active>{6}</Pagination.Item>
                <Pagination.Item disabled>{7}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
              <hr/>
              <ProgressBar now={60} label="60%" />
              <hr/>
              <Button
                onClick={() => this.setState({ open: !this.state.open })}
                aria-controls="example-collapse-text"
              >
                Click to open Collapse
              </Button>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid.
                </div>
              </Collapse>
            </Col>
          </Row>
          <Table responsive striped border hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
          <div style={{backgroundColor:"gray", color:"white", textAlign:"center", height:"50px"}}>
            <p>Copyright @2019</p>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
