import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardMoviesComponents from '../../Components/CardMovies';
import PaginationComponent from '../../Components/Pagination';
import { useParams } from 'react-router-dom';

import './style.css'
import Alpha from '../../Components/Alpha/Alpha';
import Spinner from '../../Components/Spinner/Spinner';

const  HomeContainer = (  ) => {


    const [content, setContent] = useState([]); 
    const [pageno, setPageno] = useState(1);
    const [paginationno, setPaginationno] = useState(0);   
    // const { type } = useParams();

    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;   


    const GetDataTrending = async () => {

        const  {data}  = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
        setContent(data.results);
        setPaginationno(data.total_pages); 

    }

    useEffect(()=>{
        GetDataTrending();
    }, [])

    const handleClick = (number) => {
        console.log("number is " , number );
        setPageno(number);
    }

    useEffect(()=>{
        GetDataTrending();
    }, [pageno])    



    return (


        <div>
            <Alpha currentpage={pageno} />

        <main className='homePage'>

            <Container>
                <Row>
                    <Col className='col-12'>
                        <section>
                            <h1 className='txtCenter'>Welcome.</h1>
                            <h3 className='txtCenter'>Millions of movies, TV shows and people to discover. Explore now. </h3>
                        </section>
                    </Col>
                    
                    {
                        content && content.length > 0 ? content.map((item, index) => {
                            return (<CardMoviesComponents key={index} data={item} /> ) 
                        }) : 
                        <Spinner />
                    }


                {
                    paginationno && paginationno > 1 ? 
                    <PaginationComponent 
                    maxnum={paginationno} 
                    activenum={pageno} 
                    handleClick={handleClick}/> : ''
                }

                </Row>
            </Container>
            
        </main>

         </div>
    )
}
export default HomeContainer;

