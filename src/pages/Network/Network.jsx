import "./Network.css";
import Construction from "../../components/Construction/Construction";
import Demo from "../../components/Demo/Demo";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";

function Network() {
  return (
    <div className="home">
      <Header />
      <h1>COMMUNAUTÉ</h1>
      <Aside />
      <Construction />
      <Demo />
    </div>
  );
}

export default Network;
