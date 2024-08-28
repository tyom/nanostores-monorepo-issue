import { buildHooks } from '@monorepo/my-react-hooks';
import { useStore } from '@nanostores/react';
import * as store  from '@monorepo/my-store';

const { useCounter } = buildHooks(store);

export function useCounterDirect() {
  const count = useStore(store.$count);

  return [count, () => store.$count.set(count + 1)] as const;
}

store.watchCount();

const CustomHookPackage = () => {
  const [count, increment] = useCounter();

  return (
    <div className="card">
      <h2>Custom hook package</h2>
      <button onClick={increment}>count is {count}</button>
    </div>
  );
};

const DirectAccess = () => {
  const [count, increment] = useCounterDirect();

  return (
    <div className="card">
      <h2>Access the store directly</h2>
      <button onClick={increment}>count is {count}</button>
    </div>
  );
};

function App() {
  return (
    <>
      <CustomHookPackage />
      <DirectAccess />
    </>
  );
}

export default App;
