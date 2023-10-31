import { useState } from 'react';
import menuData from './MenuContent.jsx';
import './Menu.sass';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Przystawki');
  const [selectedDish, setSelectedDish] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedDish(null);
  };

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  const handleBackToCategories = () => {
    setSelectedDish(null);
  };

  return (
    <>
    
    <div className="menu-container" >
    <div className="hero-shadow"/>
      <h1 className="section-name" id="menu">Menu</h1>
        <div>
          <div>
            <div className="menu-category">
              {Object.keys(menuData).map(category => (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`category-item${selectedCategory === category ? ' active-menu' : ''}`}>
                  {category}
                </div>
              ))}
            </div>
            <h2>{selectedCategory}</h2>
          </div>

          {selectedDish ? (
            <div>
              <h3 className="dish-name">{selectedDish.name}</h3>
              <img
                src={selectedDish.imageSrc}
                alt={selectedDish.name}
                className="dish-image"/>

              <p className="dish-description">{selectedDish.description}</p>
              <p className="dish-ingredients">{selectedDish.ingredients}</p>
              <p className="dish-price">{selectedDish.price}</p>
              <button
                onClick={handleBackToCategories}
                className="back-button">
                Back
              </button>
            </div>
          ) : (
            <div className="menu-dishes">
              {menuData[selectedCategory].map(dish => (
                <div
                  key={dish.name}
                  className="menu-dish"
                  onClick={() => handleDishClick(dish)}>

                  <img
                    src={dish.imageSrc}
                    alt={dish.name}
                    className="dish-image"/>

                  <p className="dish-name">{dish.name}</p>
                  <p className="dish-ingredients">{dish.ingredients}</p>
                  <p className="dish-price">{dish.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
    </>
  );
};

export default Menu;
