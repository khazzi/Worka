import './index.css';
import NavBar from './Components/NavBar/NavBar';
// import Jobs from './Components/JobsDiv/Jobs';
import Footer from './Components/FooterDiv/Footer';
// import Value from './Components/ValueDiv/Value';
import AllJobs from './Components/JobsDiv/AllJobs'; // New page component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <div className='w-[85%] m-auto bg-white'>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="/all-jobs" element={<AllJobs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
