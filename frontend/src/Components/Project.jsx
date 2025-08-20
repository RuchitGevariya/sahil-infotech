import React from "react";
import { Card, Row, Col } from "antd";
import { project } from "../assets/assets";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Project = () => {
  const Limit = project.slice(0, 6);

  return (
    <div style={{ padding: "40px" }}>
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900">
          Featured <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-gray-600 mt-2">A selection of recent work.</p>
      </div>

      <Row gutter={[24, 24]}>
        {Limit.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Link to={`/works/${item.id}`}>
              <Card
                hoverable
                data-aos="fade-up"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "100%", // important for equal height
                  display: "flex",
                  flexDirection: "column",
                }}
                cover={
                  <img
                    alt={item.title}
                    src={item.coverImage}
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                bodyStyle={{
                  padding: "12px",
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Meta
                  title={
                    <span
                      style={{
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textAlign: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {item.title}
                    </span>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;
