import React, { useEffect } from "react";
import { View } from "../components/blocks";

import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

const App = () => {
  return (
    <>
      <View padding="20px">
        <strong>React Parcel with Bootstrap: </strong>
        <ul>
          <li>Bootstrap</li>
          <li>Styled-Components</li>
          <li>ESlint</li>
          <li>Some basic building blocks in ../components/blocks</li>
          <li>Overrides & extra styles for Plone added</li>
          <li>Polyfills</li>
        </ul>
        <Button>btstrap button</Button>
        <Alert variant="primary">alert</Alert>
      </View>
    </>
  );
};

export default App;
