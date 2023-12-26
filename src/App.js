import React from 'react';
import { CreateContainer, Header, MainContainer } from './components';
import { Route, Routes} from 'react-router-dom'
import { AnimatePresence} from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect } from 'react';
import { actionType } from './context/reducer';


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <AnimatePresence wait>
        <div className='w-screen h-auto flex flex-col bg-primary'>
          <Header/>

          <main className='mt-14 md:mt-20 md:px-16 py-4 px-4 w-full'>
            <Routes>
              <Route path='/*' element={<MainContainer />} />
              <Route path='createItem' element={<CreateContainer />} />
            </Routes>
            
          </main>
        </div>
    </AnimatePresence>
  );
};

export default App;





/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
