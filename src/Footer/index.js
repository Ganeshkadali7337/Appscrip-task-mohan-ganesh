import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

import "./index.css";

const Footer = () => (
  <div className="footer-container-main">
    <div className="footer-small-device">
      <div>
        <h2 className="footer-heading-name">BE THE FIRST TO KNOW</h2>
        <p className="footer-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </p>
        <div className="subscribe-section">
          <input
            placeholder="enter your e-mail"
            className="footer-text-input"
            type="text"
          />
          <button className="footer-button">SUBSCRIBE</button>
        </div>
      </div>
      <div className="middle-containers">
        <h2 className="footer-heading-name">CALL US</h2>
        <p className="footer-para">
          +44 221 133 5360 • customercare@mettamuse.com
        </p>
      </div>
      <div className="middle-containers">
        <h2 className="footer-heading-name">CURRENCY</h2>
        <div className="subscribe-section">
          <img
            className="country-img"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715506217/United_States_of_America_US_xvzewe.svg"
            alt="country"
          />
          <p> • USD</p>
        </div>
      </div>
      <div className="middle-containers">
        <details>
          <summary className="footer-heading-name">mettā muse</summary>
          <p className="footer-para">About Us</p>
          <p className="footer-para">Stories</p>
          <p className="footer-para">Artisians</p>
          <p className="footer-para">Boutiques</p>
          <p className="footer-para">Contact Us</p>
          <p className="footer-para">EU Compliances Docs</p>
        </details>
      </div>
      <div className="middle-containers">
        <details>
          <summary className="footer-heading-name">QUICK LINKS</summary>
          <p className="footer-para">Orders & Shipping</p>
          <p className="footer-para">Join/Login as a Seller</p>
          <p className="footer-para">Payment & Pricing</p>
          <p className="footer-para">Return & Refunds</p>
          <p className="footer-para">FAQs</p>
          <p className="footer-para">Privacy Policy</p>
          <p className="footer-para">Terms & Conditions</p>
        </details>
      </div>
      <div className="middle-containers">
        <details>
          <summary className="footer-heading-name">FOLLOW US</summary>
          <BiLogoInstagramAlt className="social" />
          <IoLogoLinkedin className="social" />
        </details>
      </div>
      <div className="middle-containers">
        <h2 className="footer-heading-name">mettā muse ACCEPTS</h2>
        <div className="payment-logos-container">
          <img
            className="payment-logos"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136188_tbwing.svg"
            alt="g-pay"
          />
          <img
            className="payment-logos"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136190_n7v5aj.svg"
            alt="visa"
          />
          <img
            className="payment-logos"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136192_jmtjmz.svg"
            alt="paypal"
          />
          <img
            className="payment-logos"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136193_nfuoz8.svg"
            alt="amex"
          />
          <img
            className="payment-logos"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509744/Group_136194_ryhh5x.svg"
            alt="apple-pay"
          />
          <img
            className="payment-logos"
            src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509745/Group_136195_g6uz3r.svg"
            alt="o-pay"
          />
        </div>
        <p className="copy-right-para">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </div>
    <div className="footer-large-device">
      <div className="footer-large-main-container">
        <div className="footer-top-container">
          <div className="container-1">
            <h2 className="footer-heading-name">BE THE FIRST TO KNOW</h2>
            <p className="footer-para">Sign up for updates from mettamuse</p>
            <div className="subscribe-section">
              <input
                placeholder="enter your e-mail"
                className="footer-text-input"
                type="text"
              />
              <button className="footer-button">SUBSCRIBE</button>
            </div>
          </div>
          <div className="container-2">
            <h2 className="footer-heading-name">CONTACT US</h2>
            <p className="footer-para">+44 221 133 5360</p>
            <p className="footer-para">customercare@mettamuse.com</p>
            <h2 className="footer-heading-name">CURRENCY</h2>
            <div className="subscribe-section">
              <img
                className="country-img"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715506217/United_States_of_America_US_xvzewe.svg"
                alt="country"
              />
              <p> • USD</p>
            </div>
            <p className="footer-para2">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <div className="footer-botton-container">
          <div className="bottom-container-1">
            <h2 className="footer-heading-name">mettā muse</h2>
            <p className="footer-para">About Us</p>
            <p className="footer-para">Stories</p>
            <p className="footer-para">Artisians</p>
            <p className="footer-para">Boutiques</p>
            <p className="footer-para">Contact Us</p>
            <p className="footer-para">EU Compliances Docs</p>
          </div>
          <div className="bottom-container-1">
            <h2 className="footer-heading-name">QUICK LINKS</h2>
            <p className="footer-para">Orders & Shipping</p>
            <p className="footer-para">Join/Login as a Seller</p>
            <p className="footer-para">Payment & Pricing</p>
            <p className="footer-para">Return & Refunds</p>
            <p className="footer-para">FAQs</p>
            <p className="footer-para">Privacy Policy</p>
            <p className="footer-para">Terms & Conditions</p>
          </div>
          <div className="bottom-container-2">
            <h2 className="footer-heading-name">FOLLOW US</h2>
            <BiLogoInstagramAlt className="social" />
            <IoLogoLinkedin className="social" />
            <h2 className="footer-heading-name">mettā muse ACCEPTS</h2>
            <div className="payment-logos-container">
              <img
                className="payment-logos"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136188_tbwing.svg"
                alt="g-pay"
              />
              <img
                className="payment-logos"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136190_n7v5aj.svg"
                alt="visa"
              />
              <img
                className="payment-logos"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136192_jmtjmz.svg"
                alt="paypal"
              />
              <img
                className="payment-logos"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136193_nfuoz8.svg"
                alt="amex"
              />
              <img
                className="payment-logos"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509744/Group_136194_ryhh5x.svg"
                alt="apple-pay"
              />
              <img
                className="payment-logos"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509745/Group_136195_g6uz3r.svg"
                alt="o-pay"
              />
            </div>
          </div>
        </div>
        <p className="footer-para">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
