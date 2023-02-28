import style from "./button.module.css";

type ButtonProps = {
  title: string;
  type: "submit" | "button" | "reset";
};

const Button = function ({ title, ...rest }: ButtonProps) {
  return (
    <button className={style["button"]} {...rest}>
      {title}
    </button>
  );
};

export { Button };
