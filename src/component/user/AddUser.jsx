import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Link,Navigate } from "react-router-dom"

function AddUser() {
  const [name, setname] = useState('')
  const [description, setDescription] = useState('')
  const [startdata, setStartdate] = useState('')
  const [enddate, setEndDate] = useState('')
  const [buffertime, setBufferTime] = useState('')
  const [isAuth, setIsAuth] = useState(false)


  const handlesubmit = async (e) => {
    e.preventDefault()
    // console.log(name, description, startdata, enddate, buffertime)
    try {
      const { data } = await axios.post('http://localhost:5000/api/Tender_insert', {
        name, description, startdata, enddate, buffertime
      })
      // console.log(data)
      toast.success(data.message);
      setname("")
      setDescription("")
      setStartdate("")
      setEndDate("")
      setBufferTime("")
      setIsAuth(true)
      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error)
    }
  }
  if(isAuth){
    return<Navigate to = {'/userDisplay'} />
  }

  return (
    <>
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Add User</h1>
              </div>
              {/* <!-- /.col --> */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Add user</li>
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
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                {/* <!-- general form elements --> */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Quick Example</h3>
                  </div>
                  {/* <!-- /.card-header -->
                   <!-- form start --> */}
                  <form onSubmit={handlesubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label >name</label>
                        <input type="text" className="form-control"
                          onChange={(e) => setname(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >Description</label>
                        <input type="text" className="form-control"
                          onChange={(e) => setDescription(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >set time</label>
                        <input type="date" className="form-control"
                          onChange={(e) => setStartdate(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >end time</label>
                        <input type="date" className="form-control"
                          onChange={(e) => setEndDate(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label >buffer time</label>
                        <input type="number" className="form-control"
                          onChange={(e) => setBufferTime(e.target.value)} />
                      </div>


                    </div>
                    {/* <!-- /.card-body --> */}

                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                {/* <!-- /.card --> */}
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
    </>
  )
}

export default AddUser