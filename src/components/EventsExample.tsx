import React, { FC, useRef, useState } from "react";
import { CardVariant } from "./Card";
import Card from './Card';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //console.log(value);
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("drop");
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="managed"
      />
      <input type="text" ref={inputRef} placeholder="unmanaged" />
      <button onClick={clickHandler}>nnn</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "violet", marginTop: 20 }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "violet",
          marginTop: 20,
          marginBottom: 20,
        }}
      ></div>      
      <Card variant={CardVariant.outlined} width="200px" height="200px" onClick={() => {console.log('hi!')}}>
        <button>Button</button>
        <div>Hello</div>
      </Card>
    </div>
  );
};

export default EventsExample;
