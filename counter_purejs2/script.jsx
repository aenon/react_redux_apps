// Counter app using Redux-like functions

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// component
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
  </div>
)

// store
const createStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }
  dispatch({}) // get the initial value
  // returns a Redux-like store
  return { getState, dispatch, subscribe} 
}

const store = createStore(counter)

const onIncrement = () => store.dispatch({type: 'INCREMENT'})
const onDecrement = () => store.dispatch({type: 'DECREMENT'})

const render = () => {
  document.getElementById('root').innerHTML = `
  <div class="app">
    <h1>${store.getState()}</h1>
    <button onClick="onIncrement()"> + </button>
    <button onClick="onDecrement()"> - </button>
  </div>    
  `
}

render() // renders the initial state when the page first loads

// the Redux store will call this any time an action
// has been dispatched
// note that subscribe() will not be called at beginning
store.subscribe(render)
