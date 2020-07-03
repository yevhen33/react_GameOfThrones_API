import React, {Component} from 'react';
import gotService from '../../servises/gotServises';
import ItemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {

    gotService = new gotService();
    render() {
        return (
            <ItemDetails 
                itemId={this.props.bookId}
                getDataId={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}