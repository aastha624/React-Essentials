import { useState } from 'react';
import Tab from './Tab.jsx';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../assets/data.js';

export default function Examples() {

    
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic.</p>;

  // here using another way ternary operater using state
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
        <Tab buttons={<><TabButton
        isSelected={selectedTopic === 'components'}
        onSelect={() => handleSelect('components')}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === 'jsx'}
        onSelect={() => handleSelect('jsx')}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === 'props'}
        onSelect={() => handleSelect('props')}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === 'state'}
        onSelect={() => handleSelect('state')}
      >
        State
      </TabButton>
      </>
    }
    ></Tab>
    <h2>Examples</h2>
    <menu>
    
    </menu>

    {/* <div id="tab-content">
      {/* here deriving and outputing data based on state ---use datajs file element import state here and te same che button ne so use use state array */}
      {/* <h3>{EXAMPLES[selectedTopic].title}</h3> */}
      {/* <p>{EXAMPLES[selectedTopic].description}</p> */}
      {/* <pre> */}
        {/* <code>{EXAMPLES[selectedTopic].code}</code> */}
      {/* </pre> */}
    {/* </div> */}
    {tabContent}
  </section>
  );
}

