import React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export default function MessageItem({
  children,
  className,
  ...rest
}: Props) {
  return (
    <span
      {...rest}
      className={`${className} px-4 py-2 rounded-xl`}
    >
      {children}
    </span>
  );
}
