import DesignImageMobile from "../assets/mobile/image-graphic-design.jpg";
import DesignImageDesktop from "../assets/desktop/image-graphic-design.jpg";
import PhotographyImageMobile from "../assets/mobile/image-photography.jpg";
import PhotographyImageDesktop from "../assets/desktop/image-photography.jpg";

import useMediaQuery from "../hooks/useMediaQuery";

export default function Services() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const image = [
    {
      mobile: DesignImageMobile,
      desktop: DesignImageDesktop,
    },
    {
      mobile: PhotographyImageMobile,
      desktop: PhotographyImageDesktop,
    },
  ];

  return (
    <section className="font-barlow lg:grid lg:grid-cols-2">
      <div className="relative text-dark-desaturated-cyan">
        <img
          src={isDesktop ? image[0].desktop : image[0].mobile}
          alt=""
          className="w-full"
        />
        <article className="absolute bottom-[56px] left-0 flex w-full flex-col items-center gap-5 text-center lg:gap-6">
          <h3 className="select-none font-fraunces text-[1.8rem] font-black">
            Graphic Design
          </h3>
          <p className="mx-4 max-w-[55ch] leading-[27.5px] lg:max-w-[40ch]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients&apos;
            attention.
          </p>
        </article>
      </div>
      <div className="relative text-dark-blue">
        <img
          src={isDesktop ? image[1].desktop : image[1].mobile}
          alt=""
          className="w-full"
        />
        <article className="absolute bottom-[56px] left-0 flex w-full flex-col items-center gap-5 text-center lg:gap-6">
          <h3 className="select-none font-fraunces text-[1.8rem] font-black">
            Photography
          </h3>
          <p className="mx-4 max-w-[55ch] leading-[27.5px] lg:max-w-[40ch]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </article>
      </div>
    </section>
  );
}
