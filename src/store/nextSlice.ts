import { createSlice } from "@reduxjs/toolkit"; 
import { StateProps } from "../../type";

interface ProductState {
    productData : StateProps[],
    wishlistData: StateProps[],
    allProducts: StateProps[],
    userInfo: null | string,
}

const initialState: ProductState = {
    productData: [],
    wishlistData: [],
    allProducts: [],
    userInfo: null
}

export const nextSlice = createSlice({
    name: "next",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            //state.productData = action.payload;
            const existingProduct = state.productData.find((item : StateProps) => item._id === action.payload._id );
            if(existingProduct){
                console.log(existingProduct)
                existingProduct.quantity += action.payload.quantity;
            }
            else{
                state.productData.push(action.payload);
            }
        },
        addToFavourite: (state, action) => {
            const existingWishlistProduct = state.wishlistData.find((item: StateProps) => item._id === action.payload._id);
            if(existingWishlistProduct){
                existingWishlistProduct.quantity += action.payload.quantity;
            }
            else{
                state.wishlistData.push(action.payload);
            }
        },
        increaseQty: (state, action) => {
            const existingProduct = state.productData.find((item : StateProps) => item._id === action.payload._id );
            existingProduct && existingProduct.quantity++;
        },
        decreaseQty: (state, action) => {
            const existingProduct = state.productData.find((item : StateProps) => item._id === action.payload._id );
            if(existingProduct?.quantity === 1){
                existingProduct.quantity = 1
            }
            else{
                existingProduct!.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter((item : StateProps) => {
                item._id !== action.payload._id
            });
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addUser : (state, action) => {
            state.userInfo = action.payload
        },
        deleteUser : (state) => {
            state.userInfo = null
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        }
    },
});

export const { addToCart, addToFavourite, increaseQty, decreaseQty, deleteProduct, resetCart, addUser, deleteUser, setAllProducts } = nextSlice.actions;
export default nextSlice.reducer;