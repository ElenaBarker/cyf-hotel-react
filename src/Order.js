import { useState } from "react";
import React from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders((orders) => orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton onClick={orderOne} />
    </li>
  );
};

export default Order;
