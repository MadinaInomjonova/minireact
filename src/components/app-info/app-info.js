import { useContext } from "react";
import { Context } from "../../context";
import "./app-info.css";

const AppInfo = ({ allMoviesCount, favouriteMoviesCount }) => {
  const { state } = useContext(Context);

  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">
        number of all movies: {state.data.length}{" "}
      </p>
      <p className="fs-4 text-uppercase">
        number of favourite movies:{" "}
        {state.data.filter((c) => c.favourite).length}{" "}
      </p>
    </div>
  );
};

export default AppInfo;
