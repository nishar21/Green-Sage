import React from 'react'
//import { Papa } from 'papaparse'
import './Dashboard.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts'
import { Link } from 'react-router-dom'

function Dashboard() {

    /*const [data,setData] = useState([])
    const [column,setColumn] = useState([])
    const [values,setValues] = useState([])

    const handleFile = (event) =>{
        Papa.parse(event.target.files[0],{
            header : true,
            skipEmptyLines: true,
            complete : function(result){
                const column = [];
                const values = [];

                // eslint-disable-next-line array-callback-return
                result.data.map((d)=> {
                    column.push(Object.keys(d))
                    values.push(Object.values(d))
                })

                setData(result.data)
                setColumn(column[0])
                setValues(values)
            }
        })
    }*/
        const data = [
            {
              name: 'Today',
              Potassium: 4000,
              Phosphorous: 2400,
              Nitrogen:5600,
              amt: 2400,
            }
          ]
    
  return (


    /*<div>
        <input  
        type='file'
        name='file'
        accept='.csv'
        onChange={handleFile}
        style={{display:"block", margin:"10px auto"}}
        ></input>
        <br></br>

        <table>
            <thead>
                <tr>
                    {column.map((col,i)=>(
                        <th key={i}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    values.map((v,i)=>(
                        <tr key={i}>
                            <td key={i}>{v}</td> 
                            {{v.map((value,i)=>(
                                <td key={i}>{value}</td>
                            ))}}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>*/
    <div className='whole'>
        <div className='dashboard'>
            <div className='dash'>
                <div className='crop'>
                    <label className='crop-category'>Crop Types</label>
                    <label className='crop-type'>Cash Crop</label>
                    <img src='cane.png' className='crop-image'></img>
                    <label className='crop-name'>Sugercane</label>
                </div>
                <div className='crop'>
                    <label className='crop-category'>Soil Types</label>
                    <label className='crop-type'>Most Suitable soils:</label>
                    <label className='crop-type'>Loamy Soil</label>
                    <img src='soil.png' className='crop-image'></img>
                    <label  className='crop-name'>Black Soil</label>
                </div>
                <div className='crop'>
                    <label className='crop-category'>Moisture</label>
                    <br></br>
                    <br></br>
                    <label className='crop-type'>50%</label>
                    <img src='moisture.png' className='crop-image'></img>
                    <label  className='crop-name'>Water Content</label>
                </div>
                
            </div>
            <div className='fertilizer'>
                <label className='f-name'>Recommended usage of fertilizer</label>
                <div>
                    <img src='./cylinder.png' className='cylinder'></img>
                    <label className='percentage'>78%</label>
                    <img src='./fertilizer.png' className='f-image'></img>
                </div>
            </div>
            <div  className='bottom'>
                <div>
                   
                    <div className='chart'>
                    <label className='npk'> NPK Values of Soil</label>
                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        >
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Phosphorous" fill="#8884d8" activeBar={<Rectangle fill="puple" stroke="blue" />} />
                        <Bar dataKey="Potassium" fill="#82ca9d" activeBar={<Rectangle fill="green" stroke="purple" />} />
                        <Bar dataKey="Nitrogen" fill="#FF0000" activeBar={<Rectangle fill="red" stroke="blue" />} />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                    
                </div>
                <div className='land-area'>
                    <label className='land-name'>Land Area</label>
                    <img src='./land.png' className='land'></img>
                    <Link to='/geo'>More details</Link>
                </div>
                
                <div></div>
            </div>
        </div>
        <div className='right'>
            <div className='seas'>
                <label className='seasons'>Seasons</label>
                <br></br>
                <br></br>
                <img src='season.png' className='season-image'></img>
            </div>
            <div className='Ext'>
                <label className='Extra'>Information </label>
                <p className='text'>
                These crops need submerged water for proper growth and hence are cultivated during rainy seasons. These crops are called Kharif crops. Some important kharif crops are maize, jowar, cotton, ragi, bajra, sugarcane and jute.

                </p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard