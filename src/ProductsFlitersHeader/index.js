import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./index.css";

const ProductFiltersHeader = (props) => {
  const { filterShow, onClickFilters, value, changePrice, productsCount } =
    props;

  const clickFilters = () => {
    onClickFilters();
  };

  const onChangePrice = (e) => {
    changePrice(e.target.value);
  };

  const filterText = filterShow ? "HIDE FILTERS" : "SHOW FILTERS";
  const arrow = filterShow ? (
    <FaAngleLeft className="arrow" />
  ) : (
    <FaAngleRight className="arrow" />
  );

  return (
    <div className="filter-container">
      <div className="large-screen-filter-btn-container">
        <p className="count">{productsCount} ITEMS</p>
        <button onClick={clickFilters} className="large-screen-filter-btn">
          {arrow}
          {filterText}
        </button>
      </div>
      <div className="small-screen-filter-btn-container">
        <button onClick={clickFilters} className="small-screen-filter-btn">
          FILTERS
        </button>
      </div>
      <div className="drop-down-container">
        <select value={value} onChange={onChangePrice} className="select-el">
          <option value="low">LOW TO HIGH</option>
          <option value="high">HIGH TO LOW</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFiltersHeader;
