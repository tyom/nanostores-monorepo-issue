# Supporting repo for issue in nanostores/react

[Issue #28](https://github.com/nanostores/react/issues/28).
 
* Clone, run `pnpm install` and `pnpm start`;
* Go to the app in the browser and open the console;
* Observe how the two hooks affect the subscription.

The first button increments the count within React component but does nothing for the subscription outside. The second button updates the count in both React component and the subscription outside of React (browser console).
