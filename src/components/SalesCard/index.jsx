import { Card, Pagination, Typography } from 'antd';
import React, { useState } from 'react';

export const SalesCard = ({ el }) => {
  return (
    <Card title={el.title} style={{ width: 700, marginBottom: '20px' }}>
      {el.products.map((product) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
        >
          <Typography.Text>{product.subject}</Typography.Text>
          <Typography.Text>{product.content}</Typography.Text>
        </div>
      ))}
      <Pagination
        // defaultPageSize={5}
        defaultValue={3}
        hideOnSinglePage={el.products.length <= 5}
        total={el.products.length}
      />
    </Card>
  );
};
