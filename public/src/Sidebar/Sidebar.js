import SidebarRow from "../SidebarRow/SidebarRow";
import "./sidebar.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Sidebar = () => {
  const url =
    "https://media.licdn.com/dms/image/C4E03AQHc-MVBzkOExA/profile-displayphoto-shrink_800_800/0/1655998571138?e=2147483647&v=beta&t=tXeGe2D2aH1Mmj8UI_VbVNPKGlDBM1z42ySGEUF8ER4";
  return (
    <div className="sidebar">
      <SidebarRow src={url} title="Safiullah Rahmani" />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
