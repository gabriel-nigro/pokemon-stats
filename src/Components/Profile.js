import React from 'react'

const Profile = ({ data }) => {

  const image = data.sprites.other['official-artwork'].front_default
  const name = (data.name).toUpperCase()

  return (
    <div className='col-5 p-0'>
      <div className='bg-purple p-2'>
        <p className='text-center'>{name}</p>
        <figure>
          <img className='image-flip stripe-gray d-block mx-auto img-fluid border border-4 border-dark' src={image} alt={name} />
        </figure>
      </div>
    </div>
  )
}

export default Profile