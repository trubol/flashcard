import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {firebase, AddFlashCard} from "../services/firebase";

export default class AddCard extends Component {
    constructor() {
        super();
        this.state={
            Category:'',
            Definition:'',
            Term:''
        }
    }

addFlashCard=(event) => {
  event.preventDefault();
  let Category=document.getElementById("flashcardCategory").value;
  let Term=document.getElementById("flashcardTerm").value;
  let Definition=document.getElementById("flashcardDefinition").value;
    console.log(Category);
    console.log(Definition);
    console.log(Term);

let flashcardData={
  Category: Category,
  Term: Term,
  Definition: Definition
};
AddFlashCard(flashcardData);
    
}


    render() {
        return(
            <Container>
                <Row>
                    <Col md={12} className='d-flex justify-content-center'>
                    <h1>Add Card</h1>
                    </Col>
                    <Form>
  <Form.Label>Category</Form.Label>
  <Form.Select aria-label="Flashcard Category" id="flashcardCategory">
  <option value="CSS">CSS</option>
  <option value="HTML">HTML</option>
  <option value="JavaScript">JavaScript</option>
  <option value="React">React</option>
</Form.Select>

  <Form.Group className="mb-3">
    <Form.Label>Term</Form.Label>
    <Form.Control type="text" id="flashcardTerm" placeholder="Enter Term" />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Definition</Form.Label>
    <Form.Control type="text" id="flashcardDefinition" placeholder="Enter Definition" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={this.addFlashCard}>
    Add Flashcard
  </Button>
</Form>
                </Row>
            </Container>
        )
    }

}