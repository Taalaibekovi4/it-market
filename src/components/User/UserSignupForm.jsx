import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

import styles from "../../styles/User.module.css";

const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Зарегистрироваться</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Электорнный адрес"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="name"
            placeholder="Ваше имя"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="password"
            placeholder="Ваш пароль"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="avatar"
            placeholder="Ваш аватар"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType("login")}
        >
          у меня уже есть аккаунт
        </div>

        <button type="submit" className={styles.submit}>
        Завести аккаунт
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;