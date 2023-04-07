import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import Header from "../header/header";
import "./editPage.css";
import Loader from "../loader/loader";

const EditPage = ({onClose}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading,setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://notetaker-app.onrender.com/note/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedNote = { title, description };
    await axios
      .put(`https://notetaker-app.onrender.com/edit/${id}`, updatedNote)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancelEdit = () => {
    navigate("/home")
  };

  return (
    <>
    {loading?(
      <Loader/>
    ):(
      <div className="edit_container">
        <h2>Edit Note</h2>
        <form onSubmit={handleSubmit} className="edit_form">
          <div className="edit_page_inputs">
            <div>
              <label htmlFor="title" className="edit_label">
                Title
              </label><br/>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="edit_input"
              />
            </div>
            <div>
              <label htmlFor="description" className="edit_label">
                Description
              </label>
              <textarea
                className="edit_textarea"
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>

          <div className="btn_div">
            <button className="save_btn" type="submit">
              Save
            </button>
            <button className="cancel_btn" onClick={cancelEdit}>
              cancel
            </button>
          </div>
        </form>
      </div>
    )}
      
    </>
  );
};

export default EditPage;
