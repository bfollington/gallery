import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import center from "./collections/2021/center";
import longing from "./collections/2021/longing/";
import ghostvoices from "./collections/2021/ghost voices/";
import rush from "./collections/2021/rush/";
import underneath from "./collections/2021/underneath/";
import iridescent from "./collections/2021/iridescent/";
import flame from "./collections/2021/flame/";
import feather from "./collections/2021/feather";
import warp from "./collections/2021/warp/";
import deeper from "./collections/2021/deeper";
import fragile from "./collections/2021/fragile/";
import planetB from "./collections/2021/planet b/";
import fractalsII from "./collections/2021/fractals/";
import cellular from "./collections/2021/cellular";
import fractals from "./collections/2020/fractals/";
import domainWarp from "./collections/2020/domain warp/";
import perlinFlow from "./collections/2020/perlin flow/";
import sines from "./collections/2020/sines/";
import noise from "./collections/2020/noise/";
import genesis from "./collections/2020/genesis/";
import iso from "./collections/2021/iso/";

const collections = [
  { title: "digital city", year: 2021, photos: iso },
  { title: "center", year: 2021, photos: center },
  { title: "ghost voices", year: 2021, photos: ghostvoices },
  { title: "rush", year: 2021, photos: rush },
  { title: "longing", year: 2021, photos: longing },
  { title: "underneath", year: 2021, photos: underneath },
  { title: "iridescent", year: 2021, photos: iridescent },
  { title: "flame", year: 2021, photos: flame },
  { title: "feather", year: 2021, photos: feather },
  { title: "warp", year: 2021, photos: warp },
  { title: "deeper", year: 2021, photos: deeper },
  { title: "fragile", year: 2021, photos: fragile },
  { title: "planet b", year: 2021, photos: planetB },
  { title: "fractals II", year: 2021, photos: fractalsII },
  { title: "cellular", year: 2021, photos: cellular },
  { title: "fractals", year: 2020, photos: fractals },
  { title: "domain warp", year: 2020, photos: domainWarp },
  { title: "perlin flow", year: 2020, photos: perlinFlow },
  { title: "sines", year: 2020, photos: sines },
  { title: "noise", year: 2020, photos: noise },
  { title: "genesis", year: 2020, photos: genesis },
];

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
      {collections.map((c, collIdx) => (
        <div>
          {/* <h1>{c.title}.{c.year}</h1> */}
          <div>&nbsp;</div>
          <Gallery
            photos={c.photos}
            onClick={(e, p) => openLightbox(e, p, collIdx)}
          />
        </div>
      ))}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={collections[currentCollection].photos.map((x) => ({
                ...x,
                source: x.src,
                srcset: x.srcset,
                caption: x.caption,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default App;
