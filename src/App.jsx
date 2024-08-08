import { useState } from 'react'
import './App.css'

function App() {
  const [inputarr,setInputarr ] = useState([])
  const [inputData, setInputData] = useState({
    name:"",
    rollNo:""
  })

  const changeHandle = (e) => {
    setInputData({ ...inputData,[e.target.name]:e.target.value})
  }

  let {name,rollNo} = inputData;
  const btnHandle = () => {
    setInputarr([...inputarr,{name,rollNo}])
    // console.log(inputarr)
    // console.log(inputData)
    setInputData({name:"",rollNo:""})
  }

  return (
    <>
      <div className=' inline-grid gap-6 mt-20'>
        <input autoComplete='off' className=' p-4 border-4 rounded-xl w-50' value={inputData.name}
          onChange={changeHandle} type='text' placeholder='Enter Your First Name'></input>
        <input autoComplete='off' className=' p-4 border-4 rounded-xl w-50' value={inputData.rollNo}
          onChange={changeHandle} type='text' placeholder='Enter Your Roll No'></input>
        <button className=' bg-slate-800 text-white font-bold p-4 rounded-xl' onClick={btnHandle}>Submit</button>
      </div>
    </>
  )
}

export default App
