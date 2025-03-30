import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Welcome to Fullstack App</h1>
      <div className='setup-instructions'>
        <h2>Getting Started</h2>
        <div className='method'>
          <h3>Method 1: Using Docker (Recommended)</h3>
          <pre>
            <code>
              {`# From the root directory
docker-compose up --build`}
            </code>
          </pre>
          <p>This will start the backend API and database automatically.</p>
        </div>

        <div className='method'>
          <h3>Method 2: Running Locally</h3>
          <pre>
            <code>
              {`# Backend setup
cd backend
npm install
npm run init-db
npm run dev

# Frontend setup
cd frontend
npm install
npm run dev`}
            </code>
          </pre>
        </div>

        <div className='endpoints'>
          <h3>Available Endpoints</h3>
          <ul>
            <li>
              Backend API: <code>http://localhost:3001</code>
            </li>
            <li>
              Frontend: <code>http://localhost:3000</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
