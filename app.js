function adicionarFilme() {
    const filme = document.getElementById('filme').value;
    const listaFilmes = document.getElementById('listaFilmes');
    if(filme.length === 0) {
    return alert('campos inválidos');
    }

      listaFilmes.innerHTML += `<img src= ${filme} >`
    document.getElementById('filme').value = ''
  }

