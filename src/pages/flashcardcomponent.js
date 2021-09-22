import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                {/* <h2>{this.state.isLoaded? this.state.flashcards[1].Definition: ''}</h2> */}
              </Col>
            </Row>
          </Container>
          <Container className="center">
            <Row>
              <Col>
                <button className="btn btn-danger">Previous</button>
                <button className="btn btn-primary">Show Definition</button>
                <button className="btn btn-warning">Next</button>
              </Col>
            </Row>
          </Container>
      </>
    );
  }
}
