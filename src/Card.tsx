import React from 'react';
import {
  useImage,
  Image,
  RoundedRect,
  Group,
  rect,
  rrect,
  SweepGradient,
  center,
  Canvas,
} from '@shopify/react-native-skia';
import {Dimensions} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width * 0.9;
const HEIGHT = 200;
const OUTER_BORDER_RADIUS = 10;
const PADDING = 4;
const INNER_BORDER_RADIUS = OUTER_BORDER_RADIUS - PADDING;

export default function Card() {
  const gesture = Gesture.Pan();

  const background = useImage(require('./assets/background.png'));
  const logo = useImage(require('./assets/ck_logo.png'));

  const outerRct = rrect(
    rect(0, 0, WIDTH, HEIGHT),
    OUTER_BORDER_RADIUS,
    OUTER_BORDER_RADIUS,
  );

  const innerRct = rrect(
    rect(PADDING, PADDING, WIDTH - PADDING * 2, HEIGHT - PADDING * 2),
    INNER_BORDER_RADIUS,
    INNER_BORDER_RADIUS,
  );

  const c = center(outerRct);

  return (
    <GestureDetector gesture={gesture}>
      <Canvas style={{width: WIDTH, height: HEIGHT}}>
        <RoundedRect rect={outerRct}>
          <SweepGradient c={c} colors={['cyan', 'magenta', 'cyan']} />
        </RoundedRect>
        <RoundedRect rect={innerRct} />
        <Group clip={innerRct}>
          <Image
            image={background}
            fit="contain"
            x={75}
            y={25}
            width={WIDTH}
            height={HEIGHT}
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
      </Canvas>
    </GestureDetector>
  );
}
