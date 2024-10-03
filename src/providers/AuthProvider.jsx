import React, { createContext, useState } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Define the signIn function
    const signIn = async (username, password) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', { // Correct URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username, // Ensure it's using 'username' as the key
                    password,
                }),
            });


            const data = await response.json();

            if (response.ok) {
                setUser(data); // Save the user data
                return data;
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
