import React from 'react';
import { useTranslation } from 'react-i18next';

import PageHeader from './components/page/PageHeader';
import PageFooter from './components/page/PageFooter';
import Stopwatch from './components/apps/Stopwatch';

const App = () => {
  const { t } = useTranslation('translations');

  return (
    <>
      <PageHeader />

      <main role='main'>
        <div className='container'>
          <section className='section'>
            <h1 className='section--title'>{ t('section1.title') }</h1>
            <div className='columns'>
              <div className='column-half'>
                <Stopwatch />
              </div>
            </div>
          </section>

          <section className='section'>
            <h1 className='section--title'>{ t('section2.title') }</h1>
            <div className='columns'>
              <div className='column-half'>
                <Stopwatch />
              </div>
              <div className='column-half'>
                <Stopwatch />
              </div>
            </div>
          </section>
        </div>
      </main>

      <PageFooter />
    </>
  );
}

export default App;
