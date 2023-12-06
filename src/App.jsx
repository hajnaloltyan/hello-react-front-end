import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
