import React from 'react'

class Counter2 extends React.Component {
    render () {
        // function that passes initial state of 0 and action
        const counter = (state = 0, action ) => {
            switch (action.type) {
                case 'INCREMENT':
                    return state + 1;
                case 'DECREMENT':
                    return state -1;
                default:
                    return state;
            }
        }

        // Redux Store
        const createStore = (reducer) => {
            let state;
            let listeners = [];

            // return current value of state
            const getState = () => state;

            // change internal state by dispatching an action
            // calculate new state by calling reducer and action
            const dispatch = (action) => {
                state = reducer(state, action);
                listeners.forEach(listener => listener());

            };

            const subscribe = (listener) => {
                listeners.push(listener);
                return () => {
                    listeners = listeners.filter(l => l !== listener);
                };

            };

            // dummy action to return initial value
            dispatch({});

            return { getState, dispatch, subscribe };

        };

        // store holds the current app's state object, dispatches actions, specify the reducer
        const store = createStore(counter);

        // this registers a callback when there is an action has been dispatched; you can update UI based on current app state

        const render = () => {
            document.body.innerText = store.getState();
        }
        store.subscribe(render);
        // renders initial state
        render();

        // counter increments on click
        document.addEventListener('click', () => {
            store.dispatch({ type: 'INCREMENT' });
        });


        return (
            <div className="counter">
                {counter}
                {render}
            </div>

        )

    }
}

export default Counter2;