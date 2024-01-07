import { Col, Container, Nav, NavLink, Navbar, Row } from "react-bootstrap";
import { Camera, List } from "react-bootstrap-icons";
const key = "zQaxM8kGrKaMoG7fos1jJEkNA4MFaaqKVwBkHVlQwk7tUeu7AxLuS06A";
const NavBar = (props) => {
    return (
        <header className="bg-dark ">
            <Navbar expand="xxxl">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" className="border-bottom">
                        <Nav className="me-auto">
                            <Row>
                                <Col sm={8} md={7} className="py-4">
                                    <h4 className="text-white">About</h4>
                                    <p className="text-white-50">
                                        Add some information about the album below, the author, or any other background
                                        context. Make it a few sentences long so folks can pick up some informative
                                        tidbits. Then, link them off to some social networking sites or contact
                                        information.
                                    </p>
                                </Col>
                                <Col sm={4} className="offset-md-1 py-4">
                                    <h4 className="text-white">Contact</h4>
                                    <ul className="list-unstyled">
                                        <NavLink href="#" className="text-white">
                                            Follow on Twitter
                                        </NavLink>
                                        <NavLink href="#" className="text-white">
                                            Like on Facebook
                                        </NavLink>
                                        <NavLink href="#" className="text-white">
                                            Email me
                                        </NavLink>
                                    </ul>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className="d-flex align-items-center fs-4 text-white" href="#home">
                        <Camera className="me-2" />
                        <span className="fw-bold">Album</span>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="border border-white-50 d-flex align-items-center"
                        aria-controls="basic-navbar-nav"
                    >
                        <List className="text-white" />
                    </Navbar.Toggle>
                </Container>
            </Navbar>
            {/* <Collapse className="bg-dark" id="navbarHeader">
            <Container>
                <Row>
                    <Col>
                        <h4 className="text-white">About</h4>
                        <p className="text-white-50">Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to
              some social networking sites or contact information.</p>
                    </Col>
                    <Col>
                        <h4 className="text-white">Contact</h4>
                        <ul  className="list-unstyled">
                        <NavLink href="#" className="text-white">Follow on Twitter</NavLink>
                        <NavLink href="#" className="text-white">Like on Facebook</NavLink>
                        <NavLink href="#" className="text-white">Email me</NavLink>
                        </ul>
                    </Col>
                </Row>
            </Container>

            </Collapse>
            <Navbar className="navbar-dark bg-dark">
                <Container className="d-flex justify-content-between">
                    <a className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2 text-white"
                            viewBox="0 0 24 24" focusable="false">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                        </svg>
                        <strong className="text-white fs-5">Album</strong>
                    </a>
                    <ToggleButton>
                        <span className="navbar-toggler-icon"></span>
                    </ToggleButton>
                </Container>
            </Navbar> */}
        </header>
    );
};
export default NavBar;
