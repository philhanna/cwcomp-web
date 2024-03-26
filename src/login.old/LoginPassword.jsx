import { useContext } from "react"
import { LoginContext } from "./LoginForm"

// LoginPassword is the HTML that prompts for the password
const LoginPassword = () => {

    const {password, handlePasswordChange} = useContext(LoginContext)

    return (
        <div className="w3-bar-block">
            <label className="w3-bar-item" htmlFor="password">
                <b>Password:</b>
            </label>
            <input className="w3-bar-item w3-border w3-margin-left w3-margin-right"
                type="text"
                placeholder="Enter password"
                name="password"
                value={password}
                required
                onChange={handlePasswordChange}
                style={{ width: '300px' }}>
            </input>
        </div>
    )
}

export default LoginPassword