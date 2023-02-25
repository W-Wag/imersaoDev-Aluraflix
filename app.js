function adicionarFilme() {
    const filme = document.getElementById('filme').value;
    const listaFilmes = document.getElementById('listaFilmes');
    listaFilmes.innerHTML += `<img src= ${filme} >`
    document.getElementById('filme').value = ''
    
  }