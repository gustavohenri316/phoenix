import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enJson from '../Languages/en.json'
import ptBRJson from '../Languages/pt-BR.json'
import esJson from '../Languages/es.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false,
  },
  resources: {
   en: enJson,
   ptBR: ptBRJson,
   es: esJson
  }

})

export default i18n;