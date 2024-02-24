import React from 'react';
import {
  useImage,
  Image,
  RoundedRect,
  Group,
  rect,
  rrect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';

interface CardProps {
  canvasSize: {width: number; height: number};
}

const OUTER_BORDER_RADIUS = 10;
const PADDING = 4;
const INNER_BORDER_RADIUS = OUTER_BORDER_RADIUS - PADDING;

export default function Card({canvasSize}: CardProps) {
  const background = useImage(require('./assets/background.png'));
  const logo = useImage(require('./assets/ck_logo.png'));

  const outerRct = rrect(
    rect(0, 0, canvasSize.width, canvasSize.height),
    OUTER_BORDER_RADIUS,
    OUTER_BORDER_RADIUS,
  );

  const innerRct = rrect(
    rect(
      PADDING,
      PADDING,
      canvasSize.width - PADDING * 2,
      canvasSize.height - PADDING * 2,
    ),
    INNER_BORDER_RADIUS,
    INNER_BORDER_RADIUS,
  );

  return (
    <>
      <RoundedRect rect={outerRct}>
        <SweepGradient
          c={vec(canvasSize.width / 2, canvasSize.height / 2)}
          colors={['cyan', 'magenta', 'cyan']}
        />
      </RoundedRect>
      <RoundedRect rect={innerRct} />
      <Group clip={innerRct}>
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
          x={15}
          y={15}
          width={100}
          height={20}
        />
      </Group>
    </>
  );
}
