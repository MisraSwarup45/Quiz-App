import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-500">
            <div className="quizhead text-4xl text-white font-bold mb-4">👋 Hey Start Quiz</div>
            <div className="bg-white rounded-lg p-7 w-1/2">
                <h1 className="text-3xl font-bold mb-2">Register</h1>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    className="border rounded-md py-2 px-3 w-full mb-2 text-lg"
                />
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Your Email"
                    onChange={handleChange}
                    className="border rounded-md py-2 px-3 w-full mb-2 text-lg"
                />
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange} className="border rounded-md py-2 px-3 w-full mb-2 text-lg" />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange} className="border rounded-md py-2 px-3 w-full mb-2 text-lg" />
                <div className="bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-md mb-2 text-lg cursor-pointer w-1/5" onClick={register}>Register</div>

                <div className="text-gray-600 text-sm mb-2">or</div>
                <a href="/login"><div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md text-lg cursor-pointer  w-1/5" onClick={() => history.push("/login")}>Login</div></a>
            </div>
        </div>
    )
}

export default Register
