import React from 'react'
import './Alpha.css'
import { useState , useEffect  } from 'react';
import { Link } from 'react-router-dom';

import { FaStar } from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import { img_300 , img_not_available } from '../../Config';
import logo from '../../Assets/images/no-poster.png'




const Alpha = ( props  )  => {

    let showcurrentpage = props;
    
  
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;   
  // console.log( "API key is :" , API_KEY );


  const [ popularMovies , setpopularMovies ] = useState([]);

  useEffect( ()=> {


    try{
         fetch( `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${showcurrentpage.currentpage}` )
        .then( res => res.json() )
        .then( data => setpopularMovies( data.results ))
        .then( data => console.log("inside data is : " , data.results ))
      }
    catch(error){
         console.error("generated error")
     }

  },[ showcurrentpage.currentpage ] )


  return (
    
    <div className='A-container ' >

          <Carousel 
            showThumbs={false}
            autoPlay={true}
            transitionTime={1}
            infiniteLoop={true}
            showStatus={false}
            

            >      
            
                {
                popularMovies.map( movie =>   (
                <Link style={{textDecoration:"none" , color:"white" }} to={`/movie/${movie.id}`} >

                    <div className='posterImage'> 
                    
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} />
                   
                    </div>

                    <div className='posterImage__overlay'>
                      
                      <div className='posterImage_title text-2xl '> {movie ? movie.original_title :"" } </div>
                       

                        <div className='posterImage__runtime' >

                         { movie ? movie.release_date : " "  }

                            <span  className='posterImage__rating flex flex-row  gap-2 ' >
                                  { movie ? movie.vote_average :" " } 
                                  <FaStar className='fa-star mt-2'/>
                            </span>
                            
                        </div>

                        <div className='posterImage__description'> {movie ? movie.overview :""} </div>
                        <span>Page no :- {showcurrentpage.currentpage} </span>

                      </div>
                     
                  
                     </Link>               
                ))
              }
        </Carousel>

    </div>
  )
} 
export default Alpha














// import React, { useEffect, useState } from 'react'
// import "./Home.css"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom';
// import MovieList from '../../components/movielist/MovieList';
// // use this package -> npm i react-responsive-carousel

// const Home = () => {

//   const [ popularMovies , setpopularMovies ] = useState([]);

//     useEffect( () => {
      
      
//         fetch( "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
//         .then( res => res.json() )
//         .then( data => setpopularMovies( data.results ))
//         .then( data => console.log(  "sucess" ));

        
      
//     } , [])

//   return (

//       <div> 
//         <div className='poster'>

//             This is Carousel data
          
//             <Carousel 
//             showThumbs={false}
//             autoPlay={true}
//             transitionTime={3}
//             infiniteLoop={true}
//             showStatus={false}
//             >

//               {
//                 popularMovies.map( movie =>   (
//                   <Link style={{textDecoration:"none" , color:"white" }} to={`/movie/${movie.id}`} >

//                     <div className='posterImage'> 
//                         <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} />
//                     </div>

//                     <div className='posterImage__overlay'>
//                       <div className='posterImage_title'> {movie ? movie.original_title :"" } </div>
                       

//                         <div className='posterImage__runtime' >
//                            { movie ? movie.release_date : ""  }
//                             <span  className='posterImage__rating' >
//                                   { movie ? movie.vote_average :" " } 

//                                   <i className='fas fa-star' /> {" "}
//                             </span>
                            
//                         </div>

//                         <div className='posterImage__description'> {movie ? movie.overview :""} </div>
//                       </div>
                  
//                   </Link>
                

//                 ))
//               }

//             </Carousel>
//             show all data 
//             <MovieList/>

//         </div>
//         </div> 

//          )
// }

// export default Home