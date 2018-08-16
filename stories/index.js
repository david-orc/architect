import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';


import Architect from '../src/Architect';
import DependencyEditor from '../src/components/DependencyEditor';
import LegendItem from '../src/components/LegendItem';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

storiesOf('Architect', module)
  .add('default', () => (
    <Architect></Architect>
  ));

storiesOf('DependencyEditor', module)
  .add('default', () => (
    <DependencyEditor></DependencyEditor>
  ));

stories
  .add('default', () => (
    <LegendItem title={text('Title', "Test title")} description="description"></LegendItem>
  ));