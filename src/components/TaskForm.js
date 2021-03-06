import React, { Component } from 'react';




class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.onClear();
        this.onCloseForm();
    }
    onClear = (e) => {
        this.setState({
            name: '',
            status: false
        })
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc
                                <i className="far fa-times-circle text-right" onClick={this.onCloseForm}></i>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required"
                            value={this.state.status}
                            onChange={this.onChange}>
                            <option value="1">Kích Hoạt</option>
                            <option value="0">Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="submit" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;