import React, {Component} from 'react';
import gotService from '../../servises/gotServises';
import Spinner from '../spinner';
import styled from 'styled-components';

const ListItem = styled.ul`
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 3%;
    remove-borders: flush;
    li {
        font-size: 18px;
        border-top: none;
        border-left: none;
        border-right: none;
        cursor: pointer;
        &:last-child {
            border-bottom: none;
        }
    }
`;
export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(61 + i)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const {charList} = this.state;

        if(!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ListItem>
               {items}
            </ListItem>
        );
    }
}