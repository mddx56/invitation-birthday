import "photoswipe/dist/photoswipe.css";
import "./style.css";

import { Gallery, Item } from "react-photoswipe-gallery";

const MyGallery = () => {
  return (
    <>
      <Gallery>
        <div className="grid-container">
          <Item className="grid-item" original="/assets/adobe1.jpeg" thumbnail="/assets/adobe1.jpeg">
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/assets/adobe1.jpeg" />
            )}
          </Item>
          <Item className="grid-item" original="/assets/adobe2.jpeg" thumbnail="/assets/adobe2.jpeg">
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/assets/adobe2.jpeg" />
            )}
          </Item>
          <Item className="grid-item" original="/assets/adobe4.jpeg" thumbnail="/assets/adobe4.jpeg">
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/assets/adobe4.jpeg" />
            )}
          </Item>
        </div>
      </Gallery>
    </>
  );
};

export default MyGallery;
