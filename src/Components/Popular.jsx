import Axios from 'axios'
import React , {useEffect , useState} from 'react'

export default function Popular() {
  const api_key = "66abca2db221b711948f5d3310f1e6e3"
  const Base_Url = "https://image.tmdb.org/t/p/w500"

  const [popular , setPopular] = useState([])

    useEffect(()=>{
        Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then((res)=>{
            console.log(res.data.results);
            setPopular(res.data.results)
        })
    }, [])

  return (
    <div className='container'>
    {
        (popular.length===0)?
        <>Kutib turing</>
        :
        <>
        <h1>Popular Kino</h1>
        <div className="row">
            <div className="col-3">
                
            </div>
            <div className="col-9">
                <div className="row">
                    {
                        popular.map((arr, index) =>{
                            return(
                                <div className="col-3" key={index}>
                                    <div className="card">
                                    <img src={`${Base_Url}${arr.poster_path}`} alt="" />
                                    <div className="box text-center"><div className="ball">{arr.vote_average*10} <sup className='fontSize'>%</sup></div></div>
                                    <h6>{arr.original_title}</h6>
                                    <h6 className='py-2 text-muted'>{arr.release_date}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    }    
    </div>
  )
}
