import React, { useState, useEffect } from 'react';
import api from './services/api'
import './app.css';
import './global.css';
import './sidebar.css';
import './main.css';
import Notes from './Componentes/Notes';






function App() {


  const [title, setTitles] = useState('')
  const [notes, setNotes] = useState('')
  const [allNotes, setAllNotes] = useState([])



  useEffect(() => {

    async function getAllNotes() {
      const response = await api.get('/anotacoes',);
      setAllNotes(response.data)
    }
    getAllNotes();
  }, [])


  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/anotacoes', {
      title,
      notes,
      priority: false
    })

    setTitles('');
    setNotes('');

    setAllNotes([...allNotes, response.data])



  }

  useEffect(() => {
    function enableSubimitButton() {
      let btn = document.getElementById('btn_submit')
      btn.style.background = '#FFD3CA';
      if(title && notes){
        btn.style.background = '#EB8F7A';
      }
    }

    enableSubimitButton()

  }, [title,notes])


  return (
    <div id="app">
      <aside>
        <strong>Caderno de notas</strong>
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title">Titulo da Anotação</label>
            <input value={title} required onChange={event => setTitles(event.target.value)}></input>
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea value={notes} required onChange={event => setNotes(event.target.value)}></textarea>
          </div>

          <button id='btn_submit' type="submit">Salvar</button>
        </form>
        
      </aside>
      <main>

        <ul>
          {allNotes.map(data => (
            <Notes data={data}></Notes>
          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;
