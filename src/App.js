import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//This is importing the entire react bootstrap library
import {Container, Row, Col} from 'react-bootstrap';

//This is importing JUST the container component from the react bootstrap library
//import Container from 'react-bootstrap/Container';

import FlashCard from './pages/flashcardcomponent';
import AddCard from './pages/addcardcomponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Container className="d-flex justify-content-center pt-5">
          <Row>
            <Col md={6}>
              <Link to="/"><button className="btn btn-primary">Flashcards</button></Link>
            </Col>
            <Col md={6}>
              <Link to="addcard"><button className="btn btn-secondary">Add Card</button></Link>
            </Col>
          </Row>
        </Container>
          <Switch>
            <Route path="/addcard">
            <AddCard />
            </Route>
            <Route path="/">
              <FlashCard />
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;