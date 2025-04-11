import ReactDOM from "react-dom";

interface BackDropProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const BackDrop = ({ onClick }: BackDropProps) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-full h-[100vh] bg-black/20 z-10"
      onClick={onClick}
    ></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default BackDrop;
