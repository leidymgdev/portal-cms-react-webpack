import React from "react";
import { Livestreaming } from "@jcgalvis/vtex.livestreaming";
import "@jcgalvis/vtex.livestreaming/dist/index.css";

const LivestreamingPortal = () => {
  return (
    <Livestreaming
      idLivestreaming="__IDLIVESTREAMING"
      account="__ACCOUNT"
      inactiveSidebarProducts="_INACTIVESIDEBARPRODUCTS"
      inactiveProductsCarousel="_INACTIVEPRODUCTSCAROUSEL"
      inactivateChat="_INACTIVATECHAT"
      inactivateLike="_INACTIVATELIKE"
      inactivateViewers="_INACTIVATEVIEWERS"
      isInfinite="_ISINFINITE"
      time="_TIME"
      pdp="_PDP"
      originOfProducts="_ORIGINOFPRODUCTS"
      kuikpay="_KUIKPAY"
    />
  );
};

export default LivestreamingPortal;
