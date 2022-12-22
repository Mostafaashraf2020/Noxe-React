// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [trendingItems, setTrendingItems] = useState([]);
//   let getTrendingItem = async () => {
//     let { data } = await axios.get(
//       "https://api.themoviedb.org/3/trending/all/day?api_key=838fc1c5548343d8e6c6a675db1b4109"
//     );
//     console.log(data.results);
//     setTrendingItems(data.results);
//   };
//   useEffect(() => {
//     getTrendingItem();
//   }, []);

//   return (
//     <>
//       <div className='row my-3 py-5 '>
//         <div className='col-md-4'>
//           <div className='my-3 py-3'>
//             <div className='brdr w-25 mb-4'></div>
//             <h4>Trending</h4>
//             <h4>all</h4>
//             <h4>To watch now</h4>
//             <span className='text-muted'>most watched all by day </span>

//             <div className='brdr w-100 mt-4'></div>
//           </div>
//         </div>
//         {trendingItems.map((item, index) => (
//           <div key={index} className='col-md-2 '>
//             <Link
//               className='nav-link'
//               to={`/details/${item.id}/${item.media_type}`}
//             >
//               <div className='item text-center my-3 text-info position-relative '>
//                 <img
//                   className='w-100'
//                   src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//                   alt=''
//                 />
//                 <h6>
//                   {item.title}
//                   {item.name}
//                 </h6>
//                 <span className='position-absolute top-0 end-0 bg-secondary p-2 text-white'>
//                   {item.vote_average.toFixed(1)}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React from "react";
import Pepole from "../Pepole/Pepole";
import Tvshows from "../Tvshows/Tvshows";
import Movies from "../Movies/Movies";

export default function Home() {
  return (
    <>
      <Movies />
      <Tvshows />
      <Pepole />
    </>
  );
}
