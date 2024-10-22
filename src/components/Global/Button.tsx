import React from "react";
import styles from "./style.module.css";
import { BiArrowFromLeft } from "react-icons/bi";
import Link from "next/link";
const Button = ({
  btnText,
  isShow,
  link,
}: {
  btnText: string;
  isShow: boolean;
  link: string;
}) => {
  return (
    <Link href={link}>
      <button className={styles.customButton}>
        {isShow && (
          <span>
            <BiArrowFromLeft />
          </span>
        )}{" "}
        {btnText}
      </button>
    </Link>
  );
};

export default Button;
