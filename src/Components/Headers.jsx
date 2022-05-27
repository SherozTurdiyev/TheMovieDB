import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
export default function Headers() {
  const [ontv, setOnTv] = useState([]);
  const [active, setActive] = useState("active");
  const [btnTeatr, setBtnTeatr] = useState("");
  const [searchValue, setSearchValue] = useState("")


  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1"
      )
      .then((res) => {
        setOnTv(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function inTheatr() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data.results);
        setOnTv(res.data.results);
        setBtnTeatr("active");
        setActive("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onTv() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1"
      )
      .then((res) => {
        setOnTv(res.data.results);
        setBtnTeatr("");
        setActive("active");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSearchInp(val) {
    console.log(val.target.value);
    setSearchValue(val.target.value)
  }

  

  return (
    <div className="container">
      <div className="banner">
        <div className="search">
          <h1 className="text-start txt">
            Welcome. Millions of movies, TV shows and people to discover.
            Explore now.
          </h1>
          <div className="search_input d-flex flex-row  justify-content-center">
            <input
              type="text"
              placeholder="Search for a movie , TV show, person..."
              className="form-control inp"
              onChange={(e) => {
                getSearchInp(e);
              }}
            />
          <Link to={`/search/${searchValue}`} ><button>Qididrish</button></Link>  
          </div>
        </div>
      </div>
      <div className="popular">
        <div className="btn d-flex flex-row align-items-center ">
          <h1 className="pe-3">What's popular</h1>
          <div className="btns">
            <button
              className={`btn ${active}`}
              onClick={() => {
                onTv();
              }}
            >
              On Tv
            </button>
            <button
              className={`btn ${btnTeatr}`}
              onClick={() => {
                inTheatr();
              }}
            >
              In Theaters
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {ontv.length === 0 ? (
          <>Kutib Turing</>
        ) : (
          <>
            {ontv.map((vl, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${vl.poster_path}`}
                      alt="Banner"
                    />
                    <p>{vl.original_name}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
