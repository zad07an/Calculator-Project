import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) => {
  return (
    <button
      className={` flex items-center justify-center  w-20 text-center font-semibold text-xl border border-slate-400 cursor-pointer transition-all ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
