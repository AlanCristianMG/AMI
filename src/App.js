import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import StartPage from './components/startPage.jsx';
import Auth from './components/auth/auth.jsx';

function AnimatedRoutes() {
  let location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames='fade'
      >
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
