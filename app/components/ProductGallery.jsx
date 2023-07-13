import {Image} from '@shopify/hydrogen';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({media, className}) {
  if (!media.length) {
    return null;
  }

  return (
    <div
      className={"carousel h-[62vh] sm:h-[70vh] lg:h-[90vh] w-full overflow-scroll py-6 pl-6"}
    >
      <div className="flex h-full w-full">
        {media.map((med, i) => {
          const isFirst = i === 0;
          const isFourth = i === 3;
          const isFullWidth = i % 3 === 0;

          const image =
            med.__typename === 'MediaImage'
              ? {...med.image, altText: med.alt || 'Product image'}
              : null;

          return (
            <div className='h-full w-full flex-grow flex-shrink-0 pr-6'  key={med.id || image?.id}>
              {image && (
                  <Image
                    loading={i === 0 ? 'eager' : 'lazy'}
                    data={image}
                    // aspectRatio={!isFirst && !isFourth ? '4/5' : undefined}
                    // sizes={
                    //   isFirst || isFourth
                    //     ? '(min-width: 48em) 60vw, 90vw'
                    //     : '(min-width: 48em) 30vw, 90vw'
                    // }
                    className="h-full w-full object-cover my-shadow"
                  />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// <div className="carousel h-[62vh] sm:h-[70vh] lg:h-[90vh] w-full overflow-scroll py-6 pl-6">
//   <div className="slider">
//     <div className="slide">
//       <img className="product-image" src={photo1} alt = "people"></img>
//     </div>
//     <div className="slide">
//       <img className="product-image" src={photo2} alt = "people"></img>
//     </div>
//     <div className="slide">
//       <img className="product-image" src={photo3} alt = "people"></img>
//     </div>
//     <div className="slide">
//       <img className="product-image" src={photo4} alt = "people"></img>
//     </div>
//   </div>
// </div>
