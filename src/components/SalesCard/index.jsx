import { Card, Pagination, Typography } from 'antd';
import React, { useState } from 'react';

export const SalesCard = ({ el }) => {
  const [saleProductData, setSaleProductData] = useState(
    el.products.slice(0, 5)
  );
  const onShowSizeChangeSales = (current) => {
    console.log('current', current);
    setSaleProductData(el.products.slice((current - 1) * 5, current * 5));
  };
  return (
    <Card
      title={el.title}
      style={{
        width: 700,
        margin: '20px',
        background: '#B4E4FF',
      }}
    >
      {saleProductData.map((product) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
            borderBottom: '1px solid #ffffff',
          }}
          key={product.productId}
        >
          <Typography.Text style={{ fontWeight: '700' }}>
            {product.subject}
          </Typography.Text>
          <Typography.Text>{product.content}</Typography.Text>
        </div>
      ))}
      <Pagination
        defaultPageSize={5}
        defaultValue={1}
        hideOnSinglePage={el.products.length <= 5}
        onChange={onShowSizeChangeSales}
        total={el.products.length}
      />
    </Card>
  );
};
