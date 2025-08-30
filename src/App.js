import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { FoodList } from './Components/FoodList/FoodList';

const foodnames = [
  "Pizza",
  "Burger",
  "Sushi",
  "Pasta",
  "Salad",
  "Tacos",
  "Ramen",
]
function App() {
  return (
    <div className="App">
       <Header />
       <FoodList foods= {foodnames}/>
    </div>
  );
}

export default App;
