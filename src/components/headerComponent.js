import styled from "styled-components";
export const Header = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction: row;
padding: 20px;
font-size: 30px;
align-items: center;
font-weight: bold;
box-shadow: 0px 3px 6px #555;
justify-content: space-between;
`;
export const AppNameComponent = styled.div`
display: flex;
align-items: center;
`;
export const AppIconComponent = styled.img`
width: 100px;
height: 100px;
margin: 10px;

`;
export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: white;
border-radius: 10px;
padding: 15px;
box-shadow: 0px 3px 6px #555;
width:40%;
`;
export const SearchIconComponent = styled.img`
width: 32px;
height: 32px;
  
`;
export const SearchInputComponent = styled.input`
margin-left: 15px;
font-size: 18px;
font-weight: bold;
border: none;
outline: none;
`;