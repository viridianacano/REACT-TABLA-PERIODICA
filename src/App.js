import './App.css';
import Element from './components/Element/Element.component';
import data from './table_data';

function App() {

  const row1 = data.elementos.slice(0, 2);
  const row2_1 = data.elementos.slice(2, 4);
  const row2_2 = data.elementos.slice(4, 10);
  const row3_1 = data.elementos.slice(10, 12);
  const row3_2 = data.elementos.slice(12, 18);
  const row4 = data.elementos.slice(18,36);

  return (
    <div className="App">
      <div className="table">
        <div className="row">
        {
          row1.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
            <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo} /> 
          )
        }
        </div>

        <div className="row">
          <div className="sub-row">
          {
            row2_1.map( ( {nombre, simbolo, grupo, id, masa_atomica } ) => 
              <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
            )
          }
          </div>

          <div className="sub-row">
          {
            row2_2.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
              <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
            )
          }
          </div>
        </div>

        <div className="row">
          <div className="sub-row">
          {
            row3_1.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
              <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
            )
          }
          </div>

          <div className="sub-row">
          {
            row3_2.map( ( {nombre, simbolo, grupo, id, masa_atomica} ) => 
              <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
            )
          }
          </div>
        </div>
          
        <div className="row">
        {
          row4.map( ( {nombre, simbolo,grupo,id, masa_atomica} ) =>
            <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
          )
        }
        </div>
        
        <div className="row">
        {
          row4.map( ( {nombre, simbolo,grupo,id, masa_atomica} ) =>
            <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
          )
        }
        </div>

        <div className="row">
        {
          row4.map( ( {nombre, simbolo,grupo,id, masa_atomica} ) =>
            <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
          )
        }
        </div>

        <div className="row">
        {
          row4.map( ( {nombre, simbolo,grupo,id, masa_atomica} ) =>
            <Element key={id} num={id} masa={masa_atomica} name={nombre} symbol={simbolo} group={grupo}/> 
          )
        }
        </div>




      </div>
    </div>
  );
}

export default App;
