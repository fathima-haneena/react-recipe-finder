import styled from "styled-components";
import Axios from "axios";
import {useState} from "react";
import {RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientsText, SeeMoreText,SeeNewTab, Placeholder} from "./components/recipeComponent";
import {Header, AppNameComponent, AppIconComponent, SearchComponent, SearchIconComponent, SearchInputComponent} from "./components/headerComponent";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

export const Container = styled.div`
display: flex;
flex-direction: column;
`;
const RecipeComponent = (props) => {
  const [show, setShow] = useState("");

  const { label, image, ingredients, url } = props.recipe;

  return (
    
  
  <RecipeContainer>
    <Dialog
    onClose={() => console.log("adsadad")}
    aria-labelledby="simple-dialog-title"
    open={!!show}
  >
    <DialogTitle>Ingredients</DialogTitle>
    <DialogContent>
      <RecipeName>{label}</RecipeName>
      <table>
        <thead>
          <th>Ingredient</th>
          <th>Weight</th>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index} className="ingredient-list">
              <td>{ingredient.text}</td>
              <td>{ingredient.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DialogContent>
    <DialogActions>
      <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab>
      <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
    </DialogActions>
  </Dialog>
  <CoverImage src={image} alt={label} />
  <RecipeName>{label}</RecipeName>
  <IngredientsText onClick={() => setShow(!show)}>
    Ingredients
  </IngredientsText>
  <SeeMoreText onClick={() => window.open(url)}>
    See Complete Recipe
  </SeeMoreText>
  </RecipeContainer>

  );
}


const APP_ID = "3973cb6d";
const APP_KEY = "f82cc557ad72a5cccea5b5b800b8d805";

function App() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [searchQuery, updateSearchQuery] = useState("");
  
  const fetchRecipe = async(searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
     
      // handle success
      console.log(response);
      updateRecipeList(response.data.hits);
    
  }
    

  const onTextChange = (event) => {
    clearTimeout(timeoutId)
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => 
      fetchRecipe(event.target.value),500);
      updateTimeoutId(timeout);
    }
    
    return(
      <Container>
      < Header>
        <AppNameComponent>
          <AppIconComponent src="/humburger.svg" alt=""/>
        Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIconComponent src="/search-icon.svg" alt=""/>
          <SearchInputComponent type="text" placeholder="Search Recipe" value={searchQuery} onChange={onTextChange}/>
        </SearchComponent>
      </Header>
      <RecipeListContainer>
      
      {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <Placeholder src="/humburger.svg" />
        )
        }
        
      </RecipeListContainer>
      
       
    </Container>
    
    );
}

export default App;
