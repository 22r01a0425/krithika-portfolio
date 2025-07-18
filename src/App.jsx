import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto shadow-xl rounded-2xl bg-white p-10">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Krithika Gattu
        </h1>
        <p className="text-center text-gray-700 mb-4">
          Data Science | AI/ML | Salesforce | Smart Career Coach Creator
        </p>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Projects</h2>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Smart Career Coach</h3>
              <p>
                An AI-powered resume analyzer that recommends best-fit roles and missing skills based on uploaded PDF.
              </p>
              <a
                href="https://github.com/22r01a0425/Smart_Career_Coach"
                className="text-indigo-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
            {/* Add more project cards here */}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Contact</h2>
          <p>Email: krithikagattu@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/krithika-gattu" className="text-indigo-600 underline">linkedin.com/in/krithika-gattu</a></p>
        </section>
      </div>
    </div>
  );
}

export default App;
