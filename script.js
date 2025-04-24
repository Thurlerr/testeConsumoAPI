const body = document.querySelector('body')
const searchBtn = document.querySelector('#searchBtn')
const input = document.querySelector('#inputId')


searchBtn.addEventListener('click', () => {

      let idTodo = input.value
      let taskStatus
      fetch(`https://jsonplaceholder.typicode.com/todos/${idTodo}`)
      .then(response => response.json())
      .then(data => {

            if (data.completed == true) {
                  taskStatus = "Completa!"
            }else{
                  taskStatus = "Em andamento."
            }

            const div = document.createElement('div')
            div.innerHTML = `
                  <h2>Tarefa: ${data.title}</h2>
                  <p>Status: ${taskStatus}</p>
            `
            body.appendChild(div)
      })

      
})

//criar tarefa

const createTaskBtn = document.querySelector('#createTaskBtn')

const idInput = document.querySelector('#taskId')
const titleInput = document.querySelector('#taskTitle')
const statusInput = document.querySelector('#taskStatus')

createTaskBtn.addEventListener('click', () =>{
      event.preventDefault() //evita que o form do html dispare carregamento da página
      console.log('botão clicado')
      fetch('https://jsonplaceholder.typicode.com/todos/', { //tirar o barra?
            method: 'POST',
            body: JSON.stringify({
              title: titleInput.value,
              body: statusInput.value, //colocar o status aqui
              userId: idInput.value,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((data) => { //colocar conteúdo na DOM aqui
                  const div = document.createElement('div')
                  div.id = "postOutput"
                  div.innerHTML = `
                  <h1>Tarefa salva com sucesso.</h1>
                  <h2>Titulo: ${data.title}</h2>
                  <p>Status: ${data.body}</p>
                  <p>id: ${data.userId}</p>
            `
            body.appendChild(div)
            });
})