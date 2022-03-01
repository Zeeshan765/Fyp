import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing Page/Landing';
import Login from './components/Login/Login';
import TopMenu from './components/TopMenu/TopMenu';
import SelectionPage from './components/Selection Page/SelectionPage';
import BudgetPage from './components/Budget/BudgetPage';
import LowBudgetPage from './components/Budget/Low Budget/LowBudgetPage';
import MidBudgetPage from './components/Budget/Mid Budget/MidBudgetPage';
import HighBudgetPage from './components/Budget/High Budget/HighBudgetPage';
import PeripheralPage from './components/Peripherals/PeripheralPage';
import AboutUs from './components/About Us/AboutUs';
import ComponentsPage from './components/components page/ComponentsPage';
import RequirementPC from './components/RequirementPC/RequirementPC';
import cart from './components/cart Page/cart';
//import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <TopMenu />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/login' exact component={Login} />
          <Route path='/selection' exact component={SelectionPage} />
          <Route path='/budget' exact component={BudgetPage} />
          <Route path='/requirement' exact component={RequirementPC} />
          <Route path='/budget/lowbudget' exact component={LowBudgetPage} />
          <Route path='/budget/midbudget' exact component={MidBudgetPage} />
          <Route path='/budget/highbudget' exact component={HighBudgetPage} />
          <Route path='/peripherals' exact component={PeripheralPage} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/components' exact component={ComponentsPage} />
          <Route path='/shop-cart' exact component={cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
