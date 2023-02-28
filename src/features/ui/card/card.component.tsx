import { ReactNode } from "react";
import style from "./card.module.css";

type CardProps = {
  children: ReactNode;
  superClass: string;
};

const Card = function ({ children, superClass }: CardProps) {
  return <div className={`${style["card"]} ${superClass}`}>{children}</div>;
};

export { Card };
