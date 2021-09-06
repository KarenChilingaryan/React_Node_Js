import React, { PureComponent} from 'react';
import './detile.css'
import { Table } from 'antd';
import 'antd/dist/antd.css';

class Detile extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            task: {},
            params: props.location.pathname
        }
    }

    componentDidMount(){
        this.getUser(this.state.params)
    }

    async getUser(taskId) {
        await fetch(`http://localhost:8000/task/${taskId}`, {
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
                    task: response,
                });
            })
            .catch((error)=>{
                console.log(error)
            });
    }
render(){
    const task = [this.state.task];
    const { Column } = Table;
    return (
        <div className="container"> 
            <Table dataSource={task} key="detile" pagination={false}>
                <Column title="ID" dataIndex="index" key="index" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Created On" dataIndex="createdOn" key="createdOn" />
                <Column title="Owner" dataIndex="owner" key="owner" />
            </Table>
        </div>
    )
}
}
export default Detile;
