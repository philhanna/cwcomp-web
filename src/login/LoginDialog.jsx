import React from "react"
import LoginForm from "./LoginForm"

// LoginDialog is the top-level element, the whole modal dialog
const LoginDialog = () => {
    return (
        <div className="w3-display-topmiddle" style={{ paddingTop: '50px' }}>
            <LoginForm />
        </div>
    )
}

export default LoginDialog
