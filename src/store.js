import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user: {id: 'abc123',name: 'Adam Jahr'},
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      events: [
        {id: 1, title: '...', organizer: '...'},
        {id: 2, title: '...', organizer: '...'},
        {id: 3, title: '...', organizer: '...'},
        {id: 4, title: '...', organizer: '...'}
      ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, events) {
      state.events = events
    }
  },
  actions: {
    createEvent({commit}, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT',event)
      })
    },
    //why payload inside of {} : The payload in both Actions and Mutations can be
    //                           a single variable OR an object
    fetchEvents({commit},{perPage, page}) {
      EventService.getEvents(perPage, page)
      .then(response => {
        console.log('Total events are' + response.headers['x-total-count'])
        commit('SET_EVENT', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  },
  getters: {
    // catLength: state => {
    //   return state.categories.length
    // },
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // },
    // activeTodosCount: state => {
    //   return state.todos.filter(todo => !todo.done).length
    // }
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
