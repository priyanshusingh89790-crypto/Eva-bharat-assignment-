import {useState,useEffect} from "react";
import axios from "axios";
const useUserrepo = (username)=>{
    const [repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const fetchRepos = async()=>{
            if(!username) return;
            setLoading(true);
            try{
                const response = await axios.get(`https://api.github.com/users/${username}/repos`);
                setRepos(response.data);
            }catch(error){
                console.error(error);
            }finally{
                setLoading(false);
            }
        }
        fetchRepos();
    },[username])
    return {repos,loading};
}
export default useUserrepo;