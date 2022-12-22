import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
//  اقدر اخد params من الموقع و استخدامه
import { useParams } from "react-router-dom";

export default function Details() {
  const [itemDetails, setItemDetails] = useState({});
  let params = useParams();

  let getItemDetails = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${params.media}/${params.id}?api_key=838fc1c5548343d8e6c6a675db1b4109&language=en-US`
      // https://api.themoviedb.org/3/movie/76600?api_key=838fc1c5548343d8e6c6a675db1b4109&language=en-US
    );
    setItemDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getItemDetails();
  }, []);

  return (
    <div className='row py-4'>
      <div className='col-md-3 '>
        {params.media == "person" ? (
          <img
            className='w-100'
            src={`https://image.tmdb.org/t/p/original${itemDetails.profile_path}`}
            alt=''
          ></img>
        ) : (
          <img
            className='w-100'
            src={`https://image.tmdb.org/t/p/original${itemDetails.poster_path}`}
            alt=''
          ></img>
        )}
      </div>
      <div className='col-md-9'>
        {params.media == "person" ? (
          <>
            <h2>{itemDetails.name}</h2>
            <p className='text-muted'>
              <span className='me-1 '>known for department</span>
              {itemDetails.known_for_department}
            </p>
            <p className='text-muted'>{itemDetails.place_of_birth}</p>
            <p className='text-muted'>{itemDetails.birthday}</p>
            <p className='text-muted my-3'> {itemDetails.biography}</p>
          </>
        ) : (
          <>
            <h2>
              <h2>{itemDetails.name}</h2>
              {itemDetails.original_title}
              {itemDetails.title}
            </h2>
            <p className='text-muted'>{itemDetails.tagline}</p>
            {itemDetails.genres?.map((genre, index) => (
              <span key={index} className='btn btn-info mx-2 my-3'>
                {genre.name}
              </span>
            ))}
            <p className='text-muted my-3'>Vote: {itemDetails.vote_average}</p>
            <p className='text-muted my-3'>
              Vote Count: {itemDetails.vote_count}
            </p>
            <p className='text-muted my-3'>
              Release Data: {itemDetails.release_date}
            </p>
            <p className='text-muted my-3'> {itemDetails.overview}</p>
          </>
        )}
      </div>
    </div>
  );
}
