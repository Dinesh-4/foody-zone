import React from 'react'
import styled from "styled-components"

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className='search'>
          <input type="text" placeholder='Search Food' />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      
      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>

    </Container>
  )
}

export default App

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;


`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 11px 157px 10px 15px; 
    }
  }
`;

const FilterContainer = styled.section`

  display: flex;
  justify-content: center;
  gap: 14px;
`;

const Button = styled.button`
  background: #ff4343;
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;


`;

const FoodCardContainer = styled.section`
  background-image: url('/bg.png');

`;
const FoodCards = styled.section``;
