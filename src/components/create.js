import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const navigate = useNavigate();
  let id = useRef();
  let name = useRef();
  let category = useRef();
  let dateCreated = useRef();
  let creatorName = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000`, {
        id: id.current.value,
        name: name.current.value,
        category: category.current.value,
        dateCreated: dateCreated.current.value,
        creatorName: creatorName.current.value,
      })
      .then((response) => {
        console.log(response.data);
        alert("Article added successfully!!");
        navigate("/read");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="container mt-3 mb-3">
        <form className="myForm p-3">
          <div className="text-center">
            <h2>Article Details</h2>
          </div>
          <div class="mb-3">
            <label class="form-label">Id</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              ref={id}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUserName"
              ref={name}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword"
              ref={category}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Date Created</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword"
              ref={dateCreated}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Creator Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword"
              ref={creatorName}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
