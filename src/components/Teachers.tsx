import Icon from '@/components/ui/icon';

const TEACHERS = [
  {
    name: 'Артём Ковалёв',
    role: 'Lead SRE, финтех',
    photo:
      'https://cdn.poehali.dev/projects/dbc3eecd-1265-4a3c-91e8-8cb32654d8db/files/88efc700-5ca0-405a-b4d7-d98b2e77091c.jpg',
    exp: '11 лет в эксплуатации',
    about:
      'Держит кластеры на 400 нод и дежурит на первой линии. Ведёт модули по Kubernetes и мониторингу.',
    tags: ['Kubernetes', 'Prometheus', 'SLO'],
  },
  {
    name: 'Ольга Терентьева',
    role: 'Platform Engineer, e-com',
    photo:
      'https://cdn.poehali.dev/projects/dbc3eecd-1265-4a3c-91e8-8cb32654d8db/files/1a8d564f-dd85-4b97-8784-c9d43010f049.jpg',
    exp: '8 лет в инфраструктуре',
    about:
      'Строила внутреннюю платформу для 60 команд разработки. Отвечает за CI/CD, GitOps и релизные стратегии.',
    tags: ['GitLab CI', 'ArgoCD', 'Helm'],
  },
  {
    name: 'Сергей Панин',
    role: 'Head of Infrastructure',
    photo:
      'https://cdn.poehali.dev/projects/dbc3eecd-1265-4a3c-91e8-8cb32654d8db/files/520ecaee-c76b-4933-b1f6-2e1072b514ea.jpg',
    exp: '15 лет с Linux',
    about:
      'Прошёл путь от системного администратора до руководителя инфраструктуры. Ведёт Linux, сети и облака.',
    tags: ['Linux', 'Terraform', 'Networking'],
  },
];

const Teachers = () => {
  return (
    <section id="teachers" className="relative border-b border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="pill-red">Преподаватели</span>
            <h2 className="mt-6 max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-6xl">
              Не лекторы,
              <br />
              а <span className="font-display normal-case italic tracking-normal text-primary">дежурные</span> инженеры
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Каждый ментор работает в продакшне прямо сейчас — и приносит на занятия
            свежие инциденты, а не учебные примеры десятилетней давности.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((t) => (
            <article key={t.name} className="group relative bg-card p-6 transition-colors hover:bg-secondary">
              <div className="noise relative overflow-hidden border border-border">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-[300px] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <span className="absolute left-0 top-0 bg-primary px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                  {t.exp}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-foreground">{t.name}</h3>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{t.role}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.about}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <Icon name="Users" size={14} className="text-primary" /> 12 менторов в группе поддержки
          </span>
          <span className="flex items-center gap-2">
            <Icon name="MessageSquare" size={14} className="text-primary" /> ответ в чате до 4 часов
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Repeat" size={14} className="text-primary" /> личные созвоны раз в две недели
          </span>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
