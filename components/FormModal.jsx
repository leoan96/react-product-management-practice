import React, { useState } from "react";
import { Button, Modal } from "antd";

function FormModal(prop) {
  return (
    <>
      <Modal
        title={prop.title}
        visible={prop.isModalVisible}
        onOk={prop.handleOk}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>{prop.message}</p>
      </Modal>
    </>
  );
}

export default FormModal;
