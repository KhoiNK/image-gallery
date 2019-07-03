import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import { getTrending } from './api/image';
import ImageCard from './components/imageCard';

import './App.css';
import 'react-image-lightbox/style.css';

const LIMIT_IMAGES = 20;

function App() {
  const [images, setImage] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState({});
  const [isOpen, setModal] = useState(false);

  useEffect(() => {
    const getTrendingData = async () => {
      const { data } = await getTrending(offset);
      setImage(image => [...image, ...data.data]);
    }
    getTrendingData();
  }, [offset]);

  const handleClickSeeMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    setOffset(newPage * LIMIT_IMAGES);
  }

  const handleSelectImage = image => {
    setModal(true);
    setSelectedImage(image);
  }

  return (
    <div className='box'>
      <div className='row' id='gallery-row'>
        {(images && images.length) && images.map((image, index) => <ImageCard selectImageCallback={handleSelectImage} image={image} key={`image${index}`} />)}
      </div>
      <div className='row' id='btn-row'>
        <button onClick={handleClickSeeMore}><strong>SEE MORE</strong></button>
      </div>
      {isOpen && <Lightbox
        mainSrc={selectedImage.preview_webp.url}
        onCloseRequest={() => setModal(false)}
        onMovePrevRequest={() => false}
        onMoveNextRequest={() => false}
        enableZoom={false}
      />}
    </div>
  );
}

export default App;
