import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ListProductComponent = (props) => {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  const handleEdit = () => {
    navigate("/edit-product");
  };

  const handleDelete = () => {
    navigate("/list-product");
  };

  return (
    <>
      <tr className="align-middle text-center">
        <th scope="row">{`${props.number}`}</th>
        <td>
          <img src={props.image} alt="image-product" className="image-list-product" />
        </td>
        <td>{props.title}</td>
        <td>{`${props.description.slice(0, 30)}....`}</td>
        <td>{formatter.format(props.price)}</td>
        <td>{props.stock}</td>
        <td className="text-center">
          <Link to={`/edit-product/${(props.id)}`}>
            <a onClick={handleEdit} className="btn bg-var-green text-white fw-bold m-1" href="" style={{ width: "6rem" }}>
              Edit
            </a>
          </Link>

          <Link to='/delete-product'>
            <a onClick={handleDelete} className="btn bg-var-red text-white fw-bold m-1" style={{ width: "6rem" }}>
              Delete
            </a>
          </Link>

        </td>
      </tr>
    </>
  );
};

export default ListProductComponent;
