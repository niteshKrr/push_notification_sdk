import React from "react";
import * as PushAPI from "@pushprotocol/restapi";

const user_notification = async () => {
  const notifications = await PushAPI.user.getFeeds({
    user: "eip155:5:0xFe20f562482c33d1447947ef67bb20A3cb98C2ae", // user address in CAIP
    env: "staging",
  });
  console.log("user_notification", notifications);
};

const user_spam_notification = async () => {
  const spams = await PushAPI.user.getFeeds({
    user: "eip155:5:0xFe20f562482c33d1447947ef67bb20A3cb98C2ae", // user address in CAIP
    spam: true,
    env: "staging",
  });
  console.log("user_spam_notification", spams);
};

const user_subscriptions = async () => {
  const subscriptions = await PushAPI.user.getSubscriptions({
    user: "eip155:5:0xFe20f562482c33d1447947ef67bb20A3cb98C2ae", // user address in CAIP
    env: "staging",
  });
  console.log("user_subscriptions", subscriptions);
};


const user_details = () => {
  return (
    <div>
      <div>
        <button
          onClick={user_notification}
          style={{
            height: "60px",
            borderRadius: "20px",
            fontSize: "30px",
            color: "blue",
            cursor: "pointer",
          }}
        >
          get user_notification
        </button>
      </div>
      //-----------------------------------------------------
      <div>
        <button
          onClick={user_spam_notification}
          style={{
            height: "60px",
            borderRadius: "20px",
            fontSize: "30px",
            color: "blue",
            cursor: "pointer",
          }}
        >
          get user's spam_notification
        </button>
      </div>
      //-----------------------------------------------------
      <div>
        <button
          onClick={user_subscriptions}
          style={{
            height: "60px",
            borderRadius: "20px",
            fontSize: "30px",
            color: "blue",
            cursor: "pointer",
          }}
        >
          get user's subscriptions
        </button>
      </div>
    </div>
  );
};

export default user_details;
