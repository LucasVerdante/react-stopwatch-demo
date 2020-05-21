import React from 'react';
import { useTranslation } from 'react-i18next';

import ThemeToggle from '../apps/ThemeToggle';

import '../../styles/components/page/PageHeader.scss'

const PageHeader = () => {
  const { t } = useTranslation('translations');

  return (
    <header className='page-header' role='banner'>
      <div className='container'>
        <h1 className='page-header--title' aria-label='React Stopwatch Demo'>
          { t('pageTitle') }
        </h1>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default PageHeader;
