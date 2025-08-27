import { React, useEffect, useState } from "react";
import { Card, Row, Col, Breadcrumb, Pagination, Tag } from "antd";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { project } from "@/assets/assets";
const { Meta } = Card;
const ProjectPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Web Development",
    ".Net Development",
    "Chat Solution"
  ];

  const cardPerPage = 6;
  const startIndex = (currentPage - 1) * cardPerPage;
  //fliter
  const filterData =     
    selectedCategory === "All"
      ? project
      : project.filter((p) => p.category.toLocaleLowerCase() === selectedCategory.toLowerCase());
  const currentCards = filterData.slice(startIndex, startIndex + cardPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);
  return (
    <>
      <div style={{ padding: "6px", marginTop: "20px" }}>
        {/* file structer  manager */}
        <Breadcrumb
          style={{ marginBottom: "10px"}}
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
            { title: "" },
          ]}
        />
          {/* Category Filter */}
      <div style={{ marginBottom: "20px" }}>
        {categories.map((cat) => (
          <Tag.CheckableTag
            key={cat}
            checked={selectedCategory === cat}
            onChange={(checked) => {
              setSelectedCategory(checked ? cat : "All");
              setCurrentPage(1); // reset pagination
            }}
            style={{
              fontSize: "14px",
              padding: "6px 14px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            {cat}
          </Tag.CheckableTag>
        ))}
      </div>
        {/* dynmic data */}
        <Row gutter={[24, 24]}>
          {currentCards.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Link to={`/works/${item.id}`}>
                <Card
                  hoverable
                  style={{
                    height: 320,
                    display: "flex",
                    flexDirection: "column",
                  }}
                  cover={
                    <img
                      alt={item.title}
                      src={item.coverImage}
                      loading="lazy"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                  bodyStyle={{
                    padding: "8px 12px",
                    flex: 1,
                    display: "flex",
                    alignItems: "center", // vertically center title
                  }}
                >
                  <Meta
                    title={
                      <span
                        style={{
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          textAlign: "center",
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
        {/* Pagination */}
        <div className="text-center  mt-5 mb-5">
          <Pagination
           align="end"
            current={currentPage}
            pageSize={cardPerPage}
            total={filterData.length}
            onChange={handlePageChange}
            showSizeChanger={false} // hides the page size dropdown
          />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
