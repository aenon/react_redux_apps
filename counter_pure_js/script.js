// Counter app using pure JavaScript

// this will be replaced by a Redux store
// other Flux implementations might have multiple stores
let state = 0

const incrementCounter = (state) => {
  return state + 1;
};

const decrementCounter = (state) => {
  return state - 1;
};

const counter = (action) => {
  state += inc // reducer
  render()
}

// this will be replaced by ReactDOM.render(), React components and actions
const render = () => {
  document.getElementById('root').innerHTML = `
    <div class="app">
      <h1 id="state">${state}</h1>
      <button onClick="counter()"> - </button>
      <button onClick="counter(1)"> + </button>
    </div>    
  `
}

window.onload = () => {
  render()
}