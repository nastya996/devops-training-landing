import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const STATS = [
  { value: '9', label: 'месяцев обучения' },
  { value: '38', label: 'практических работ' },
  { value: '87%', label: 'выходят на оффер' },
  { value: '240k', label: 'медиана зарплаты' },
];

const MARQUEE = [
  'Linux',
  'Docker',
  'Kubernetes',
  'GitLab CI',
  'Terraform',
  'Ansible',
  'Prometheus',
  'Grafana',
  'Helm',
  'ArgoCD',
  'Nginx',
  'PostgreSQL',
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-[72px]">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-end gap-10 pt-16 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="animate-fade-in flex flex-wrap items-center gap-2">
              <span className="pill-red">Набор группы №14</span>
              <span className="pill">Старт 15 сентября</span>
            </div>

            <h1 className="animate-fade-in mt-8 text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.03em] text-foreground sm:text-[9vw] lg:text-[76px]" style={{ animationDelay: '80ms' }}>
              Инженер,
              <br />
              который держит
              <br />
              <span className="font-display normal-case italic tracking-normal text-primary">продакшн</span>
            </h1>

            <p className="animate-fade-in mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base" style={{ animationDelay: '160ms' }}>
              Девять месяцев практики на живых пайплайнах: Linux и сети, Docker,
              Kubernetes, CI/CD, облака и мониторинг. Каждое занятие — с ментором,
              который сам дежурит на боевых кластерах.
            </p>

            <div className="animate-fade-in mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
              <Button
                onClick={() => scrollTo('#contacts')}
                className="h-14 rounded-full px-8 text-[12px] font-black uppercase tracking-[0.18em]"
              >
                Записаться на курс
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo('#program')}
                className="h-14 rounded-full border-border bg-transparent px-8 text-[12px] font-black uppercase tracking-[0.18em] text-foreground hover:bg-secondary hover:text-foreground"
              >
                Смотреть программу
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="animate-scale-in relative" style={{ animationDelay: '200ms' }}>
              <div className="noise overflow-hidden border border-border">
                <img
                  src="https://cdn.poehali.dev/projects/dbc3eecd-1265-4a3c-91e8-8cb32654d8db/files/d2e23243-c317-4014-a2d9-c501a02998fe.jpg"
                  alt="Конструктивистский плакат школы DevOps"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden bg-primary px-6 py-4 text-primary-foreground sm:block">
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-80">Практика</div>
                <div className="text-2xl font-black uppercase tracking-tight">80% курса</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 border-t border-border md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="animate-fade-in border-b border-r border-border p-6 last:border-r-0 md:border-b-0"
              style={{ animationDelay: `${300 + i * 70}ms` }}
            >
              <div className="text-4xl font-black tracking-tight text-foreground md:text-5xl">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-border bg-secondary py-5">
        <div className="flex w-max animate-marquee items-center gap-8">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-8 font-mono text-sm font-bold uppercase tracking-[0.3em] text-foreground"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-b border-border bg-primary">
        <div className="pointer-events-none absolute inset-0 opacity-20 diag-stripes mix-blend-multiply" />
        <div className="relative select-none whitespace-nowrap text-center text-[27vw] font-black uppercase leading-[0.78] tracking-[-0.05em] text-primary-foreground">
          DEVOPS
        </div>
      </div>
    </section>
  );
};

export default Hero;