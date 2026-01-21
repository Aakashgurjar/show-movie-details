

import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import CardMoviesComponents from '../../Components/CardMovies';

import PaginationComponent from '../../Components/Pagination';
import SearchBarCardComponents from '../../Components/SearchBox';

import Spinner from '../../Components/Spinner/Spinner';

const  SearchContainer = () => {
    
    const [content, setContent] = useState([]);
    const [pageno, setPageno] = useState(1);

    const [paginationno, setPaginationno] = useState(0);
    const [searchValue, setSearchValue] = useState('All');
    const [typeValue, setTypeValue] = useState('movie');

    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

    
    const GetDataTrending = async () => {
        
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${typeValue}?api_key=${API_KEY}&page=${pageno}&language=en-US &query=${searchValue}&include_adult=false`); // typevalue -> tv or movie se kisse search kr rhe ho ,, 
        // console.log('data', data.results);
        setContent(data.results);
        setPaginationno(data.total_pages);
    }
    useEffect(() => {
        GetDataTrending();
    }, [])

    const fetchDataQuery = ()=> {
        GetDataTrending();
    }
    
    const handleClick = (number)=> {
        console.log("number is " , number );
        setPageno(number);
    }

    useEffect(()=>{

        GetDataTrending();

    }, [pageno]);

    return (
        <main className='homePage'>
            <Container>

                <Row>
                    <Col className='col-12'>

                        <section>
                            <h1 className='txtCenter'>Search Movies /  TV Series</h1>
                            <h3 className='txtCenter'> For You</h3>



                           <SearchBarCardComponents 
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}

                                typeValue={typeValue}
                                setTypeValue={setTypeValue}
                                
                                filterData={fetchDataQuery} 
                            /> 


                        </section>

                    </Col>
                </Row>
                <Row>
                    
                    <Col className='col-12'>
                        <Row>
                                {
                                    content && content.length > 0 ? content.map((item, index)=>{
                                        return (<CardMoviesComponents key={index} data={item} mediaType={typeValue}/>)
                                    }) : 
                                    <Spinner />
                                    // 'Loading ....'
                                }

                            {
                                paginationno && paginationno > 1 ?
                                 <PaginationComponent 
                                maxnum={paginationno} 
                                activenum={pageno}
                                handleClick={handleClick}/> : ''
                            }
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        </main>
    )
}

export default SearchContainer;