import React, { useState, useEffect } from "react";

import { MainContainer, AddItemButtom, MoveableParent } from "./styled";

import MoveableItem from "../MoveableItem";

const MoveableContainer = () => {
  const [moveableComponents, setMoveableComponents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return await response.json();
    };

    getImages().then((response) => setImages(response));
  }, []);

  const handleAddMoveable = () => {
    setMoveableComponents([
      ...moveableComponents,
      {
        id: Math.floor(Math.random() * Date.now()),
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        image: images[Math.floor(Math.random() * images.length)].url,
      },
    ]);
  };

  const handleRemoveItem = (id) => {
    const itemsFiltered = moveableComponents.filter((item) => item.id !== id);
    setMoveableComponents(itemsFiltered);
  };

  return (
    <MainContainer>
      <AddItemButtom onClick={handleAddMoveable}>Add Moveable</AddItemButtom>
      <MoveableParent id="parent">
        {moveableComponents.map((item, index) => (
          <MoveableItem
            {...item}
            key={index}
            setSelected={setSelected}
            isSelected={selected === item.id}
            removeItem={handleRemoveItem}
          />
        ))}
      </MoveableParent>
    </MainContainer>
  );
};

export default MoveableContainer;
