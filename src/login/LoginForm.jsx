import { createContext, useState } from "react"
import LoginUsername from "./LoginUsername"
import LoginPassword from "./LoginPassword"
import LoginSubmit from "./LoginSubmit"
import LoginRegister from "./LoginRegister"
import LoginError from "./LoginError"
import RESTURL from "./HostAndPort"
import Home from "../home/Home"

export const LoginContext = createContext()

// LoginForm creates the UI components for the login form and validates
// the username/password through an AJAX call.

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [error, setError] = useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    // Declare a callback function that gets the form data and makes an AJAX
    // call to the server to validate the username and password

    const handleSubmit = async (event) => {
        console.log("Entering handleSubmit")

        event.preventDefault()

        // Assemble the user name and password from the form and create a
        // string that is in application/x-www-form-urlencoded format.

        const formData = new FormData();
        formData.append("username", username)
        formData.append("password", password)
        const urlEncodedData = new URLSearchParams(formData);

        // Create a URL for the /login endpoint

        const url = `${RESTURL}/login`

        // Now use fetch/then/then/catch to send the credentials to the
        // server and expect a session cookie. Set the isLoggedIn state
        // variable to true if the login is successful. If an error
        // occurs, redisplay the form with an error message. Otherwise,
        // go to the menu screen.

        fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlEncodedData.toString(),
        })
            .then(response => {
                if (response.ok) {
                    setIsLoggedIn(true)
                } else {
                    response.text().then(errmsg => {
                        setError(errmsg)
                    })
                }
            })
            .catch(error => {
                alert(`ERROR: ${error}`)
                // TODO must be a better way to do this
            })
    }

    if (isLoggedIn) {
        return <Home />
    } else {
        return (
            <LoginContext.Provider
                value={{
                    username,
                    password,
                    handleUsernameChange,
                    handlePasswordChange,
                }}>
                <form className="w3-margin-left w3-margin-right w3-border" onSubmit={handleSubmit}>
                    <div className="w3-blue-gray w3-center">
                        <h3 className="w3-center w3-blue-gray" style={{ marginTop: 0 }}>Login</h3>
                    </div>
                    <div className="w3-container">
                        <LoginUsername />
                        <LoginPassword />
                        <LoginSubmit />
                        <LoginRegister />
                        <LoginError errmsg={error} />
                    </div>
                </form>
            </LoginContext.Provider>
        )
    }
}

export default LoginForm
