import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
    margin: 0 auto;
    font-size: 24px;
    color: #fff;
    text-align: center;
    h2 {
        font-size: 32px;
    }
    h3 {
        font-size: 18px;
    }
`;

const MainPage = () => {
    return (
        <>
        <MainBlock>
            <h2>Welcome to the database Game of Thrones</h2>
            Follow the links and get familiar with all the information on character houses and books
            <h3>Enjoyable use</h3>
        </MainBlock>
        </>
    )
};

export default MainPage;