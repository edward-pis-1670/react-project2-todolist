import React, { Component } from "react";

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? 'label label-danger' : 'label label-success'}
                        onClick={this.onUpdateStatus}>{task.status === true ? 'Active' : 'Hide'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <i className="fas fa-pencil-alt mr-5"></i>
            Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
                        <i className="fa fa-trash-alt mr-5"></i>Xóa
          </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
