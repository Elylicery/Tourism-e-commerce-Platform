// 函数式组件实现

import React from 'react';
import styles from "./HomePage.module.css";
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from "../../components";
import { Row, Col, Typography } from "antd";
import { productList } from "../../mock";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { useTranslation } from 'react-i18next';


const HomePage: React.FC = () =>{

  const {t} = useTranslation();

  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
               {t("home_page.hot_recommended")}
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        />
        <BusinessPartners />
      </div>
      <Footer />
    </div>
  );
}

