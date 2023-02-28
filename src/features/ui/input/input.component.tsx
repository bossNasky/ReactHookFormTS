import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  id: string;
  title: string;
  type: "text" | "number";
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { id, title, error, ...rest },
  ref
) {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input id={id} ref={ref} {...rest} />
      {error && <span>{error}</span>}
    </div>
  );
});

export { Input };
