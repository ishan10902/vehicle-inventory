import React from 'react'
import BarNav from './BarNav'

const View = () => {
    return (
        <div>
            <BarNav/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">vehicle name</th>
                                            <th scope="col">brand</th>
                                            <th scope="col">fuel type</th>
                                            <th scope="col">Registration no</th>
                                            <th scope="col">manufacturing date</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Toyota</th>
                                            <td>Glanza</td>
                                            <td>Petrol</td>
                                            <td>kl 58 AL 2006</td>
                                            <td>16-05-2022</td>
                                            <td>100000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">SUSUKI</th>
                                            <td>Balano</td>
                                            <td>Petrol</td>
                                            <td>kl 58 AL 2008</td>
                                            <td>16-05-2024</td>
                                            <td>900000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">kia</th>
                                            <td>Seltos</td>
                                            <td>Petrol</td>
                                            <td>kl 58 AL 2002</td>
                                            <td>16-05-2021</td>
                                            <td>130000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View