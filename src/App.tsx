import React from "react";
import { AuthProvider } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "@/pages/Login/Login"; // 登录
import RegisterPage from "@/pages/Register/Registerr"; // 注册
import BindRegisterPage from "@/pages/Register/BindRegister"; // 注册
import Verify from "@/pages/Register/Verify"; // 注册验证
import Reset from "@/pages/Register/Reset"; // 重置密码
import DataStation from "@/pages/DataStation"; //资料站
import Article from "@/pages/Article"; //时文
import QAndA from "@/pages/QAndA/QAndA"; //答疑
import TeamUp from "@/pages/TeamUp"; //组队
import Houtai from "./pages/Houtai/Houtai"; // 引入 Houtai.tsx
import CreatorCenter from "@/pages/center/CreatorCenter"; //创作者中心
import FrontPage from "@/pages/FrontPage/FrontPage"; //首页
import AnswerWindow from "@/components/CustomerService/AnswerWindow"; // 导入答案窗口组件
import DetailMessage from "./pages/QAndA/DetailMessage"; //帖子详情页
import Review from "@/pages/Review/Review"; // 审核
import Timerme from "@/pages/Timerme/Timerme"; // 计时器
import MultiPersonChat from "@/pages/Houtai/BackstageChat/MultiPersonChat.tsx";
import FAQ from "@/pages/Houtai/FAQ/FAQPage";
import Check from "@/pages/Houtai/Check/Check";
import DashboardFrontpage from "./pages/Houtai/DashboardFrontpage";
import ItemList from "@/pages/DataStation/ItemList";
import FileManager from "@/pages/FileManager/page";
import FindKey from "@/pages/FindKey/FindKey"; //找回密码
import "./App.css";
import InfoManage from "@/pages/Info/page.tsx";
import EmailVerification from "@/pages/Register/EmailVerification.tsx";
import { SearchProvider } from "./components/ui/Header/SearchContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SearchProvider>
      <Router>
        <AnswerWindow /> {/*客服组件*/}
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/datastation" element={<DataStation />}>
            <Route path="" element={<Navigate to="math" replace />} />
            <Route path="math" element={<ItemList category="高数" />} />
            <Route path="physics" element={<ItemList category="大物" />} />
            <Route path="c-language" element={<ItemList category="C语言" />} />
            <Route path="others" element={<ItemList category="其他" />} />
          </Route>
          <Route path="/article" element={<Article />} />
          <Route path="/qanda" element={<QAndA />} />
          <Route path="/qanda/:id" element={<DetailMessage />} />
          <Route path="/center" element={<CreatorCenter />} />
          <Route path="/teamup" element={<TeamUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/bindregister" element={<BindRegisterPage />} />
          {/*<Route path="/register/verify/v2" element={<Verify/>}/>*/}
          <Route path="/register/verify/v2" element={<EmailVerification />} />
          <Route path="/register/verify/v1" element={<Reset />} />
          <Route path="/review" element={<Review />} />
          <Route path="/filemanager" element={<FileManager />} />
          <Route path="/timerme" element={<Timerme />} />
          <Route path="/info" element={<InfoManage />} />
          <Route path="/findKey" element={<FindKey />} />
          <Route path="/houtai" element={<Houtai />}>
            <Route path="" element={<DashboardFrontpage />} />
            <Route path="multiPersonChat" element={<MultiPersonChat />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="check" element={<Check />} />
            <Route path="dashboardfrontpage" element={<DashboardFrontpage />} />
          </Route>
        </Routes>
      </Router>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
