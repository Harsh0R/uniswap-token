import React,{useState} from 'react'

const Demo = () => {
    const [srcToken, setSrcToken] = useState();
    const [desToken, setDesToken] = useState();
  return (
    <div className="border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl">
    <div className="flex items-center justify-between py-4 px-1">
      <p>Swap</p>
      {/* <CogIcon className="h-6" /> */}
    </div>
    <div className="relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
      {srcToken}
      {/* <ArrowSmDownIcon
        className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110"
        onClick={handleReverseExchange} 
      /> */}
    </div>
    <div className="bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
      {/* {desTokenComp} */}
    </div>
  </div>
  )
}

export default Demo