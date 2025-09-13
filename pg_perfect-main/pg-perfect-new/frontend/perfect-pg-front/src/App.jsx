import { Outlet, useLocation } from 'react-router-dom';
import Nav from './pages/Nav';

function App() {
 
  const location = useLocation();

  return (
    <div>
       {/* conditional rendering of nav bar .....*/}
       
      {location.pathname !== '/' && <Nav />}  
      
      <Outlet />
    </div>
  );
}

export default App;