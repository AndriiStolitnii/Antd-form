import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd"

const UserForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [user, setUser] = useState({});
  const loginTitle = "Login: ";
  const passwordTitle = "Password: ";

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleIsRemember = () => {
    setIsRemember(!isRemember);
  };

  const handleSubmit = () => {
    setUser({ login, password, isRemember });
    if (!isRemember) {
      setLogin("");
      setPassword("");
      setIsRemember(false);
      form.resetFields();
    }
  };

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <Form onFinish={handleSubmit} form={form} {...layout}>
      <Form.Item  
        label={loginTitle} 
        name="username" 
        rules={[{ required: true, message: 'Please input your username!' }]}
        onChange={handleLogin} 
        defaultValue={login}>
        <Input />
      </Form.Item>
      <Form.Item
        label={passwordTitle}
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        onChange={handlePassword}
        defaultValue={password}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked" onChange={handleIsRemember} defaultValue={isRemember}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <div>Login: {login}</div>
      <div>Password: {password}</div>
      <div>IsRemember: {isRemember.toString()}</div>
      <div>
        UserLogin: {user.login}, userPassword: {user.password}, userIsRemember:{" "}
        {user.isRemember ? "true" : "false"}
      </div>
    </Form>
  );
};

export default UserForm;