import React from "react";
import GenrePicker from "./GenrePicker";
import AlbumCard from "./AlbumCard";
import AlbumList from "./AlbumList";

function MainContent() {
  return (
    <main>
      <GenrePicker />
      <AlbumList />
    </main>
  );
}

export default MainContent;
