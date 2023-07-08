/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { cuisineData, restaurantsData } from "../data/data";
import { v4 as uuid } from "uuid";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [restaurentData, setRestaurentData] = useState(restaurantsData);
  const [cuisineTypes] = useState(cuisineData);
  const [selectedTabIndex, setSelectedTabIndex] = useState();

  function addReview(restaurantId, review) {
    console.log(review, restaurantId);
    const updatedRestaurants = restaurentData.map((restaurant) => {
      if (restaurant.id === Number(restaurantId)) {
        const updatedReviews = [
          ...restaurant.ratings,
          { id: uuid(), ...review },
        ];
        return { ...restaurant, ratings: updatedReviews };
      }
      return restaurant;
    });

    setRestaurentData(updatedRestaurants);
  }

  return (
    <DataContext.Provider
      value={{
        restaurentData,
        cuisineTypes,
        selectedTabIndex,
        setSelectedTabIndex,
        addReview,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useData() {
  return useContext(DataContext);
}
