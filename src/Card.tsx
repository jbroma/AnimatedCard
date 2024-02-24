import React from 'react';
import {
  useImage,
  Image,
  RoundedRect,
  Group,
  rect,
  rrect,
} from '@shopify/react-native-skia';

interface CardProps {
  canvasSize: {width: number; height: number};
}

export default function Card({canvasSize}: CardProps) {
  const background = useImage(require('./assets/background.png'));
  const logo = useImage(require('./assets/ck_logo.png'));
  const rct = rrect(rect(0, 0, canvasSize.width, canvasSize.height), 10, 10);

  return (
    <>
      <RoundedRect
        r={10}
        width={canvasSize.width}
        height={250}
        color="rgb(120, 55, 245)"
      />
      <Group clip={rct}>
        <Image
          image={background}
          x={75}
          y={25}
          width={canvasSize.width}
          height={canvasSize.height}
          fit="contain"
        />
        <Image
          image={logo}
          fit="contain"
          x={10}
          y={10}
          width={100}
          height={20}
        />
      </Group>
    </>
  );
}
