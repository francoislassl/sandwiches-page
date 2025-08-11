import React from 'react';

// Main LandingPage component that serves as the entry point
const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="bg-green-500 p-6">
                <h1 className="text-white text-3xl font-bold text-center">Delicious Sandwiches</h1>
                <p className="text-white text-lg text-center mt-2">Crafted with love and fresh ingredients</p>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col justify-center items-center p-8">
                <section className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold mb-4">Our Best Sandwiches</h2>
                    <p className="text-gray-700 mb-6">Explore our variety of delicious sandwiches made just for you!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Sandwich Cards */}
                        {["Club Sandwich", "Veggie Delight", "BLT", "Turkey Avocado", "Caprese", "Italian Hoagie"].map((sandwich, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <h3 className="text-lg font-bold mb-2">{sandwich}</h3>
                                <p className="text-gray-600">A tasty sandwich made with fresh ingredients.</p>
                                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Order Now</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-800 p-6 text-center">
                <p className="text-white">&copy; 2023 Delicious Sandwiches. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
