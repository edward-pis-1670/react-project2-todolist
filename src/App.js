import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ tasks: tasks });
    }
  }
  // generateData = () => {
  //     var tasks = [
  //         {
  //             id: this.generateId(),
  //             name: 'Hoc lap trinh',
  //             status: true
  //         },
  //         {
  //             id: this.generateId(),
  //             name: 'Choi game',
  //             status: false
  //         },
  //         {
  //             id: this.generateId(),
  //             name: 'Nau com',
  //             status: true
  //         }
  //     ];
  //     this.setState({
  //         tasks: tasks
  //     })
  //     localStorage.setItem('tasks', JSON.stringify(tasks))
  // }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  generateId() {
    return this.s4() + this.s4() + "" + this.s4() + "-" + this.s4() + "-";
  }
  onToggleForm = (e) => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id = this.generateId();
    tasks.push(data);
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({ tasks: tasks });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  findIndex(id) {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({ tasks: tasks });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };
  render() {
    var { tasks, isDisplayForm } = this.state;
    var elemtTaskForm = isDisplayForm ? (
      <TaskForm onCloseForm={this.onCloseForm} onSubmit={this.onSubmit} />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {elemtTaskForm}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            &nbsp;
            {/* <button type="button" className="btn btn-success" onClick={this.generateData}>
                            Generate Data
                </button> */}
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
