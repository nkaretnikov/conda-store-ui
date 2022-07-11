import * as React from "react";
import "../style/index.css";
import { ChannelsEdit, ChannelsList, Dependencies } from "./components";

const App = () => {
  const channelsList = ["conda-store", "default", "conda forge"];

  return (
    <>
      <h1>Hello World</h1>
      <ChannelsList channelList={channelsList} />
      <ChannelsEdit channelsList={channelsList} />
      <Dependencies />
    </>
  );
};

export default App;
