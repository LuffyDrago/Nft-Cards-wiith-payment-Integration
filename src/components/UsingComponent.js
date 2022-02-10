import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function App() {
  const config = {
    public_key: process.env.REACT_APP_API_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "KES",
    payment_options: "mobilemoney,",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Place a bid",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
