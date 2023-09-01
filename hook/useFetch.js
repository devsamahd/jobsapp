import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
      fetchData()
    },[])

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': '977c02944amsh1f7e9a998a71dcfp104073jsn8c7906a0feef',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      
      const fetchData = async() => {
        setIsLoading(true)
        try{
            const response = await axios.request(options);
            setData(response.data.data)
        }catch(e){
            setError(e)
            alert("There is an error")
        }finally{
            setIsLoading(false)
        }
      }

      const refetch = () => {
        setIsLoading(true)
        fetchData()
      }

      return {data, isLoading, error, refetch}
}

export default useFetch