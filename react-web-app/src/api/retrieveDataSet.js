import bearerToken from "./bearerToken"

const jsonServerPort = 3000

const retrieveDataSet = async(query) => {
  /**
   * query === 'users' || 'orders'
   */
  const dataSet = await fetch(`http://localhost:${jsonServerPort}/${query}/`, {
    method: 'GET', 
    headers: {'Authorization': `Bearer ${bearerToken}`} 
  })
  .then((res) => res.json())
  .catch((e) => console.error(e, 'Make sure the json server is running.'))
  return dataSet 
}

export default retrieveDataSet