import ImageMilkMobile from "../assets/mobile/image-gallery-milkbottles.jpg";
import ImageMilkDesktop from "../assets/desktop/image-gallery-milkbottles.jpg";
import ImageOrangeMobile from "../assets/mobile/image-gallery-orange.jpg";
import ImageOrangeDesktop from "../assets/desktop/image-gallery-orange.jpg";
import ImageConeMobile from "../assets/mobile/image-gallery-cone.jpg";
import ImageConeDesktop from "../assets/desktop/image-gallery-cone.jpg";
import ImageSugarMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import ImageSugarDesktop from "../assets/desktop/image-gallery-sugar-cubes.jpg";

import useMediaQuery from "../hooks/useMediaQuery";

export default function Gallery() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const images = [
    {
      mobile: ImageMilkMobile,
      desktop: ImageMilkDesktop,
    },
    {
      mobile: ImageOrangeMobile,
      desktop: ImageOrangeDesktop,
    },
    {
      mobile: ImageConeMobile,
      desktop: ImageConeDesktop,
    },
    {
      mobile: ImageSugarMobile,
      desktop: ImageSugarDesktop,
    },
  ];

  return (
    <section className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
      {images.map((image, index) => (
        <img
          key={`image_${index}`}
          src={isDesktop ? image.desktop : image.mobile}
          alt=""
          className="w-full"
        />
      ))}
    </section>
  );
}
