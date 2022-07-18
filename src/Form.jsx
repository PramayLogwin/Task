import React, { useState } from 'react';
import './form.css';
  


export default function Form() {

  const [formData, setData] = useState(
    {
      firstname: "",
      middlename: "",
      lastname: "",
      address: "",
      education: "",
      bod: "",
      gender: ""
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

  return (

    <>
      <form onSubmit={clickSubmit}>

        <div className="container">
          <h1>Login Page</h1>

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

          <label>Gender :</label>
          <input type="radio" value="Male" name="gender" onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} />
          Male
          <input type="radio" value="Female" name="gender" onChange={(e) => { setData({ ...formData, [e.target.name]: e.target.value }) }} />
          Female

          <button type="submit" className="registerbtn" onClick={clickSubmit}> Submit</button>
        </div>


      </form>

    </>

  )
}
