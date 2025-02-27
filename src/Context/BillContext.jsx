import { createContext, useEffect, useState } from "react";

import axios from 'axios'
import { toast } from "react-toastify";

export const BillContext = createContext()

// context provider function
const BillContextProvider = (props) => {


    const currency = '৳';

    const backendUrl = "http://127.0.0.1:8000"

    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData,setUserData] = useState(false)


    // const loadUserProfileData = async () => {

    //     try {

    //         const {data} = await axios.get(backendUrl+'/api/customer/profile',{headers: {
    //             "Authorization": `Bearer ${token}`,
    //             "Content-Type": "application/json"
    //           }});
    //         //console.log('Response:', data);

    //         if(data.success){

    //             //console.log('UserData:', data.userData);
    //             setUserData(data.userData)
        
    //         } 
    //         else{
    //             toast.error(data.message)
    //         }
            
    //     } catch (error) {
    //         console.log(error)
    //         toast.error(error.message)
    //     }
    // }


    // variable  in Object  (access any components)
    const value = {
        currency,
        token,
        setToken,
        backendUrl,
        userData,setUserData,
        // loadUserProfileData
    }


    // useEffect(()=>{

    //     if(token){

    //         loadUserProfileData()
    //     }
    //     else{
    //         setUserData(false)
    //     }

    // },[token])


    return(
        <BillContext.Provider value={value}>
           {props.children} 
        </BillContext.Provider>
    )

}

export default BillContextProvider
