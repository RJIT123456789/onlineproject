import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function TableData() {


    const [data, setdata] = useState([]);


    //   const fetchData = async () => {
    //     const response = await axios.get("http://localhost:5000/api/getTender");
    //     // console.log(response.data);
    //     setTender(response.data);
    //   };

    useEffect(() => {
        try {
            axios.get('http://localhost:5000/api/getTender')
                .then((res) => {
                    setdata(res.data)
                })
                // console.log(data);
        } catch (error) {
            console.log(error)
        }
    },[])
    // console.log(data);




    return (
        <>

            <div className="card">
                <div className="card-header">
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-default">
                        Tender Modal
                    </button>
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">
                    <table class="table table-dark">
                        <caption>List of users register in tender</caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start time</th>
                                <th>End Time</th>
                                <th>Buffer time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data && data.length > 0 ? (
                                data.map((data, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.description}</td>
                                        <td>{data.startdate}</td>
                                        <td>{data.enddate}</td>
                                        <td>{data.buffertime}</td>
                                        {/* <td>
                                            <Link className="btn btn-info" to="/ViewTender">view</Link>
                                            <Link className="btn btn-primary">edit</Link>
                                            <Link className="btn btn-danger">delete</Link>
                                        </td> */}
                                        
                                        <td className='actionButtons'>
                                            <button onClick={() => deleteTender(data._id)}><i className="fa-solid fa-trash"></i></button>
                                            <Link to={`/edit/` + data._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <Link to={`/view/` + data._id}>
                                            <i className="fa-solid fa-eye"></i>
                                            </Link>
                                        </td>


                                    </tr>
                                ))

                            ) : (
                                <tr>
                                    <td colSpan="5">No data available</td>
                                </tr>
                            )
                            }





                        </tbody>
                    </table>
                </div>
                {/* <!-- /.card-body --> */}
            </div>
            {/* <!-- /.card --> */}

            <div className="modal fade" id="modal-default">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Default Modal</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Name</label>
                                        <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                </div>
                                {/* <!-- /.card-body --> */}

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
            </div>
            {/* <!-- /.modal --> */}
        </>
    )
}

export default TableData