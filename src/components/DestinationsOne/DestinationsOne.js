import destinationsOne from "@/data/destinationsOne";
import data1 from "@/data/bataa";
import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import SingleDestination from "./SingleDestination";

const DestinationsOne = () => {
  return (
    <section className="destinations-one">
      {/* <Container> */}
      <div className="destinations-one__img" style={{ paddingBottom: "20px" }}>
        <Image src={`./header1.png`} alt="ss" />
      </div>
      <Row className="masonary-layout">
        {data1.slice(0, 50).map((destination) => (
          <SingleDestination key={destination.id} destination={destination} />
        ))}
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default DestinationsOne;
