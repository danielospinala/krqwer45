import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
    this.updateTarea = this.updateTarea.bind(this);
          this.keyPress = this.keyPress.bind(this);
      };

      updateTarea(event) {
    this.setState({newTask: event.target.value});
    }

    keyPress(event){
      event.preventDefault();
    if (this.state.newTask) {

      this.setState({
        tasks: this.state.tasks.concat([{
          id: this.state.tasks.length+1,
          name: this.state.newTask,
          done: false
        }]),
        newTask:""
      })

    }
        //  event.key === 'Enter' ? event.preventDefault(): console.log("no")
             // put the login here

          }

tachar(id){
  const newTask = this.state.tasks.filter(n =>{
    if (n.id === id) {
      n.done=!n.done
    }
    return n
  });
  this.setState({
    tasks: newTask
  })
  }






  render() {

    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={task.done?"done":''} key={task.id} onClick={()=>this.tachar(task.id)}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.keyPress}>
            <input
            type="text" id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={this.state.newTask}
            onChange={this.updateTarea}
            className={this.state.newTask?"":"error"}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
