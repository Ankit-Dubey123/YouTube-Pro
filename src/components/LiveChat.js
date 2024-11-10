import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { getRandomName, getRandomSentence } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  // API Polling
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomSentence(20) + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[490px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="rounded-lg w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ankit",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="rounded-sm w-80 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 items-center bg-green-100 rounded-md">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
