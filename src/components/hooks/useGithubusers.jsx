import {useState,useEffect} from "react";
import axios from "axios";
import useDebounce from "./useDebounce";

const useGithubusers=(searchTerm)=>{
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const debouncedQuery = useDebounce(searchTerm,400);
    useEffect(()=>{
        const fetchUsers = async()=>{
            if(!debouncedQuery){
                setUsers([]);
                return;
            }
            setLoading(true);
            setError(null);
            try{
                const response = await axios.get(`https://api.github.com/search/users?q=${debouncedQuery}`,
                    {
                        headers:{
                            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                        }
                    }
                );
                setUsers(response.data.items);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[debouncedQuery])
    return {users,loading,error};
}
export default useGithubusers;