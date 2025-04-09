import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InnerLayoutProps {
  children: ReactNode;
  className?: string;
}

const InnerLayout = ({ children, className = "" }: InnerLayoutProps) => {
  return (
    <div
      className={twMerge(
        "w-full max-w-[64rem] min-h-[50rem] mt-[6rem] mx-auto border-4 border-white rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default InnerLayout;
