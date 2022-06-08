import { styled } from '@mui/material'

export const CabecalhoContainer = styled('header')`
    //color: red;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #000011;
    padding: ${({theme}) => theme.spacing(6)}; // arrow function
`;

export const Logo = styled('img')`
    width: 230px;
`;