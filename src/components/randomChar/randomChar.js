import React, {Component} from 'react';

import gotService from '../../servises/gotServises';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 3%;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    term {
        font-weight: bold;
    }
`;


export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
    }
    gotService = new gotService();

    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null
    }

    updateChar() {
        const id = Math.floor(Math.random()*299 + 25); // от 25 до 299 рандомно
        this.gotService.getCharacter(id)
            .then((char) => {
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    born: char.born,
                    died: char.died,
                    culture: char.culture
                })
            })
    }

    render() {
        const {name, gender, born, died, culture} = this.state;
        return (
            <RandomBlock>
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
