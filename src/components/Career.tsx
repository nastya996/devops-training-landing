import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const STEPS = [
  {
    num: '01',
    icon: 'FileText',
    title: 'Резюме и профиль',
    text: 'Разбираем опыт, переписываем резюме под вакансии DevOps и приводим в порядок GitHub с учебными проектами.',
  },
  {
    num: '02',
    icon: 'MessagesSquare',
    title: 'Тренировочные секции',
    text: 'Пять собеседований с действующими тимлидами: техническая секция, задачи на Linux и вопросы по Kubernetes.',
  },
  {
    num: '03',
    icon: 'Send',
    title: 'Отклики и рекомендации',
    text: 'Помогаем составить план откликов и передаём ваше резюме напрямую в компании-партнёры школы.',
  },
  {
    num: '04',
    icon: 'Handshake',
    title: 'Оффер и торг',
    text: 'Сопровождаем на финальных этапах, помогаем обсудить вилку и не продешевить на старте.',
  },
];

const PARTNERS = ['Ozon Tech', 'Тинькофф', 'Авито', 'Х5 Digital', 'Selectel', 'Wildberries', 'МТС Web', 'Точка'];

const Career = () => {
  return (
    <section id="career" className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="pill-red">Трудоустройство</span>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
              Доводим
              <br />
              до <span className="font-display normal-case italic tracking-normal text-primary">оффера</span>
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Карьерный трек стартует с пятого месяца обучения и не заканчивается выпускным.
              87% студентов тарифа «Трудоустройство» выходят на новую работу в течение
              четырёх месяцев после курса.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-border">
              <div className="bg-card p-6">
                <div className="text-4xl font-black tracking-tight text-primary">87%</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  выходят на оффер
                </div>
              </div>
              <div className="bg-card p-6">
                <div className="text-4xl font-black tracking-tight text-primary">3,5</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  месяца поиска в среднем
                </div>
              </div>
            </div>

            <Button
              onClick={() => document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 h-14 rounded-full px-8 text-[12px] font-black uppercase tracking-[0.18em]"
            >
              Обсудить карьерный трек
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {STEPS.map((s) => (
                <div key={s.num} className="group bg-card p-7 transition-colors hover:bg-secondary">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground">
                      <Icon name={s.icon} size={20} />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">{s.num}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-black uppercase tracking-tight text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-border p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Куда уходят выпускники
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {PARTNERS.map((p) => (
                  <span key={p} className="chip">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
