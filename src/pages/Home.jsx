// import React, { Children } from 'react'
// import First from '../component/First'
// import { Link } from 'react-router'

// export default function Home() {
//   return (
//     <div>
//       <First itam = "kottu">
//         <span>price is 350</span>
//       </First>
//       <First itam = "Rice"></First>
//       <First itam = "biriyani"></First>
//       <Link to = "/About">Clic That Link And Go to About page</Link>
//       <Link to = "/Contact">Clic That Link And Go to Contact page</Link>
//     </div>
//   )
// }

import React, { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
