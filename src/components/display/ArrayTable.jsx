import React from 'react';

import '../../styles/components/display/ArrayTable.scss';

const ArrayTable = ({ ariaCaption, hasNumberColumn, columnLabels, data }) => (
  <table className='array-table' role='grid'>
    { ariaCaption && (
      <caption aria-hidden='true' hidden>{ ariaCaption }</caption>
    ) }

    { columnLabels.length > 0 && (
      <thead>
        <tr>
          { columnLabels.map((label, i) => (
            <th scope='column' key={ `columnLabel-${ i }` }>
              { label }
            </th>
          )) }
        </tr>
      </thead>
    ) }

    <tbody>
      { data.map((value, i) => (
        <tr key={ `dataRow-${ i }` }>
          { hasNumberColumn && (
            <td className='text-center'>{ i + 1 }</td>
          ) }
          <td className='text-center'>{ value }</td>
        </tr>
      )) }
    </tbody>
  </table>
);

export default ArrayTable;
