import Filter from "./components/Filter";
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <main className="flex flex-col items-center mt-12">
      <Filter />
      <NewsList />
    </main>
  );
};

export default App;
