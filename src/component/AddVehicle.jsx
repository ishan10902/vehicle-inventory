import React from 'react'
import BarNav from './BarNav'

const AddVehicle = () => {
    return (
        <div>
            <BarNav/>
            <h1 align="center">VEHICLES</h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Vehicle name</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Brand</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <label htmlFor="" className='form-label'>Fuel type</label>
                                <select name="" class="form-control" id="">
                                    <option>Petrol</option>
                                    <option>Diesel</option>

                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <label htmlFor="" className='form-label'>Registration number</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <label htmlFor="" className='form-label'>Manufacturing date</label>
                                <input type="date" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <label htmlFor="" className='form-label'>Price</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <label htmlFor="" className='form-label'>image upload</label>
                                <input type="file" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <br></br>
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddVehicle