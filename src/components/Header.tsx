import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const NAV = [
  { href: '#program', label: 'Программа' },
  { href: '#teachers', label: 'Преподаватели' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#career', label: 'Карьера' },
  { href: '#faq', label: 'Вопросы' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-background/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        <button
          onClick={() => go('#hero')}
          className="flex items-center gap-3 text-left"
          aria-label="DEVOPS школа"
        >
          <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
            <Icon name="Terminal" size={18} />
          </span>
          <span className="leading-none">
            <span className="block text-[17px] font-black uppercase tracking-[0.28em] text-foreground">
              Девопс
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              школа эксплуатации
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => go('#contacts')}
            className="hidden rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.14em] sm:inline-flex"
          >
            Записаться
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
            aria-label="Меню"
          >
            <Icon name={open ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="flex items-center justify-between border-b border-border py-4 text-left text-sm font-bold uppercase tracking-[0.16em] text-foreground"
              >
                {item.label}
                <Icon name="ArrowUpRight" size={16} className="text-primary" />
              </button>
            ))}
            <Button
              onClick={() => go('#contacts')}
              className="mt-5 h-12 rounded-full text-[12px] font-bold uppercase tracking-[0.16em]"
            >
              Записаться на курс
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
