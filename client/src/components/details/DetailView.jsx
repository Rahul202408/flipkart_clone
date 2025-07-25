import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";

import { Box,Grid,styled} from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";

const Compoenent = styled(Box)`
    baclground: #F2F2F2;
    margintop: 55px;
`;

const Container = styled(Grid)(({ theme}) => ({
    background: '#FFFFFF',
    display: 'flax', 
    [ theme.breakpoints.down('md')]:{
        margin: 0
    }
}));

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 25px;
    & > p {
        margin-top: 10px;
    }
`;


const DetailView = () => {
    

    const dispatch = useDispatch();
    const { id } = useParams();
    
    const { loading,product}  = useSelector((state) => state.getProductDetails);
    
    useEffect(() => {
         if(product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id ,product,loading])

    console.log(product);

    return(
        <Compoenent>
            {
                product && Object.keys(product).length && 
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItems product={product}/>
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            <ProductDetail product={product} />
                        </RightContainer>
                    </Container>
            }
        </Compoenent>  
    )
} 
export default DetailView;