import { Card, Pagination, Typography } from 'antd';
import React, { useState } from 'react';

export const SalesCard = ({ el }) => {
  const [saleProductData, setSaleProductData] = useState(el.products);
  const onShowSizeChangeSales = (current) => {
    console.log('current', current);
    setSaleProductData(el.products.slice((current - 1) * 5, current * 5));
  };
  return (
    <Card title={el.title} style={{ width: 700, marginBottom: '20px' }}>
      {saleProductData.map((product) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
          key={product.productId}
        >
          <Typography.Text>{product.subject}</Typography.Text>
          <Typography.Text>{product.content}</Typography.Text>
        </div>
      ))}
      <Pagination
        // showTotal={true}
        defaultPageSize={5}
        defaultValue={1}
        onChange={onShowSizeChangeSales}
        total={el.products.length}
      />
    </Card>
  );
};
