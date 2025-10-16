import './App.css'
import ProductCard from './components/productCard'
import Header from './components/header'
import UserData from './components/userData'

function App() {

  return (
    <div className='boder w-[600px] h-[600px] bg-gray-400 relative'>
      <div className='w-[500px] h-[500px] bg-yellow-300 flex flex-col justify-center items-center'>
        <div className='w-[100px] h-[100px] bg-red-300'>  
        </div>
        <div className='w-[100px] h-[100px] bg-blue-300 fixed left-[550px] top-[550px]'>  
        </div>
        <div className='w-[100px] h-[100px] bg-green-300'>  
        </div>
        <div className='w-[100px] h-[100px] absolute right-[20px] bottom-[20px] bg-pink-300'>  
        </div>
      </div>
    </div>
  )
}

export default App
