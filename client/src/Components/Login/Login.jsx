import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const login = () => {
        axios
            .post("http://localhost:9002/login", user)
            .then((res) => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                history.push("/");
            });
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-500">
            <div className="quizhead text-6xl text-white font-bold mb-6">👋 Hey Start Quiz</div>
            <div className="bg-white rounded-lg p-10">
                <h1 className="text-4xl font-bold mb-4">Login</h1>
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="border rounded-md py-2 px-3 w-full mb-4"
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                    className="border rounded-md py-2 px-3 w-full mb-4"
                />
                <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mb-2"
                    onClick={login}
                >
                    Login
                </button>
                <div className="text-gray-600 text-sm mb-2">or</div>
                <a href="/register">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        onClick={() => history.push("/register")}
                    >
                        Register
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Login;
