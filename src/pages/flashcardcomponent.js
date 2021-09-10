import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';

export default class FlashCard extends React.Component {
    constructor() {
        super();

        this.state = {
            flashCards: [
                {
                    Category: 'Object',
                    Definition: 'Spherical bouncy object',
                    Term: 'Ball'
                },
                {
                    Category: 'Shape',
                    Definition: 'A closed figure with three straight sides and three angles',
                    Term: 'Triangle'
                },
                {
                    Category: 'Place',
                    Definition: 'An institution for educating students',
                    Term: 'School'
                },
            ],
            index: 0,
            isLoaded: false,
            term: true
        }
    }

    async componentDidMount() {
        
        const data = await[
                {
                    Category: 'Object',
                    Definition: 'Spherical bouncy object',
                    Term: 'Ball'
                },
                {
                    Category: 'Shape',
                    Definition: 'A closed figure with three straight sides and three angles',
                    Term: 'Triangle'
                },
                {
                    Category: 'Place',
                    Definition: 'An institution for educating students',
                    Term: 'School'
                },
        ]
        this.setState({flashCards: data});
        this.setState({isLoaded:true});
        }


    render() {
        return(
            < >
            <Container className="center">
                <Row>
                    <Col>
                    <h1>{this.state.isLoaded? this.state.flashCards[1].Term: ''}</h1>
                    <h2>{this.state.isLoaded? this.state.flashCards[1].Definition: ''}</h2>
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
        )

    }
}