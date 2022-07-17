import IconCart from "../../assets/icon-cart.svg";
import "./Button.module.scss";
export default function Button() {
  return (
    <button>
      <img src={IconCart} alt="" />
      Add to Cart
    </button>
  );
}
