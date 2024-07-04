import "photoswipe/dist/photoswipe.css";


import { Gallery, Item } from "react-photoswipe-gallery";

const MyGallery = () => {
  return (
    <>
      <Gallery>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 320px 320px",
            gridTemplateRows: "240px",            
            gap: "12px 12px", 
          }}
        >
          <Item original="/assets/adobe1.jpeg" thumbnail="/assets/adobe1.jpeg">
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/assets/adobe1.jpeg" />
            )}
          </Item>
          <Item original="/assets/adobe2.jpeg" thumbnail="/assets/adobe2.jpeg">
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/assets/adobe2.jpeg" />
            )}
          </Item>
          <Item original="/assets/adobe4.jpeg" thumbnail="/assets/adobe4.jpeg">
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
