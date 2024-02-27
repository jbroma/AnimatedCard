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
  topLeft,
  Transforms3d,
} from '@shopify/react-native-skia';
import {Dimensions} from 'react-native';
import {
  SensorType,
  clamp,
  useAnimatedSensor,
  useDerivedValue,
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = 300;
const HEIGHT_DIFF = 100;

const CARD_WIDTH = WIDTH * 0.9;
const CARD_HEIGHT = HEIGHT - HEIGHT_DIFF;

const OUTER_BORDER_RADIUS = 10;
const PADDING = 4;
const INNER_BORDER_RADIUS = OUTER_BORDER_RADIUS - PADDING;

const CF = 3 / 4;

export default function SensorEnabledCard() {
  const {sensor} = useAnimatedSensor(SensorType.ROTATION, {
    interval: 1000 / 60,
  });

  const background = useImage(require('./assets/background.png'));
  const logo = useImage(require('./assets/ck_logo.png'));

  const outerRct = rrect(
    rect((WIDTH - CARD_WIDTH) / 2, HEIGHT_DIFF / 2, CARD_WIDTH, CARD_HEIGHT),
    OUTER_BORDER_RADIUS,
    OUTER_BORDER_RADIUS,
  );

  const innerRct = rrect(
    rect(
      (WIDTH - CARD_WIDTH) / 2 + PADDING,
      HEIGHT_DIFF / 2 + PADDING,
      CARD_WIDTH - PADDING * 2,
      CARD_HEIGHT - PADDING * 2,
    ),
    INNER_BORDER_RADIUS,
    INNER_BORDER_RADIUS,
  );

  const c = center(outerRct.rect);

  // @ts-expect-error looks like typing bug in Skia
  const transform: Transforms3d = useDerivedValue(() => [
    {translate: [c.x, c.y]},
    {scaleX: clamp(sensor.value.pitch * CF, 0.2, 1.1)},
    {scaleY: clamp(sensor.value.pitch * CF, 0.2, 1.1)},
    {translate: [-c.x, -c.y]},
  ]);

  // @ts-expect-error looks like typing bug in Skia
  const gradientTransform: Transforms3d = useDerivedValue(() => [
    {rotateX: clamp(sensor.value.yaw, -Math.PI, Math.PI)},
    {rotateY: clamp(sensor.value.yaw, -Math.PI, Math.PI)},
    {rotateZ: clamp(sensor.value.yaw, -Math.PI, Math.PI)},
  ]);

  return (
    <Canvas style={{width: WIDTH, height: HEIGHT}}>
      <RoundedRect rect={outerRct} transform={transform}>
        <SweepGradient
          c={c}
          colors={['cyan', 'magenta', 'cyan']}
          transform={gradientTransform}
        />
      </RoundedRect>
      <RoundedRect rect={innerRct} transform={transform} />
      <Group clip={innerRct} transform={transform}>
        <Image
          image={background}
          fit="contain"
          x={topLeft(innerRct.rect).x + 50}
          y={topLeft(innerRct.rect).y + 10}
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
        />
        <Image
          image={logo}
          fit="contain"
          x={topLeft(innerRct.rect).x + 10}
          y={topLeft(innerRct.rect).y + 10}
          width={100}
          height={20}
        />
      </Group>
    </Canvas>
  );
}
