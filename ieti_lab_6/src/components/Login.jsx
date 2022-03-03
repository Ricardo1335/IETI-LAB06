import React from "react";

const Login = () => {
    return(
        <div className="login">
            <h2 className="login-header">Log in</h2>
            <form className="login-container">
                <p><input id="email" type="email" placeholder="Email" /></p>
                <p><input id="password" type="password" placeholder="Password" /></p>
                <p><input type="submit" value="Log in"  /></p>
            </form>
        </div>
    )
}


export default Login