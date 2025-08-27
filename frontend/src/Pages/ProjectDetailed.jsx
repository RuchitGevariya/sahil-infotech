import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { project } from "@/assets/assets";
import { Typography, Descriptions, Image, Tag, Breadcrumb, Card } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const { Title, Paragraph } = Typography;

const ProjectDetailed = () => {
  const { id } = useParams();
  const Project = project.find((p) => p.id === Number(id));
  const isMobile = useMediaQuery({ maxWidth: 500 }); // ✅ detect small screens

  if (!Project) {
    return <p>Project not Found</p>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px 16px",
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumb
        style={{ marginBottom: 16 }}
        items={[
          {
            title: (
              <Link to="/">
                <HomeOutlined /> Home
              </Link>
            ),
          },
          {
            title: (
              <Link to="/works">
                <AppstoreOutlined /> Works
              </Link>
            ),
          },
          { title: "Works Details" },
        ]}
      />

      {/* Title */}
      <Title level={2} style={{ marginBottom: 16, textAlign: "left" }}>
        {Project.title}
      </Title>

      {/* Cover Image */}
      <img
        src={Project.coverImage}
        alt={Project.title}
        width="100%"
        style={{
          borderRadius: "12px",
          objectFit: "cover",
          marginBottom: 24,
        }}
      />

      {/* Description */}
      <Paragraph
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: 24,
          textAlign: "justify",
        }}
      >
        {Project.description
          .replace(/\s*,\s*/g, ",")
          .replace(/\s+/g, " ")
          .trim()}
      </Paragraph>

      {/* Work Info */}
      {isMobile ? (
        // ✅ Mobile Layout (Cards)
        <div className="space-y-3">
          <Card
            title="Client Name"
            headStyle={{ backgroundColor: "#c3ddfd", fontWeight: "bold" }}
          >
            {Project.client || "N/A"}
          </Card>
          <Card
            title="Duration"
            headStyle={{ backgroundColor: "#c3ddfd", fontWeight: "bold" }}
          >
            {Project.duration}
          </Card>
          <Card
            title="Tech Stack"
            headStyle={{ backgroundColor: "#c3ddfd", fontWeight: "bold" }}
          >
            {Project.tags.map((tag, idx) => (
              <Tag color="blue" key={idx}>
                {tag}
              </Tag>
            ))}
          </Card>
          <Card
            title="Key Features"
            headStyle={{ backgroundColor: "#c3ddfd", fontWeight: "bold" }}
          >
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {Project.keyfeatures.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card
            title="Impact Delivered"
            headStyle={{ backgroundColor: "#c3ddfd", fontWeight: "bold" }}
          >
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {Project.impactdeliverd.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      ) : (
        // ✅ Desktop Layout (AntD Descriptions Table)
        <Descriptions
          title="Work Info"
          bordered
          column={1}
          size="default"
          labelStyle={{
            fontWeight: "bold",
            width: "200px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          <Descriptions.Item label="Client Name">
            {Project.client || "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Duration">
            {Project.duration}
          </Descriptions.Item>
          <Descriptions.Item label="Tech Stack">
            {Project.tags.map((tag, idx) => (
              <Tag color="blue" key={idx}>
                {tag}
              </Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Key Features">
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {Project.keyfeatures.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item}
                </li>
              ))}
            </ul>
          </Descriptions.Item>
          <Descriptions.Item label="Impact Delivered">
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {Project.impactdeliverd.map((item, idx) => (
                <li key={idx}>
                  {idx + 1}. {item}
                </li>
              ))}
            </ul>
          </Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
};

export default ProjectDetailed;
