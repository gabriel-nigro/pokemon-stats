import React from 'react'
import Profile from './Profile'
import Stats from './Stats'

const Viewer = ({ data }) => {

  return (
    <React.Fragment>
      <div className='container-fluid border border-4 border-dark'>
        <div className='row border-4 border-bottom border-dark'>
          <p className='col-5 bg-sand mb-0 text-white'>POKEMON INFO</p>
          <p className='col-7 bg-blue mb-0 border-4 border-start border-dark text-white text-end'>PAGE</p>
        </div>
        <div className='row'>
          <Profile data={data} />
          <Stats data={data} />
        </div>
      </div>
    </React.Fragment >
  )
}

export default Viewer