import { Header } from './components/Header';
import { Task } from './components/Task'

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <Task
        id={1}
        description='Beber água'
        status={false}
      />
      <Task
        id={2}
        description='Acordar as 06h'
        status={false}
      />
      <Task
        id={3}
        description='Alimentar os gatos'
        status={true}
      />
    </div>
  )
}
