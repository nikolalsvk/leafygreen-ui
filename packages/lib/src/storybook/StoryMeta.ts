import { InputType } from '@storybook/csf';
import { ComponentMeta } from '@storybook/react';
import { defaultsDeep } from 'lodash';
import { ComponentProps, JSXElementConstructor } from 'react';
import { storybookArgTypes } from './storybookArgTypes';
import { storybookExcludedControlParams } from './storybookExcludedControlParams';

export interface StoryMeta<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> extends ComponentMeta<T> {
  parameters: ComponentMeta<T>['parameters'] & {
    /**
     * The default story to be displayed on `mongodb.design`
     */
    default: string;
  };
  argTypes?: Partial<{
    [name in keyof ComponentProps<T>]: InputType & {
      /**
       * Identify an arg to render a control on Storybook only,
       * and not on `mongodb.design`
       */
      storybookOnly?: boolean;
    };
  }>;
}

const baseMeta = {
  argTypes: {
    ...storybookArgTypes,
  },
  parameters: {
    controls: {
      exclude: [...storybookExcludedControlParams],
    },
  },
};

export const StoryMeta = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>(
  meta: StoryMeta<T>,
): StoryMeta<T> => {
  return defaultsDeep(meta, baseMeta);
};
