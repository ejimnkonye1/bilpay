import { useEffect, useState } from "react"
import axios from 'axios';
export const Api = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)


    
  const getData = async () => {
            setLoading(true)
            setError(null)
            try{
            const response = await axios.get('YOUR_API_ENDPOINT_HERE')
            setData(JSON.stringify(response.data))
            }catch(error){
             console.log(error)
             setError(error)
             
            } finally{
                setLoading(false)
            }
   
        }
        useEffect(() => {
            getData()
    }, [])

    return(
        <div>
            {loading && <p>Loading ..</p>}
            {error &&<p>{error.message}</p>}
            {data && data.map((item, index) =>(
                <li key={index}>{item}</li>
            )

            )
           
            }
 <div onClick={getData}>
            FetchData
          </div>
        </div>
    )
}