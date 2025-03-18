import React from "react";

const Search = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.taget.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <section className="section-searchFilter">
      <input
        type="text"
        placeholder="search"
        name={search}
        onChange={handleInputChange}
      />

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Search;
