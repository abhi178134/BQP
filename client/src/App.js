import { BrowserRouter,useHistory,Switch,Route,Redirect } from 'react-router-dom';
import AddApplicant from './components/AddApplicant';
import View from './components/View';
import Charts from './components/Charts';
import Navbar from './components/NavigationBar';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Route exact path="/" component={AddApplicant} />
    <Route exact path="/view" component={View} />
    <Route exact path="/add" component={AddApplicant} />
    <Route exact path="/charts" component={Charts} />
    </BrowserRouter>
    </>
  );
}

export default App;
