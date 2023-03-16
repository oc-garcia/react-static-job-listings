import React from "react";
import styles from "./Filter.module.sass";

import { useContext } from "react";
import { FilterContext } from "../../Hooks/Context/FilterContext";

export default function Filter() {
  const { selectedFilters, removeFilter, setSelectedFilters } = useContext(FilterContext);
  return (
    <section className={styles.FilterContainer}>
      {selectedFilters.length > 0 && (
        <>
          <ul className={styles.Filter}>
            {selectedFilters.map((filter) => (
              <li onClick={() => removeFilter(filter)}>{filter}</li>
            ))}
            <button onClick={() => setSelectedFilters([])}>Clear</button>
          </ul>
        </>
      )}
    </section>
  );
}
