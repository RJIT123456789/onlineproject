import { useEffect, useState } from "react"
import TableData from "./TableData"
import axios from "axios"
// http://localhost:5000/api/getTender



function DisplayUser() {
  const [data,setdata] = useState([]);

  useEffect(() => {
    try{
      axios.get('http://localhost:5000/api/getTender')
      .then((res) => {
        setdata(res.data)
      })
      // console.log(data)
    } catch(error){
      console.log(error)
    }
  },[])
  // console.log(data)
  return (
   <>
     {/* <!-- Content Wrapper. Contains page content --> */}
     <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">User Display</h1>
              </div>
              {/* <!-- /.col --> */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Display</li>
                </ol>
              </div>
              {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- /.content-header --> */}

        {/* <!-- Main content --> */}
        <div className="content">
          <div className="container-fluid">
           <TableData/>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
   </>
  )
}

export default DisplayUser


