import React from 'react';
import './App.css';

const ImageCard = () => (
  <div className="gallery-col__div col-md-3 col-sm-4 col-xs-6">
    <div className='gallery-col-content__div'>
      <div className="gallery-content__div">
        <img src='./img/aaa.jpg' alt='alt img' />
      </div>
      <div className="box">
        <div className='row gallery-btn-row__div'>
          <div className='col-xs-3 gallery-btn__div'>
            <i className="fa fa-link" aria-hidden="true"></i>
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
          <img src='./img/nina.png' alt='nina'/>
          <label>Ahihi</label>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className='box'>
      <div className='row' id='gallery-row'>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
}

export default App;
