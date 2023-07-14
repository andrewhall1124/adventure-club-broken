import clsx from 'clsx';
import {flattenConnection, Image, Money, useMoney} from '@shopify/hydrogen';
import {Text, Link, AddToCartButton} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
}) {
  let cardLabel;

  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const {image, price, compareAtPrice} = firstVariant;

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  return (
    <Link
      onClick={onClick}
      to={`/products/${product.handle}`}
      prefetch="intent"
    >
      <div className='flex flex-col'>
        {image && (
          <Image
            className="object-cover flex-1 my-shadow"
            // sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
            aspectRatio="4/5"
            data={image}
            alt={image.altText || `Picture of ${product.title}`}
            loading={loading}
          />
        )}
        <div className="flex flex-col py-2 items-start  text-lg">
          <div className="font-two">
            {product.title}
          </div>
          <Text className="font-two">
            <Money withoutTrailingZeros data={price} />
            {isDiscounted(price, compareAtPrice) && (
              <CompareAtPrice
                className={'opacity-50'}
                data={compareAtPrice}
              />
            )}
          </Text>
        </div>
      </div>
    </Link>
  );
}

function CompareAtPrice({data, className}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
