// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/Myfooter";
import Welcome from "./components/Welcome";
import MyMain from "./components/MyMain";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <MyMain />

      <MyFooter />
    </>
  );
}

export default App;
