import React from 'react'
import { createStore } from 'redux'

class Counter extends React.Component {
    render () {
        // reducer
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

export default Counter;