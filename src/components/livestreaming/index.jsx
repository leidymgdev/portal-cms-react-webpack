import React from "react";
import { Livestreaming } from "@jcgalvis/vtex.livestreaming";
import "@jcgalvis/vtex.livestreaming/dist/index.css";

const windowInfo = window;
const { vtexjs } = windowInfo;

const LivestreamingPortal = () => {
  const getProductsCace = async (collectionId) => {
    const url = `/api/catalog_system/pub/products/search?fq=productClusterIds:${collectionId}&_from=0&_to=49`;

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const products = data.map((product) => {
        return {
          id: product.productId,
          name: product?.productName,
          priceWithDiscount:
            product?.items[0]?.sellers[0]?.commertialOffer.Price,
          price: product?.items[0]?.sellers[0]?.commertialOffer.ListPrice,
          imageUrl: product?.items[0]?.images[0]?.imageUrl,
          addToCartLink: product?.items[0].complementName
            ? product?.items[0].complementName
            : product?.items[0].sellers[0].addToCartLink,
          isAvailable: product?.skuSpecifications
            ? true
            : product?.items[0]?.sellers[0]?.commertialOffer.IsAvailable,
          variationSelector: product?.skuSpecifications || [],
          pdpLink: product.link,
          skuId: product.items[0].itemId,
        };
      });
      return products;
    }

    return null;
  };

  const getProductByIdCace = async (productId) => {
    const url = `/api/catalog_system/pub/products/search?fq=productId:${productId}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const product = {
        id: data[0]?.productId,
        name: data[0]?.productName,
        priceWithDiscount: data[0]?.items[0]?.sellers[0]?.commertialOffer.Price,
        price: data[0]?.items[0]?.sellers[0]?.commertialOffer.ListPrice,
        imageUrl: data[0]?.items[0]?.images[0]?.imageUrl,
        addToCartLink: data[0]?.items[0].complementName
          ? data[0]?.items[0].complementName
          : data[0]?.items[0].sellers[0].addToCartLink,
        items: data[0]?.items,
        isAvailable: data[0]?.skuSpecifications
          ? true
          : data[0]?.items[0]?.sellers[0]?.commertialOffer.IsAvailable,
        variationSelector: data[0]?.skuSpecifications,
        pdpLink: data[0]?.link,
      };

      return product;
    }

    return null;
  };

  const addToCart = (product) => {
    var item = {
      id: product.skuId,
      quantity: 1,
      seller: "1",
    };

    return vtexjs.checkout.addToCart([item]);
  };

  return (
    <Livestreaming
      addToCart={addToCart}
      account="__ACCOUNT"
      getProductId={getProductByIdCace}
      getProducts={getProductsCace}
      idLivestreaming="__IDLIVESTREAMING"
      isInGlobalPage="_ISINGLOBALPAGE"
      isInfinite="_ISINFINITE"
      kuikpay="_KUIKPAY"
      originOfProducts="_ORIGINOFPRODUCTS"
      redirectTo="_PDP"
      showChat="_INACTIVATECHAT"
      showLike="_INACTIVATELIKE"
      showQuickView="_SHOWQUICKVIEW"
      showProductsCarousel="_INACTIVEPRODUCTSCAROUSEL"
      showSidebarProducts="_INACTIVESIDEBARPRODUCTS"
      showViewers="_INACTIVATEVIEWERS"
      time="_TIME"
    />
  );
};

export default LivestreamingPortal;
