import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import S from './style.module.scss';

const PlayerView = () => {

  const videoID = "f093769230f52d709c553ddb15d7570a"
  return (
    <div className={S.Player}>
      <Stream controls src={videoID}/>
    </div>
  )
}
export default PlayerView




