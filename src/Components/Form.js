import React from 'react'

const Form = ({ handleSubmit, inputData, setInputData }) => {

  function cleanInput(text) {
    const input = text.target.value
    setInputData(input.toLowerCase())
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='col-4'>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input value={inputData} onInput={cleanInput} className="form-control" type="text" placeholder="Type pokemon..." aria-label="input" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-danger">Catch</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form