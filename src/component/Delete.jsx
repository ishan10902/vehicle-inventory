import React from 'react'
import BarNav from './BarNav'

const Delete = () => {
  return (
    <div>
        <BarNav/>
        <h3 align="center">Delete Vehicle</h3>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor=""className='form-label'>Vehicle name</label>
                            <input type="text"className='form-control' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br>
                            <button className="btn btn-danger">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete