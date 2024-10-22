'use client';

import Card from '@/components/card/card';
import Card_Collection from '@/components/card/card_collection';
import React, { useEffect, useState } from 'react';
import apiReq from '@/utils/apiReq';
import { getToken } from '@/utils/auth';

export default function Page() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const token = getToken();
    if (!token) return false;

    await fetch('base_url' + '', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        res.json();
      })
      .then(data2 => {
        setData(data2);
      })
      .catch(err => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card_Collection>
        {data &&
          data.map((val, index) => (
            <Card
              key={index}
              title={val.title}
              description={val.description}
              is_completed={val.is_completed}
            />
          ))}
      </Card_Collection>
    </div>
  );
}
