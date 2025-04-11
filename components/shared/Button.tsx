import { twMerge } from "tailwind-merge";

interface ButtonProps {
  type: "submit" | "button";
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  type,
  className,
  onClick,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      className={twMerge("px-4 py-2 border rounded-lg text-2xl", className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
