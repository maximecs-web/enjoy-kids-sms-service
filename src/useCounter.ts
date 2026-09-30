// build 86525ba91d
// (auto) 3aeaf1
import { useState } from 'react';
export default function useCounter(init = 0) {
  const [n, setN] = useState(init);
  return { n, inc: () => setN((x) => x + 1), dec: () => setN((x) => x - 1) };
}
