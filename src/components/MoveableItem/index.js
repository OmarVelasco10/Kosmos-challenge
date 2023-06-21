import React, { useRef } from "react";
import Moveable from "react-moveable";

const MoveableItem = ({
  top,
  left,
  width,
  height,
  image,
  id,
  setSelected,
  isSelected = false,
  removeItem,
}) => {
  const ref = useRef();

  const RemoveButton = {
    name: "editable",
    props: [],
    events: [],
    render(moveable, React) {
      const rect = moveable.getRect();
      const { pos2 } = moveable.state;

      const EditableViewer = moveable.useCSS(
        "div",
        `
        {
            position: absolute;
            left: 0px;
            top: 0px;
            will-change: transform;
            transform-origin: 0px 0px;
        }
        .custom-button {
            width: 24px;
            height: 24px;
            margin-bottom: 4px;
            background: #4af;
            border-radius: 4px;
            appearance: none;
            border: 0;
            color: white;
            font-weight: bold;
        }
            `
      );
      return (
        <EditableViewer
          key={"editable-viewer"}
          className={"moveable-editable"}
          style={{
            transform: `translate(${pos2[0]}px, ${pos2[1]}px) rotate(${rect.rotation}deg) translate(10px)`,
          }}
        >
          <button
            className="custom-button"
            onClick={() => {
              removeItem(id);
            }}
          >
            -
          </button>
        </EditableViewer>
      );
    },
  };

  return (
    <>
      <div
        ref={ref}
        className="draggable"
        id={"component-" + id}
        style={{
          position: "absolute",
          top: top,
          left: left,
          width: width,
          height: height,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => setSelected(id)}
      />

      <Moveable
        target={isSelected && ref.current}
        ables={[RemoveButton]}
        props={{
          editable: true,
        }}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        resizable={true}
        keepRatio={false}
        snappable={true}
        snapDirections={{ top: true, left: true, bottom: true, right: true }}
        snapThreshold={5}
        verticalGuidelines={[50, 150, 250, 450, 550]}
        horizontalGuidelines={[0, 100, 200, 400, 500]}
        bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: "css" }}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onResize={(e) => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        }}
      />
    </>
  );
};

export default MoveableItem;
