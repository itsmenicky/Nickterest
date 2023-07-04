import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import {HomePage} from './pages/Home/HomePage';
import {HeaderPartial} from './Partials/HeaderPartial/HeaderPartial';
import {MinhasPastas} from './pages/MinhasPastas/MinhasPastasPage';
import {saveFolder} from './services/pinService';
import {AppContext} from './store/AppContext';

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: []
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/minhas-pastas" element={<MinhasPastas />}/>
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
