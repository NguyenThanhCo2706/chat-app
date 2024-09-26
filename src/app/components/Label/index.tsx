import React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Label({
  children,
  className,
  ...rest
}: Props) {
  return (
    <>
      <label
        {...rest}
        className={`${className} px-2 py-1 font-bold rounded-full`}
      >
        {children}
      </label>
    </>
  );
}
