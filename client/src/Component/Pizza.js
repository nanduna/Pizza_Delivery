import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");

  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-white rounded"
      style={{ textAlign: "center", margin: "40px" }}
    >
      <h1>{pizza.name}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px", cursor: "pointer" }}
          onClick={handleShow}
          alt={`Pizza: ${pizza.name}`}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="m-1 flex-container">
        <div className="w-100">
          <h1 className="mt-1">
            Price : {pizza.price[0][varient] * quantity}RS/-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">Add to cart</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src= {pizza.image} className="img-fluid" style={{height: "400px"}}></img>
          <p style={{marginTop: "10px"}}>{pizza.descripthin}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
