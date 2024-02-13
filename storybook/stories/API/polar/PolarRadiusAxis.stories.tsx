import React from 'react';
import { Args } from '@storybook/react';
import { Label, PolarRadiusAxis, ResponsiveContainer, Surface } from '../../../../src';
import { EventHandlers } from '../props/EventHandlers';

const GeneralProps: Args = {
  angle: {
    description: 'The angle of radial direction line to display axis text.',
    table: { type: { summary: 'number', defaultValue: 0 }, category: 'General' },
  },
  type: {
    description: 'The type of axis.',
    table: { type: { summary: 'number | category', defaultValue: 'category' }, category: 'General' },
  },
  allowDuplicatedCategory: {
    description: 'Allow the axis that has duplicated category or not when the type of axis is "category".',
    table: { type: { summary: 'Boolean', defaultValue: true }, category: 'General' },
  },
  cx: {
    description: 'The x-coordinate of center.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  cy: {
    description: 'The y-coordinate of center.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  domain: {
    description: `Specify the domain of radius in a polar chart.
      And the length should be 2. And each element in the array
      can be a number, 'auto', 'dataMin' or 'dataMax'.
      If any element of domain is set to be 'auto',
      comprehensible scale ticks will be calculated,
      and the final domain of axis is generated by the ticks.
      If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.s`,
    table: { type: { summary: 'Array | Function', defaultValue: [0, 'auto'] }, category: 'General' },
  },
  reversed: {
    description: 'If set to true, the ticks of this axis are reversed.',
    table: { type: { summary: 'boolean', defaultValue: false }, category: 'General' },
  },
  label: {
    description: `If set a string or a number, default label will be drawn,
        and the option is content. If set a React element,
        the option is the custom react element of drawing label.
        If set a function, the function will be called to render customized label.`,
    table: { type: { summary: 'String | Number | ReactElement | Function' }, category: 'General' },
  },
  orientation: {
    description: 'The orientation of axis text.',
    table: { type: { summary: 'left | right | middle', defaultValue: 'right' }, category: 'General' },
  },
  axisLine: {
    description: `If false set, axis line will not be drawn. 
    If true set, axis line will be drawn which have the props calculated internally.
    If object set, axis line will be drawn which have the props merged by the internal calculated props and the option.`,
    table: { type: { summary: 'Bool | Object', defaultValue: true }, category: 'General' },
  },
  tick: {
    description: `If false set, ticks will not be drawn. If true set, 
    ticks will be drawn which have the props calculated internally.
    If object set, ticks will be drawn which have the props mergered by the internal calculated props and the option.
    If ReactElement set, the option can be the custom tick element. If set a function, the function will be called to render customized ticks.`,
    table: { type: { summary: 'Bool | Object | Element | Function', defaultValue: true }, category: 'General' },
  },
  tickFormatter: {
    description: 'The function to formatting tick.',
    table: { type: { summary: 'number', defaultValue: 5 }, category: 'General' },
  },
  tickCount: {
    description: `The count of axis ticks. Not used if 'type' is 'category'.`,
    table: { type: { summary: 'number', defaultValue: 5 }, category: 'General' },
  },
  scale: {
    description: 'The function to formatting tick.',
    table: {
      type: {
        summary: `auto | linear | pow | sqrt | log | identity 
          | time | band | point | ordinal | quantile | quantize | utc | sequential | threshold | Function`,
        defaultValue: 'auto',
        category: 'General',
      },
    },
  },
  onClick: {
    description: 'The customized event handler of click on the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseDown: {
    description: 'The customized event handler of mousedown on the the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseUp: {
    description: 'The customized event handler of mouseup on the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseMove: {
    description: 'The customized event handler of mousemove on the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseOver: {
    description: 'The customized event handler of mouseover on the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseOut: {
    description: 'The customized event handler of mouseout on the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The customized event handler of mouseenter on the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The customized event handler of mouseleave on the ticks of this axis',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
    ...EventHandlers,
  },
  component: PolarRadiusAxis,
};
const [surfaceWidth, surfaceHeight] = [600, 300];

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <Surface
          width={surfaceWidth}
          height={surfaceHeight}
          viewBox={{
            x: 0,
            y: 0,
            width: surfaceWidth,
            height: surfaceHeight,
          }}
        >
          <PolarRadiusAxis cx={-30} cy={400} angle={30} cursor="pointer" {...args}>
            <Label position="outside" offset={20}>
              PolarRadiusAxis
            </Label>
          </PolarRadiusAxis>
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    ticks: [
      { value: '100', coordinate: 300 },
      { value: '200', coordinate: 350 },
      { value: '300', coordinate: 400 },
      { value: '400', coordinate: 450 },
      { value: '500', coordinate: 500 },
      { value: '600', coordinate: 550 },
    ],
  },
};
