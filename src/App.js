import React, { useState, useEffect } from 'react';

import { getTrending } from './api/image';
import ImageCard from './components/imageCard';

import './App.css';

const LIMIT_IMAGES = 20;

function App() {
  const [images, setImage] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);

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
    console.log('offset', offset);
  }

  return (
    <div className='box'>
      <div className='row' id='gallery-row'>
        {(images && images.length) && images.map((image, index) => <ImageCard image={image} key={`image${index}`} />)}
      </div>
      <div className='row' id='btn-row'>
        <button onClick={handleClickSeeMore}><strong>SEE MORE</strong></button>
      </div>
    </div>
  );
}

export default App;
