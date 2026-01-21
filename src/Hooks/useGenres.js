


const useGenres = ( selectedGenres ) => {

   console.log(  "obj is selected genre : " , selectedGenres );
    if( selectedGenres < 1 ) 
        return '';

    const GenreIds = selectedGenres.map( g => {return g.id} );
    console.log("genre id is " ,  GenreIds );
   
    return GenreIds.reduce((acc, curr)=>{   
        return acc + ','+ curr;
    }) 
}

export default useGenres;


