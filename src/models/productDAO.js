import prisma from '../../prisma';

const getProduct = async productId => {
  const [product] = await prisma.$queryRaw`
  SELECT    p.id,
            p.NAME,
            p.price,
            p.point,
            p.quantity,
            p.thumbnail_url,
            p.description_image_url,
            p.created_at,
            p.updated_at,
            p.sub_category_id,
            p.production_inform_id,
            pi.id,
            pi.origin,
            pi.manufacturer,
            pi.brand,
            pi.shipping_fee
FROM        products AS p
INNER JOIN  production_informs PI
ON          p.production_inform_id = pi.id
WHERE       p.id = ${productId}
  `;
  return product;
};

const getProductOptions = async productId => {
  const productOptions = await prisma.$queryRaw`
  SELECT  PO.id,
          PO.NAME,
          PO.quantity,
          PO.product_id
  FROM    product_options PO
  WHERE   product_id = ${productId}; 
  `;
  return productOptions;
};

const getProductImages = async productId => {
  const productImages = await prisma.$queryRaw`
  SELECT  PI.id,
          PI.image_url,
          PI.product_id
  FROM    product_images PI
  WHERE   product_id = ${productId}; 
  `;
  return productImages;
};

export default { getProduct, getProductOptions, getProductImages };
