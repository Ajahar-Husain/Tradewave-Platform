import React, { useState } from 'react';
import axios from 'axios';
// This component assumes Bootstrap CSS and Icons (e.g., Bootstrap Icons) are included in your project.

function Signup() {
    // State for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    
    // State for messaging and UI status
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setMessage('');
        setIsLoading(true);

        // Data to send to the backend. Note: Your current backend model 
        // only accepts email and password, but this sends all fields. 
        // You may need to update your Mongoose UserModel to store these extra fields.
        const userData = { email, password, mobile, address }; 
        
        try {
            // Updated API endpoint to match your Express server running on 3002
            const response = await axios.post('http://3.110.174.73:3002/api/auth/signup', userData);

            setMessage('Registration successful! Please proceed to the login page.');
            setIsSuccess(true);
            
            // Clear inputs after success (excluding email/password which are cleared anyway)
            setMobile('');
            setAddress('');
            setEmail('');
            setPassword('');
            
        } catch (error) {
            // Handle error response from the server (e.g., 400 'User already exists')
            const errorMessage = error.response 
                ? error.response.data.message || 'Signup failed. Please check your data.'
                : 'Network error. Could not connect to the backend (Port 3002).';
            
            setMessage(errorMessage);
            setIsSuccess(false);
            
        } finally {
            setIsLoading(false);
        }
    };

    // Determine the Bootstrap alert class
    const alertClass = isSuccess ? 'alert-success' : 'alert-danger';

    return ( 
        // Responsive Container with centering utility
        <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="row w-100">
                <div className="col-lg-6 col-md-8 mx-auto">
                    
                    {/* Professional Card with Shadow and Rounded Corners */}
                    <div className="card shadow-xl border-0 p-4 bg-white rounded-3">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-1 fw-bold text-primary">
                                <i className="bi bi-person-add me-2"></i> Tradewave Sign Up
                            </h2>
                            <p className="text-center text-secondary mb-4 small">Ride the Wave of Smart Investing</p>
                            
                            <form onSubmit={handleSubmit}>
                                
                                {/* Email Field */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email Address <span className="text-danger">*</span></label>
                                    <input 
                                        type="email" 
                                        className="form-control form-control-lg" 
                                        id="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                {/* Password Field */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-semibold">Password <span className="text-danger">*</span></label>
                                    <input 
                                        type="password" 
                                        className="form-control form-control-lg" 
                                        id="password"
                                        placeholder="Minimum 8 characters"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength="8"
                                    />
                                </div>

                                {/* Mobile Number Field */}
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label fw-semibold">Mobile Number <span className="text-danger">*</span></label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        id="mobile"
                                        placeholder="e.g., 123-456-7890"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg w-100 fw-bold shadow-sm"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Registering...
                                        </>
                                    ) : (
                                        'Register Account'
                                    )}
                                </button>
                            </form>
                            
                            {/* Message Display */}
                            {message && !isLoading && (
                                <div className={`alert ${alertClass} mt-3 text-center`} role="alert">
                                    {message}
                                </div>
                            )}

                            {/* Link to Login */}
                            <p className="text-center mt-4 small">
                                Already registered? <a href="/login" className="text-decoration-none fw-semibold">Log In</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;