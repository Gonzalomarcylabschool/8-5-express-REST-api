/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAllFellows, createFellow } from '../adapters/fellowAdapters';
import { getAllStaffs, createStaff } from '../adapters/staffAdapters';

const Home = () => {
  // Get all fellows from the serverstateconst handleCreateFellow = async (e) => {
 
  const [fellows, setFellows] = useState([]);
  // form input state
  const [newFellowName, setNewFellowName] = useState('');
  const [staff, setStaff] = useState([]);
  const [newStaffName, setNewStaffName] = useState('');

  // Get me the most up to date full list of fellows
  useEffect(() => {
    const doFetch = async () => {
      const [allFellows, error] = await getAllFellows();
      setFellows(allFellows);
      const [allStaff, error2] = await getAllStaffs();
      setStaff(allStaff);
    }
    doFetch();
  }, [])

  // Use the form data to create a POST request to create a new fellow
  const handleCreateFellow = async (e) => {
    e.preventDefault();
    console.log(`Creating fellow: ${newFellowName}`);
    // use the createFellow adapter with the form input
    createFellow(newFellowName);

    const [allFellows, error] = await getAllFellows();
    setFellows(allFellows);
    
    setNewFellowName('');
  }

  const handleCreateStaff = async (e) => {
    e.preventDefault();
    console.log(`Creating staff: ${newStaffName}`);
    // use the createFellow adapter with the form input
    createStaff(newStaffName);

    const [allStaff, error] = await getAllStaffs();
    setStaff(allStaff);
    
    setNewStaffName('');
  }

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleCreateFellow}>
        <label htmlFor="name">Add A New Fellow</label>
        <input type="text" name="name" id="name" value={newFellowName} onChange={(e) => setNewFellowName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          fellows.map((fellow) => {
            return <li key={fellow.id}>
              <Link to={`/fellows/${fellow.id}`}>
                {fellow.name} (Fellow {fellow.id})
              </Link>
            </li>
          })
        }
      </ul >
      <form onSubmit={handleCreateStaff}>
        <label htmlFor="name">Add A New staff</label>
        <input type="text" name="name" id="name" value={newStaffName} onChange={(e) => setNewStaffName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          staff.map((staff) => {
            return <li key={staff.id}>
              <Link to={`/staff/${staff.id}`}>
                {staff.name} (Staff {staff.id})
              </Link>
            </li>
          })
        }
      </ul >
    </>
  )
}

export default Home;