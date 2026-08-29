import { useState } from 'react';
import Icon from '@/components/ui/icon';

const REVIEWS = [
  {
    name: 'Дмитрий Соловьёв',
    before: 'системный администратор',
    after: 'DevOps-инженер, логистика',
    salary: '95 000 → 245 000 ₽',
    text: 'Я семь лет чинил принтеры и поддерживал 1С. На курсе впервые собрал полноценный пайплайн от коммита до кластера — и понял, что это ровно та работа, которую я хотел. Оффер получил за две недели до выпускного.',
  },
  {
    name: 'Марина Юшкова',
    before: 'backend-разработчик',
    after: 'Platform Engineer, финтех',
    salary: '180 000 → 290 000 ₽',
    text: 'Мне не хватало инфраструктурной части: я писала код, но не понимала, как он живёт в проде. Модуль по Kubernetes и мониторингу закрыл всё. Через месяц после выпуска перешла в платформенную команду.',
  },
  {
    name: 'Роман Гайдук',
    before: 'инженер техподдержки',
    after: 'DevOps-инженер, e-commerce',
    salary: '70 000 → 210 000 ₽',
    text: 'Самое ценное — ревью работ. Ментор не ставил галочку, а разбирал, почему мой Dockerfile плохой и как это аукнется на бою. К концу курса портфолио выглядело как у человека с опытом.',
  },
  {
    name: 'Анна Верещагина',
    before: 'QA-инженер',
    after: 'CI/CD-инженер, телеком',
    salary: '120 000 → 235 000 ₽',
    text: 'Училась вечерами после работы, боялась не потянуть. Но всё разложено по неделям, и всегда можно было прийти в чат с вопросом. Карьерный консультант помог переписать резюме — откликов стало в разы больше.',
  },
];

const Reviews = () => {
  const [idx, setIdx] = useState(0);
  const r = REVIEWS[idx];

  const move = (d: number) => setIdx((v) => (v + d + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="reviews" className="relative overflow-hidden border-b border-border bg-card py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="pill-red">Отзывы выпускников</span>
            <h2 className="mt-6 max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
              Истории
              <br />
              со <span className="font-display normal-case italic tracking-normal text-primary">сменой</span> профессии
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => move(-1)}
              className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Предыдущий отзыв"
            >
              <Icon name="ArrowLeft" size={18} />
            </button>
            <button
              onClick={() => move(1)}
              className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Следующий отзыв"
            >
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-border lg:grid-cols-12">
          <div key={idx} className="animate-fade-in bg-background p-8 md:p-12 lg:col-span-8">
            <Icon name="Quote" size={40} className="text-primary" />
            <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-foreground md:text-[26px] md:leading-[1.5]">
              {r.text}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7">
              <div>
                <div className="text-lg font-black uppercase tracking-tight text-foreground">{r.name}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {r.before} → <span className="text-primary">{r.after}</span>
                </div>
              </div>
              <span className="pill-red">{r.salary}</span>
            </div>
          </div>

          <div className="flex flex-col gap-px bg-border lg:col-span-4">
            {REVIEWS.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setIdx(i)}
                className={`flex flex-1 items-center gap-4 px-6 py-5 text-left transition-colors ${
                  i === idx ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground hover:bg-secondary'
                }`}
              >
                <span className="font-mono text-xs opacity-70">0{i + 1}</span>
                <span className="flex-1">
                  <span className="block text-sm font-black uppercase tracking-[0.06em]">{item.name}</span>
                  <span className={`mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] ${i === idx ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {item.after}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
