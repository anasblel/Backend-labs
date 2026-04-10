console.log('🟢 STEP 1: I run first (synchronous code)');
setTimeout(() => {
  console.log('🟡 STEP 3: I run after 0ms delay (macro task)');
}, 0); // Even with 0ms delay, still waits!
Promise.resolve()
  .then(() => {
    console.log('🔵 STEP 2: I run before setTimeout (micro task)');
  });
console.log('🟢 STEP 4: I run second (synchronous code)');