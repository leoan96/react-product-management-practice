import { useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import { AppleOutlined, BarcodeOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [current, setCurrent] = useState("");

  function menuClickHandler(e) {
    setCurrent(e.key);
  }

  return (
    <div>
      <Menu
        onClick={menuClickHandler}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="products" icon={<AppleOutlined />}>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="add_product" icon={<BarcodeOutlined />}>
          <Link href="/products/add-product">
            <a>Add Product</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
