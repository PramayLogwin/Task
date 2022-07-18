import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './Form';
import Navbar from './Navbar';
import AddForm from './AddForm';
import TodoAgain from './TodoAgain';
import HomePage from './HomePage';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/addform" element={<AddForm />} />          
          <Route path="/todoagain" element={<TodoAgain />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
