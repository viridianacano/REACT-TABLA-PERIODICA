import './App.css';
import Element from './components/Element/Element.component';
import data from './table_data';

function App() {

  const row1 = data.elementos.slice(0, 2);
  const row2 = data.elementos.slice(2, 10);
  const row3 = data.elementos.slice(10, 18);
  const lastRows = data.elementos.slice(18,90);
  const bottomRows = data.elementos.slice(90,118);
  
  return (
    <div className="App">
      <div className="top-table">
      {
        row1.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
          <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo} /> 
        )
      }
      {
        row2.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
          <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo} /> 
        )
      }
      {
        row3.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
          <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo} /> 
        )
      }
      {
        lastRows.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
          <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo} /> 
        )
      }
      </div>

      <div className="bottom-table">
      {
        bottomRows.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
          <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo} /> 
        )
      }
      </div>
    </div>
  );
}

export default App;
