import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './Contents.css'
import Home from './Pages/Home';
import Blog from './Pages/Blog';
function Contents(){
    return (
        <div className='Contents'>
            <Router>
                    <Route path="/home" component={Home}/>
                    <Route path="/blog" component={Blog}/>
            </Router>
        </div>
    )
}
export default Contents;