

import { CORE_CONCEPTS } from "./assets/data.js";
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";



// Header();---CREATE FIRST CUSTOM COMPONENT 



function App() {
  return (
    <div>

      <header>
        <h1>MADE BY AASTHA! </h1>
      </header>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}/>
           
           <CoreConcept
            {...CORE_CONCEPTS[1]}/>

           <CoreConcept
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}/>

             <CoreConcept
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
        <section id="Examples">
          <h2>Examples</h2>
          <menu>
  <TabButton label="Components "/>       
   </menu>


        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
// props-pass data into component and to then use that data in there