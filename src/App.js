import TextField from './components/TextField';
import Banner from './components/banner/Banner.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" />
      <TextField label="Cargo" />
      <TextField label="Imagem" />
      <TextField label="" />
    </div>
  );
}

export default App;
