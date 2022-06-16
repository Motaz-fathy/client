import React from 'react'
import { Appituneity } from './components/Appituneity/Appituneity';
import { Collapse } from './components/Collapse/Collapse';
import { Header } from './components/Header/Header';
import { Number } from './components/Number/Number';
import { Services } from './components/Services/Services';

export const Home = () => {
  return (
    <div>
        <Header />
        <Services />
        <Number />
        <Appituneity />
        <Collapse />
    </div>
  )
}
