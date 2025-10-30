// ListGroup.tsx
import React, { useState } from "react";

type ListGroupProps = {
  items: string[];
};

function ListGroup({ items }: ListGroupProps) {
  const [selected, setSelected] = useState(-1);

  const handleClick = (index: number) => {
    console.log("Clicked------:", items[index]); // prints clicked item
    setSelected(index); // highlight selected item
  };

  return (
    <>
      <h1>My List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item ${selected === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
