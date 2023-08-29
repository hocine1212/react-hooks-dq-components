import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  return (
    <section className="albums">
      {albums.map((album) => {
        return (
          <AlbumCard
            key={album.id}
            name={album.name}
            genre={album.genre}
            image={album.image}
          />
        );
      })}
    </section>
  );
}

export default AlbumList;
