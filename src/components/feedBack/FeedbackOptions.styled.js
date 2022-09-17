
import styled from 'styled-components';

export const Button = styled.button`
min-width: 110px;
height: 110px;
border-radius: 50%;
background-color: powderblue;
color: purple;
font-weight:700;
font-size: 22px;
border: 6px solid white;
transition-duration: 200ms;

&:hover,
&:active,
&:focus{
border: 12px solid red;
color: red;
outline: none;
background-color: white;
transition-duration: 400ms;

}
`;

export const FeedBackBox = styled.div`
display:flex;
justify-content: space-between;
padding: 0;
`;