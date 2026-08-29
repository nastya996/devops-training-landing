import Icon from '@/components/ui/icon';

const LINKS = [
  { href: '#program', label: 'Программа' },
  { href: '#teachers', label: 'Преподаватели' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#career', label: 'Трудоустройство' },
  { href: '#faq', label: 'Вопросы' },
];

const Footer = () => {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
                <Icon name="Terminal" size={18} />
              </span>
              <span className="text-[17px] font-black uppercase tracking-[0.28em] text-foreground">Девопс</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Онлайн-школа инженеров эксплуатации. Учим тому, что действительно
              крутится в продакшне: Linux, контейнеры, кластеры, пайплайны и мониторинг.
            </p>
            <div className="mt-7 flex gap-2">
              {['Send', 'Youtube', 'Github'].map((ic) => (
                <a
                  key={ic}
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    go('#hero');
                  }}
                  className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={ic}
                >
                  <Icon name={ic} size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Разделы</div>
            <div className="mt-6 grid grid-cols-2 gap-y-3">
              {LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-left text-sm font-bold uppercase tracking-[0.06em] text-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Связь</div>
            <div className="mt-6 space-y-3">
              <a href="tel:+74952550114" className="block text-sm font-bold text-foreground hover:text-primary">
                +7 495 255-01-14
              </a>
              <a href="mailto:start@devops-school.ru" className="block text-sm font-bold text-foreground hover:text-primary">
                start@devops-school.ru
              </a>
              <p className="text-sm text-muted-foreground">Москва, Бумажный проезд, 14</p>
              <p className="text-sm text-muted-foreground">Пн—Пт, 10:00—20:00 МСК</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-7 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© 2026 Школа Девопс. Лицензия на образовательную деятельность №04471</span>
          <span>Политика конфиденциальности · Оферта</span>
        </div>
      </div>

      <div className="diag-stripes h-3 w-full opacity-90" />
    </footer>
  );
};

export default Footer;
