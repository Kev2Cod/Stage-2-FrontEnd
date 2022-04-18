import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const HomeComponent = (props) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <>
      <div className="card-product ">
        <Card className="bg-var-dark text-light" style={{ width: "13rem" }}>
          <Card.Img variant="top" src={props.image} className="image-product" />
          <Card.Body>
            <Link className="text-decoration-none" to={`/detail-product/${props.id}`}>
              <Card.Title className="text-var-red">{`${props.title.slice(0, 16)}`}</Card.Title>
            </Link>
            <span>{`${formatter.format(props.price)}`}</span>
            <br />
            <span>Stock : {props.stock}</span>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default HomeComponent;
