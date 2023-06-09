import { useRef } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import style from './index.module.scss';

export default function Main() {
  const vimeoRef = useRef<any>(null);
  const onRestart = () => {
    console.log(`vimeoRef?.current----->：`, vimeoRef?.current);
    if (vimeoRef?.current) {
      // TODO:there is a problem here
      vimeoRef.current.setCurrent(0);
    }
  };
  return (
    <div className={style.main}>
      <Vimeo
        ref={vimeoRef}
        className={style['vimeo-player']}
        video={'https://vimeo.com/831094569'}
        muted
        loop
        background
        controls={false}
      />
      <button onClick={onRestart}>restart</button>
    </div>
  );
}
