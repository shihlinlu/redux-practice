// expect library for test assertions: <script src="https://wzrd.in/standalone/expect@latest"></script>
// deep freeze to ensure code is free from mutations: <script src="https://wzrd.in/standalone/deep-freeze@latest></script>

// slice method allows you to add, remove, and change items in arrays without mutating them

const addCounter = (list) => {
    // add new item at end of array
    return [...list, 0];
};

const removeCounter = (list, index) => {
    return [
        ...slice(0, index),
        ...concat(list.slice(index + 1)
    ];
};

// replace a single value in array without mutating it
// take slice before index, concat it with a single item array with new value, and concat with the rest of the original array
const incrementCounter = (list, index) => {
    return [
        ...slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
};

// append 0 to end of past array
const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
};

const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];


    deepFreeze(listBefore);

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
};

const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed.');