import React from 'react'

const Sorting = () => {
  return (
    <div className='my-5 flex items-center justify-end'>
        <select name='' className='p-3  bg-gray-200 border rounded-lg' id=''>
            <option disabled value="">Choose</option>
            <option  value="inc">İncrement</option>
            <option  value="dec">Decrement</option>
        </select>
    </div>
  )
}

export default Sorting