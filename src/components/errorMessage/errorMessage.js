import React from 'react';
import img from './error.png';
import styled from 'styled-components';

const ErrorBlok = styled.div`
    img {
        width: 100%;
    }
`;

const ErrorMessage = () => {

    return (
        <ErrorBlok>
            <img src={img} alt='error'></img>
            <span>Something went wrong!!!<br></br>Проверьте подключение к интернету</span>
        </ErrorBlok>
    )
}

export default ErrorMessage;