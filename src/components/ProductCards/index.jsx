import { Card } from 'antd';
import React from 'react';
import SalesCard from '../SalesCard';

export const ProductCards = () => {
  const mockData = [
    {
      id: 1,
      title: 'Product Remarks 1',
      products: [
        {
          productId: 1,
          subject: 'Subject 1',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 1',
        },
        {
          productId: 2,
          subject: 'Subject 2',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 2',
        },
        {
          productId: 3,
          subject: 'Subject 3',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 3',
        },
        {
          productId: 4,
          subject: 'Subject 4',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 4',
        },
        {
          productId: 5,
          subject: 'Subject 5',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 5',
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
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 1',
        },
        {
          productId: 2,
          subject: 'Subject 2',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 2',
        },
        {
          productId: 3,
          subject: 'Subject 3',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 3',
        },
        {
          productId: 4,
          subject: 'Subject 4',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 4',
        },
        {
          productId: 5,
          subject: 'Subject 5',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 5',
        },
        {
          productId: 6,
          subject: 'Subject 6',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 6',
        },
        {
          productId: 7,
          subject: 'Subject 7',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 7',
        },
      ],
    },
    {
      id: 3,
      title: 'Product Remarks 3',
      products: [
        {
          productId: 1,
          subject: 'Subject 1',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 1',
        },
        {
          productId: 2,
          subject: 'Subject 2',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 2',
        },
        {
          productId: 3,
          subject: 'Subject 3',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 3',
        },
        {
          productId: 4,
          subject: 'Subject 4',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 4',
        },
        {
          productId: 5,
          subject: 'Subject 5',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 5',
        },
        {
          productId: 6,
          subject: 'Subject 6',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 6',
        },
        {
          productId: 7,
          subject: 'Subject 7',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 7',
        },
        {
          productId: 8,
          subject: 'Subject 8',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 8',
        },
        {
          productId: 9,
          subject: 'Subject 9',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 9',
        },
        {
          productId: 10,
          subject: 'Subject 10',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 10',
        },
        {
          productId: 11,
          subject: 'Subject 11',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 11',
        },
        {
          productId: 12,
          subject: 'Subject 12',
          content:
            ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley 12',
        },
      ],
    },
  ];
  return (
    <>
      {mockData.map((item) => (
        <SalesCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default ProductCards;
