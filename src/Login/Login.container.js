import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import "./Login.css";
import Login from "./Login";



const EnhanceLogin = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const formHandler = e => {
        e.preventDefault();
        if(email === "contact@web.fr" && password === "azerty") {
            history.push("./Tab");
        }
        else alert("Identifiants ou mot de passe incorrects");
    };

    
    return (<Login {...props} 
        email ={email} 
        setEmail = {setEmail} 
        password = {password} 
        setPassword = {setPassword}
        formHandler = {formHandler}
        />);
}



export default EnhanceLogin;
