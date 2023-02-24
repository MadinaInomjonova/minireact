import { useContext } from "react";
import { Context } from "../../context";
import "./app-filter.css";

const AppFilter = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            state.filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          type="button"
          onClick={() =>
            /* updateFilterHandler(btn.name) */
            dispatch({ type: "ON_FILTER", payload: btn.name })
          }
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnArr = [
  { name: "all", label: "All movies" },
  { name: "popular", label: "Popular movies" },
  { name: "mostViewers", label: "Most viewed movies" },
];

export default AppFilter;
