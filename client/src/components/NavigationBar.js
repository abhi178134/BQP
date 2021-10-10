import { Navbar,Nav,Container} from 'react-bootstrap';
const NavigationBar = () => {

    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/add">BQP Test</Navbar.Brand>
          <Nav className="ml-auto">
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
