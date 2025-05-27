import "./App.css";
import Section from "./components/section";

const App = () => {
  return (
    <main>
      <header className="wrapper">
        <img src="./public/logo-netF.png" alt="" />
      </header>
      <div className="wrapper">
        <Section
          category="Emissions TV"
          images="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1643642943/react-new-exercices/netflix2022/reprendre%20avec/AAAABeC6G0iyqHxQH1Uz7udc5R_J_7kQTm_8L59OXFsF0K_h00ynxeYSDovahSubumX6FPyJnvhT5-xKmF6QUHuiUH6Y0pX11jPD1NfgMLDCiEIoMDELbL5EE46peUlo_hpwacw.jpg"
        />
      </div>
    </main>
  );
};

export default App;
