import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
function App() {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01", //Amount of cash to be charged
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    console.log(data);
    return actions.order.capture();
  };
  return (
    <div className="app">
      <div className="wrapper">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </div>
  );
}

export default App;
