import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { mediaContext } from "../../Context/MediaStore";

export default function Pepole() {
  let { trendingPersons } = useContext(mediaContext);

  return (
    <>
      <div className='row my-3 py-5 '>
        <div className='col-md-4'>
          <div className='my-3 py-3'>
            <div className='brdr w-25 mb-4'></div>
            <h4>Trending</h4>
            <h4>People</h4>
            <h4>To watch now</h4>
            <span className='text-muted'>most watched people by day </span>

            <div className='brdr w-100 mt-4'></div>
          </div>
        </div>
        {trendingPersons.map((item, index) => (
          <div key={index} className='col-md-2 '>
            <Link
              className='nav-link'
              to={`/details/${item.id}/${item.media_type}`}
            >
              <div className='item text-center my-3 text-info position-relative '>
                <img
                  className='w-100'
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  alt=''
                />
                <h6>{item.name}</h6>
                {/* <span className='position-absolute top-0 end-0 bg-secondary p-2 text-white'>
                {item.vote_average.toFixed(1)}
              </span> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
