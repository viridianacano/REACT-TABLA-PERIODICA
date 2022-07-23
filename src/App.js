import './App.css';
import Element from './components/Element/Element.component';
import data from './table_data';

function App() {

  const testRows = data.elementos.slice(0, 18);
  const topRows = data.elementos.slice(0, 90);
  const bottomRows = data.elementos.slice(90,118);
  
  return (
    <div className="App">

      <div className="top-table">
        {
          topRows.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
            <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo} /> 
          )
        }
        <div className="table-info">
          <Element key={8} num={8} masa={15.9} name={"Oxígeno"} symbol={"O"} group={"no-metal"} /> 
        </div>
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
