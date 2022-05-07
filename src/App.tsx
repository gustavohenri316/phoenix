import { Header } from './components/Header'
import { ButtonLanguages } from './components/ButtonLanguages'
import './assets/css/styles.css'
import { useTranslation } from 'react-i18next'
import { ReactTypical } from '@deadcoder0904/react-typical'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NBC from './assets/img/empresas/npc.jpg'
import Arbi from './assets/img/empresas/arbi.jpg'
import Avalon from './assets/img/empresas/avalon.jpg'
import Concre from './assets/img/empresas/concrete.jpg'
import Conti from './assets/img/empresas/continental.jpg'
import Hock from './assets/img/empresas/hock.jpg'
import Mult from './assets/img/empresas/multiplica.jpg'
import Wipro from './assets/img/empresas/wipro.jpg'

const IMGEmpresas = [
  { id: 1, img: NBC },
  { id: 2, img: Arbi },
  { id: 3, img: Avalon },
  { id: 4, img: Concre },
  { id: 5, img: Conti },
  { id: 6, img: Hock },
  { id: 7, img: Mult },
  { id: 8, img: Wipro },
]

function App() {
  const { t } = useTranslation()
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
        <ButtonLanguages />
        <Header />
      </div>
      <div style={{ borderBottom: '1px solid #e3e3e3' }}> </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>

        <header className='main-conteudo'>
          <section className='main-conteudo-section-one'>
            <h1 className='main-conteudo-section-one-title'>{t("titleConteudoOne")}</h1>
            <h2 className='main-conteudo-section-one-subttitle'>
              <ReactTypical
                steps={[
                  `${(t('typicalConteudoOne'))}`,
                  1000,
                  `${(t('typicalConteudoTwo'))}`,
                  1000,
                  `${(t('typicalConteudoTree'))}`,
                  1000,
                  `${(t('typicalConteudoFour'))}`,
                  1000,
                  `${(t('typicalConteudoFive'))}`,
                  1000,
                ]}
                loop={Infinity}
                wrapper="div"
              />
            </h2>
            <p className='main-conteudo-section-one-paragrafo'>{t("paragrafoConteudoOne")}</p>
            <button className='main-conteudo-section-one-button'>{t("buttonConteudoOne")}</button>
          </section>
          <section>
            <img src="https://media.giphy.com/media/86uO8ZYDz4LO7Iau80/giphy.gif" alt="" />
          </section>
        </header>
        <main>
          <section className='inovacao'>
            <h2 className='inovacao-title'>{t("Inovacao")}</h2>
            <div className='container'>
              <Swiper
                modules={[EffectFade]}
                spaceBetween={0}
                slidesPerView={5}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {IMGEmpresas.map(item => (
                  <SwiperSlide>
                    <img className='inovacao-img' key={item.id} src={item.img} />
                  </SwiperSlide>
                ))
                }
              </Swiper>

            </div>
          </section>
          <section>
            <div className='coteudo-solutions'>
              <h4>{t("keyBV")}</h4>
              <h2>{t("KeyTitleSP")}</h2>
              <p>{t("KeyParagrafoTextSP")}</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App