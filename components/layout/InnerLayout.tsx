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
        "w-full max-w-[68rem] min-h-[50rem] mt-[6rem] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default InnerLayout;
