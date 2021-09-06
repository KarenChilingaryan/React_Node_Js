import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, DatePicker, InputNumber} from 'antd';

class ModalComponent extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            ...props.data,
          };
    }
    
    render() {
        const modalFlag = this.state.flagModal
        return(
            <div>
            <Modal title="Basic Modal"
                key="modal"
                visible={modalFlag}
                closable={false}
                footer={[
                <Button form="normal_login" key="submit" htmlType="submit" >
                    add
                </Button>,
                <Button onClick={this.props.onHandleCancel}>
                    close
                </Button>
                ]}
                
            >
            <Form
                name="normal_login"
                className="login-form"
                key="form"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.props.onFinishAdd}
                >
                <Form.Item
                    name="id"
                    fieldKey={1}
                    rules={[
                    {
                        required: true,
                        message: 'Please input your ID!',
                    },
                    ]}
                    >
                     <InputNumber  placeholder="ID" min={0}/>
                </Form.Item>
                <Form.Item
                    name="name"
                    fieldKey={2}
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Name!',
                    },
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    fieldKey={3}
                    label="DatePicker"
                    name="crated_on"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your crated on!',
                    },
                    ]}>
                    <DatePicker placeholder="Crated On"/>
                </Form.Item>
                <Form.Item
                    name="owner"
                    fieldKey={4}
                    rules={[
                    {
                        required: true,
                        message: 'Please input your owner!',
                    },
                    ]}
                >
                    <Input
                    placeholder="Owner"
                    />
                </Form.Item>
                </Form>
            </Modal>
            </div>
            
        )
    };

}

export default ModalComponent;
