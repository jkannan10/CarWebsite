import React from "react";
import styled from "styled-components";
function Section(props) {
  return (
    <Wrap bgImage={props.imageUrl}>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      <Buttons>
          <ButtonGroup>
            <LeftButton>{props.leftBtn}</LeftButton>
            {props.rightBtn && <RightButton>{props.rightBtn}</RightButton>}
          </ButtonGroup>
          <DownArrow src="images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //Vertical alignment
  align-items: center; //horizontal align
`;
const ItemText = styled.div`
  padding-top: 18vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-left: 250px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
