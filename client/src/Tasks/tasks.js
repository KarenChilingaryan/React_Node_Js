import React, { PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Button } from 'antd';
import 'antd/dist/antd.css';
import './Tasks.css'
import ModalComponent from '../Modal/modal';


class Tasks extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            flagModal: false,
            task: {}
          };
    }

    componentDidMount() {
        fetch("http://localhost:8000/task", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res)=> res.json())
            .then(response => {
                if (response.error){
                    throw response.error;
                }
                this.setState({
                    tasks: response,
                });
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    async addTask(task){
        let body = JSON.stringify(task);
        await fetch("http://localhost:8000/task", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: body,
        })
            .then((res)=> res.json())
            .then(response => {
                if (response.error){
                    throw response.error;
                }
                this.state.tasks.push(response);
                this.setState({
                    flagModal: false,
                })
            })
            .catch((error)=>{
                console.log(error)
        })
    }

    showModal = ()=>{
        this.setState({
            flagModal: true
        })
    }

    handleCancel = () => {
        this.setState({
            flagModal: false
        })
    }

    onFinish = (values)=>{
        this.setState({
            task: {
                index: values.id, 
                name: values.name,
                createdOn: values.crated_on._d.toJSON().slice(0,10),
                owner: values.owner
            }
        })
        this.addTask(this.state.task);
    }

    render(){
        const { Column } = Table;
        const arr = [...this.state.tasks];
        const color = 'volcano';
        return (
            <div className="table">
                <div>
                    <Button onClick={this.showModal}>Add Task</Button>
                </div>
                <Table dataSource={arr} key="tasks" pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}} hideOnSinglePage={5}>
                    <Column title="ID" dataIndex="index" key="index" />
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Created On" dataIndex="createdOn" key="createdOn" />
                    <Column title="Owner" dataIndex="owner" key="owner" />
                    <Column
                        title="Action"
                        key="owner"
                        render={(text, record) => (
                            <Tag color={color} key={record._id}>
                                <Link to={{pathname: '/'+record._id}}> View </Link>
                            </Tag>
                        )}
                    />
                </Table>
                {
                    this.state.flagModal &&
                    <ModalComponent
                        data={this.state}
                        onEdit={(task) => this.addTask(task)}
                        onHandleCancel={() => this.handleCancel()}
                        onFinishAdd={(value) => this.onFinish(value)}
                    />
                }
            </div>
            
        )
    }
}
export default Tasks;
