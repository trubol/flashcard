import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  firebase,
  db,
  login,
  getFlashCards,
  getData,
  AddFlashCard,
  flashcardCollection,
} from "../services/firebase";

export default class FlashCard extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      isLoaded: false,
      term: true,
      setAccessState: false,
      flashcards: [],
    };
  }
  async componentDidMount() {
    await getFlashCards();
    const data = getData();

    this.setState({ flashcards: data });
    // this.setState({isLoaded:true});
    this.randomInteger();
  }

handleDefinition=() => {
  this.setState({setAccessState:!this.state.setAccessState});
}

handleNext=() => {
  this.setState({index: this.state.index +1})
  if(this.state.index==this.state.flashcards.length-1) {
    this.setState({index:0});
  }

}

handlePrevious=() => {
  this.setState({index: this.state.index -1})
  if(this.state.index<=0) {
    this.setState({index: this.state.flashcards.length-1});
  }
}


  randomInteger = () => {
    let RandomNumber = Math.floor(Math.random() * this.state.flashcards.length);
    this.setState({
      index: RandomNumber,
      isLoaded: true,
    });
  };

  render() {
    return (
      <>
          <Container className="center">
            <Row>
              <Col>
                <h3>
                  Category:{" "}
                  {this.state.isLoaded
                    ? this.state.flashcards[this.state.index].Category
                    : ""}
                </h3>
                <h1>
                  Term:{" "}
                  {this.state.isLoaded
                    ? this.state.flashcards[this.state.index].Term
                    : ""}
                </h1>
                <h2>Definition:{" "}
                {this.state.setAccessState? this.state.flashcards[this.state.index].Definition: ''}</h2>
              </Col>
            </Row>
          </Container>
          <Container className="center">
            <Row>
              <Col>
                <Button onClick={this.handlePrevious} className="btn btn-danger">Previous</Button>
                <Button onClick={this.handleDefinition} className="btn btn-primary">Show Definition</Button>
                <Button onClick={this.handleNext} className="btn btn-warning">Next</Button>
              </Col>
            </Row>
          </Container>
      </>
    );
  }
}
