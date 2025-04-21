import handleFetch from "./handleFetch"

export const getAllStaffs = async () => {
  const [allStaff, error] = await handleFetch('/api/staff/')
  return [allStaff, error];
}

export const getStaffById = async (id) => {
  const [staff, error] = await handleFetch(`/api/staff/${id}`);
  return [staff, error];

}

export const createStaff = async (staffName) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ staffName }) // make sure this object matches req.body on the server
  }

  const [newFellow, error] = await handleFetch(`/api/staff/`, options);
  return [newFellow, error];
}

export const deleteStaff= async (id) => {
  const options = {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  }

  const [deletedFellow, error] = await handleFetch(`/api/staff/${id}`, options);
  return [deletedFellow, error];

}

export const updateStaffName = async (id, updatedStaffName) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ updatedStaffName }) // make sure this object matches req.body on the server
  }

  const [updatedStaff, error] = await handleFetch(`/api/staff/${id}`, options);
  return [updatedStaff, error];
}