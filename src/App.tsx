import React from "react";
import Info from "./info";
import Project from "./project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Reveal from "react-reveal/Fade";

import Background from "./components/components/background/background";
import Menu, { MenuItem } from "./components/components/menu/menu";
import Title from "./components/components/title/title";
import { NameLight } from "./components/components/name/name";
import Logo from "./components/components/logo/logo";
import Container, {
  ItemSmall,
  ItemBig,
  Row,
} from "./components/components/container/container";
import Work from "./components/components/work/work";
import img from "./images/mockup-square.jpg";
import IconArrowDown from "./components/components/icon/icon";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/project" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Background />
    <Menu>
      <MenuItem link="/#work" label="work"></MenuItem>
      <NameLight link="/" label="Ann Madeleine" />
      <MenuItem link="/info" label="info"></MenuItem>
    </Menu>
    <Container>
      <Row>
        <ItemSmall>
          <Logo />
        </ItemSmall>
        <ItemBig>
          <Title labelUp="creative" labelDown="developer" />
        </ItemBig>
      </Row>
    </Container>
    <IconArrowDown />
    <Reveal bottom>
      <Work
        id="work"
        link="/project"
        label="Branding"
        client="Client"
        year="2020"
        src={img}
        alt="Detta är en bild"
        title="01"
        hoverTitle="Explore"
      />
      <Work
        link="/project"
        label="Title"
        client="Wow"
        year="2018"
        src={img}
        alt="Detta är en bild"
        title="02"
        hoverTitle="Explore"
      />
      <Work
        link="/project"
        label="Title"
        client="Wow"
        year="2018"
        src={img}
        alt="Detta är en bild"
        title="02"
        hoverTitle="Explore"
      />
      <Work
        link="/project"
        label="Title"
        client="Wow"
        year="2018"
        src={img}
        alt="Detta är en bild"
        title="02"
        hoverTitle="Explore"
      />
      <Work
        link="/project"
        label="Title"
        client="Wow"
        year="2018"
        src={img}
        alt="Detta är en bild"
        title="02"
        hoverTitle="Explore"
      />
    </Reveal>
  </div>
);
