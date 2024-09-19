import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function ViewTender() {
  const [data, setdata] = useState([]);
  const { id } = useParams()
  // console.log(id)
  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/api/getTenderById/${id}`)
        .then((res) => {
          setdata(res.data)
        })
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(data)


  return (
    <>

      <div className='content-wrapper'>
        <div className='container'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='mt-5 col-md-12'>
              </div>
              <table className='table table-spriped table-bordered'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>start Time</th>
                    <th scope='col'>ENd Time</th>
                    <th scope='col'>Buffer time</th>

                  </tr>
                </thead>

                <tbody>
                  <td>{data.name}</td>
                  <td>{data.description}</td>
                  <td>{data.startdata}</td>
                  <td>{data.enddate}</td>
                  <td>{data.buffertime}</td>

                </tbody>

              </table>
            </div>
          </div>
        </div>

      </div>

      {/* <table>
        <thead>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Buffer Time</th>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
      </table> */}
    </>
  )
}

export default ViewTender
