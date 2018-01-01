import React from 'react';

import Item from './item';
import LinkButton from './linkButton';

function History() {

  return (
    <div className="container">
      <Item title="Welcome to history channel" />
      <Item title="First time I touched code was in 8th grade"><p>I made LED blink with arduino!</p></Item>
      <Item title="After that I started learning web development"><p>Never stopped learning. Still doing it</p></Item>
      <Item title="Got introduced to React Native back in 2015" />
      <Item title="Got selected to ICT high school in Kerttuli" >
        <LinkButton options={{raised: true}} url="https://www.ictlukio.com/" title="Info about ICT" />
      </Item>
      <Item title="While learning everything I could about web I learned other stuff also" >
        <p>Python, Java, Unity, C++, C# and other classics</p>
      </Item>
      <Item title="Became huge React fan" />
      <Item title="Now here sitting and typing this" />
    </div>
  );

}

export default History;
