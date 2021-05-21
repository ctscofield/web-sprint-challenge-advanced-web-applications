import Axios from "axios";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "./../helpers/axiosWithAuth";
import Color from "./Color";
import EditMenu from "./EditMenu";


const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const { id } = useParams();
  const { push } = useHistory();


  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/colors/${id}`, colorToEdit)
      .then(res => {
        console.log(res);
        const adjustColor = [...colors]
        const index = adjustColor.findIndex((obj => obj.id === res.data.id));
        adjustColor[index] = colorToEdit;
        updateColors(adjustColor);
        console.log(adjustColor);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`/api/colors/${id}`)
      .then(res => {
        console.log(res);
        const noMoreColor = colors.filter((obj) => {
          return obj.id !== color.id;
        })
        .catch(err => {
          console.log(err);
        })
      })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.