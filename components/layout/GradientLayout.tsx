import { ReactNode } from "react";

interface GradientLayoutProps {
  children: ReactNode;
}

const GradientLayout = ({ children }: GradientLayoutProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[700px] h-[400px] bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-[-100px] right-[-100px] w-[800px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-pink-500 rounded-full blur-3xl opacity-30"></div>
      {children}
    </div>
  );
};

export default GradientLayout;
