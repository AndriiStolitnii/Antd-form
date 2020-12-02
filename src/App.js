import React from 'react';
import { Typography } from 'antd';
import UserForm from "./components/form";
import './App.css';

export default function App() {
  const { Title } = Typography;
  return (
    <div className="App">
      <Title>Training form</Title>
      <UserForm />
    </div>
  )
}