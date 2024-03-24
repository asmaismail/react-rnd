import React from "react";
import "./Mainpg.css";
import { Card, Col, Row } from "antd";
import { Button, Cascader, Form, Input, InputNumber, Mentions } from "antd";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const Mainpg = () => {
  return (
    <>
      <div className="main">
        <div className="div1">
          <h1 className="heading">Main heading</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to <br />
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before the final
            <br /> copy is available. Wikipedia
          </p>
          <span className="">
            <button className="btn">Demo</button>
            <button className="btn">View More</button>
          </span>
          <Row className="div3">
            <Col>
              <Card className="cards" title="Card title" bordered={true}>
                Card content
              </Card>
            </Col>
            <Col>
              <Card className="cards" title="Card title" bordered={true}>
                Card content
              </Card>
            </Col>
            <Col>
              <Card className="cards" title="Card title" bordered={true}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        <div className="div2">
          <div>
            <Form
              className="form"
              {...formItemLayout}
              variant="filled"
              style={{
                maxWidth: 600,
                overflow: "hidden",
              }}
            >
              <Form.Item
                label="Input"
                name="Input"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="InputNumber"
                name="InputNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <InputNumber
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                label="TextArea"
                name="TextArea"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item
                label="Mentions"
                name="Mentions"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Mentions />
              </Form.Item>

              {/* <Form.Item
              label="Select"
              name="Select"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Select />
            </Form.Item> */}

              <Form.Item
                label="Cascader"
                name="Cascader"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Cascader />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button
                  style={{ backgroundColor: "blue" }}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpg;
