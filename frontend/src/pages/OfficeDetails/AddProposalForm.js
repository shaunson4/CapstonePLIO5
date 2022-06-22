import axios from "axios"
import React from "react"
import { useNavigate} from "react-router-dom"


import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

let initialValues = {
    building_id: "",
    designer_name: "",
    designer_company: "",
    bid_amount: "",
    bid_desc: ""
};

const AddProposalPage = () => {
    const [user,token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewProposal);

    async function postNewProposal() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/office/", formData,{
                headers: {
                    Authorization: 'Bearer ' + token
                })
                navigate("/")
        } catch (error) {
            console.log(error.message)
            
        }
    }

}

export default AddProposalPage