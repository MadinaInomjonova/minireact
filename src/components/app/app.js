import { useState, useEffect, useContext } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { Context } from "../../context";
import "./app.css";

// import { v4 as uuidv4 } from "uuid";

const App = () => {
  // const [data, setData] = useState([]);
  // const [term, setTerm] = useState("");
  // const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const { _, dispatch } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 10,
          favourite: false,
          like: false,
        }));
        // setData(newArr);
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo
        /* allMoviesCount={data.length}
          favouriteMoviesCount={data.filter((c) => c.favourite).length} */
        />
        <div className="search-panel">
          <SearchPanel /* updateTermHandler={updateTermHandler} */ />
          <AppFilter
          /* filter={filter}
            updateFilterHandler={updateFilterHandler} */
          />
        </div>
        {isLoading && "Loading..."}
        <MovieList /* onToggleProp={onToggleProp} onDelete={onDelete} */ />
        <MoviesAddForm /* addForm={addForm} */ />
      </div>
    </div>
  );
};

export default App;

/* 
  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      favourite: false,
      like: false,
      id: uuidv4(),
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };

const updateTermHandler = (term) => setTerm(term);

const updateFilterHandler = (filter) => setFilter(filter);

const onToggleProp = (id, prop) => {
  setData(
    data.map((item) => {
      if (id === item.id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    })
    );
  };
  
  const onDelete = (id) => {
    setData(data.filter(c => c.id !== id))
  } */

/* class App extends Component {
      constructor(props) {
          super(props)
          this.state = {
             data: [
              {name: 'Osman', viewers: 876, favourite: false, like: false, id: 1},
              {name: 'Ertugrul', viewers: 423, favourite: false, like: false, id: 2},
              {name: 'Omar', viewers: 765, favourite: false, like: false, id: 3},
          ],
              term: '',
              filter: 'all'
          }
      }
  
      onDeleted = id => {
          this.setState(({data}) => ({
              data: data.filter(c => c.id !== id)
          }))
      }
  
      addForm = (item) => {
          const newItem = { name: item.name, viewers: item.viewers, favourite: false, like: false, id: uuidv4() }
          this.setState(({data}) => ({
              data: [...data, newItem]
          }))
      }
  
      onToggleProp = (id, prop) => {
          this.setState(({data}) => ({
              data: data.map(item => {
                  if (id === item.id) {
                      return {...item, [prop]: !item[prop]}
                  }
                  return item
              })
          }))
      }
  
      searchHandler = (arr, term) => {
          if (term.length === 0) {
              return arr
          }
          return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
      }
  
      filterHandler = (arr, filter) => {
          switch (filter) {
              case 'popular':
                  return arr.filter(c => c.like)
              case 'mostViewers':
                  return arr.filter(c => c.viewers > 800)
              default: return arr
          }
      }
  
      updateTermHandler = term => this.setState({ term })
  
      updateFilterHandler = filter => this.setState({ filter })
  
      render () {
          const { data, term, filter } = this.state
          const allMoviesCount = data.length
          const favouriteMoviesCount = data.filter(c => c.favourite).length
          const visibleData = this.filterHandler(this.searchHandler(data, term), filter)
  
          return (
              <div className='app font-monospace'>
                  <div className='content'>
                      <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
                      <div className='search-panel'>
                          <SearchPanel updateTermHandler={this.updateTermHandler} />
                          <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
                      </div>
                      <MovieList data={visibleData} onDeleted={this.onDeleted} onToggleProp={this.onToggleProp} />
                      <MoviesAddForm addForm={this.addForm} />
                  </div>
              </div>
          )
      }
} */
