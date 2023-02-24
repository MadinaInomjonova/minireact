import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../context";

import "./search-panel.css";

const SearchPanel = () => {
  const [term, setTerm] = useState("");

  const { state, dispatch } = useContext(Context);

  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    // props.updateTermHandler(term)
    dispatch({ type: "ON_TERM", payload: term });
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="form-control search-input"
      onChange={updateTermHandler}
      value={term}
    />
  );
};

/* class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({ term });
    this.props.updateTermHandler(term)
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search movies..."
        className="form-control search-input"
        onChange={this.updateTermHandler}
        value={this.state.term}
      />
    );
  }
} */

export default SearchPanel;
