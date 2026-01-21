
import React from 'react';
import './style.css';


const SearchBarCardComponents = ({searchValue, setSearchValue, typeValue, setTypeValue, filterData})=>{
    
    const changeSearchHandle = (e) => {
        setSearchValue(e.target.value);
    }

    const chagneValueHandler = (e) => {
        console.log(e.target.value);
        setTypeValue(e.target.value);
    }
    const handleSubmit = (e) => {
       
        e.preventDefault();
        filterData();
    }

    return (
        
        <>
            <div className='searchBox'>
                <div className="container">
                    <h6>Type movie or tv show name to find it</h6>
                    
                    <div className='checkBoxSec'>
                    
                        <label htmlFor="tvFind" className='label_1'>
                            <input type="radio" value="tv" onChange={chagneValueHandler} checked={typeValue === 'tv' ? true : false} name="findSeriesType" id="tvFind" />
                            <span>Tv </span>
                        </label>
                        
                        <label htmlFor="seriesFind" className='label_2'>
                            <input type="radio" value="movie" onChange={chagneValueHandler} checked={typeValue === 'movie' ? true : false} name="findSeriesType" id="seriesFind" />
                            <span>Movies </span>
                        </label>
                        
                    </div>


                    <form   onSubmit={handleSubmit} >
                        
                        <input 
                        type="search"
                        value={searchValue} 
                        onChange={changeSearchHandle} 
                        placeholder="Search for a movie or tv show...." />

                        <button onClick= {handleSubmit} className='border-2 bg-pink-400 rounded-2xl p-2 m-2'> search </button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default SearchBarCardComponents;






