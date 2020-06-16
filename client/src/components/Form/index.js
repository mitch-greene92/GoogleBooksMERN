import React from "react";
import "./style.css";

function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <span>Please enter a book or author to search</span>
        </label>
        <input
          className="form-control"
          type="text"
          value={query}
          placeholder="Lord of the Rings, J.R.R. Tolkien...etc"
          name="query"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-dark btn-lg float-right"
        >
          Search Google Books
        </button>
      </div>
    </form>
  );
}

export default Form;
