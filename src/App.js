import Main from './components/main'

export default function App() {
  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-6">Money Splitter</h1>
          
          <div className="bg-gray-200 py-6 rounded-md shadow-md w-2/3">
            <div className='md:grid justify-center'>
              <Main />
            </div>
          </div>
        </div>
    </>
  )
}