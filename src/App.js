import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import Card from './components/shared/Card';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {
    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Card>
                    <NavLink to='/' className='active'>
                        Home
                    </NavLink>
                    <NavLink to='/about' className='active'>
                        About
                    </NavLink>
                </Card>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                        
                    </Route>

                <Route path ='/about' element={<AboutPage />}/>
                </Routes>


                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    );
}

export default App