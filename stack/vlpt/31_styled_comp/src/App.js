import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Button from "./Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="pink">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>
            BUTTON
          </Button>
          <Button color="gray" outline>
            BUTTON
          </Button>
          <Button size="small" color="pink" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button color="gray" fullWidth>
            BUTTON
          </Button>
          <Button size="small" color="pink" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
