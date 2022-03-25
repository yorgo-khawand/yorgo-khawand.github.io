import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import items from "./assets/items";
import RedirectExt from "./components/RedirectExt";
import "./css/skeleton.css";
import "./css/normalize.css";

function App() {
  const routeComponents = items.map((item, index) => (
    <Route
      exact
      key={index}
      path={item.title.toLowerCase()}
      element={<RedirectExt to={item.link} />}
    />
  ));
  return (
    <div className="App">
      <Routes>{routeComponents}</Routes>
      <Header></Header>
      <div className="container row">
        {items.map((item, i) => {
          return (
            <Card
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              cover={item.image}
            ></Card>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
