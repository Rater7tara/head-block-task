import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'; // For alerts
import Lottie from 'lottie-react';
import loginAnimation from '../../../assets/login.json'; // Animation JSON
import { AuthContext } from '../../../providers/AuthProvider'; // Auth context

const Login = () => {
    const { signIn } = useContext(AuthContext); // Get signIn function from AuthContext
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; // Use the from state or default to '/'

    const [username, setUsername] = useState(''); // Change from email to username
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value; // Use username from the input
        const password = form.password.value;

        console.log("Username:", username);
        console.log("Password:", password);

        setLoading(true); // Set loading state to true before making the request

        signIn(username, password)
            .then(() => {
                Swal.fire({
                    title: 'Login Successful!',
                    text: `Welcome, ${username}!`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                navigate('/products', { replace: true }); // Navigate to All Products page
            })
            .catch((err) => {
                console.error("Login Error: ", err);
                Swal.fire({
                    title: 'Login Failed!',
                    text: 'Invalid credentials. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            })
            .finally(() => {
                setLoading(false); // Reset loading state
            });
    };

    return (
        <div className="hero min-h-screen mt-7">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={loginAnimation} loop={true} />
                </div>

                <form className="w-full max-w-sm" onSubmit={handleLogin}>
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    <div className="card shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input
                                    type="text" // Changed type to text
                                    name="username" // Updated name attribute
                                    value={username} // Use username state
                                    onChange={(e) => setUsername(e.target.value)} // Update state for username
                                    placeholder="username" // Placeholder for username
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    className="btn btn-info"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
