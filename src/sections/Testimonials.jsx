import testimonialsData from "../testimonialsData";
import Testimonial from "../components/Testimonial";

import ImageEmily from "../assets/image-emily.jpg";
import ImageJennie from "../assets/image-jennie.jpg";
import ImageThomas from "../assets/image-thomas.jpg";

export default function Testimonials() {
  const images = {
    "image-emily.jpg": ImageEmily,
    "image-jennie.jpg": ImageJennie,
    "image-thomas.jpg": ImageThomas,
  };

  return (
    <section className="pb-[94px] pt-[63px] lg:py-[160px]">
      <h3 className="mx-auto select-none text-center font-fraunces font-black uppercase tracking-[0.3rem] text-grayish-blue lg:text-[20px]">
        Client Testimonials
      </h3>
      <div className="mx-5 mt-[63px] flex flex-col gap-[74px] lg:mx-auto lg:mt-[80px] lg:flex-row lg:justify-center lg:gap-8">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={`testi_${index}`}
            text={testimonial.text}
            name={testimonial.author.name}
            role={testimonial.author.role}
            imgSrc={images[testimonial.imgName]}
          />
        ))}
      </div>
    </section>
  );
}
