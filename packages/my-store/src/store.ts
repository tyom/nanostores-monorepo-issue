import { atom, onMount } from 'nanostores';

export const $count = atom(0);

onMount($count, () => {
  console.log('onMount $count');
});
