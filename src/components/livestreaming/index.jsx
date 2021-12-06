import React from "react";
import { Livestreaming } from "@jcgalvis/vtex.livestreaming";
import "@jcgalvis/vtex.livestreaming/dist/index.css";

const LivestreamingPortal = () => {
  return (
    <Livestreaming
      account="__ACCOUNT"
      idLivestreaming="__IDLIVESTREAMING"
      isInGlobalPage="_ISINGLOBALPAGE"
      isInfinite="_ISINFINITE"
      kuikpay="_KUIKPAY"
      originOfProducts="_ORIGINOFPRODUCTS"
      redirectTo="_PDP"
      showChat="_INACTIVATECHAT"
      showLike="_INACTIVATELIKE"
      showProductsCarousel="_INACTIVEPRODUCTSCAROUSEL"
      showSidebarProducts="_INACTIVESIDEBARPRODUCTS"
      showViewers="_INACTIVATEVIEWERS"
      time="_TIME"
    />
  );
};

export default LivestreamingPortal;
