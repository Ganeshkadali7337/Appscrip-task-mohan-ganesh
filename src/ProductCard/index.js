import { BsHeart } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";

import "./index.css";

const ProductCard = (props) => {
  const { item, onLiked } = props;
  const { id, name, image, liked } = item;

  const onClickLiked = () => {
    onLiked(id);
  };

  return (
    <li className="list-item-container">
      <img className="product-img" src={image} alt={name} />
      <div className="name-container">
        <p className="product-name">{name}</p>
        {liked ? (
          <button onClick={onClickLiked} className="like-button">
            <GoHeartFill className="heart-filled" />
          </button>
        ) : (
          <button onClick={onClickLiked} className="like-button">
            <BsHeart className="heart" />
          </button>
        )}
      </div>
      <p className="product-para">
        Sign in or create an account to see pricing.
      </p>
    </li>
  );
};

export default ProductCard;
