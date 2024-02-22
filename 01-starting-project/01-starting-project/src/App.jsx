
import Header from './components/Header/Header.jsx';

import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';




// Header();---CREATE FIRST CUSTOM COMPONENT 



function App() {

 
  return (
  <>
      <header>
        <h1>MADE BY AASTHA! </h1>
      </header>
       <main>
      <Header />
      <CoreConcepts/>
      <Examples/>
      </main>
  </>
  );
}

export default App;
// props-pass data into component and to then use that data in there

