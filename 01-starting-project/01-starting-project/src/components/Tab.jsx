import React from 'react'

export default function Tab({children,buttons}) {
  return (
   <>
   <menu>{buttons}
   {children}
    </menu></>
   
  );
}

