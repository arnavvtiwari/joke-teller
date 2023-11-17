"use client"

import oneLinerJoke from "one-liner-joke"
import { useState } from "react"

const page = () => {
  const [joke, setjoke] = useState("")
  const a=()=>{
    let jk = oneLinerJoke.getRandomJoke({
      'exclude_tags': ['intelligence', 'motivational', 'marriage','god','attitude','life','women','love','school',]
    })
    
  setjoke(jk.body);
  console.log(jk);
}
  return (
    <>
    <div className="">
    <h1 className="bg-zinc-600 text-white justify-center py-5 text-center text-2xl font-bold font-mono">Welcome!</h1>
    <div className="mx-10 mt-20 mb-10 text-lg font-semibold px-5 py-10 border-2 border-zinc-600 rounded justify-center text-center ">{joke}</div>
    <button className="bg-zinc-600 rounded  p-2 text-gray-200 justify-center mx-10 items-center"
     onClick={()=>{
      a()
     }}>release</button>
    </div>
    </>
  )
}

export default page