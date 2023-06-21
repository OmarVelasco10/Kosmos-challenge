import React, { useState, useEffect } from "react";


import MoveableItem from "../MoveableItem";

const MoveableContainer = () => {
  const [moveableComponents, setMoveableComponents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [images, setImages] = useState([]);

  // This useEffects gets the images when the component is mount
  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return await response.json();
    };

    getImages().then((response) => setImages(response));
  }, []);

//This function adds a Movable component and assigns the images randomly
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

  //This function remove the item from the list and from the DOM
  const handleRemoveItem = (id) => {
    const itemsFiltered = moveableComponents.filter((item) => item.id !== id);
    setMoveableComponents(itemsFiltered);
  };

  return (
    <div className="mainContainer">
      <button className="addItemButtom" onClick={handleAddMoveable}>Add Moveable</button>
      <div className="moveableParent" id="parent">
        {moveableComponents.map((item, index) => (
          <MoveableItem
            {...item}
            key={index}
            setSelected={setSelected}
            isSelected={selected === item.id}
            removeItem={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default MoveableContainer;
