import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = [
  {
    q: 'Нужен ли опыт в IT, чтобы начать?',
    a: 'Базовый — да. Мы ждём уверенного пользователя командной строки или опыт в поддержке, тестировании, разработке. Совсем с нуля будет тяжело: первый модуль по Linux идёт в быстром темпе. Перед стартом вы проходите короткий вводный тест, и мы честно говорим, готовы ли вы.',
  },
  {
    q: 'Сколько времени нужно в неделю?',
    a: 'От 10 до 14 часов: два вебинара по два часа плюс практика. Большинство студентов учатся вечерами и по выходным, совмещая с полной занятостью. Все занятия записываются, дедлайны можно двигать.',
  },
  {
    q: 'Где выполняются практические работы?',
    a: 'На наших стендах: каждому студенту выдаются виртуальные машины и доступ к учебному кластеру Kubernetes. Ничего покупать и настраивать у себя не нужно, достаточно ноутбука с браузером и терминалом.',
  },
  {
    q: 'Что будет в портфолио после курса?',
    a: 'Сквозной проект: инфраструктура интернет-магазина, описанная в Terraform, собранная в контейнеры, выкатываемая пайплайном в Kubernetes и покрытая мониторингом с алертами. Плюс 38 отдельных работ с ревью ментора.',
  },
  {
    q: 'Что если я не потяну и захочу вернуть деньги?',
    a: 'В первые 14 дней возвращаем полную стоимость без объяснений. Дальше — пропорционально пройденным модулям. На тарифе «Трудоустройство» действует возврат, если вы выполнили все условия карьерного трека и не вышли на работу.',
  },
  {
    q: 'Выдаёте ли документ об обучении?',
    a: 'Да, после защиты финального проекта вы получаете сертификат школы и справку для налогового вычета 13%. Работодатели смотрят прежде всего на проект и собеседование, но документ будет.',
  },
  {
    q: 'Можно ли оплатить от компании?',
    a: 'Да, работаем с юрлицами по договору и закрывающим документам. Также доступна беспроцентная рассрочка на 12 месяцев от банка-партнёра.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className="relative border-b border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="pill-red">Частые вопросы</span>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-5xl">
              Спрашивают
              <br />
              <span className="font-display normal-case italic tracking-normal text-primary">до старта</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Не нашли свой вопрос? Напишите нам — куратор ответит в тот же день
              и при необходимости созвонится.
            </p>
            <a
              href="#contacts"
              className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"
            >
              Задать вопрос
              <Icon name="ArrowRight" size={14} />
            </a>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border">
              {FAQ.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="gap-6 py-6 text-left text-base font-bold uppercase tracking-[0.03em] text-foreground hover:no-underline md:text-lg">
                    <span className="flex items-start gap-5">
                      <span className="mt-1 font-mono text-[11px] tracking-[0.2em] text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-3xl pb-7 pl-0 text-[15px] leading-relaxed text-muted-foreground md:pl-[52px]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
