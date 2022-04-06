import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useNavigate,} from "react-router-dom";
import store from "../../redux/store"
import { LanguageState} from "../../redux/language/languageReducer"

interface State extends LanguageState {}

export const Header: React.FC = () => {

  let navigate = useNavigate();

  let storeState = store.getState();

  const handleStoreChange = ()=>{
    console.log("change!!!");
    console.log(store.getState().languageList);
    storeState = store.getState();
  }
  store.subscribe(handleStoreChange);

   const menuClickHandler = (e) =>{
    console.log(e);
    if(e.key === "new"){
      // 处理新语言添加action
      const action = {
        type:"add_language",
        payload:{name:"新语言",code:"new_language"}
      }
      store.dispatch(action);
    }else{
      const action = {
        type:"change_language",
        payload:e.key,
      };
      store.dispatch(action);
    }
   }
	
  return (
		<div className={styles["app-header"]}>
			{/* top-header */}
			<div className={styles["top-header"]}>
				<div className={styles.inner}>
					<Typography.Text>让旅游更幸福</Typography.Text>
					<Dropdown.Button
						style={{ marginLeft: 15 }}
						overlay={
              <Menu onClick={menuClickHandler}>
                {storeState.languageList.map((l)=>{
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                })}
                <Menu.Item key={"new"}>添加新语言</Menu.Item>
              </Menu>
						}
						icon={<GlobalOutlined />}
					>
						{storeState.language === "zh" ? "中文" :"英文"}
					</Dropdown.Button>
					<Button.Group className={styles["button-group"]}>
						<Button onClick={() => navigate("/register")}>注册</Button>
						<Button onClick={() => navigate("/signIn")}>登陆</Button>
					</Button.Group>
				</div>
			</div>
			{/* main-header */}
			<Layout.Header className={styles["main-header"]}>
				<span onClick={() => navigate("/")}>
					<img src={logo} alt="logo" className={styles["App-logo"]} />
					<Typography.Title level={3} className={styles["title"]}>
						React旅游网
					</Typography.Title>
				</span>
				<Input.Search
					placeholder={"请输入旅游目的地、主题、或关键字"}
					className={styles["search-input"]}
				/>
			</Layout.Header>
			{/* main-menu */}
			<Menu mode={"horizontal"} className={styles["main-menu"]}>
				<Menu.Item key={1}>旅游首页</Menu.Item>
				<Menu.Item key={2}>周末游</Menu.Item>
				<Menu.Item key={3}>跟团游</Menu.Item>
				<Menu.Item key="4"> 自由行 </Menu.Item>
				<Menu.Item key="5"> 私家团 </Menu.Item>
				<Menu.Item key="6"> 邮轮 </Menu.Item>
				<Menu.Item key="7"> 酒店+景点 </Menu.Item>
				<Menu.Item key="8"> 当地玩乐 </Menu.Item>
				<Menu.Item key="9"> 主题游 </Menu.Item>
				<Menu.Item key="10"> 定制游 </Menu.Item>
				<Menu.Item key="11"> 游学 </Menu.Item>
				<Menu.Item key="12"> 签证 </Menu.Item>
				<Menu.Item key="13"> 企业游 </Menu.Item>
				<Menu.Item key="14"> 高端游 </Menu.Item>
				<Menu.Item key="15"> 爱玩户外 </Menu.Item>
				<Menu.Item key="16"> 保险 </Menu.Item>
			</Menu>
		</div>
	);
};
