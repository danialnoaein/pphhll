import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ArrowLeft from "../../../../public/arrowLeft";

const AnimatedCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !["top", "ishovered", "isactive"].includes(prop),
})<{
  top: number;
  ishovered: boolean;
  isactive: boolean;
}>`
  position: absolute;
  width: 310px;
  height: 400px;
  top: ${({ top }) => `-${110 + top * 40}px`};
  right: -154px;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    width: 460px;
    right: -228px;
    top: ${({ top }) => `-${160 + top * 50}px`};
  }

  ${({ isactive }) =>
    isactive &&
    css`
      animation: move-up-down 1.5s ease-in-out;
    `}

  &:hover {
    animation: none;
    top: ${({ top }) => `-${130 + top * 40}px`};
    @media (min-width: 768px) {
      top: ${({ top }) => `-${180 + top * 50}px`};
    }
  }
`;

const Cards = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(0);

  useEffect(() => {
    // Initialize card positions on the client

    // Randomly activate a card every 3 seconds
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        let nextCard;
        do {
          nextCard = Math.floor(Math.random() * 4); // Random card index
        } while (nextCard === prev);
        return nextCard;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cardData = [
    { link: "#", label: "صندوق های پاداش(سبدگردان)", top: 3 },
    { link: "#", label: "مشاور سرمایه گذاری", top: 2 },
    { link: "#", label: "کارگزاری پاداش", top: 1 },
    { link: "#", label: "لیزینگ پاداش", top: 0 },
  ];

  return (
    <div className='relative min-h-[24rem] md:min-h-[30rem]'>
      <div className='flex'>
        <div className='flex-1 cards-section-bg-right h-[360px] md:h-[512px]'></div>
        <div className='flex-1 cards-section-bg-left h-[360px] md:h-[512px]'></div>
      </div>

      <div className='container mx-auto justify-center flex mt-[-17rem] md:mt-[-20rem]'>
        <div className='w-[310px] md:w-[900px] text-center justify-center items-center flex flex-col relative'>
          <div className='absolute'>
            <Image
              src={"/images/header-leasing.png"}
              alt={"section"}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
