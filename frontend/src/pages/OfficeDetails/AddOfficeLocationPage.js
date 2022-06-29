import axios from "axios"
import React from "react"
import { useNavigate} from "react-router-dom"


import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

let initialValues = {
    buildingName: "",
    address: "",
    lati: "",
    longi: ""
};

const AddOfficeLocation = () => {
    const [user,token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewOfficeLocation);

    async function postNewOfficeLocation() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/office/addoffice", formData,{
                headers: {
                    Authorization: 'Bearer ' + token
                }})
                navigate("/")
        } catch (error) {
            console.log(error.message)
            
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Building_Name:{""}
                    <input
                        type="text"
                        name="building name"
                        value={formData.buildingName}
                        onChange={handleInputChange}
                    />    
                </label>
                <label>
                    Address:{""}
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />    
                </label>
                <label>
                    Latitude:{""}
                    <input
                        type="float"
                        name="lati"
                        value={formData.lati}
                        onChange={handleInputChange}
                    />    
                </label>
                <label>
                    Longitude:{""}
                    <input
                        type="float"
                        name="longi"
                        value={formData.longi}
                        onChange={handleInputChange}
                    />    
                </label>
            </form>
        </div>
    )

}

export default AddOfficeLocation