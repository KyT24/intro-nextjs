'use client';
import { useUsernameStore } from '@/stores/useUsernameStore';
import { useRef } from 'react';

export default function EmployeeManagementPage() {
  const { setUsername, setUsernameValue } = useUsernameStore();
  const inputUsername = useRef<HTMLInputElement>(null); 

  const handleSetUsername = () => {
   setUsernameValue(inputUsername?.current!.value)
  }

  return (
    <>
      <h1>Employee Management</h1>
      <input ref={inputUsername} type='text' placeholder='Type your username' />
      <button onClick={handleSetUsername}>Set Username</button>
    </>
  );
}