import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditTender() {
    const [name,setname] = useState('')
    const [description,setdescription] = useState('')
    const [startDate, setstartDate] = useState('')
    const [endDate, setendDate] = useState('')
    const [bufferTime, setbufferTime] = useState('')


    const { id } = useParams();


    useEffect(() => {
        try{
            axios.get(`http://localhost:5000/api/getTender/${id}`)
            .then((res) => {
                const tenderData = res.data
                console.log(tenderData)
                setname(tenderData.name);
                setdescription(tenderData.description);
                setstartDate(tenderData.startDate);
                setendDate(tenderData.endDate);
                setbufferTime(tenderData.bufferTime);
            });
        } catch(error){
             console.log(error);
        }
    },[])
    
    const Updateform = async (e) => {
        e.preventDefault();
        // Basic form validation
        console.log(name,description,startDate,endDate,bufferTime);

        try {
            const response = await axios.post(`http://localhost:4000/api/UpdateTender/${id}`, formData)
            if (response.status === 200) {
                toast.success(response.data.message, { position: "top-right" })
                setFormData(initialFormData); // Reset the form fields
                navigate('/')
            } else {
}

        } catch (error) {
            console.error('Error inserting data:', error);
        }
}
console.error('Failed to insert data');



  return (
    <>
      <div className="modal-body">
                            <form onSubmit={Updateform}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Name</label>
                                        <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name"  value={name}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Name</label>
                                        <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name"  value={description}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Name</label>
                                        <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name"  value={startDate}/>
                                    </div>
                                    
                                </div>
                                {/* <!-- /.card-body --> */}

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
    </>
  )
}

export default EditTender
