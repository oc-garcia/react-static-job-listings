import Filter from "./Components/Filter";
import JobCard from "./Components/JobCard";
import { FilterProvider } from "./Hooks/Context/FilterContext";

function App() {
  return (
    <FilterProvider>
      <Filter />
      <JobCard />
    </FilterProvider>
  );
}

export default App;
