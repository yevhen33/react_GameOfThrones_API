import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import styled from 'styled-components';

const Button = styled.button`
    padding: 12px;
    background-color: #181438;
    border: none;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 40px;
    outline: none;
    box-shadow: 0px 0px 30px rgba(256,256,256,.1);
    cursor: pointer;
    &:focus {
        outline: none; 
    }
`;

// const AppBlock = styled.div`
//     background: blue url('got.jpeg') center center no-repeat;
//     background-size: cover;
//     height: 1000px;
// `;

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        return (
            <Router>
                <> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <Button
                                onClick={this.toggleRandomChar}>Toggle random character</Button>
                            </Col>
                        </Row>

                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' component={BooksPage}/>
                        
                    </Container>
                </>
            </Router>
        );
    }
};
