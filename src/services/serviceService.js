import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/services`

async function create(service) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(service)

  })
  return res.json()
}

async function getAll() {
  const res = await fetch (BASE_URL)
  return res.json()
}

export {
  create,
  getAll,

}