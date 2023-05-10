import { useState } from 'react';
import './App.css';
import { arrForTable, result } from './services/constDump'

function App() {

  const [resultJson, setResultJson] = useState(result);

  const handleInput = ({ typeOfAspek, name, input }) => {
    const temporary = { ...resultJson };
    temporary[typeOfAspek][name] = Number(input);
    setResultJson(temporary)
  }

  const printTableRow = () => {
    return arrForTable.map((item, index) => {
      return (
        <tr key={item.id} style={{ height: '50px', border: '1px solid' }}>
          <td style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px',marginRight: '20px', borderRadius: '100%',overflow:'hidden',border:'0.5px solid grey' }}>
              <img alt='profile' src='./images/profile.png' style={{width:'100%'}} />
            </div>
            {item.name}
          </td>
          <td>
            <input
              id='aspek-penilaian-1'
              type='number'
              min={1}
              max={10}
              defaultValue={item.aspekPenilaian1}
              onChange={(event) => handleInput({ typeOfAspek: 'aspek_penilaian_1', name: item.id, input: event.target.value })} />
          </td>
          <td>
            <input
              id='aspek-penilaian-2'
              type='number'
              min={1}
              max={10}
              defaultValue={item.aspekPenilaian2}
              onChange={(event) => handleInput({ typeOfAspek: 'aspek_penilaian_2', name: item.id, input: event.target.value })} />
          </td>
          <td>
            <input
              id='aspek-penilaian-3'
              type='number'
              min={1}
              max={10}
              defaultValue={item.aspekPenilaian3}
              onChange={(event) => handleInput({ typeOfAspek: 'aspek_penilaian_3', name: item.id, input: event.target.value })} />
          </td>
          <td>
            <input
              id='aspek-penilaian-4'
              type='number'
              min={1}
              max={10}
              defaultValue={item.aspekPenilaian4}
              onChange={(event) => handleInput({ typeOfAspek: 'aspek_penilaian_4', name: item.id, input: event.target.value })} />
          </td>
        </tr>
      )
    })
  }

  const handleSimpan = () => {
    console.log(result);
  }

  return (
    <div>
      <h1 className='text-center'>Aplikasi Penilaian Mahasiswa</h1>
      <table className='table-main'>
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {printTableRow()}
        </tbody>
      </table>
      <div style={{ width: '50%', margin: '10px auto', display: 'flex', justifyContent: 'end' }}>
        <button className='btn-save' onClick={handleSimpan}>
          Simpan
        </button>
      </div>
    </div>
  );
}

export default App;
