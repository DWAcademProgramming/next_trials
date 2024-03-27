// React Base Imports
import { useState } from 'react';

// Data Imports
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

// Component Imports
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

// The Main Build
function App() {
  const [selectedTopic, setSelectedTopic] = useState(); 

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic); 
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              onSelect={()=> handleSelect('components')}
              isSelected={selectedTopic === 'components'}
            >
                Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={()=> handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={()=> handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'}
              onSelect={()=> handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {
            !selectedTopic ? 
              (<p>Please select a topic.</p>) : (
                <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div> 
            )
          } 
        </section>
      </main>
    </div>
  );
}

export default App;
