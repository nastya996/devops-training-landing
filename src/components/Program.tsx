import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Module = {
  num: string;
  title: string;
  weeks: string;
  icon: string;
  summary: string;
  topics: string[];
};

const MODULES: Module[] = [
  {
    num: '01',
    title: 'Linux и сети',
    weeks: '5 недель',
    icon: 'TerminalSquare',
    summary:
      'Фундамент, без которого не работает ничего дальше: процессы, файловая система, systemd, права, сетевой стек и разбор инцидентов через логи.',
    topics: ['bash и скрипты', 'systemd и юниты', 'iptables, DNS, TCP/IP', 'ssh и доступы', 'разбор инцидентов'],
  },
  {
    num: '02',
    title: 'Docker и образы',
    weeks: '4 недели',
    icon: 'Container',
    summary:
      'Контейнеризуем реальное приложение: пишем Dockerfile, режем размер образа, настраиваем compose и приватный реестр.',
    topics: ['Dockerfile и слои', 'multi-stage сборки', 'docker compose', 'registry и теги', 'безопасность образов'],
  },
  {
    num: '03',
    title: 'Kubernetes',
    weeks: '7 недель',
    icon: 'Boxes',
    summary:
      'Самый большой модуль курса. Поднимаем кластер, выкатываем сервисы, разбираемся с сетью, хранилищем и автоскейлингом.',
    topics: ['pod, deployment, service', 'ingress и сертификаты', 'ConfigMap и Secret', 'Helm-чарты', 'HPA и ресурсы'],
  },
  {
    num: '04',
    title: 'CI/CD пайплайны',
    weeks: '5 недель',
    icon: 'GitBranch',
    summary:
      'Собираем сквозной конвейер от коммита до продакшна: тесты, сборка, автодеплой, откаты и стратегия ветвления.',
    topics: ['GitLab CI и Actions', 'артефакты и кэш', 'blue-green и canary', 'ArgoCD и GitOps', 'откаты релизов'],
  },
  {
    num: '05',
    title: 'Облака и IaC',
    weeks: '5 недель',
    icon: 'Cloud',
    summary:
      'Описываем инфраструктуру кодом и разворачиваем её в облаке одной командой. Считаем деньги и планируем отказоустойчивость.',
    topics: ['Terraform и модули', 'Ansible-роли', 'сети и балансировщики', 'бэкапы и DR', 'контроль затрат'],
  },
  {
    num: '06',
    title: 'Мониторинг и SRE',
    weeks: '4 недели',
    icon: 'Activity',
    summary:
      'Учимся видеть систему: метрики, логи, трейсы, алерты и дежурства. Пишем SLO и проводим постмортем после аварии.',
    topics: ['Prometheus и метрики', 'Grafana-дашборды', 'Loki и логи', 'алерты и дежурства', 'SLO и постмортемы'],
  },
];

const Program = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="program" className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="pill-red">Программа</span>
            <h2 className="mt-6 max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
              Шесть модулей,
              <br />
              один <span className="font-display normal-case italic tracking-normal text-primary">рабочий</span> стек
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            30 недель, 38 практических работ и сквозной проект: вы поэтапно собираете
            инфраструктуру интернет-магазина — от голого сервера до автодеплоя в кластер.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-12">
          <div className="flex flex-col gap-px bg-border lg:col-span-5">
            {MODULES.map((m, i) => (
              <button
                key={m.num}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 px-5 py-5 text-left transition-colors md:px-7 ${
                  active === i ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-secondary'
                }`}
              >
                <span
                  className={`font-mono text-xs tracking-[0.2em] ${
                    active === i ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {m.num}
                </span>
                <span className="flex-1">
                  <span className="block text-base font-black uppercase tracking-[0.06em] md:text-lg">{m.title}</span>
                  <span
                    className={`mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] ${
                      active === i ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}
                  >
                    {m.weeks}
                  </span>
                </span>
                <Icon
                  name="ArrowRight"
                  size={18}
                  className={`transition-transform ${active === i ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`}
                />
              </button>
            ))}
          </div>

          <div className="relative bg-card p-7 md:p-10 lg:col-span-7">
            <div key={active} className="animate-fade-in">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                  <Icon name={MODULES[active].icon} size={22} />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Модуль {MODULES[active].num} · {MODULES[active].weeks}
                  </div>
                  <div className="text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
                    {MODULES[active].title}
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {MODULES[active].summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {MODULES[active].topics.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Icon name="Video" size={14} className="text-primary" /> вебинары дважды в неделю
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="CheckCheck" size={14} className="text-primary" /> ревью каждой работы
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
