import React from 'react'
import AdminEvWo from './AdminEvWo'
import AdminCourses from './AdminCourses'
import AdminJobListings from './AdminJobListings'
import AdminJobApplications from './AdminJobApplications'
import AdminEnquiries from './AdminEnquiries'

const AdminHome = () => {
  return (
    <>
    <h1 className="text-3xl font-bold text-center my-6">Admin Page</h1>
      <AdminEnquiries/>
      <AdminJobListings/>
      <AdminJobApplications/>
      {/* <AdminEvWo/>
      <AdminCourses/> */}
    </>
  )
}

export default AdminHome
