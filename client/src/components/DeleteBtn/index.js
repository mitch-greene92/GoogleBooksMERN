import React from "react";
import Button from "../Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteBtn(props) {
  return (
    <div>
      <Button type="danger" onClick={props.onClick}>
        Remove Book From Library
      </Button>
      <ToastContainer />
    </div>
  );
}

export default DeleteBtn;
