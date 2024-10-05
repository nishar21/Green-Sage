import React, { useState } from 'react'
import './Geo.css'

function Geo() {
  return (

    <div class="container">
        <h1>Land Analysis Report</h1>
        
        <div class="geo-location">
            <span>Geo-Location:</span> 12.871923, 80.220616
        </div>

        <div class="address">
            <span>Address:</span> Sathyabama Institute of Science and Technology 600119
            <img src='sath.jpg' className='image'></img>
        </div>


        <div class="section">
            <div class="section-title">Land Survey Report:</div>
            <p><span>Topological Region:</span> North Eastern (100-200) Annual rain (1105mm)</p>
            <p><span>Best crops:</span> Rice, Pearl Millet, Sorghum, Gingelly, Finger Millet, Groundnut, Red Gram, Sugarcane, Cashew, Mango, Guards, Green Chillies, Brinjal, Tapioca, Yam, Banana, Jack, Guava, Watermelon, Turmeric, Tube rose, Crossandra, Lemongrass</p>
            <img src='trap.png' className='image'></img>
        </div>

        <div class="section">
            <div class="section-title">Land Analysis:</div>
            <p><span>NVDI:</span> Normalized Differences Vegetation Index</p>
            <img src='nvdi.png' className='image'></img>
            <p><span>NDMI:</span> Normal Difference Moisture Index</p>
            <img src='ndmi.png' className='image'></img>
        </div>

        <div class="section">
            <div class="section-title">Fertilizer Recommended:</div>
            <img src='fer.png' className='image'></img>
            <img src='graph.png' className='image'></img>
        </div>

        <div>
            <label className='inv'>Invoice</label>
            {/*<video width={'740'} height={'340'} controls>
                <source src='p1.mp4' type='video/mp4'></source>
            </video>*/}
            <br></br>
        </div>

    </div>

  )
}

export default Geo