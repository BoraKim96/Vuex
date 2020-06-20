import axios from 'axios'
//axios 

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    //json으로 보내고 json으로 받겠다
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit='+perPage+'&_page='+page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event){
    return apiClient.post('/events',event)
  }
}
