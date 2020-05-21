import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] =
    useState(JSON.parse(localStorage.getItem('IS_DARK_THEME')));
  const { t } = useTranslation('translations');

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('IS_DARK_THEME', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <button
      className='btn btn--blue'
      onClick={ () => setIsDarkTheme(!isDarkTheme) }
    >
      { t('components.themeToggle.buttonLabel') }
    </button>
  )
};

export default ThemeToggle;
