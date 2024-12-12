# Firebase Offline Behavior and onSnapshot Listener

This repository demonstrates a potential issue with Firebase's offline behavior when using the `onSnapshot` listener.  If the client is offline and there's no cached data, the listener might fail silently or behave unexpectedly.

The `bug.js` file showcases the problem, and `bugSolution.js` provides a solution to handle offline scenarios gracefully.

## Steps to Reproduce

1. Clone the repository.
2. Set up a Firebase project and configure your project accordingly.
3. Run `bug.js` in an environment that allows you to simulate an offline state.
4. Observe the behavior.  The listener might not update properly.

## Solution

The `bugSolution.js` file demonstrates a solution incorporating error handling and offline persistence.  It includes proper handling of potential errors and the use of `enablePersistence` to enable data caching.