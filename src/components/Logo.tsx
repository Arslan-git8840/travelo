import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

import React from 'react'

const Logo = () => {
  return (
    <div>
        <span className={`${pacifico.className} text-3xl block text-transparent bg-clip-text`}
              style={{
                backgroundImage:
                  "linear-gradient(140deg, #2ad8a4 0.91%, #34bb93 100.57%)",
              }}>
            Mr.Travelo
        </span>
    </div>
  )
}

export default Logo