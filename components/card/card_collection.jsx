import React from 'react';

export default function Card_Collection(props) {
  return (
    <div className="bg-white flex flex-col gap-4" {...props}>
      {props.children}
    </div>
  );
}
