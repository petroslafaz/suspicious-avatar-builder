import React from "react";
import "./styles.css";
import { AvatarProvider } from "./context/AvatarContext";
import Avatar from "./modules/avatar/Avatar";
import Palette from "./modules/ui/Palette";
import Tabs from "./modules/ui/Tabs";

const App: React.FC = () => (
  <AvatarProvider>
    <div className="avatar-container">
      <Avatar />
      <div className="tabs-palette-container">
        <Tabs />
        <Palette />
      </div>
    </div>
  </AvatarProvider>
);

export default App;

/* 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
<button
  key="mine"
  onClick={() => setSelectedPart("body")}
  title={"body"} // Tooltip
>
  <FontAwesomeIcon icon={faEnvelope} />
</button> 
*/
