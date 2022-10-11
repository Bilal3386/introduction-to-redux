/*
 *importing redux from redux package
 */
const redux = require("redux");

/*
 * adding Reducer function
 * this reducer function which will produce new state snapshot
 * reducer has the goal of spitting out a new state snapshot, whenever an action reaches it.
 * and when we run this code for the first time the reducer will be also executed with a default action, that should spit out initial state
 * it will be call by redux library
 * it will always receives two pieces of input or two parameters
 * the old or existing state and the action that was dispatched
 * and then this reducer function return a certain output or new state object
 * these parameters will received by reducer by default
 */

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

/*
 * Creating central data (state) store by simply calling redux
 * redux.createStore this is method exposed by redux library
 * this store will manage some data and that data which it manages is in the end determined by the reducer function
 */

const store = redux.createStore(counterReducer);

/**
 * adding subscription
 * it does not need any parameters
 * in that we need an action that can be dispatched
 * inside this function we can reach out to the store and call getState
 * getState is a method is available on the store
 */

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

/**
 * Now making redux aware of this subscriber function
 * and tell it that this function should be executed whenever our state changes.
 */

store.subscribe(counterSubscriber);

/**
 * dispatch is a method which dispatch an action
 * action is a JavaScript object
 * it's JavaScript object with type of property which adds an identifier
 */
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
