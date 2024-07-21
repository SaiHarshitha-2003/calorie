import React, { useState } from 'react';

function CalorieEntryForm() {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle calorie entry submission logic here
    console.log('Adding calorie entry', foodItem, calories);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Calorie Entry</h2>
      <input
        type="text"
        placeholder="Food Item"
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default CalorieEntryForm;