import React, { useState } from "react";

const IntentList = () => {
  let [intents, setIntents] = useState([]);

  async function fetchIntentList() {
    let res = await fetch("http://localhost:8000/intents");
    let data = await res.json();
    setIntents(data.intentList);
    console.log(intents);
  }

  return (
    <div>
      <div className="container">
        <button
          className="btn btn-outline-info w-100"
          onClick={() => fetchIntentList()}
        >
          Get Intents
        </button>
        {intents.map((intent) => (
          <div className="intentDiv" key={intent.name}>
            <p className="intentDetails">
              <b> Intent Display Name : </b> {intent.displayName}
            </p>
            <hr />
            <p className="intentDetails">
              <b> Intent Name : </b> {intent.name}
            </p>

            <p className="intentDetails">
              <b> Action : </b> {intent.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntentList;
