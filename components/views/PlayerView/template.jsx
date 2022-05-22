import React from 'react'
import { Stream } from "@cloudflare/stream-react";
import S from './style.module.scss';

const PlayerView = () => {

  return (
    <div className={S.Player}>
      <Stream controls src='c5e942f18c35dbe3dc14130901b7853d'/>
    </div>
  )
}
export default PlayerView




