import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ListCategoryComponent = (props) => {

  const navigate = useNavigate();

 
  const handleDelete = () => {
    navigate("/list-category");
  };

  return (
    <>
      <tr className="text-center">
        <th scope="row" className="align-middle">{props.id}</th>
        <td className="align-middle">{props.title}</td>
        <td className="align-middle ">

          <Link to={`/edit-category/${props.id}`}>
          <a className="btn bg-var-green text-white fw-bold m-1" style={{ width: "6rem" }}>
            Edit
          </a>
          </Link>

          <a onClick={handleDelete} className="btn bg-var-red text-white fw-bold m-1" style={{ width: "6rem" }}>
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default ListCategoryComponent;
