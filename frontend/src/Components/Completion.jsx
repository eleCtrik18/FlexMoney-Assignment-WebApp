import React from 'react'
import './Completion.css'
import imgg from './../1.png'
function Completion() {

    //After completion of payment just return to homepage
    const ReturnToHome = () => {
        window.location.reload()
    }
    return (
        <div className="completionContainer">
            <img src={imgg} />
            <h>Payment Completed</h>
            {/* <div className="details">
                <h>Name :{String(localStorage.getItem("name"))} </h>
                <h>Age : {String(localStorage.getItem("age"))} years </h>
                <h>Start Date : {String(localStorage.getItem("startDate"))} </h>
                <h>Batch : {String(localStorage.getItem("batchNumber"))} </h>
                <h>Fees Paid : 500 Rs. </h>
            </div> */}
            <button type="button"
                onClick={ReturnToHome}
            >
                Home <i class="fas fa-home"></i></button>
        </div>
    )
}

export default Completion
