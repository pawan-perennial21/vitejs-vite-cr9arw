import { Card } from 'antd';
import React from 'react';
import { SalesCard } from '../SalesCard';

export const ProductCard = () => {
  const mockData = [
    {
      id: 1,
      title: 'Product Remarks 1',
      products: [
        {
          productId: 1,
          subject: 'Subject 1',
          content: 'Content 1',
        },
        {
          productId: 2,
          subject: 'Subject 2',
          content: 'Content 2',
        },
        {
          productId: 3,
          subject: 'Subject 3',
          content: 'Content 3',
        },
      ],
    },
    {
      id: 2,
      title: 'Product Remarks 2',
      products: [
        {
          productId: 1,
          subject: 'Subject 1',
          content: 'Content 1',
        },
        {
          productId: 2,
          subject: 'Subject 2',
          content: 'Content 2',
        },
        {
          productId: 3,
          subject: 'Subject 3',
          content: 'Content 3',
        },
        {
          productId: 4,
          subject: 'Subject 4',
          content: 'Content 4',
        },
        {
          productId: 5,
          subject: 'Subject 5',
          content: 'Content 5',
        },
        {
          productId: 6,
          subject: 'Subject 6',
          content: 'Content 6',
        },
      ],
    },
  ];
  return (
    <>
      {mockData.map((el) => (
        <SalesCard key={el.id} el={el} />
      ))}
    </>
  );
};
