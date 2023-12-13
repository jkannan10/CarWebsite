import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Container = styled.div`
  height: 100vh;
`;
function Home() {
  return (
    <Container>
      <Section
        title="MODEL - 3"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        imageUrl="images/model-3.jpg"
      />
      <Section
        title="MODEL - S"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        imageUrl="images/model-s.jpg"
      />
      <Section
        title="MODEL - X"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        imageUrl="images/model-x.jpg"
      />
      <Section
        title="MODEL - Y"
        description="Order Online for Touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        imageUrl="images/model-y.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in USA"
        description="Money-back guarantee"
        leftBtn="Order Now"
        rightBtn="Learn More"
        imageUrl="images/solar-panel.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtn="Shop Now"
        imageUrl="images/accessories.jpg"
      />
      leftBtn="Order Now" rightBtn="Learn More"
    </Container>
  );
}

export default Home;
