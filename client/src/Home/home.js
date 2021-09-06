import React, { PureComponent } from 'react';
import './Home.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detile from '../Detile/detile';
import Tasks from '../Tasks/tasks';
import 'antd/dist/antd.css';

class Home extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            flag: false,
            createTask: {}
          };
    }
    componentDidMount(){
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
                this.setState({
                    flag: false
                })
            })
            .catch((error)=>{
                console.log(error)
        })
    }
    render() {
        return(
            <div>
            <Router>
                <div>
                <Switch>
                    <Route exact path='/' component={Tasks}/>
                    <Route exact path='/:id' component={Detile}/>
                </Switch>
                </div>
            </Router>
            </div>
            
        )
    };

}

export default Home;
