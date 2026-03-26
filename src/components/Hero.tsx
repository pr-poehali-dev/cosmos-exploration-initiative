import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/1e0880ef-a66c-42c1-b17b-692be9aea730/files/76b7dbe2-7d8a-4d0a-99c6-a5c0b1b99626.jpg"
          alt="Бытовки и блок-контейнеры"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">
          Производство и продажа
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          БЫТОВКИ И<br />БЛОК-КОНТЕЙНЕРЫ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Надёжные модульные конструкции для строительства, бизнеса и жизни.
          Доставка и монтаж по всей России.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#catalog"
            className="bg-white text-black px-8 py-3 uppercase text-sm tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300"
          >
            Смотреть каталог
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-8 py-3 uppercase text-sm tracking-wide font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Рассчитать стоимость
          </a>
        </div>
      </div>
    </div>
  );
}
