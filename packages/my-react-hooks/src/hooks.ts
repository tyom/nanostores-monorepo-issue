import { useStore } from '@nanostores/react';
import { $count } from '@monorepo/my-store';

export function useCounter() {
  const count = useStore($count);

  return [count, () => $count.set(count + 1)] as const;
}
