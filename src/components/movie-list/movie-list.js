import "./movie-list.css";

import MovieListItem from "../movie-list-item/movie-list-item";
import { useContext } from "react";
import { Context } from "../../context";
import { filterHandler, searchHandler } from "../../utulities/data";

const MovieList = () => {
  const { state } = useContext(Context);

  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          {...item}
          // name={item.name}
          // viewers={item.viewers}
          // favourite={item.favourite}
          // like={item.like}
          // id={item.id}
          // onToggleProp={(e) =>
          //   onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
          // }
          // onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
