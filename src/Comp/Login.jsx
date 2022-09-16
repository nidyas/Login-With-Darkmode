import React, { useState } from 'react';
import DarkMode from './DarkMode';
import './Login.css'
function Login() {
    const [user,setUser]=useState({name:"",pw:""})
    const [error,setError]=useState("");

  
    function hasNumber(myString) {
        return /\d/.test(myString);
      }
      
    const submit=(e)=>{
        e.preventDefault();


        const s =e.target.name;

        console.log(user);
        alert(`Welcome  ${ user.name }`);
        setUser({name:"",pw:""})
      
    }

    return (
        <>
      <DarkMode/>
        
    <div class="center">
        <h1>Login</h1>
        <form onSubmit={submit}>

                {(user.name!="")?
                    (<div> 
                        <h2>Welcome,<span>{user.name}</span></h2>
                    </div>):<h3></h3>
                
                }
          
                    
                
                    <div class="txt_field">
                        <input type="text"  onChange={e=>setUser({...user,name:e.target.value})} value={user.name}/>
                            <span></span>
                          <label>Username</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" required onChange={e=>setUser({...user,pw:e.target.value})} value={user.pw}/>
                             <span></span>
                        <label>Password</label>
                        
                    </div>
               
                      {(user.name=="") &&(user.pw =="") ||(user.name!="") &&(user.pw =="") ||(user.name=="") &&(user.pw !="")   ?
                    (<div> 
                        <h5 style={{color:"red"}}>Please Fill the blanks</h5>
                    </div>):<h3></h3>
                
                }   
                            <div class="pass">Forgot Password?</div>
                                <input type="submit" value="Login"/>
                            <div class="signup_link"> Not a member? <a href="#">Signup</a>
                    </div>
        </form>

    </div>
    </>
       
    );
}

export default Login;