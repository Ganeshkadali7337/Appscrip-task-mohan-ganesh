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
    occasion: "travelling",
    fabric: "cotton",
    recommended: true,
    newestFirst: true,
    popular: false,
  },
  {
    id: 2,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_7_lf4twb.png",
    category: "KIDS",
    price: 200,
    liked: false,
    occasion: "travelling",
    fabric: "cotton",
    recommended: false,
    newestFirst: false,
    popular: true,
  },
  {
    id: 3,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_2_eflhbi.png",
    category: "MEN",
    price: 300,
    liked: false,
    occasion: "travelling",
    fabric: "cotton",
    recommended: true,
    newestFirst: false,
    popular: true,
  },
  {
    id: 4,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494533/Rectangle_29438_9_l1vuj4.png",
    category: "KIDS",
    price: 500,
    liked: false,
    occasion: "travelling",
    fabric: "cotton",
    recommended: false,
    newestFirst: true,
    popular: true,
  },
  {
    id: 5,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_3_eszxfh.png",
    category: "MEN",
    price: 400,
    liked: false,
    occasion: "indoor",
    fabric: "cotton",
    recommended: true,
    newestFirst: true,
    popular: false,
  },
  {
    id: 6,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_6_pwef6y.png",
    category: "WOMEN",
    price: 700,
    liked: false,
    occasion: "indoor",
    fabric: "leather",
    recommended: false,
    newestFirst: false,
    popular: true,
  },
  {
    id: 7,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_2_eflhbi.png",
    category: "MEN",
    price: 900,
    liked: false,
    occasion: "travelling",
    fabric: "leather",
    recommended: true,
    newestFirst: false,
    popular: false,
  },
  {
    id: 8,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Front_Pic_aoilif.jpg",
    category: "MEN",
    price: 600,
    liked: false,
    occasion: "indoor",
    fabric: "leather",
    recommended: true,
    newestFirst: true,
    popular: true,
  },
  {
    id: 9,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715492858/Rectangle_29438_zamdpz.png",
    category: "MEN",
    price: 800,
    liked: false,
    occasion: "indoor",
    fabric: "cotton",
    recommended: false,
    newestFirst: false,
    popular: true,
  },
  {
    id: 10,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_5_mktvbr.png",
    category: "WOMEN",
    price: 1000,
    liked: false,
    occasion: "travelling",
    fabric: "cotton",
    recommended: true,
    newestFirst: true,
    popular: true,
  },
  {
    id: 11,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494533/Rectangle_29438_10_yfexkf.png",
    category: "KIDS",
    price: 1200,
    liked: false,
    occasion: "travelling",
    fabric: "leather",
    recommended: true,
    newestFirst: false,
    popular: false,
  },
  {
    id: 12,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_5_mktvbr.png",
    category: "WOMEN",
    price: 1300,
    liked: false,
    occasion: "travelling",
    fabric: "leather",
    recommended: true,
    newestFirst: true,
    popular: true,
  },
  {
    id: 13,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494174/Rectangle_29438_8_gnoozb.png",
    category: "WOMEN",
    price: 1500,
    liked: false,
    occasion: "indoor",
    fabric: "leather",
    recommended: false,
    newestFirst: false,
    popular: true,
  },
  {
    id: 14,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494622/Image_vtkotk.png",
    category: "KIDS",
    price: 1100,
    liked: false,
    occasion: "travelling",
    fabric: "cotton",
    recommended: true,
    newestFirst: true,
    popular: false,
  },
  {
    id: 15,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_6_pwef6y.png",
    category: "WOMEN",
    price: 500,
    liked: false,
    occasion: "indoor",
    fabric: "leather",
    recommended: true,
    newestFirst: false,
    popular: true,
  },
  {
    id: 16,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494622/Image_vtkotk.png",
    category: "KIDS",
    price: 600,
    liked: false,
    occasion: "indoor",
    fabric: "leather",
    recommended: false,
    newestFirst: true,
    popular: true,
  },
  {
    id: 17,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715494174/Rectangle_29438_8_gnoozb.png",
    category: "KIDS",
    price: 800,
    liked: false,
    occasion: "indoor",
    fabric: "cotton",
    recommended: true,
    newestFirst: false,
    popular: true,
  },
  {
    id: 18,
    name: "PRODUCT NAME",
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715493666/Rectangle_29438_4_wcotxl.png",
    category: "WOMEN",
    price: 900,
    liked: false,
    occasion: "travelling",
    fabric: "leather",
    recommended: false,
    newestFirst: true,
    popular: false,
  },
];

class Main extends Component {
  state = {
    productsData: [],
    filterShow: false,
    category: [],
    occations: [],
    fabrics: [],
    price: "recommended",
    isCheckedMen: false,
    isCheckedWomen: false,
    isCheckedKids: false,
    isCheckedTravelling: false,
    isCheckedIndoor: false,
    isCheckedCotton: false,
    isCheckedLeather: false,
    liked: false,
    likedId: [],
  };

