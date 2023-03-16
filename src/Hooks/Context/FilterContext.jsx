import { createContext, useState } from "react";

export const FilterContext = createContext([]);

export const FilterProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const addFilter = (filter) => {
    selectedFilters.includes(filter)
      ? console.log("already filtered")
      : setSelectedFilters([...selectedFilters, filter]);
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((selectedFilter) => selectedFilter !== filter));
  };

  return (
    <FilterContext.Provider value={{ selectedFilters, addFilter, removeFilter, setSelectedFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
