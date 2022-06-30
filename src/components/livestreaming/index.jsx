import React from "react";
import { Livestreaming } from "@jcgalvis/vtex.livestreaming";
import "@jcgalvis/vtex.livestreaming/dist/index.css";

const windowInfo = window;
const { vtexjs } = windowInfo;

const LivestreamingPortal = () => {
  const filterAvailableProducts = (product) => {
    const availableItems = product?.items.filter((item) => {
      const availableSellers = item.sellers.filter(
        (seller) => seller.commertialOffer.IsAvailable
      );
      return availableSellers.length > 0;
    });

    let item = availableItems[0];

    if (!item) {
      item = product?.items[0];
    }

    const seller = item?.sellers.find(
      (seller) => seller.sellerDefault === true
    );

    return {
      item,
      seller,
      isAvailable: !!availableItems?.length,
    };
  };

  const getProducts = async (collectionId) => {
    const url = `/api/catalog_system/pub/products/search?fq=productClusterIds:${collectionId}&_from=0&_to=49`;

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const products = data.map((product) => {
        const result = filterAvailableProducts(product);
        const { item, seller, isAvailable } = result;

        return {
          id: product.productId,
          name: product?.productName,
          priceWithDiscount: seller?.commertialOffer.Price,
          price: seller?.commertialOffer.ListPrice,
          imageUrl: item?.images[0]?.imageUrl,
          addToCartLink: seller.addToCartLink,
          isAvailable,
          variationSelector: product?.skuSpecifications || [],
          pdpLink: product.link,
          skuId: item.itemId,
        };
      });
      return products;
    }

    return null;
  };

  const getProductById = async (productId) => {
    const url = `/api/catalog_system/pub/products/search?fq=productId:${productId}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const result = filterAvailableProducts(data[0]);
      const { item, seller, isAvailable } = result;

      const product = {
        id: data[0]?.productId,
        name: data[0]?.productName,
        priceWithDiscount: seller?.commertialOffer.Price,
        price: seller?.commertialOffer.ListPrice,
        imageUrl: item?.images[0]?.imageUrl,
        addToCartLink: seller?.addToCartLink,
        items: data[0]?.items,
        isAvailable,
        variationSelector: data[0]?.skuSpecifications,
        pdpLink: data[0]?.link,
      };

      return product;
    }

    return null;
  };

  const addToCart = (product) => {
    const result = filterAvailableProducts(product);

    const {
      seller: { sellerId },
    } = result;

    var item = {
      id: product.skuId,
      quantity: 1,
      seller: sellerId,
    };

    return vtexjs.checkout.addToCart([item]);
  };

  return (
    <Livestreaming
      addToCart={addToCart}
      account="__ACCOUNT"
      environment="prod"
      getProductId={getProductById}
      getProducts={getProducts}
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
