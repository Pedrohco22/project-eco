import React from "react";
import { Navbar } from "./components/Navbar/navbar";
import { Aside } from "./components/Aside/aside";
import { Main } from "./components/Main/main";
import { Asidebottom } from "./components/Asidebottom/asideBottom";
import { Sections } from "./components/Sections/sections";
import { Footer } from "./components/Footer/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("/public/db.json")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data.products }));
  }
  render() {
    return (
      <>
        <Navbar />
        <Aside />
        <div className="main-content">
          <Main products={this.state.products} />
        </div>

        <Asidebottom />
        <Sections />
        <Footer />
      </>
    );
  }
}

export default App;
