import { useEffect,useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";


const App = () => {

  const [ userData, setUserData ] = useState([])
  const getUserData = async() => {
   const response =  await axios.get('https://jsonplaceholder.typicode.com/users');
    
   setUserData(response?.data)
  }


    useEffect(() => {
      getUserData()
    }, [])


  return <UserList userData={userData}/>;
}
export default App;