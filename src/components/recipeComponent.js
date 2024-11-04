import styled from "styled-components";
export const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
padding: 30px;
flex-wrap: wrap;
gap: 20px;
justify-content: evenly;
`;
export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
box-shadow: 0px 3px 6px #aaa;
width: 300px;
`;
export const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const IngredientsText = styled.span`
  color: green;
  font-size: 18px;
  text-align: center;
  border: solid 1px green;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 12px;

`;
export const  SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;
export const Placeholder = styled.img`
  width: 270px;
  height: 270px;
  margin:250px;
  opacity: 50%;
`;
export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;