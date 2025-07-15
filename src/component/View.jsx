import React from 'react'
import BarNav from './BarNav'

const View = () => {
    return (
        <div>
            <BarNav />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">VEHICLE NAME</th>
                                            <th scope="col">BRAND</th>
                                            <th scope="col">FUEL TYPE</th>
                                            <th scope="col">REGISTRATION NO</th>
                                            <th scope="col">MANUFACTURING DATE</th>
                                            <th scope="col">PRICE</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Toyota</th>
                                            <td>Glanza</td>
                                            <td>Petrol</td>
                                            <td>kL 58 AL 2006</td>
                                            <td>16-05-2022</td>
                                            <td>100000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">SUSUKI</th>
                                            <td>Balano</td>
                                            <td>Petrol</td>
                                            <td>kL 58 AL 2008</td>
                                            <td>16-05-2024</td>
                                            <td>900000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">kia</th>
                                            <td>Seltos</td>
                                            <td>Petrol</td>
                                            <td>kL 58 AL 2002</td>
                                            <td>16-05-2021</td>
                                            <td>130000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Hyundai</th>
                                            <td>Creta</td>
                                            <td>Diesel</td>
                                            <td>KL 07 AB 1234</td>
                                            <td>10-03-2020</td>
                                            <td>145000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Maruti</th>
                                            <td>Baleno</td>
                                            <td>Petrol</td>
                                            <td>KL 11 CD 5678</td>
                                            <td>22-07-2019</td>
                                            <td>98000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Toyota</th>
                                            <td>Innova Crysta</td>
                                            <td>Diesel</td>
                                            <td>KL 33 EF 9012</td>
                                            <td>05-11-2022</td>
                                            <td>180000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Tata</th>
                                            <td>Nexon</td>
                                            <td>Petrol</td>
                                            <td>KL 14 GH 3456</td>
                                            <td>17-08-2021</td>
                                            <td>125000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Honda</th>
                                            <td>City</td>
                                            <td>Petrol</td>
                                            <td>KL 21 IJ 7890</td>
                                            <td>12-01-2018</td>
                                            <td>115000</td>
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