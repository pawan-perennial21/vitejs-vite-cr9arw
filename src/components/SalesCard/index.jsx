import { Card, Pagination, Typography } from 'antd';
import React, { useState } from 'react';

const SalesCard = ({ item }) => {
  const { title, products } = item;
  const [saleProductData, setSaleProductData] = useState(products.slice(0, 5));

  const onShowSizeChangeSales = (current) => {
    setSaleProductData(products.slice((current - 1) * 5, current * 5));
  };

  return (
    <Card
      title={title}
      style={{
        width: 700,
        margin: '20px',
        background: '#B4E4FF',
      }}
    >
      {saleProductData?.map(({ productId, subject, content }) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
            borderBottom: '1px solid #ffffff',
            padding: '5px',
          }}
          key={productId}
        >
          <Typography.Text style={{ fontWeight: '700' }}>
            {subject}
          </Typography.Text>
          <Typography.Text>{content}</Typography.Text>
        </div>
      ))}
      <Pagination
        defaultPageSize={5}
        defaultValue={1}
        hideOnSinglePage={products.length <= 5}
        onChange={onShowSizeChangeSales}
        total={products.length}
      />
    </Card>
  );
};

export default SalesCard;
