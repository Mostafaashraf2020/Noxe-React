import { createContext,useEffect,useState } from "react";
import axios from "axios";

export let mediaContext = createContext(null);

export default function MediaContextProvider(props) {
  const [moviesItems, setMoviesItems] = useState([]);
  const [trendingTvs, setTrendingTvs] = useState([]);
  const [trendingPersons, setTrendingPersons] = useState([]);
  let getTrendingItems = async (mediaType, callback) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=838fc1c5548343d8e6c6a675db1b4109`
    );
    callback(data.results);
  };
  useEffect(() => {
    getTrendingItems("movie", setMoviesItems);
    getTrendingItems("tv", setTrendingTvs);
    getTrendingItems("person", setTrendingPersons);
  }, []);

  return (
    <mediaContext.Provider
      value={{ moviesItems, trendingTvs, trendingPersons }}
    >
      {props.children}
    </mediaContext.Provider>
  );
}
