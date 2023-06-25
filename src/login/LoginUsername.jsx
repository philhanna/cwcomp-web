import { useContext } from "react"
import { LoginContext } from "./LoginForm"

// LoginUsername is the HTML that prompts for the user name
const LoginUsername = () => {
    const { username, handleUsernameChange } = useContext(LoginContext);
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
                value={username}
                required
                onChange={handleUsernameChange}
                style={{ width: '300px' }}>
            </input>
        </div>
    )
}

export default LoginUsername