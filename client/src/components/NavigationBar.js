import { useEffect,useState } from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
const NavigationBar = () => {

    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/add">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add">Add Applicant</Nav.Link>
            <Nav.Link href="/view">View Grid</Nav.Link>
            <Nav.Link href="/charts">View Chart</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
}
export default NavigationBar;