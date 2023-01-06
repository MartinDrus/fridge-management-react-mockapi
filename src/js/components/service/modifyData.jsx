import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from './components/service/useFetch'


function modifyData(){


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    option = {
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }
    }




    return{ data, loading, error }
}

export default modifyData;