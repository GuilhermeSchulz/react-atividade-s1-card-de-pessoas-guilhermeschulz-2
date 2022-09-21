import './App.css';
import CardMaker from './components/Developer';


const data = [{
  name: "Dev Guilherme",
  age: 29,
  country: "Brasil"
}, 
{
  name: "Dev Henrique",
  age: 29,
  country: "Brasil"
},
{
  name: "Dev Douglas",
  age: 30,
  country: "Brasil"
},
{
  name: "Dev JJ",
  age: 22,
  country: "Brasil"
}
]

function App() {
  return (
   <div className='App'>
      {data.map((dev, index) =>
        <CardMaker key={index} name={dev.name} age={dev.age} country={dev.country}/>
        )}
   </div>
  );
}

export default App;
