import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Steps } from '@alfalab/core-components/steps';
import { Tag } from '@alfalab/core-components/tag';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import basket from './assets/basket.png';
import coin from './assets/coin.png';
import direction from './assets/direction.png';
import doc from './assets/doc.png';
import family from './assets/family.png';
import flag from './assets/flag.png';
import hb from './assets/hb.png';
import hb1 from './assets/hb1.png';
import heart from './assets/heart.png';
import house from './assets/house.png';
import light from './assets/light.png';
import money from './assets/money.png';
import pie from './assets/pie.png';
import ring from './assets/ring.png';
import sub from './assets/sub.png';
import wallet from './assets/wallet.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout, ThxSpinner } from './thx/ThxLayout';

const data = [
  {
    title: '+1 топовая категория с кэшбеком 5%',
    subtitle: 'Дополнительная категория каждый месяц',
    img: basket,
  },
  {
    title: '+1 попытка крутить барабан суперкэшбэка',
    subtitle: 'Выше шанс выиграть до 100% в случайной категории',
    img: pie,
  },
  {
    title: 'Эксклюзивный кэшбэк от партнёров',
    subtitle: 'Доступ к особой подборке',
    img: light,
  },
  {
    title: 'Увеличенный лимит кэшбэка',
    subtitle: '7000 Р в категориях, 10 000 Р или миль в сервисах Альфа-Банка',
    img: wallet,
  },
  {
    title: '+3% годовых',
    subtitle: 'По накопительному Альфа-Счёту на ежедневный остаток',
    img: coin,
  },
  {
    title: 'Бесплатные уведомления',
    subtitle: 'Пуши и смс об операциях по всем дебетовым картам',
    img: ring,
  },
  {
    title: 'Бесплатные переводы',
    subtitle: 'В любые банки без комиссий',
    img: direction,
  },
  {
    title: 'Увеличенный лимит на снятие наличных',
    subtitle: 'Без комиссии в банкоматах любых банков России',
    img: flag,
  },
];

