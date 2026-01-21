import React, {useEffect} from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';

import axios from 'axios';
import { BsFillXCircleFill } from "react-icons/bs";

import Spinner from '../Spinner/Spinner';


const LeftListBarComponent = ({

        selectedGenres,
        setSelectedGenres,

        genres,
        setGenres,

        type,
        setPage
      }
    )  =>  {
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

    const GetDataList = async () => {
        const {data:{genres}} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
        // console.log('setgenres ' , `${type}` ,  genres);
        setGenres(genres);
    
    }

    useEffect(()=>{    
        GetDataList();
        return () => {
            setGenres({}); 
        }
    }, [])

    const handleAdd = (genre) => { 
        setSelectedGenres([...selectedGenres, genre]);

        // console.log('adding  genre', genre );
        setGenres(genres.filter((g)=>{ return g.id !== genre.id}));
        
    } 
  

    const handleRemove = (genre) => {

        setSelectedGenres( selectedGenres.filter( (g)=> { 
                return g.id !== genre.id
            }) 
        )
        // console.log('removing oldSelectedGenres', genres );
      setGenres([...genres,genre]); 
    }


    return (

        <aside className='asideBar'>
            <h3>Filter By :- </h3>
            <ListGroup>
                {
                    selectedGenres && selectedGenres.map((item)=>
                            (
                            <button onClick={() => handleRemove(item)} key={`${item.id}newtag`}
                              className='border-2 border-red-400 gap-5 p-1 m-1 rounded bg-red-500 text-white' >
                              {item.name}
                            </button>
                            )
                        
                  
                  )
                }




                       {
                        genres && genres.length > 0 ? genres.map((item)=>
                        
                            (
                                <button key={item.id} onClick={() => handleAdd(item)}
                                  className='border-2 border-green-400 gap-5 p-1 m-1 rounded bg-green-500 text-white' >
                                  {item.name}
                                </button>
                            )

                    
              
                      ) : 
                    <Spinner/>
                }
            </ListGroup>
        </aside>
    )
}

export default LeftListBarComponent;











