import { Component } from "react";

import Header from "../Header";

import ProductCard from "../ProductCard";

import Footer from "../Footer";

import "./index.css";

import ProductFiltersHeader from "../ProductsFlitersHeader";

const products = [
  {
    id: 1,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_3_eszxfh.png",
    category: "MEN",
    price: 100,
    liked: false,
  },
  {
    id: 2,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_7_lf4twb.png",
    category: "KIDS",
    price: 200,
    liked: false,
  },
  {
    id: 3,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_2_eflhbi.png",
    category: "MEN",
    price: 300,
    liked: false,
  },
  {
    id: 4,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494533/Rectangle_29438_9_l1vuj4.png",
    category: "KIDS",
    price: 500,
    liked: false,
  },
  {
    id: 5,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_3_eszxfh.png",
    category: "MEN",
    price: 400,
    liked: false,
  },
  {
    id: 6,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_6_pwef6y.png",
    category: "WOMEN",
    price: 700,
    liked: false,
  },
  {
    id: 7,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_2_eflhbi.png",
    category: "MEN",
    price: 900,
    liked: false,
  },
  {
    id: 8,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Front_Pic_aoilif.jpg",
    category: "MEN",
    price: 600,
    liked: false,
  },
  {
    id: 9,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_zamdpz.png",
    category: "MEN",
    price: 800,
    liked: false,
  },

  {
    id: 10,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_5_mktvbr.png",
    category: "WOMEN",
    price: 1000,
    liked: false,
  },
  {
    id: 11,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494533/Rectangle_29438_10_yfexkf.png",
    category: "KIDS",
    price: 1200,
    liked: false,
  },

  {
    id: 12,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_5_mktvbr.png",
    category: "WOMEN",
    price: 1300,
    liked: false,
  },
  {
    id: 13,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494174/Rectangle_29438_8_gnoozb.png",
    category: "WOMEN",
    price: 1500,
    liked: false,
  },

  {
    id: 14,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494622/Image_vtkotk.png",
    category: "KIDS",
    price: 1100,
    liked: false,
  },
  {
    id: 15,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_6_pwef6y.png",
    category: "WOMEN",
    price: 500,
    liked: false,
  },
  {
    id: 16,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494622/Image_vtkotk.png",
    category: "KIDS",
    price: 600,
    liked: false,
  },
  {
    id: 17,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494174/Rectangle_29438_8_gnoozb.png",
    category: "KIDS",
    price: 800,
    liked: false,
  },
  {
    id: 18,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_4_wcotxl.png",
    category: "WOMEN",
    price: 900,
    liked: false,
  },
];

class Main extends Component {
  state = {
    productsData: [],
    filterShow: false,
    category: [],
    price: "low",
    isCheckedMen: false,
    isCheckedWomen: false,
    isCheckedKids: false,
    liked: false,
    likedId: [],
  };

  getData = () => {
    const { category, price } = this.state;
    const data =
      category.length === 0
        ? products
        : products.filter((each) => category.includes(each.category));
    const sortedProducts =
      price === "low"
        ? data.sort((a, b) => a.price - b.price)
        : data.sort((a, b) => b.price - a.price);
    this.setState({ productsData: sortedProducts });
  };

  componentDidMount() {
    this.getData();
  }

  onClickFilters = () => {
    const { filterShow } = this.state;
    this.setState({ filterShow: !filterShow });
  };

  onClickMen = (e) => {
    const checked = e.target.checked;
    const { category } = this.state;
    if (checked) {
      this.setState(
        { category: [...category, "MEN"], isCheckedMen: true },
        this.getData
      );
    } else {
      const index = category.indexOf("MEN");
      category.splice(index, 1);
      this.setState(
        { category: [...category], isCheckedMen: false },
        this.getData
      );
    }
  };

  onClickWomen = (e) => {
    const checked = e.target.checked;
    const { category } = this.state;
    if (checked) {
      this.setState(
        { category: [...category, "WOMEN"], isCheckedWomen: true },
        this.getData
      );
    } else {
      const index = category.indexOf("WOMEN");
      category.splice(index, 1);
      this.setState(
        { category: [...category], isCheckedWomen: false },
        this.getData
      );
    }
  };

  onClickKids = (e) => {
    const checked = e.target.checked;
    const { category } = this.state;
    if (checked) {
      this.setState(
        { category: [...category, "KIDS"], isCheckedKids: true },
        this.getData
      );
    } else {
      const index = category.indexOf("KIDS");
      category.splice(index, 1);
      this.setState(
        { category: [...category], isCheckedKids: false },
        this.getData
      );
    }
  };

  changePrice = (value) => {
    this.setState({ price: value }, this.getData);
  };

  onLiked = (id) => {
    const { productsData } = this.state;
    const updatedProducts = productsData.map((each) =>
      each.id === id ? { ...each, liked: !each.liked } : each
    );
    this.setState({ productsData: updatedProducts });
  };

  render() {
    const {
      productsData,
      filterShow,
      price,
      isCheckedKids,
      isCheckedWomen,
      isCheckedMen,
    } = this.state;
    const productsCount = productsData.length;
    console.log(price);

    return (
      <div>
        <img
          className="small-head"
          src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715518367/Grey_Strip_lxkrzd.svg"
          alt="top"
        />
        <img
          className="large-head"
          src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715518367/Grey_Strip_2_fwtbhz.svg"
          alt="top"
        />
        <div className="main-bg-container">
          <Header />
          <div className="content">
            <h1 className="text-heading">DISCOVER OUR PRODUCTS</h1>
            <p className="text-para">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
          <div className="products-main-list-container">
            <ProductFiltersHeader
              productsCount={productsCount}
              value={price}
              changePrice={this.changePrice}
              filterShow={filterShow}
              onClickFilters={this.onClickFilters}
            />
          </div>
          <div className="products-and-filters-container">
            {filterShow && (
              <div className="filters-list-container">
                <div className="filter">
                  <p className="filter-name">CATEGORY</p>
                  <div className="checkbox-container">
                    <div className="check">
                      <input
                        checked={isCheckedMen}
                        onChange={this.onClickMen}
                        id="men"
                        type="checkbox"
                      />
                      <label htmlFor="men">MEN</label>
                    </div>
                    <div className="check">
                      <input
                        checked={isCheckedWomen}
                        onChange={this.onClickWomen}
                        id="women"
                        type="checkbox"
                      />
                      <label htmlFor="women">WOMEN</label>
                    </div>
                    <div className="check">
                      <input
                        checked={isCheckedKids}
                        onChange={this.onClickKids}
                        id="kids"
                        type="checkbox"
                      />
                      <label htmlFor="kids">BABY & KIDS</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="products-container">
              <ul className="products-list">
                {productsData.map((each) => (
                  <ProductCard
                    onLiked={this.onLiked}
                    item={each}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
