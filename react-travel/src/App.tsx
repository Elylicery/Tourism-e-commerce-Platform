import React from "react";
import styles from "./App.module.css";
import { HomePage,SignInPage,RegisterPage,DetailPage} from "./pages";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signIn" element={<SignInPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/detail/:touristRouteId" element={<DetailPage/>}/>
          <Route path="*" element={
            <main style={{padding:"1rem"}}>
              <h1>404 NOT FOUND</h1>
            </main>
          }/>
        </Routes>
      </BrowserRouter>,
		</div>
	);
}

export default App;
