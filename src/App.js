import React from 'react';
import './App.css';
import logo from './assets/images/background/foodbg.webp'
import Header from './components/Header';


function App() {
  return (
   
    <div className="bg-[url('../src/assets/images/background/foodbg.webp')] bg-cover bg-no-repeat min-h-screen">
     <Header/>
     <div className='flex text-[52px] font-bold leading-[64px]  px-10 items-center min-h-screen'>
     <h1>Order delivery near you</h1>
     </div>


    </div>
  );
}

export default App;
