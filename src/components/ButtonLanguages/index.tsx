import React from 'react'
import { useTranslation } from 'react-i18next'
import BR from '../../assets/img/br.svg'
import US from '../../assets/img/us.svg'
import './styles.css'

const languageOptions = [
  {
    name: 'BR',
    value: 'ptBR',
    flag: BR,
  },
  {
    name: 'US',
    value: 'en',
    flag: US,
  },
  
  ]

export function ButtonLanguages () {
  const { i18n } = useTranslation()
  return (
    <div className='languages'>
       {
          languageOptions.map(languageOption =>(
            <button
                key={languageOption.value}
                onClick={() => {
                  i18n.changeLanguage(languageOption.value)
                }}
            >
              <img src={languageOption.flag} alt={languageOption.name} />
              {languageOption.name}
            </button>
          ))
        }
    </div>
  )
}

