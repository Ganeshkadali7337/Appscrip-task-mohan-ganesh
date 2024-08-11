import { Component } from "react";

import "./index.css";

class Header extends Component {
  state = { navOpen: false };

  onClickNav = () => {
    const { navOpen } = this.state;
    this.setState({ navOpen: !navOpen });
  };

  render() {
    const { navOpen } = this.state;
    return (
      <div className="main">
        <div className="nav">
          <div className="bars-container">
            <button className="nav-bar" onClick={this.onClickNav}>
              <img
                className="bars"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712403243/solar_hamburger-menu-linear_pooswi.svg"
                alt="bars"
              />
            </button>
            <img
              className="logo"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1712402045/Logo_xqnsip.svg"
              alt="logo"
            />
          </div>
          <h1 className="heading-logo">LOGO</h1>
          <div className="logos-container">
            <img
              className="icon"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715432754/search-normal_zunge5.svg"
              alt="search"
            />
            <img
              className="icon"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715432738/heart_qwkfy5.svg"
              alt="liked"
            />
            <img
              className="icon"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715432755/shopping-bag_hzbyqd.svg"
              alt="cart"
            />
            <img
              className="icon profile"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715432754/profile_roxehg.svg"
              alt="profile"
            />
            <img
              className="lang-icon"
              src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715432753/Language_h7zsjw.svg"
              alt="language"
            />
          </div>
        </div>
        {navOpen && (
          <ul className="nav-list">
            <li>PROFILE</li>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        )}
        <ul className="large-screens-header">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    );
  }
}
export default Header;
