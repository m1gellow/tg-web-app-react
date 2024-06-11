import { useState } from "react";
import './Selection.scss'
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import axios from "axios";


const Selection = () => {
   const [userData, setUserData] = useState({
    name: '',
    email: '',
    level: ''
   })



   const handleSendData = async() => {
        try{
           const response = await axios.post('http://localhost:5000/api/login', {
                name: userData.name,
                email: userData.email,
                level: userData.level
            })
            console.log(response)
        }catch(err){
            console.log(err)
        }
   }


   const handleChange = (e) => {
    const {name, value} = e.target;

    setUserData({
        ...userData,
        [name]: value
    })
   }




  return (
    <div className="selection">
        <h1 className="selection_login">Login</h1>
        <div className="form">
            <input type="text" className="input" placeholder="name"  value={userData.name} name="name"  onChange={(e) => handleChange(e)}/>
            <input type="text" className="input" placeholder="email" value={userData.email} name="email"   onChange={(e) => handleChange(e)}/>
            <select name="level" id="" className="select" onChange={(e) => handleChange(e)}>
                <option value="begginer">Begginer</option>
                <option value="middle">Middle</option>
                <option value="pro">Pro</option>
            </select>
        </div>
        <MainButton onClick={handleSendData} textColor='#fff' text='Go to Selection'></MainButton>
    </div>
  )
}

export default Selection