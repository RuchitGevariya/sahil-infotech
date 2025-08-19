import {React,useEffect} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { project } from "@/assets/assets";
import { Typography, Descriptions, Image, Tag,Breadcrumb } from "antd";
import {HomeOutlined, AppstoreOutlined   } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const ProjectDetailed = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const Project = project.find((p) => p.id === Number(id));
  if (!Project) {
    return <p>Project not Found</p>;
  }
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "24px",
        marginTop: "80px",
      }}
    >
      {/* custmom path */}
   <Breadcrumb
   style={{ marginBottom: 16 }}
   items={[
    {title:(
      <Link to="/"><HomeOutlined/> Home</Link>
    )},
      {title:(
      <Link to="/works"><AppstoreOutlined/>Works</Link>
    )},
    {title:" Works Detailes"}
   ]}
   />
      {/* Title */}
      <Title level={2} style={{ marginBottom: 16 }}>
        {Project.title}
      </Title>

      {/* Cover Image */}
      <Image
        src={Project.coverImage}
        alt={Project.title}
        width="100%"
        style={{
          borderRadius: "12px",
          objectFit: "cover",
          marginBottom: 24,
        }}
      />

      {/* Description Paragraph */}
      <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
        {Project.description}
      </Paragraph>

      {/* Project Details */}
      <Descriptions
      title="Work Info"
        bordered
        column={{xs:1,sm:1,md:2,lg:2,xl:2}}
        size="default"
        labelStyle={{ fontWeight: "bold", width: "200px" }}
      >
            <Descriptions.Item label="ClientName">{Project.client?? "N/A"}</Descriptions.Item>
        <Descriptions.Item label="Duration">{Project.duration}</Descriptions.Item>
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
              <li key={idx}>{idx+1}. {item}</li>
            ))}
          </ul>
        </Descriptions.Item>
        <Descriptions.Item label="Impact Delivered">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {Project.impactdeliverd.map((item, idx) => (
              <li key={idx}>{idx+1}. {item}</li>
            ))}
          </ul>
        </Descriptions.Item>
       
      </Descriptions>
    </div>
  );
};

export default ProjectDetailed;
