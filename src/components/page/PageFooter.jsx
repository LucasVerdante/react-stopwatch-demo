import React from 'react';

import ThemeToggle from '../apps/ThemeToggle';

import '../../styles/components/page/PageFooter.scss';

const PageHeader = () => {
  return (
    <footer className='page-footer' role='contentinfo'>
      <div className='container'>
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default PageHeader;
