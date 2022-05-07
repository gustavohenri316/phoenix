import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import '../i18n/index' 
import './styles.css'


export  function Header() {
  const { t } = useTranslation()
  return (
  <div>
    <div className='container' >
      <div className='logo'>
        <img src="https://arphoenix.com.br/wp-content/uploads/2021/06/arp_logo.png" />
      </div>
      <div className='items'>
        <nav className='nav'>
          <a href="">{t("navBarItem1")}</a>
          <a href="">{t("navBarItem2")}</a>
          <a href="">{t("navBarItem3")}</a>
          <a href="">{t("navBarItem4")}</a>
          <a href="">{t("navBarItem5")}</a>
          <a href="">{t("navBarItem6")}</a>
        </nav>
      </div>
    </div>
  </div>
  )
}
