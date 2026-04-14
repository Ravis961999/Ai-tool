import React, { useState } from 'react'


const App = () => {

  const [question,setquestion]=useState('')

  function Askhandler(){
    console.log("hii");
    
  }


  return (
    <div className='grid grid-cols-5'>
      <div className="left  col-span-1 bg-zinc-700 h-screen">hello</div>

      <div className="right col-span-4 bg-zinc-900 h-screen  ">

        <div className="container h-150"></div>

        <div className="content border-1  w-1/2 h-fit m-5 px-7 py-2 rounded-full bg-zinc-700 m-auto flex">
          <input className='w-full text-white text-[1.2rem] outline-none px-2' type="text" placeholder='Ask me anything...' value={question}  onChange={(event)=>{setquestion(event.target.value)}} />
        <button onClick={Askhandler} className='text-white text-[1.4rem] cursor-pointer'>Ask</button></div>

      </div>
    </div>
  )
}

export default App