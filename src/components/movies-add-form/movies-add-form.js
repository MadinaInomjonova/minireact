import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../context";

import "./movies-add-form.css";

const MoviesAddForm = ({ addForm }) => {
  const [state, setState] = useState({ name: "", viewers: "" });

  const { _, dispatch } = useContext(Context);

  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addFormHandler = (e) => {
    e.preventDefault();
    if (state.name === "" || state.viewers === "") return;
    const data = { name: state.name, viewers: state.viewers };
    // addForm(data)
    dispatch({ type: "ADD_FORM", payload: data });
    setState({
      name: "",
      viewers: "",
    });
  };

  return (
    <div className="movies-add-form">
      <h3>Adding new movies</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          onChange={changeHandlerInput}
          type="text"
          className="form-control new-post-label"
          placeholder="What a movie?"
          name="name"
          value={state.name}
        />
        <input
          onChange={changeHandlerInput}
          type="number"
          className="form-control new-post-label mx-2"
          placeholder="How many times viewed?"
          name="viewers"
          value={state.viewers}
        />
        <button className="btn btn-outline-dark" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

// class MoviesAddForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       viewers: "",
//     };
//   }

//   changeHandlerInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   addFormHandler = (e) => {
//     e.preventDefault()
//     this.props.addForm({ name: this.state.name, viewers: this.state.viewers})
//     this.setState({
//       name: '',
//       viewers: ''
//     })
//   }

//   render() {
//     const { name, viewers } = this.state;

//     return (
//       <div className="movies-add-form">
//         <h3>Adding new movies</h3>
//         <form
//           className="add-form d-flex"
//           onSubmit={this.addFormHandler}
//         >
//           <input
//             onChange={this.changeHandlerInput}
//             type="text"
//             className="form-control new-post-label"
//             placeholder="What a movie?"
//             name="name"
//             value={name}
//           />
//           <input
//             onChange={this.changeHandlerInput}
//             type="number"
//             className="form-control new-post-label mx-2"
//             placeholder="How many times viewed?"
//             name="viewers"
//             value={viewers}
//           />
//           <button className="btn btn-outline-dark" type="submit">
//             Add
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

export default MoviesAddForm;
