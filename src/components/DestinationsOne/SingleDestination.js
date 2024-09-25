import Link from "next/link";
import React, { useState } from "react";
import { Col, Image, Modal } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
const SingleDestination = ({ destination = {} }) => {
  const { image, title, tours, subTitle, col } = destination;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col xl={2} lg={2}>
      <div className="destinations-one__single">
        <div className="destinations-one__img" onClick={handleShow}>
          <div
            className="piamge"
            style={{
              backgroundImage: `url('https://dev.veritech.mn/${image}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          {/* <Image
            src={`https://dev.veritech.mn/${image}`}
            alt="ss"
            style={{ width: "180px", height: "180px", margin: "auto" }}
          /> */}
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          fullscreen={true}
          centered
          size="lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body style={{ background: "#e8f0c5" }}>
            <Container fluid>
              <Row>
                <Col xl={12} lg={12}>
                  <div style={{ padding: "0 px" }}>
                    {" "}
                    <div
                      className="destinations-one__img"
                      style={{ paddingBottom: "20px" }}
                    >
                      <Image src={`./logos.png`} alt="ss" />
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6}>
                  <div
                    className="destinations-one__img"
                    style={{ padding: "50px" }}
                  >
                    <Image src={`https://dev.veritech.mn/${image}`} alt="ss" />
                  </div>
                </Col>
                <Col xl={6} lg={6}>
                  <>
                    <div
                      className="destinations-one__img"
                      style={{ padding: "20px", margin: "auto" }}
                    >
                      <Image
                        src={`./sideimage1.png`}
                        alt="ss"
                        style={{
                          width: "450px",
                          margin: "auto",
                          // paddingLeft: "40px",
                          display: "block",
                        }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          background: "#fff",
                          padding: "20px",
                          borderRadius: "15px",
                        }}
                      >
                        {title}
                      </p>
                    </div>
                  </>
                </Col>
              </Row>
            </Container>
          </Modal.Body>

          {/* <Modal.Footer closeButton>ddd</Modal.Footer> */}
        </Modal>
      </div>
    </Col>
  );
};

export default SingleDestination;
