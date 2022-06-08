import React from "react";
import styled from "styled-components";
import CurrentTrack from "./CurrentTrack";

import PlayerControls from "./PlayerControls";
import Volume from "./Volume";
export default function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #205375;
  border-top: 1px solid #B4FF9F;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
