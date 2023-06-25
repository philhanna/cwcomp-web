import React from "react"

// LoginError is the error message element

const LoginError = (props) => {
    if (props.errmsg != "") {
        return (
            <div className="w3-text-red">
                <p>{props.errmsg}</p>
            </div>
        )
    }
}
export default LoginError
