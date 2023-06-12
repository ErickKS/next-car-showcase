import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
}

export default function CustomButton({
  title,
  containerStyles,
  textStyles,
  handleClick,
  btnType,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`relative flex flex-row items-center justify-center px-6 py-3 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image src={rightIcon} alt="" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}
