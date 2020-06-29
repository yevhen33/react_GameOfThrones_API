import React, {Component} from 'react';
import gotService from '../../servises/gotServises';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 3%;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const SelectError = styled.div`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then(this.onCharDetailsLoaded)
            .catch(() => this.onError());
    }

    onError() {
        this.setState({
            char: null,
            error: true
        })
    }

    render() {

        if (!this.state.char && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.char) {
            return <SelectError>Please select a character</SelectError>
        }

        const {name, gender, born, died, culture} = this.state.char;

        if (this.state.loading) {
            return (
                <CharDetailsBlock>
                    <Spinner/>
                </CharDetailsBlock>
            )
        }

        return (
            <CharDetailsBlock>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </CharDetailsBlock>
        );
    }
}