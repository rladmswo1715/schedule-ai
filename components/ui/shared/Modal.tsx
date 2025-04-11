import ReactDOM from "react-dom";
import { FormEvent, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Backdrop from "@/components/ui/shared/BackDrop";
import { twMerge } from "tailwind-merge";
import React from "react";

interface ModalOverlayProps {
  style?: string;
  header?: string;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
  footer?: ReactNode;
  children?: ReactNode;
  onSubmit?: (event: FormEvent) => void;
}

interface ModalProps extends ModalOverlayProps {
  show: boolean;
  onCancel: () => void;
}

const ModalOverlay = React.forwardRef<HTMLDivElement, ModalOverlayProps>(
  (props, ref) => {
    const content = (
      <div
        ref={ref}
        className={twMerge(
          "fixed top-[10rem] left-[50%] transform translate-x-[-50%] translate-y-0 w-[40rem] bg-black rounded-xl z-50",
          props.style
        )}
      >
        <header className={`mx-4 my-8 ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
        <form
          onSubmit={
            props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
          }
        >
          <div className={`px-8 py-4 ${props.contentClass}`}>
            {props.children}
          </div>
          <footer className={`px-8 py-4 ${props.footerClass}`}>
            {props.footer}
          </footer>
        </form>
      </div>
    );
    return ReactDOM.createPortal(
      content,
      document.getElementById("modal-hook")!
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";

const Modal = ({ show, onCancel, ...props }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay ref={nodeRef} {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
