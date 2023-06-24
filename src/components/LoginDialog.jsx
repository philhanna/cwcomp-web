import React, { useState, createContext, useContext } from "react"

const UserContext = createContext()

// LoginDialog is the top-level element, the whole modal dialog
const LoginDialog = () => {
    return (
        <div className="w3-display-topmiddle" style={{ paddingTop: '50px' }}>
            <LoginForm />
        </div>
    )
}

// LoginForm creates the UI components for the login form and validates
// the username/password through an AJAX call.
const LoginForm = () => {
    const [formValues, setFormValues] = useState({});

    // handleInputChange stores the form values in the state object   
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // handleSubmit gets the form data and makes an AJAX call to the server
    // to validate the username and password
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create the POST data content
        const formData = new URLSearchParams();
        formData.append('username', formValues.username);
        formData.append('password', formValues.password);
        const postData = formData.toString();
        const host = "localhost"
        const port = 5053
        const postURL = `http://${host}:${port}/login`
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Credentials': "include",
            },
            body: JSON.stringify({ username: formValues.username, password: formValues.password })
        })
            .then(response => response.json())
            .then(data => console.log(data)) // TODO handle this for real
            .catch(error => console.error(error));
    };

    return (
        <UserContext.Provider value={handleInputChange}>
            <form className="w3-margin-left w3-margin-right w3-border" onSubmit={handleSubmit}>
                <div className="w3-blue-gray w3-center">
                    <h3 className="w3-center w3-blue-gray" style={{ marginTop: 0 }}>Login</h3>
                </div>
                <div className="w3-container">
                    <LoginUsername />
                    <LoginPassword />
                    <div className="w3-container w3-bar-block w3-center w3-padding-16">
                        <button type="submit" className="w3-button w3-round-large w3-gray w3-block">
                            Login
                        </button>
                    </div>
                    <div className="w3-container w3-center w3-margin-bottom">
                        <span>Don't have an account? </span>
                        <a href="/register">Register</a>
                    </div>
                </div>

            </form>
        </UserContext.Provider>
    )
}

const LoginUsername = () => {
    const onInputChange = useContext(UserContext);

    return (
        <div className="w3-bar-block">
            <label className="w3-bar-item" htmlFor="username">
                <b>Username:</b>
            </label>
            <input className="w3-bar-item w3-border w3-margin-left w3-margin-right"
                autoFocus
                type="text"
                placeholder="Enter username"
                name="username"
                required
                onChange={onInputChange}
                style={{ width: '300px' }}>
            </input>
        </div>
    )
}

const LoginPassword = () => {
    const onInputChange = useContext(UserContext);

    return (
        <div className="w3-bar-block">
            <label className="w3-bar-item" htmlFor="password">
                <b>Password:</b>
            </label>
            <input className="w3-bar-item w3-border w3-margin-left w3-margin-right"
                type="text"
                placeholder="Enter password"
                name="password"
                required
                onChange={onInputChange}
                style={{ width: '300px' }}>
            </input>
        </div>
    )
}

export default LoginDialog
