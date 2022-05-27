import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {

  const movie = [
    {
      name:"Top Popular",
      base: "popular"
    } , 
    {
      name:"Now playing",
      base:"now_playing"
    } , 
    {
      name:"Upcoming",
      base:"upcoming"
    } 
  ]



  return (
    <>
    <nav>
      <div className="container text-light d-flex flex-row justify-content-between align-items-center">
        <div className="left w-50 d-flex flex-row justify-content-between align-items-center">
          <div className="mylogov d-flex flex-row justify-content-between align-items-center ">
           <Link to="/"> <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
              width="150px"
            />
            </Link>
            <ul className="list d-flex flex-row justify-content-between align-items-center">
              <li>
                <p>Movies</p>
                <ul className="dropdown__box">
                {
                  movie.map((arr , index)=>{
                    return(
                    <Link to={`/${arr.base}`} key={index}><li>{arr.name}</li></Link>
                    )
                  })
                }
                </ul>
              </li>
              <li><p> TV Shows</p>
              <ul className="dropdown__box">
                  <li>Popular</li>
                  <li>Airing Today</li>
                  <li>ON TV</li>
                  <li>Top Rated</li>
                </ul>
              </li>
              <li><p> People</p>
              <ul className="dropdown__box">
                  <li>Popular people</li>
                </ul></li>
              <li><p>More</p>
                <ul className="dropdown__box">
                  <li>Discussion</li>
                  <li>Leaderboard</li>
                  <li>Support</li>
                  <li>API</li>
                </ul></li>
            </ul>
          </div>
        </div>
        <div className="right w-30">
          <ul className="d-flex flex-row justify-content-between align-items-center">
            <li>Plus</li>
            <li>
              <button>Ru</button>
            </li>
            <li>Login</li>
            <li>Join TDMB</li>
            <li>search</li>
          </ul>
        </div>
      </div>
    </nav>
              <div className="container">
                
              </div>
              </>
  );
}
