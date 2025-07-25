
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size:14px;
    vartical-align: baseline; 
    & p {
        font-size:14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right : 10px;
    color: #00CC00;
    font-size:15px
`;

const ColumnText = styled(TableRow)`
    font-size:14px;
    vartical-align: baseline;  
    & > p {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({ product }) => {
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    return(
       <>
       <Typography>{product.title.longTitle }</Typography>
                            <Typography style={{marginTop: 5,color:'#878787',fontSize:14}}>
                                8 Rating & 1 Reviews
                                <Box compoenent = "sapn"><img src={fassured} style={{ width:77, marginLeft:20 }} /></Box>
                            </Typography>
                            <Typography>
                                <Box component="span" style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{ color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{ color: '#388E3C'}}>{product.price.discount} off</Box>
         </Typography>
         <Typography>Available offers</Typography>
         <SmallText>
            <Typography><StyledBadge />Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C</Typography>
            <Typography><StyledBadge />Flat ₹600 Off on Times Prime Power Pack On ITaccessory and StorageT&C</Typography>
            <Typography><StyledBadge />Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More</Typography>
            <Typography><StyledBadge />Flat ₹1,250 off on ICICI Bank Debit Card EMI Transactions, on orders of ₹30,000 and aboveT&C</Typography>
            <Typography><StyledBadge />5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            <Typography><StyledBadge />Get No Cost EMI on IT and Gaming AccessoriesT&C</Typography>
         </SmallText>
         <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                    <TableCell style={{ fontWeight:600 }}>Delivery by {date.toDateString()}| ₹40</TableCell>
                </ColumnText>
               <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                    <TableCell>
                        <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View More Sellers Starting From ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} style={{width:390}} alt="flipkartpoints" />
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                    <TableCell>Flipkart Plus. A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero ...{product.description}</TableCell>
                </ColumnText>
            </TableBody>
         </Table>   
       </>
    )
}
export default ProductDetail;