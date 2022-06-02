import React from 'react'

const Stats = ({ data }) => {
  return (
    <div className='col-7 border-start border-4 border-dark stripe-orange'>
      <div className='p-2'>
        <p className='text-stats text-center'>STATS</p>
        {data.stats.map((stat, index) =>
          <div className='d-flex row align-items-center'>
            <div className='col-4'>
              <p key={index} className='rounded-3 bg-gray text-center text-white'>{stat.stat.name}</p>
            </div>
            <div className='col-8'>
              <p key={index} className='rounded-3 bg-stats text-end text-dark p-3'>{stat.base_stat}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Stats