import { Row, Col } from "antd";
import "antd/dist/reset.css"; // AntD styles
import { Button } from "flowbite-react";
import { AiOutlineRise } from "react-icons/ai";
import {Link} from "react-router-dom"
export default function HeroSection() {
  return (
    <div className="text-black min-h-screen flex items-center" style={{backgroundColor:"#F7FBFD"}}>
      <Row className="container mx-auto px-6" gutter={[24, 24]}>
        <Col
          xs={24}
          md={12}
          className="flex flex-col justify-center space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <h1 className="text-5xl font-bold leading-tight mt-20 md:mt-0">
            Transform Your Digital Journey with
            <span style={{color:"#2563eb"}}> Sahil Infotech</span>
          </h1>
          <p className="text-lg text-white-200">
            We are a team of innovative developers at Sahil Infotech, building
            cutting-edge websites with the latest technologies to elevate your
            business.
          </p>
          <div className="space-x-4">
            <Link to="/contact">
            <Button
            style={{borderRadius:"12px",background:"#2563eb"}}
             
              pill
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold"
            >
              
              Contact Us
              <AiOutlineRise size={20} />
            </Button>
            </Link>
          </div>
        </Col>
        <Col
          xs={24}
          md={12}
          className="flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="200"
        >
          <img
            src="https://media.istockphoto.com/id/1141421616/photo/this-office-space-is-filled-with-productivity.jpg?s=612x612&w=0&k=20&c=ka6rGPcVkhjC2cG-ICEQaE7mzufJ253bngJPahvBlCg="
            alt="Hero Image"
            className="rounded-2xl shadow-lg mb-6"
          />
        </Col>
      </Row>
    </div>
  );
}
