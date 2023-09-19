import './App.css'
import SearchMovie from './Components/searchmovie'

function App() {
  return (
    <>
      <div className='container mx-auto max-w-[100vh] p-8'>
        <h1 className='text-[4.4rem] text-center'>Movie Search</h1>
        <SearchMovie/>
      </div>
    </>
  )
}

export default App
