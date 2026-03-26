const advantages = [
  {
    icon: "🏗️",
    title: "Быстрый монтаж",
    desc: "Установка за 1 день без фундамента",
  },
  {
    icon: "🔩",
    title: "Прочная сталь",
    desc: "Металлический каркас толщиной 3 мм",
  },
  {
    icon: "🚚",
    title: "Доставка по России",
    desc: "Собственный автопарк техники",
  },
  {
    icon: "✅",
    title: "Гарантия 3 года",
    desc: "На все виды конструкций",
  },
];

export default function Featured() {
  return (
    <div id="advantages" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/1e0880ef-a66c-42c1-b17b-692be9aea730/files/871f3355-c76b-490e-9c9c-92af6e5af65c.jpg"
          alt="Блок-контейнер"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500" id="catalog">
          Почему выбирают нас
        </h3>
        <p className="text-3xl lg:text-5xl mb-10 text-neutral-900 leading-tight font-bold">
          Бытовки и блок-контейнеры собственного производства — надёжно, быстро, по честной цене.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {advantages.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-semibold text-neutral-900 text-base">{item.title}</p>
              <p className="text-neutral-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide font-semibold">
          Запросить прайс-лист
        </button>
      </div>
    </div>
  );
}
