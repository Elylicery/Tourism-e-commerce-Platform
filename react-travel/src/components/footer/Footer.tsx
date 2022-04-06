import React from "react";
import { Layout, Typography } from "antd";

export const Footer : React.FC = () => {
    return (
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          版权所有 @ Ely 2022.3.30
        </Typography.Title>
      </Layout.Footer>
    );
}