yarn build &&
  aws s3 rm s3://liveshopping-portal/dev --recursive &&
  aws s3 cp dist s3://liveshopping-portal/dev --recursive --exclude "*.html"
