import React from "react";
import { Button } from "antd";

interface ButtonProps {
  /**
   * Optional click handler
   */
  onClick?: (arg0: string, arg1: number) => void;
}

const CustomButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e) e.preventDefault();
    if (onClick) onClick("test", 1);
  };
  return (
    <Button type="primary" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
