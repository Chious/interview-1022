'use client';

import React from 'react';
import { useState } from 'react';

export default function Card({ title, description, is_completed }) {
  if (!title || !description) return null;

  const [isCompleted, setIsCompleted] = useState(is_completed);

  return (
    <div className="text-black">
      <input
        type="checkbox"
        value={isCompleted}
        onChange={() => {
          setIsCompleted(!isCompleted);
        }}
      />
      <h2>{description}</h2>
      <p>{description}</p>
    </div>
  );
}
