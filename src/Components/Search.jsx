import React, {useEffect , useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Search() {
  const [page , setPage] = useState(1)
  const [pages , setPages] = useState([])
  const [query , setQuery] = useState("")
  const [results , setResults]= useState([])
  let params = useParams()
  useEffect(() => {
      axios .get(`https://api.themoviedb.org/3/search/company?api_key=66abca2db221b711948f5d3310f1e6e3&query=${params.query}&page=${page}`)
      .then((res) => {
        console.log(res.data);
        let pages = res.data.total_pages;
        let pagesArray = []
        setResults(res.data.results)
        for (let index = 1; index <=pages; index++) {
          pagesArray.push(index)
          setPages(pagesArray)
        }
      })
      .catch((err)=>{
        console.log(err);
      })
  }, [page])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-3">

        </div>
        <div className="col-9">
        {
        (results.length===0)?
        <></>
        :
        <div className='row'>
        {
          results.map((arr, index) =>{
            return(
              <div className="col-12" key={index}>
                <div className="card my-3 shadow search__card">
                  <div className="row">
                    <div className="col-2">
                      {
                        (arr.logo_path===null)?
                        <>
                        <img src="https://offers-api.agregatoreat.ru/api/file/f417e0a5-86b3-4c01-afe0-e256f11c5e16" alt="rasm" width="100%" height="100px"/></>
                        :
                        <>
                        <img src={`https://image.tmdb.org/t/p/w500${arr.logo_path}`} alt="rasm" width="100%" height="100px" />
                        </>
                      }
                    </div>
                    <div className="col-10">
                      <h2>{arr.name}</h2>
                      {
                        (arr.origin_country!=='')?
                        <>
                        <p className='text-muted'>Mamlakati:{arr.origin_country}</p>
                        </>
                        :
                        <><p className='text-muted'>Mamlakati: no'malum</p></>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      }
      {
        pages.map((arr , index)=>{
         return <button key={index} className="btn btn-outline-success m-1" onClick={()=>{setPage(arr)}}>{arr}</button>
        })
      }
        </div>
      </div>
     
    </div>
  )
}

export default Search