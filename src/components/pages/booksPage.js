import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../servises/gotServises';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const ItemListBlock = styled.div`
    max-width: 450px;
`;

class BooksPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemListBlock>
                <ItemList
                    onItemSelected={(itemId) => {
                        this.props.history.push(itemId)
                    }}
                    getData={this.gotService.getAllBooks}
                    renderItem={({name, numberOfPages}) => `${name} - (pages ${numberOfPages})`}/>
            </ItemListBlock>
        )
    }
}
export default withRouter(BooksPage);