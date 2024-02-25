import React from 'react'

export default function Tab({children,buttons,Buttonscontainer="menu"}) {
  // const ButtonsContainer = buttonsContainer;
  return (
   <>
   <Buttonscontainer>{buttons}</Buttonscontainer>
   {children}
   </>
   
  );
}

