import React, { FC, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children: React.ReactChild | React.ReactNode;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
  const [state, /* setState */] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "2px solid red" : "none",
        background: variant === CardVariant.primary ? "red" : "",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
