// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const WomanCollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.ladiesFashion;
  return (
    <div className="collectionSection">
      <h2>{title}</h2>
      <div className="bannerBox">
        <img src="assets/LadiesBanner.gif" alt="" />
      </div>

      <div className="menImages">
        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
        <img src={image4} alt={title} />
        <img src={image5} alt={title} />
        <img src={image6} alt={title} />
      </div>
    </div>
  );
};
WomanCollection.propTypes = {
  ladiesFashion: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    image3: PropTypes.string.isRequired,
    image4: PropTypes.string.isRequired,
    image5: PropTypes.string.isRequired,
    image6: PropTypes.string.isRequired,
  }).isRequired,
};

export default WomanCollection;
