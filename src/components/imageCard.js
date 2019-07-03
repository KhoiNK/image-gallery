import React from 'react';
const ImageCard = ({ image, selectImageCallback }) => {
    const handleSelectImage = image => selectImageCallback(image);
    return <div className="gallery-col__div col-md-3 col-sm-4 col-xs-6">
        <div className='gallery-col-content__div'>
            <div className="gallery-content__div" onClick={() => handleSelectImage(image.images)}>
                <img src={image.images.preview_webp.url} alt='alt img' />
            </div>
            <div className="box">
                <div className='row gallery-btn-row__div'>
                    <div className='col-xs-3 gallery-btn__div'>
                        <a href={image.images.original.url}>
                            <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className='col-xs-3 gallery-btn__div'>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <span>1.0323</span>
                    </div>
                    <div className='col-xs-3 gallery-btn__div'>
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        <span>1.0323</span>
                    </div>
                    <div className='col-xs-3 gallery-btn__div'>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <span>1.0323</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='box gallery-user__div'>
            <div className='row'>
                <div className='col-xs-12 gallery-user-content__div'>
                    <img src={image.user ? image.user.avatar_url : './img/nina.png'} alt='nina' />
                    <a href={image.user ? image.user.profile_url : '/'}>
                        <label>{image.username}</label>
                    </a>
                </div>
            </div>
        </div>
    </div>;
};

export default ImageCard;