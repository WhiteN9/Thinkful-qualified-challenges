import React, { useState } from "react";

function AlbumDetail({ id, title }) {
   const [photos, setPhotos] = useState([]);
   var loadPhotos = () => {
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
         .then((response) => response.json())
         .then((photos) => setPhotos(photos.slice(0, 10)))
         .catch((error) => {
         console.log(error);
         });
   };

   if (id) {
      return (
         <div>
         <h2 onClick={loadPhotos}>{title}</h2>
         <ol className="photos">
            {photos.map((photo) => (
               <li key={photo.id}>
               <p>{photo.title}</p>
               <img src={photo.thumbnailUrl} alt={photo.title} />
               </li>
            ))}
         </ol>
         </div>
      );
   }
   return <p>No albums to display</p>;
}

export default AlbumDetail;
