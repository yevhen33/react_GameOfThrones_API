import React, {Component} from 'react';
import Spinner from '../spinner';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';

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

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    error: false
                })
            })
            .catch(() => {this.onError()});
    }

    componentDidCatch() {
        this.setState({
            itemList: null,
            error: true
        })
    }

    onError() {
        this.setState({
            itemList: null,
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const {itemList, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ListItem>
               {items}
            </ListItem>
        );
    }
}