import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

type Plan = {
  name: string;
  tagline: string;
  full: number;
  monthly: number;
  featured?: boolean;
  features: { text: string; on: boolean }[];
};

const PLANS: Plan[] = [
  {
    name: 'Самостоятельно',
    tagline: 'Для тех, кто уже в IT и умеет себя организовать',
    full: 89000,
    monthly: 7900,
    features: [
      { text: 'Все 6 модулей и записи вебинаров', on: true },
      { text: '38 практических работ', on: true },
      { text: 'Чат потока и база знаний', on: true },
      { text: 'Ревью работ ментором', on: false },
      { text: 'Личные созвоны', on: false },
      { text: 'Карьерная поддержка', on: false },
    ],
  },
  {
    name: 'С ментором',
    tagline: 'Основной формат: практика с проверкой и обратной связью',
    full: 149000,
    monthly: 12900,
    featured: true,
    features: [
      { text: 'Все 6 модулей и записи вебинаров', on: true },
      { text: '38 практических работ', on: true },
      { text: 'Ревью каждой работы ментором', on: true },
      { text: 'Личные созвоны раз в две недели', on: true },
      { text: 'Сквозной проект в портфолио', on: true },
      { text: 'Карьерная поддержка и резюме', on: true },
    ],
  },
  {
    name: 'Трудоустройство',
    tagline: 'Максимум сопровождения — до подписанного оффера',
    full: 219000,
    monthly: 18900,
    features: [
      { text: 'Всё из тарифа «С ментором»', on: true },
      { text: 'Карьерный консультант лично', on: true },
      { text: '5 тренировочных собеседований', on: true },
      { text: 'Прямые рекомендации в компании', on: true },
      { text: 'Сопровождение до оффера', on: true },
      { text: 'Возврат, если не вышли на работу', on: true },
    ],
  },
];

const money = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

const Pricing = () => {
  const [mode, setMode] = useState<'full' | 'monthly'>('full');

  const go = () => document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing" className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="pill-red">Цены и тарифы</span>
            <h2 className="mt-6 max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
              Выберите
              <br />
              глубину <span className="font-display normal-case italic tracking-normal text-primary">погружения</span>
            </h2>
          </div>

          <div className="inline-flex rounded-full border border-border bg-card p-1">
            {(['full', 'monthly'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
                  mode === m ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {m === 'full' ? 'Разом' : 'В рассрочку'}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col p-7 md:p-9 ${
                p.featured ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground'
              }`}
            >
              {p.featured && (
                <span className="absolute right-7 top-7 rounded-full bg-primary-foreground px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Хит
                </span>
              )}

              <h3 className="text-2xl font-black uppercase tracking-tight">{p.name}</h3>
              <p
                className={`mt-3 max-w-[280px] text-sm leading-relaxed ${
                  p.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}
              >
                {p.tagline}
              </p>

              <div className="mt-8">
                <div className="text-4xl font-black tracking-tight md:text-5xl">
                  {mode === 'full' ? money(p.full) : money(p.monthly)}
                </div>
                <div
                  className={`mt-2 font-mono text-[10px] uppercase tracking-[0.2em] ${
                    p.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {mode === 'full' ? 'за весь курс, 9 месяцев' : 'в месяц · 12 платежей'}
                </div>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-sm leading-snug">
                    <Icon
                      name={f.on ? 'Check' : 'Minus'}
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        f.on
                          ? p.featured
                            ? 'text-primary-foreground'
                            : 'text-primary'
                          : p.featured
                            ? 'text-primary-foreground/40'
                            : 'text-muted-foreground/50'
                      }`}
                    />
                    <span
                      className={
                        f.on
                          ? p.featured
                            ? 'text-primary-foreground'
                            : 'text-foreground'
                          : p.featured
                            ? 'text-primary-foreground/50 line-through'
                            : 'text-muted-foreground/60 line-through'
                      }
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={go}
                className={`mt-9 h-[52px] w-full rounded-full text-[11px] font-black uppercase tracking-[0.18em] ${
                  p.featured
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <Icon name="ShieldCheck" size={14} className="text-primary" /> возврат в первые 14 дней
          </span>
          <span className="flex items-center gap-2">
            <Icon name="FileText" size={14} className="text-primary" /> налоговый вычет 13%
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Building2" size={14} className="text-primary" /> оплата от юрлица
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;