const dataStep0 = [
  {
    title: '14% на остаток',
    subtitle: 'При пополнении брокерского счёта / ИИС и остатке от 10 000 ₽',
    img: money,
  },
  {
    title: 'Эксклюзивная аналитика',
    subtitle: 'Закрытая аналитика 1 в месяц, инвест-идеи - раз в неделю',
    img: doc,
  },
  {
    title: 'Ежемесячные розыгрыши',
    subtitle: 'Возможность выиграть до 50 000 ₽ на брокерский счёт или ИИС',
    img: heart,
  },
  {
    title: '3 сделки без комиссии',
    subtitle: 'Каждый месяц при остатке от 10 000 ₽',
    img: house,
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '5010_accept_var4');
    setLoading(true);

    // LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (!thxShow) {
    return <ThxLayout />;
  }

  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <ThxSpinner />;
  }

  if (step === 0) {
    return (
      <>
        <div className={appSt.container}>
          <div className={appSt.box}>
            <img src={hb1} width="100%" height={167} style={{ objectFit: 'contain' }} />
            <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="semibold">
              Альфа-Смарт
              <br />
              для инвесторов
            </Typography.TitleResponsive>
            <Typography.Text style={{ margin: '.5rem 0 20px' }} view="primary-medium">
              Дополнительные привилегии
              <br />
              от Альфа-Инвестиций
            </Typography.Text>
          </div>

          <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="medium">
            Привелегии
          </Typography.TitleResponsive>

          <div>
            {dataStep0.map(item => (
              <PureCell key={item.title} verticalPadding="default">
                <PureCell.Graphics verticalAlign="center">
                  <img src={item.img} width={48} height={48} alt={item.title} />
                </PureCell.Graphics>
                <PureCell.Content>
                  <PureCell.Main>
                    <Typography.TitleResponsive tag="h4" view="xsmall" font="system" weight="medium">
                      {item.title}
                    </Typography.TitleResponsive>
                    <Typography.Text view="primary-small" color="secondary">
                      {item.subtitle}
                    </Typography.Text>
                  </PureCell.Main>
                </PureCell.Content>
              </PureCell>
            ))}
          </div>

          <Typography.TitleResponsive tag="h3" view="small" font="system" weight="medium">
            Как получить
          </Typography.TitleResponsive>

          <Steps isVerticalAlign interactive={false} className={appSt.stepStyle}>
            <Typography.Text view="component-primary">Подключите подписку Альфа-Смарт</Typography.Text>
            <Typography.Text view="component-primary">Откройте и пополните брокерский счет или ИИС</Typography.Text>
            <Typography.Text view="component-primary">
              Дополнительные опции от Альфа-Инвестиций подключатся автоматически
            </Typography.Text>
          </Steps>
        </div>

        <Gap size={96} />

        <div className={appSt.bottomBtn}>
          <ButtonMobile
            loading={loading}
            block
            view="primary"
            onClick={() => {
              window.gtag('event', '5010_testfree_var4');
              setStep(1);
            }}
          >
            Подключить Альфа-Смарт
          </ButtonMobile>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hb} width="100%" height={167} style={{ objectFit: 'contain' }} />
          <Typography.TitleResponsive
            style={{ marginTop: '1rem', maxWidth: '260px' }}
            tag="h1"
            view="medium"
            font="system"
            weight="semibold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text style={{ margin: '.5rem 0 20px' }} view="primary-medium">
            Дополнительные привилегии
            <br />
            от Альфа-Инвестиций
          </Typography.Text>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          В вашей подписке
        </Typography.TitleResponsive>

        <div className={appSt.boxRow2Wrap}>
          <Tag size="xxs" checked view="filled" className={appSt.tag}>
            новое
          </Tag>
          <div className={appSt.boxRow2}>
            <div className={appSt.boxRow2text}>
              <Typography.Text defaultMargins={false} view="primary-large" weight="medium" style={{ marginTop: '8px' }}>
                Для инвестора
              </Typography.Text>
              <img src={sub} width={106} height={97} alt="sub" style={{ marginTop: '-16px', marginRight: '-16px' }} />
            </div>

            <div style={{ marginTop: '-40px' }}>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                14% на остаток
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                При пополнении брокерского счёта / ИИС и остатке от 10 000 ₽
              </Typography.Text>
            </div>

            <div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                Эксклюзивные данные
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Аналитический обзор — раз в месяц, идеи для инвестиций — раз в неделю
              </Typography.Text>
            </div>
            <div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                Ежемесячные розыгрыши
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Возможность выиграть до 50 000 ₽ на брокерский счёт или ИИС
              </Typography.Text>
            </div>
            <div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                3 сделки без комиссии
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Каждый месяц при остатке от 10 000 ₽
              </Typography.Text>
            </div>
          </div>
        </div>

        {data.map(item => (
          <div className={appSt.boxRow} key={item.title}>
            <div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-medium" weight="medium">
                {item.title}
              </Typography.Text>
              <Typography.Text view="secondary-large" color="secondary">
                {item.subtitle}
              </Typography.Text>
            </div>
            <img src={item.img} width={96} height={96} alt="item" />
          </div>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          Семейный доступ
        </Typography.TitleResponsive>

        <div className={appSt.boxRow}>
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium" weight="medium">
              Альфа-Смарт для вас и 2 близких
            </Typography.Text>
            <Typography.Text view="secondary-large" color="secondary">
              Приглашайте участников в семейную подписку
            </Typography.Text>
          </div>
          <img src={family} width={96} height={96} alt="family" />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          Дополнительно
        </Typography.TitleResponsive>

        <div>
          <div className={appSt.rowText}>
            <CDNIcon name="glyph_question-circle_m" />
            <Typography.Text view="primary-medium">Частые вопросы</Typography.Text>
          </div>
          <div className={appSt.rowText}>
            <CDNIcon name="glyph_document-lines_m" />
            <Typography.Text view="primary-medium">Подробные условия</Typography.Text>
          </div>
        </div>

        <Typography.Text view="primary-small" color="secondary">
          Нажимая «К подключению», вы соглашаетесь с{' '}
          <span style={{ textDecoration: 'underline' }}>новыми условиями обслуживания</span>
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          К подключению
        </ButtonMobile>
      </div>
    </>
  );
};
