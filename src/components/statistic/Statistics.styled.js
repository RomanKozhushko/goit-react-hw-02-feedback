import styled from 'styled-components';

export const StatList = styled.ul`
max-width:170px;
margin: 20px auto;
padding: 0;
`;

export const StatItem = styled.li`
padding: 10px;
margin-left: auto;
margin-right: auto;
list-style: none;
max-width: 200px;
display: flex;
border-radius:5px;
margin-bottom: 13px;
background-color: powderblue;
border: 4px solid darkred;
font-size: 22px;
justify-content: space-between;
color: purple;
`;

export const StatItemSpan = styled.span`
font-size: 24px;
font-weight: 700;
margin-left: 5px;
`;

export const StatListName = styled.h2`
text-align: center;
color: white;
`;