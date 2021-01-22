import React from "react";
import ReactDom from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";
const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
