import React from 'react'
import picture1 from "./image9.jpg"

function StartingSearchPage() {
    const options = ['Fiction', 'NonFiction'];
    



  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-screen h-screen object-cover' src={picture1} alt=""/>
        </div>

        <div className='bg-gradient-to-r from-neutral-300 via-stone-700 to-slate-600 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl text-white font-bold text-center'>WelCome</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor=''>Select Category</label>
                    <select className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'>
                    <option>Please choose one option</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor=''>Location</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Search</button> 
            </form>
        </div>
    </div>
  )
}

export default StartingSearchPage;