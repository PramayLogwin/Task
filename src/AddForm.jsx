
import React, { useState } from 'react'

export default function Form() {

    const [allData, setAllData] = useState([]);


    const [formData, setData] = useState(
        {
            firstname: "",
            middlename: "",
            lastname: "",
            address: "",
            education: "",
            bod: "",
            gender: "",
        }
    );
    const clickSubmit = (e) => {
        alert(`
           First Name : ${formData.firstname} , 
           Middle Name :  ${formData.middlename} ,
           Last Name : ${formData.lastname} , 
           Address : ${formData.address} ,
           Education : ${formData.education} , 
           Date Of Birth : ${formData.bod} ,
           Gender : ${formData.gender}`);
        e.preventDefault();

    }

    const addform = (e) => {
        e.preventDefault();

        setAllData([...allData, formData])
        setData({
            firstname: "",
            middlename: "",
            lastname: "",
            address: "",
            education: "",
            bod: "",
            gender: ""
        })
    }

    const removeList = (id) => {
        setAllData((allData) => {
            return allData.filter((item, index) => {
                return index !== id;
            })
        })
    };


    return (

        <>
            <button onClick={addform} className="registerbtn">Add More Form</button>

            <div className="container">
                <form onSubmit={clickSubmit}>
                    <h1>Login Form</h1>
                    <label> Firstname </label>
                    <input type="text" value={formData.firstname} onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} name="firstname" placeholder="Firstname" size={15} required="" />

                    <label> Middlename: </label>
                    <input type="text" value={formData.middlename} onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} name="middlename" placeholder="Middlename" size={15} required="" />

                    <label> Lastname: </label>
                    <input type="text" value={formData.lastname} onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} name="lastname" placeholder="lastname" size={15} required="" />

                    <label>Current Address : </label>
                    <input type="text" value={formData.address} onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} name="address" placeholder="Address" size={15} required="" />
                    <div>
                        <label>Education : </label>
                        <select value={formData.education} onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} name="education">
                            <option value="Course">Course</option>
                            <option value="BCA">BCA</option>
                            <option value="BBA">BBA</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                            <option value="M.Tech">M.Tech</option>
                        </select>
                    </div>

                    <label>Birth Of Date : </label>
                    <input type="date" value={formData.bod} onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} name="bod" /><br /><br />

                    {/* <label>Gender :</label>
                    <input type="radio" value="Male" name="gender" checked={allData.gender === "Male"} onChange={(e) => { setData({ ...formData, [e.target.name]: "Male" }) }} />
                    Male
                    <input type="radio" value="Female" name="gender" checked={allData.gender === "Female"} onChange={(e) => { setData({ ...formData, [e.target.name]: "Female" }) }} />
                    Female */}

                    <label>Gender :</label>
                    <input type="radio" value="Male" name="gender" checked={allData.gender === "Male"}  onChange={(e) => { setData({ ...formData, [e.target.name]: "Male" }) }} />
                    Male
                    <input type="radio" value="Female" name="gender" checked={allData.gender === "Female"} onChange={(e) => { setData({ ...formData, [e.target.name]: "Female" }) }} />
                    Female

                    <button type="submit" className="registerbtn"> Submit</button>

                </form>
            </div>

            {allData && allData.map((item, index) => {

                return (

                    <div className='container' key={index}>

                        <h1>Login Form</h1>
                        <label> Firstname </label>
                        <input type="text" name="firstname" placeholder="Firstname" value={item.firstname} readOnly size={15} required="" />

                        <label> Middlename: </label>
                        <input type="text" name="middlename" placeholder="Middlename" value={item.middlename} readOnly size={15} required="" />

                        <label> Lastname: </label>
                        <input type="text" name="lastname" placeholder="lastname" size={15} value={item.lastname} readOnly required="" />

                        <label>Current Address : </label>
                        <input type="text" name="address" placeholder="Address" size={15} value={item.address} readOnly required="" />

                        <div>
                            <label>Education : </label>
                            <select name="education" value={item.education} readOnly>
                                <option name="education" value={item.education} readOnly>{item.education}</option>
                            </select>
                        </div>

                        <label>Birth Of Date : </label>
                        <input type="date" name="bod" value={item.bod} readOnly /><br /><br />

                        <label type='radio' name="gender" readOnly >Gender :
                            <input type="radio" checked={item.gender === "Male"} />
                            Male
                            <input type="radio" checked={item.gender === "Female"} />
                            Female
                        </label>
                        <button className='registerbtn' onClick={() => removeList(index)}>Remove</button>

                    </div>

                )
            })}
        </>

    )
}



