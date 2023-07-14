import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import "./Home.css"
import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";

export default function Home() {
  return (
    <>
    <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}