

export default function TabButton({children , onSelect}) {
  console.log('APP COMPONENT EXECUTING');
  return (
   <li>
    <button onClick={onSelect}>{children}</button>
    {/* function pass as a value to on click function */}
   </li> 
  );
}
