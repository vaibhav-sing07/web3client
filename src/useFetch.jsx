import { useEffect,useState } from "react";
const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch=({keyword})=>{

    const[gifUrl,setgifUrl]=useState('')
const fetchGifs=async ()=>{
try{

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword}&limit=1`);

    const { data } = await response.json();

      setgifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setgifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }



}

useEffect(()=>{
if(keyword)
fetchGifs();



},[keyword])

return gifUrl
}


export default useFetch
