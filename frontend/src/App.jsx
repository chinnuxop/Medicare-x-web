import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";
import Service from "./pages/Service";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import Contact from "./pages/Contact";
import Login from "./components/LoginPage";
import DHome from "./pages/DHome";
import List from "./doctor/List";
import EditProfile from "./doctor/EditProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />

      <Route path="/services" element={<Service />} />
      <Route path="/services/:id" element={<ServiceDetailPage />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/doctor-admin/login" element={<Login />} />
      <Route path="/doctor-admin/:id" element={<DHome />} />
      <Route path="/doctor-admin/:id/appointments" element={<List />} />

      <Route path="/doctor-admin/:id/profile/edit" element={<EditProfile />} />

    </Routes>
  )
}

export default App