import { FC } from "react";
import { SideBarRoutesConfig } from "../../types/Layout";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

type Props = {
  config: SideBarRoutesConfig[];
};
const SideBar: FC<Props> = ({ config }) => {
  const navigate = useNavigate();

  const menuConfig = config.map((value) => {
    const { id, label } = value;

    return {
      key: id,
      label,
    };
  });
  const defaultSelectedKey = menuConfig[0].key;
  const onClickMenu = (param: { key: string }) => {
    console.log("🚀 ~ menuConfig ~ keyPath:", param);

    navigate(`/${param?.key}`);
  };
  return (
    <>
      <Menu
        defaultSelectedKeys={[defaultSelectedKey]}
        // defaultOpenKeys={["sub1"]}
        mode="vertical"
        theme="light"
        items={menuConfig}
        onClick={onClickMenu}
      />
    </>
  );
};

export default SideBar;
