import React, { useState } from 'react'

const TodoInput = () => {
  
  const[activity,setActivity]=useState("")

  const[listData,setlistData]=useState([])

  // const[editIndex,seteditIndex]=useState(-1)


const handleChange=(e)=>{
  setActivity(e.target.value)
}
const handleClick=()=>{
    // setlistData([...listData,activity])
    // console.log(listData);

    setlistData((listData)=>{
      const updatedList=[...listData,activity]
      console.log(updatedList)
      setActivity('')
      return updatedList
      
    })
}
  const handledelete=(i)=>{
    const updatedlistdata=listData.filter((ele,id)=>{
      return i!=id
    })
    setlistData(updatedlistdata)
  }

  const handleDeleteAll=()=>{
    setlistData([])
  }

  // const handleEdit=(i)=>{
  //   setActivity(listData[i])
  //   seteditIndex(i)
  // }
  return (
    <>
    <div className='container mx-auto flex justify-center'>

      <div className='bg-violet-200 my-5 p-2 rounded-lg min-h-[80vh] w-96'>
        <h1 className='text-3xl ml-3 my-3 font-semibold'>Add a Todo</h1>

        <div>
          <input type='text' placeholder='  Write your todos' className='ml-3 w-1/2 rounded-md' onChange={handleChange} value={activity}>
          
          </input>
          <button   onClick={handleClick} className=' mx-3 py-1 p-2 rounded-lg bg-violet-400 cursor-pointer hover:bg-violet-700 font-semibold'>Add</button>
        </div>
         
         <p className='mx-3 font-md my-3 text-2xl'>Your Todos</p>

         
         {listData!=[] && listData.map((data,i)=>{
          return (
            <>
            <p className='flex' key={i}>
             
              <div className='bg-violet-400  rounded-lg mx-3 my-2 w-1/3 p-2 text-2xl text-white '>{data}</div>
              <button onClick={()=>handledelete(i)} className=' mx-3 mt-2 h-[45px] w-[100px] rounded-lg bg-violet-400 cursor-pointer hover:bg-violet-700 font-semibold'>Delete</button>
              {/* <button onClick={()=>handleEdit(i)} className=' mx-3 mt-2 h-[45px] w-[100px] rounded-lg bg-violet-400 cursor-pointer hover:bg-violet-700 font-semibold'>Edit</button> */}


            </p>
          
            </>
          )
         })}

         {listData.length>=1&&<button onClick={handleDeleteAll} className=' ml-[100px] mt-2 h-[45px] w-[100px] rounded-lg bg-violet-400 cursor-pointer hover:bg-violet-700 font-semibold'>Delete All</button>}  



      </div>
      
    </div>
    </>
  )
}

export default TodoInput
