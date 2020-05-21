import React from 'react';

import '../../styles/components/display/Card.scss';

const Card = ({ className, headerText, children }) => {

  return (
    <article className={ `card ${ className }` } role='complementary'>
      {/* Optional Card Header */ }
      { headerText && (
        <header className='card--header'>
          <h5 aria-label={ headerText }>{ headerText }</h5>
        </header>
      ) }

      {/* Card Body */}
      <div className='card--body'>
        { children }
      </div>
    </article>
  );
};

export default Card;