  getData = () => {
    const { category, occations, fabrics, price } = this.state;
    const categoryData =
      category.length === 0
        ? products
        : products.filter((each) => category.includes(each.category));
    const occasionData =
      occations.length === 0
        ? categoryData
        : categoryData.filter((each) => occations.includes(each.occasion));
    const fabricData =
      fabrics.length === 0
        ? occasionData
        : occasionData.filter((each) => fabrics.includes(each.fabric));

    let sortedProducts;

    switch (price) {
      case "recommended":
        sortedProducts = fabricData.sort(
          (a, b) => b.recommended - a.recommended
        );
        break;

      case "newest":
        sortedProducts = fabricData.sort(
          (a, b) => b.newestFirst - a.newestFirst
        );
        break;

      case "popular":
        sortedProducts = fabricData.sort((a, b) => b.popular - a.popular);
        break;

      case "low":
        sortedProducts = fabricData.sort((a, b) => a.price - b.price);
        break;

      case "high":
        sortedProducts = fabricData.sort((a, b) => b.price - a.price);
        break;

      default:
        sortedProducts = fabricData;
    }
    console.log(sortedProducts);

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

  onClickTravelling = (e) => {
    const checked = e.target.checked;
    const { occations } = this.state;
    if (checked) {
      this.setState(
        { occations: [...occations, "travelling"], isCheckedTravelling: true },
        this.getData
      );
    } else {
      const index = occations.indexOf("travelling");
      occations.splice(index, 1);
      this.setState(
        { occations: [...occations], isCheckedTravelling: false },
        this.getData
      );
    }
  };

  onClickIndoor = (e) => {
    const checked = e.target.checked;
    const { occations } = this.state;
    if (checked) {
      this.setState(
        { occations: [...occations, "indoor"], isCheckedIndoor: true },
        this.getData
      );
    } else {
      const index = occations.indexOf("indoor");
      occations.splice(index, 1);
      this.setState(
        { occations: [...occations], isCheckedIndoor: false },
        this.getData
      );
    }
  };

  onClickCotton = (e) => {
    const checked = e.target.checked;
    const { fabrics } = this.state;
    if (checked) {
      this.setState(
        { fabrics: [...fabrics, "cotton"], isCheckedCotton: true },
        this.getData
      );
    } else {
      const index = fabrics.indexOf("cotton");
      fabrics.splice(index, 1);
      this.setState(
        { fabrics: [...fabrics], isCheckedCotton: false },
        this.getData
      );
    }
  };

  onClickLeather = (e) => {
    const checked = e.target.checked;
    const { fabrics } = this.state;
    if (checked) {
      this.setState(
        { fabrics: [...fabrics, "leather"], isCheckedLeather: true },
        this.getData
      );
    } else {
      const index = fabrics.indexOf("leather");
      fabrics.splice(index, 1);
      this.setState(
        { fabrics: [...fabrics], isCheckedLeather: false },
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
      category,
      fabrics,
      occations,
      price,
      isCheckedKids,
      isCheckedWomen,
      isCheckedMen,
      isCheckedTravelling,
      isCheckedIndoor,
      isCheckedCotton,
      isCheckedLeather,
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
                  <details className="filter-details">
                    <summary className="filters-heading-name">
                      <div className="filter-details-content">
                        <p className="filter-name">IDEAL FOR</p>
                        <p className="filter-selected">
                          {category.length !== 0
                            ? `${category.length} Selected`
                            : "All"}
                        </p>
                      </div>
                    </summary>
                    <div className="check">
                      <input
                        className="checkbox-el"
                        checked={isCheckedMen}
                        onChange={this.onClickMen}
                        id="men"
                        type="checkbox"
                      />
                      <label htmlFor="men">Men</label>
                    </div>
                    <div className="check">
                      <input
                        className="checkbox-el"
                        checked={isCheckedWomen}
                        onChange={this.onClickWomen}
                        id="women"
                        type="checkbox"
                      />
                      <label htmlFor="women">Women</label>
                    </div>
                    <div className="check">
                      <input
                        className="checkbox-el"
                        checked={isCheckedKids}
                        onChange={this.onClickKids}
                        id="kids"
                        type="checkbox"
                      />
                      <label htmlFor="kids">Baby & Kids</label>
                    </div>
                  </details>
                </div>
                <div className="filter">
                  <details className="filter-details">
                    <summary className="filters-heading-name">
                      <div className="filter-details-content">
                        <p className="filter-name">OCCASION</p>
                        <p className="filter-selected">
                          {occations.length !== 0
                            ? `${occations.length} Selected`
                            : "All"}
                        </p>
                      </div>
                    </summary>
                    <div className="check">
                      <input
                        className="checkbox-el"
                        checked={isCheckedTravelling}
                        onChange={this.onClickTravelling}
                        id="travelling"
                        type="checkbox"
                      />
                      <label htmlFor="men">Travelling</label>
                    </div>
                    <div className="check">
                      <input
                        className="checkbox-el"
                        checked={isCheckedIndoor}
                        onChange={this.onClickIndoor}
                        id="indoor"
                        type="checkbox"
                      />
                      <label htmlFor="women">Indoor</label>
                    </div>
                  </details>
                </div>
                <div className="filter-last">
                  <details className="filter-details">
                    <summary className="filters-heading-name">
                      <div className="filter-details-content">
                        <p className="filter-name">FABRIC</p>
                        <p className="filter-selected">
                          {fabrics.length !== 0
                            ? `${fabrics.length} Selected`
                            : "All"}
                        </p>
                      </div>
                    </summary>
                    <div className="check">
                      <input
                        className="checkbox-el"
                        checked={isCheckedCotton}
                        onChange={this.onClickCotton}
                        id="cotton"
                        type="checkbox"
                      />
                      <label htmlFor="women">Cotton</label>
                    </div>
                    <div className="check">
                      <input
                        className="checkbox-el"
                        checked={isCheckedLeather}
                        onChange={this.onClickLeather}
                        id="leather"
                        type="checkbox"
                      />
                      <label htmlFor="kids">Leather</label>
                    </div>
                  </details>
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
