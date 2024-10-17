export function setupCounter(element: HTMLButtonElement) {
  console.info({ element });

  // Retrieve the counter value from local storage or default to 0
  let counter = parseInt(localStorage.getItem('counter') || '0', 10);

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
    // Save the counter value to local storage
    localStorage.setItem('counter', counter.toString());
  };

  element.addEventListener('click', () => setCounter(counter + 1));

  // Initialize the counter with the retrieved value
  setCounter(counter);
}
