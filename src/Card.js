import React, { Component } from 'react';
import Modal from './modal';
import './Card.css';

function Card ({key, movieDetails, func}) {

    return (
      <div className="tc bg- dib br3 pa3 ma2 grow bw2 shadow-5 card">
        <img alt="movies" src={`${movieDetails.poster}`} />
        <div>
          <h2>{movieDetails.name}</h2>
          <p>{movieDetails.lang}</p>
          <Modal func={func} movieDetails={movieDetails} />
        </div>
      </div>
    );
}

export default Card;
