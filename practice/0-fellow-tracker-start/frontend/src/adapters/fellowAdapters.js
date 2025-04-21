import handleFetch from "./handleFetch"

export const getAllFellows = async () => {
  const [allFellows, error] = await handleFetch('/api/fellows/')
  return [allFellows, error];
}

export const getFellowById = async (id) => {
  const [fellow, error] = await handleFetch(`/api/fellows/${id}`);
  return [fellow, error];

}

export const createFellow = async (fellowName) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ fellowName }) // make sure this object matches req.body on the server
  }

  const [newFellow, error] = await handleFetch(`/api/fellows/`, options);
  return [newFellow, error];
}

export const deleteFellow = async (id) => {
  const options = {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  }

  const [deletedFellow, error] = await handleFetch(`/api/fellows/${id}`, options);
  return [deletedFellow, error];

}

export const updateFellowName = async (id, updatedFellowName) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ updatedFellowName }) // make sure this object matches req.body on the server
  }

  const [updatedFellow, error] = await handleFetch(`/api/fellows/${id}`, options);
  return [updatedFellow, error];
}