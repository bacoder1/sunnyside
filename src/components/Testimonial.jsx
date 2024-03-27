export default function Testimonial({ text, name, role, imgSrc }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imgSrc}
        alt={`${name}'s profile picture`}
        className="w-[72px] rounded-full"
      />
      <p className="mt-[30px] max-w-prose text-center text-[18.35px] leading-[31.5px] text-very-dark-grayish-blue lg:mt-[57px] lg:max-w-[34ch]">
        {text}
      </p>
      <div className="mt-7 text-center font-fraunces text-[18px] font-black text-very-dark-desaturated-blue lg:mt-[70px]">
        {name}
      </div>
      <div className="mt-[6px] text-center text-[15px] text-grayish-blue">
        {role}
      </div>
    </div>
  );
}
