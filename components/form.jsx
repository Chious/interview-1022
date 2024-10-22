'use client';

import React, { useState } from 'react';
import apiReq from '@/utils/apiReq';
import Swal from 'sweetalert2';
import { setToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [val, setVal] = useState({
    username: '',
    password: '',
  });

  const validate = () => {
    if (val.username === '' || val.passwor === '') return false;

    return true;
  };

  const handleSubmit = async () => {
    console.log('onClick');
    if (!validate()) return;

    await apiReq
      .post('/login/', val)
      .then(data => {
        setToken('token', data.access);
        setToken('refresh_token', data.refresh);

        new Swal('Success', 'Success Login').then(() => {
          router.push('dashboard');
        });
      })
      .catch(err => {
        console.log('error', err);
        new Swal('Error', err.detail);
      });
  };

  return (
    <div className="text-black bg-white shadow-md w-60 h-60 flex flex-col">
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        className="border border-solid border-black"
        value={val.username}
        onChange={e => {
          setVal({ ...val, username: e.target.value });
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        placeholder="Password..."
        className="border border-solid border-black"
        value={val.password}
        onChange={e => {
          setVal({ ...val, password: e.target.value });
        }}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
