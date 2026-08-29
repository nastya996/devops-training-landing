import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const PLANS = ['Самостоятельно', 'С ментором', 'Трудоустройство', 'Пока не выбрал'];

type Errors = { name?: string; contact?: string; agree?: string };

const Contacts = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [plan, setPlan] = useState('С ментором');
  const [comment, setComment] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = 'Укажите имя — минимум 2 символа';

    const v = contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[a-zA-Zа-яА-Я]{2,}$/.test(v);
    const isPhone = /^\+?[\d\s()-]{10,18}$/.test(v);
    if (!v) e.contact = 'Оставьте телефон или почту';
    else if (!isEmail && !isPhone) e.contact = 'Похоже на ошибку: проверьте телефон или почту';

    if (!agree) e.agree = 'Нужно согласие на обработку данных';
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSent(true);
    toast({
      title: 'Заявка принята',
      description: 'Куратор свяжется с вами в течение рабочего дня.',
    });
  };

  return (
    <section id="contacts" className="relative overflow-hidden border-b border-border bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-px bg-border lg:grid-cols-12">
          <div className="bg-card p-8 md:p-12 lg:col-span-5">
            <span className="pill-red">Контакты</span>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-5xl">
              Запись
              <br />
              на <span className="font-display normal-case italic tracking-normal text-primary">поток</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Оставьте контакты — куратор позвонит, разберёт ваш опыт и подскажет,
              с какого модуля стартовать. Без навязчивых звонков и продаж.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+74952550114" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-border text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name="Phone" size={18} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Телефон
                  </span>
                  <span className="block text-base font-bold text-foreground">+7 495 255-01-14</span>
                </span>
              </a>

              <a href="mailto:start@devops-school.ru" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-border text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name="Mail" size={18} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Почта
                  </span>
                  <span className="block text-base font-bold text-foreground">start@devops-school.ru</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-border text-primary">
                  <Icon name="MapPin" size={18} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Офис и очные интенсивы
                  </span>
                  <span className="block text-base font-bold text-foreground">Москва, Бумажный пр., 14</span>
                </span>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Ближайший старт — 15 сентября · осталось 9 мест
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 lg:col-span-7">
            {sent ? (
              <div className="animate-scale-in flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center bg-primary text-primary-foreground">
                  <Icon name="Check" size={30} />
                </span>
                <h3 className="mt-8 text-3xl font-black uppercase tracking-tight text-foreground">Заявка принята</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Спасибо, {name.trim()}. Куратор свяжется в течение рабочего дня и пришлёт
                  программу тарифа «{plan}» на почту.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSent(false);
                    setName('');
                    setContact('');
                    setComment('');
                    setAgree(false);
                  }}
                  className="mt-8 h-12 rounded-full border-border bg-transparent px-7 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground hover:bg-secondary hover:text-foreground"
                >
                  Отправить ещё одну
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-7">
                <div>
                  <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Как вас зовут
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван Петров"
                    className={`mt-3 h-[52px] rounded-none border-border bg-background text-base text-foreground placeholder:text-muted-foreground/60 ${
                      errors.name ? 'border-primary' : ''
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 flex items-center gap-2 text-xs text-primary">
                      <Icon name="TriangleAlert" size={13} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="contact" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Телефон или почта
                  </Label>
                  <Input
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+7 900 000-00-00"
                    className={`mt-3 h-[52px] rounded-none border-border bg-background text-base text-foreground placeholder:text-muted-foreground/60 ${
                      errors.contact ? 'border-primary' : ''
                    }`}
                  />
                  {errors.contact && (
                    <p className="mt-2 flex items-center gap-2 text-xs text-primary">
                      <Icon name="TriangleAlert" size={13} /> {errors.contact}
                    </p>
                  )}
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Интересующий тариф
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PLANS.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPlan(p)}
                        className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                          plan === p
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Опыт и вопросы — необязательно
                  </Label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    placeholder="Три года в техподдержке, знаю bash, хочу перейти в эксплуатацию"
                    className="mt-3 resize-none rounded-none border-border bg-background text-base text-foreground placeholder:text-muted-foreground/60"
                  />
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setAgree((v) => !v)}
                    className="flex items-start gap-3 text-left"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors ${
                        agree ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background'
                      }`}
                    >
                      {agree && <Icon name="Check" size={13} />}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      Согласен на обработку персональных данных и получение информации о наборе
                    </span>
                  </button>
                  {errors.agree && (
                    <p className="mt-2 flex items-center gap-2 text-xs text-primary">
                      <Icon name="TriangleAlert" size={13} /> {errors.agree}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="h-14 w-full rounded-full text-[12px] font-black uppercase tracking-[0.18em]"
                >
                  Записаться на курс
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;