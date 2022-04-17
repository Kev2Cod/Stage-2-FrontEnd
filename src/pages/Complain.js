import React from "react";
import "../assets/static/css/style.css";
import "../assets/static/css/complain.css";
import Chatlist from "../components/chat/ChatList";
import { Row, Col } from "react-bootstrap";
import Chat from "../components/chat/Chat";

const Complain = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col className="col-4 border-end-chat d-md-block d-none">
          <Chatlist />
        </Col>

        <Col className="col-md-8 col-12 d-flex align-items-end height-90">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mb-3 d-flex align-items-end ">
                <div className="container-fluid container-chat overflow-auto ">
                  <Chat />
                </div>
              </div>
              <div className="col-12">
                <form action="#" className="">
                  <div className="input-group ">
                    <input type="text" placeholder="Send Message" aria-describedby="button-addon2" className="form-control rounded border-0 py-2 bg-var-dark-gray text-light mb-3" />
                  </div>
                </form>
                {/* </div> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Complain;
