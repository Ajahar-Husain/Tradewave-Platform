import React, { useState } from 'react';
import axios from 'axios';


function Login({ history }) { 
    
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

   
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setMessage('Logging in...');
        setIsSuccess(false);
        try {
            
            const response = await axios.post('http://localhost:3002/api/auth/login', {
                email,
                password,
            });

            
            const { token, user } = response.data;

            
            localStorage.setItem('tradewaveToken', token); 
            setMessage(`Login successful! Welcome back, ${user.email}. Redirecting...`);
            setIsSuccess(true);
            setPassword(''); 
        

        } catch (error) {
           
            const errorMessage = error.response 
                ? error.response.data.message || 'Login failed. Invalid email or password.'
                : 'Network error. Could not connect to the server (Is the server running on port 3002?).';
            
            setMessage(errorMessage);
            setIsSuccess(false);
        }
    };

   
    const alertClass = isSuccess ? 'alert-success' : 'alert-danger';

    return ( 
        
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    
                    <div className="card shadow-lg p-4 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4 text-success">
                                🔒 Tradewave Log In
                            </h2>
                            <p className="text-center text-muted mb-4">Access your smart investments</p>
                            
                            <form onSubmit={handleSubmit}>
                               
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                               
                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-100 mb-3"
                                >
                                    Log In & Trade
                                </button>
                                
                                {/* Forgot Password Link */}
                                <p className="text-center">
                                    <a href="/forgot-password" className="text-muted text-decoration-none">Forgot Password?</a>
                                </p>
                            </form>
                            
                           
                            {message && (
                                <div className={`alert ${alertClass} mt-3 text-center`} role="alert">
                                    {message}
                                </div>
                            )}

                           
                            <p className="text-center mt-3">
                                Don't have an account? <a href="/signup" className="text-decoration-none">Sign Up here</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;