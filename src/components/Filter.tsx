import { useDispatch } from "react-redux";
import categories from "../sources/categories";
import { filterByCategory } from "../features/newsSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="mb-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Filter By Category:</h1>
      <ul className="flex flex-wrap gap-4">
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => dispatch(filterByCategory(category))}
                className={
                  category === "X"
                    ? "px-4 py-2 rounded-lg"
                    : "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                }
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
