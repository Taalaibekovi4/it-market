import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/user/userSlice";

import styles from "../../styles/Cart.module.css";
import { sumBy } from "../../utils/common";

import mark from "../../images/mark.png"
import minus from "../../images/minus.png"
import plus from "../../images/plus.png"

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Ваша корзина</h2>

      {!cart.length ? (
        <div className={styles.empty}>Здесь пусто</div>
      ) : (
        <>
          <div className={styles.list}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>

                  <div className={styles.quantity}>
                    <div
                      className={styles.minus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity - 1))
                      }
                    >
                      <div className="icon">
                        <img src={minus} alt="" />
                      </div>
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={styles.plus}
                      onClick={() =>
                        changeQuantity(item, Math.max(1, quantity + 1))
                      }
                    >
                      <div className="icon">
                        <img src={plus} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.total}>{price * quantity}$</div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <div className="icon">
                      <img src={mark} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actions}>
            <div className={styles.total}>
            ИТОГОВАЯ ЦЕНА:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>

            <button className={styles.proceed}>Перейти к оформлению заказа</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;