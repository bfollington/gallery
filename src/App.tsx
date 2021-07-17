import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import center from "./collections/center/";
import longing from "./collections/longing/";

const collections = [
  { title: "center", year: 2021, photos: center },
  { title: "longing", year: 2021, photos: longing }
]

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentCollection, setCurrentCollection] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }, collIdx) => {
    setCurrentCollection(collIdx);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setCurrentCollection(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      {collections.map((c, collIdx) => (<div>
        <h1>{c.title}.{c.year}</h1>
        <Gallery photos={c.photos} onClick={(e, p) => openLightbox(e, p, collIdx)} />
        
      </div>))}
      <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={collections[currentCollection].photos.map(x => ({
                  ...x,
                  source: x.src,
                  srcset: x.srcset,
                  caption: x.caption
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      
    </div>
  );
}

export default App
