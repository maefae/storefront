import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from '@mui/material';
import { addItem, getProducts } from '../../store/actions';
import { useEffect } from "react";

const Products = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state)
    const { activeCategory } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        {activeCategory && products.map((product, index) => (
            <Card data-testid={`product-${index}`}key={`product-${index}`} 
            variant="outlined">
                {product.name}
                <Button variant="text" onClick={() => dispatch(addItem(product))}>
                    Add Item</Button>
                </Card>
            ))}
        </>
    )
};

export default Products;