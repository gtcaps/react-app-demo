import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://6e15p5zvtg.execute-api.us-east-1.amazonaws.com/poc/v1/CXPProveedor/';

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">NIT</th>
          <th scope="col">Nombre</th>
          <th scope="col">Razon Social</th>
          <th scope="col">Telefono</th>
          <th scope='col'>Categoria</th>
          <th scope='col'>Criticidad</th>
          <th scope='col'>Estado</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((elemento: any) => (
            <tr onClick={ () => {console.log(elemento)} }>
              <td key={elemento.idProveedor}>{elemento.Nit}</td>
              <td key={elemento.idProveedor}>{elemento.Nombre}</td>
              <td key={elemento.idProveedor}>{elemento.RazonSocial}</td>
              <td key={elemento.idProveedor}>{elemento.Telefono}</td>
              <td key={elemento.idProveedor}>{elemento.Categoria}</td>
              <td key={elemento.idProveedor}>{elemento.Criticidad}</td>
              <td key={elemento.idProveedor}>{elemento.Estado}</td>
            </tr>
          ))  
        }
      </tbody>
    </table>

  );
}

export default App
