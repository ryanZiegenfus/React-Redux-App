import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages } from "../actions";

const Images = ({getImages, image, isFetching}) => {

    // useEffect(() => {
    //     getImages();
    // }, [getImages]);

    if (isFetching) {
        return <h3>Fetching a really cool Image for you!</h3>
    }

    let appliedClass = '';

    if (image) {
        appliedClass = 'imageDiv';
    }

    return (
        <div className="divAndButton">
            <div className={`${appliedClass}`}>
                <img src={image && image.url} alt={image && image.title} className="image"/>
                <p className="imageText">{image && image.description}</p>
            </div>
            <button type="button" onClick={getImages}>Click for Super Cool NASA Image</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, {getImages})(Images);