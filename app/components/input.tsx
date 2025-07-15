import * as React from "react";
import clsx from "clsx";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={clsx(
          "flex h-12 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ease-in-out",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };