
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./Form.module.css";

const Form = ({ onSubmit }) => {
const [searchParams, setSearchParams] = useSearchParams();
const movieId = searchParams.get ("movieId")
 
 
  const handleNameChange =(evt) => {
   setSearchParams(evt.target.value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (searchParams === "") {
      toast.warning("Enter searcher");
      return;
    }
    onSubmit(searchParams);
    setSearchParams("");
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <input
        className={s.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies"
        value={movieId}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.searchFormButton} aria-label="search">
        <FiSearch />
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
