import destinationsOne from "@/data/destinationsOne";
import data2 from "@/data/bataa2";
import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import DestinationsTwoSingle from "./DestinationsTwoSingle";

const DestinationsOne = () => {
  return (
    <section className="destinations-one">
      {/* <Container> */}
      <div className="destinations-one__img" style={{ paddingBottom: "20px" }}>
        <div style={{ padding: "0 px" }}>
          {" "}
          <div
            className="destinations-one__img"
            style={{ paddingBottom: "20px" }}
          >
            <Image src={`./logos.png`} alt="ss" />
          </div>
        </div>
        <Image src={`./header.png`} alt="ss" />
      </div>
      <Row className="masonary-layout">
        {data2.slice(0, 50).map((destination) => (
          <DestinationsTwoSingle
            key={destination.id}
            destination={destination}
          />
        ))}
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default DestinationsOne;
