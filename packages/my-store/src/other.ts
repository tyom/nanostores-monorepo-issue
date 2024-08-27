import { $count } from './store';

export function watchCount() {
  $count.subscribe((count) => console.log('count changed', count));
}
