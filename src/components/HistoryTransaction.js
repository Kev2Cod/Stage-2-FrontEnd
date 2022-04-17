import React from "react";
import { Card, Button } from "react-bootstrap";

import Image from "../assets/img/products-keyboard.png";
import Icon from "../assets/img/icon/icon-dumb-merch.png";

const HistoryTransaction = () => {
  return (
    <>
      <Card className="bg-var-dark-gray">
        <Card.Body className="d-flex gap-2 align-items-center">
          <img src={Image} style={{ width: "80px" }} />
          <div>
            <span className="fw-bold text-var-red ">Keyboard</span>
            <small className="text-var-red d-block mb-3">
              Saturday, 14 Juli 2021
            </small>
            <span className=" d-inline-block">Sub Total : Rp. 700.000</span>
          </div>

          <img src={Icon} className="ms-auto" style={{ width: "80px" }} />
        </Card.Body>
      </Card>
    </>
  );
};

export default HistoryTransaction;
