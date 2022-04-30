import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Wrapper } from "./Card.styled";

const ITEM_TYPE = "CARD";

export const Card = ({ id, index, onMove }) => {
  const wrapperRef = useRef(null);

  const [collected, connectDrag] = useDrag(
    () => ({
      item: { id },
      type: ITEM_TYPE,
      collect: (monitor) => ({
        dragging: monitor.isDragging(),
      }),
    }),
    [id]
  );

  const [, connectDrop] = useDrop(
    () => ({
      accept: ITEM_TYPE,
      hover: (item) => {
        if (item.id === id) return;
        // move item with this id to this index
        onMove(item.id, index);
      },
    }),
    [id, index, onMove]
  );

  connectDrop(connectDrag(wrapperRef));

  return (
    <Wrapper ref={wrapperRef} {...collected}>
      <div>id: {id}</div>
      <div>index: {index}</div>
    </Wrapper>
  );
};
