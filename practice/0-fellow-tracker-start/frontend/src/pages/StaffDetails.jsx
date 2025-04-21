import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getStaffById, updateStaffName, deleteStaff } from '../adapters/staffAdapters';

const StaffDetails = () => {
  const [staff, setFellow] = useState({})
  const [newStaffName, setNewStaffName] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // on load, get the fellow by id
  useEffect(() => {
    const doFetch = async () => {
      const [staff, error] = await getStaffById(id);
      if (error) {
        navigate('/');
      }
      setFellow(staff);
    }
    doFetch();
  }, [])

  // when the delete button is pressed, send a DELETE request
  const handleDeleteStaff = async () => {
    await deleteStaff(id);
    
    navigate('/');
  }

  // when the form is filled out, send a PATCH request
  const handleUpdateFellow = async (e) => {
    e.preventDefault();
    await updateStaffName(id, newStaffName);
    const [fellow, error] = await getStaffById(id);
    if (error) {
      navigate('/');
    }
      setFellow(fellow);
    setNewStaffName('');
  }

  return (
    <>
      <Link to='/'>Go Home</Link>
      <h1>Staff Details</h1>
      <p>Name: {staff.name}</p>
      <p>Id: {staff.id}</p>
      <form onSubmit={handleUpdateFellow}>
        <label htmlFor="name">Update Staff Name</label>
        <input type="text" name="name" id="name" value={newStaffName} onChange={(e) => setNewStaffName(e.target.value)} placeholder='New Name' />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDeleteStaff} className='danger'>Delete Staff</button>
    </>
  )
}

export default StaffDetails;