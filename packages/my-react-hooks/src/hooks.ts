import { useStore } from '@nanostores/react';
import * as store from '@monorepo/my-store';

export function buildHooks({ $count }: typeof store) {
  function useCounter() {
    const count = useStore($count);

    return [count, () => $count.set(count + 1)] as const;
  }

  return { useCounter };
}
