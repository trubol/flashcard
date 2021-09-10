import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

export default class AddCard extends Component {
    constructor() {
        super();
        this.state={
            Category:'',
            Definition:'',
            Term:''
        }
    }
    render() {
        return(
            <Container>
                <Row>
                    <Col md={12} className='d-flex justify-content-center'>
                    <h1>Add Card</h1>
                    </Col>
                    <Form>
  <Form.Group className="mb-3" controlId="formBasicCategory">
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" placeholder="Enter Category" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicTerm">
    <Form.Label>Term</Form.Label>
    <Form.Control type="text" placeholder="Enter Term" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDefinition">
    <Form.Label>Definition</Form.Label>
    <Form.Control type="text" placeholder="Enter Definition" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Add Flashcard
  </Button>
</Form>
                </Row>
            </Container>
        )
    }

}