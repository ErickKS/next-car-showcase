import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export default function CustomButton({ title, containerStyles, handleClick, btnType }: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`relative flex flex-row items-center justify-center px-6 py-3 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
}
