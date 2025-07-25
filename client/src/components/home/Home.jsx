import { useEffect } from "react";

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";

const Compoenent = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();

    useEffect( () => {
      dispatch(getProducts())
    }, [dispatch] )

    return(
        <>
         <NavBar/>
         <Compoenent>
             <Banner/>
            <MidSlide products={products} title="Deal of Day" timer={true}/>
            <MidSection />
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Trending offers" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
         </Compoenent>    
        </>

    )
}
export default Home;