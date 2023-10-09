import { useState } from 'react';

interface TaskProps {
  id: number;
  description: string;
  status: boolean;
}

export function Task({ id, description, status }: TaskProps) {
  const [newStatus, setNewStatus] = useState(status);

  function handleCheckBox() {
    console.log(!newStatus);
    setNewStatus(!newStatus);
  }

  return (
    <div>
      <label key={id}>
        <input type="checkbox" checked={newStatus} onChange={handleCheckBox} />
        <span> {description} </span>
      </label>
    </div>
  )
}