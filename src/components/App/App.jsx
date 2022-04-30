import { Card } from "@components/Card/Card";
import { Grid } from "./App.styled";
import { useState } from "react";

export const App = () => {
  const [cards, setCards] = useState(
    Array(9)
      .fill(1)
      .map((_, index) => ({ id: index }))
  );

  const handleMove = (id, index) => {
    setCards((pvCards) => {
      const oldIndex = pvCards.findIndex((item) => item.id === id);
      const clonned = [...pvCards];
      const item = clonned.splice(oldIndex, 1)[0];
      clonned.splice(index, 0, item);
      return clonned;
    });
  };

  return (
    <Grid>
      {cards.map((card, index) => (
        <Card {...card} key={card.id} index={index} onMove={handleMove} />
      ))}
    </Grid>
  );
};
