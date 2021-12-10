import { useState } from 'react';

function Login () {

    const [ formData, setFormData ] = useState({username: "", password: ""})

    function handleChange (event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3001/logins", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        setFormData("")


      }


    return(
        <div className="page" id="login-wrapper">
            <h2 id="login-header">Create an Account or Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    className="user-input" 
                    type="text"
                    id="username"
                    placeholder="username..."
                    value={formData.username}
                    onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>
                    <input
                    className="user-input" 
                    type="text"
                    id="password"
                    placeholder="password..."
                    value={formData.password}
                    onChange={handleChange}
                    />
                </label>
                <p>Forgot your password?</p>
                <br></br>
                <br></br>
                <div>
                    <button id="submit-button" type="submit">Submit</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </form>
        </div>
    )
}

export default Login;