import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../display/Card';
import ArrayTable from '../display/ArrayTable';

import '../../styles/components/apps/Stopwatch.scss'

const Stopwatch = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [decisecondCount, setDecisecondCount] = useState(0);
  const [lapsDeciseconds, setLapsDeciseconds] = useState([]);
  const { t } = useTranslation('translations');

  useEffect(() => {
    let frame = 0;
    let timer;
    const timerLoop = () => {
      frame++;
      if (frame % 6 === 0) {
        setDecisecondCount(prev => prev + 1);
      }
      timer = requestAnimationFrame(timerLoop);
    }

    if (isCounting) {
      timer = requestAnimationFrame(timerLoop);
    }

    return () => {
      cancelAnimationFrame(timer);
    }
  }, [isCounting])

  const formatTimeDisplay =  (deciseconds) => {
    const tenthsOfSecond = deciseconds.toString().slice(-1);
    const seconds = ('0' + (Math.floor(deciseconds / 10) % 60)).slice(-2);
    const minutes = ('0' + (Math.floor(deciseconds / (10 * 60)) % 60)).slice(-2);
    const hours = ('0' + (Math.floor(deciseconds / (10 * 60 * 60)) % 60))
      .slice(-2);

    return `${ hours }:${ minutes }:${ seconds }.${ tenthsOfSecond }`;
  };

  /* Calculate lap times */
  const lapTimes = lapsDeciseconds.map((deciseconds, i) => {
    let lapTime = deciseconds;
    if (i > 0) {
      lapTime = deciseconds - lapsDeciseconds[i - 1];
    }
    return formatTimeDisplay(lapTime);
  });

  const handleStartStop = () => {
    setIsCounting(prev => !prev);
  };

  const handleReset = () => {
    setDecisecondCount(0);
    setLapsDeciseconds([]);
  };

  const handleLap = () => {
    if (!lapsDeciseconds.length) {
      setLapsDeciseconds([decisecondCount]);
    } else {
      setLapsDeciseconds([...lapsDeciseconds, decisecondCount]);
    }
  };

  return (
    <Card className='stopwatch' headerText={ t('components.stopwatch.title') }>
      <div className='stopwatch--time-display'>
        { formatTimeDisplay(decisecondCount) }
      </div>

      <div className='stopwatch--buttons'>
        { isCounting ?
          <>
            <button className='btn btn--red' onClick={ handleStartStop }>
              { t('components.stopwatch.buttonLabels.stop') }
            </button>
            <button className='btn btn--blue' onClick={ handleLap }>
              { t('components.stopwatch.buttonLabels.lap') }
            </button>
          </>
          :
          <>
            <button className='btn btn--green' onClick={ handleStartStop }>
              { t('components.stopwatch.buttonLabels.start') }
            </button>
            <button className='btn btn--red' onClick={ handleReset }>
              { t('components.stopwatch.buttonLabels.reset') }
            </button>
          </>
        }
      </div>

      { lapTimes.length > 0 && (
        <div className='stopwatch--lap-table'>
          <ArrayTable
            ariaCaption={ t('components.stopwatch.lapTable.caption') }
            hasNumberColumn={ true }
            columnLabels={ [
              t('components.stopwatch.lapTable.lapCol'),
              t('components.stopwatch.lapTable.timeCol')
            ] }
            data={ lapTimes }
          />
        </div>
      )}
    </Card>
  );
};

export default Stopwatch;
