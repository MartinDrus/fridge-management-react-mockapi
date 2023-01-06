import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(){

    const API_BASE_URL = `https://63b5c3391907f863aae3b95a.mockapi.io/`;

    const [fridge, setFridge] = useState(null);
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fridgeEndpoint = `fridgeproducts/`;
    const cartEndpoint = `cart`;

    const response = {
        data: {
            fridge: fridge,
            cart: cart
        },
        loading:loading,
        error:error
    }

    useEffect(() => {
        setLoading(true);

        axios
            .get(API_BASE_URL + fridgeEndpoint)
            .then((response) => {
                setFridge(response.data)
            })
            .catch((err) => {
                setError(err);
            })
        axios            
            .get(API_BASE_URL + cartEndpoint)
            .then((response) => {
                setCart(response.data)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false)
            })
            
    },[]);

    // function getData(endpoint, id) {
    //     setLoading(true);

    //     axios            
    //     .get(API_BASE_URL + endpoint +"/"+ id)
    //     .then((response) => {
    //         setCart(response.data)
    //     })
    //     .catch((err) => {
    //         setError(err);
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })
    // }

    function createData(endpoint, newProduct) {
        setLoading(true);
        let url = API_BASE_URL+endpoint;
       
        axios
            .post(url, newProduct)
            .then((response) => {
                if (response.status >= 200 && response.status <= 300) {
                    console.log("Successfully added a product");
                }                
            })
            .catch((err) => {
                console.log("🚀 ~ file: useFetch.jsx:54 ~ postData ~ err", err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function updateData(endpoint, data, id){
        setLoading(true);
        let url = API_BASE_URL+endpoint+"/"+id;
       
        axios
            .put(url, data)
            .then((response) => {
                if (response.status >= 200 && response.status <= 300) {
                    console.log("Successfully added a product");
                }                
            })
            .catch((err) => {
                console.log("🚀 ~ file: useFetch.jsx:54 ~ postData ~ err", err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function deleteData(endpoint, id){
        setLoading(true);
        let url = API_BASE_URL+endpoint+"/"+id;
       
        axios
            .delete(url)
            .then((response) => {
                if (response.status >= 200 && response.status <= 300) {
                    console.log("Successfully added a product");
                }                
            })
            .catch((err) => {
                console.log("🚀 ~ file: useFetch.jsx:54 ~ postData ~ err", err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return{ response, createData, updateData, deleteData}
}

export default useFetch;