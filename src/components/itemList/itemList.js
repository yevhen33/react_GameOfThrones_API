import React, {Component} from 'react';

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

    render() {
        return (
            <ListItem>
               <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ListItem>
        );
    }
}