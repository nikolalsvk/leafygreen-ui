import { css } from '@leafygreen-ui/emotion';
import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize, fontFamilies, typeScales } from '@leafygreen-ui/tokens';

export const labelStyle = css`
  font-family: ${fontFamilies.default};
  font-weight: bold;
`;

export const labelColorStyle: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.black};
  `,
  [Theme.Dark]: css`
    color: ${palette.gray.light2};
  `,
};

export const disabledLabelColorStyle: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.gray.dark1};
  `,
  [Theme.Dark]: css`
    color: ${palette.gray.base};
  `,
};

export const labelTypeScaleStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: css`
    font-size: ${typeScales.body1.fontSize}px;
    line-height: ${typeScales.body1.lineHeight}px;
  `,
  [BaseFontSize.Body2]: css`
    font-size: ${typeScales.body2.fontSize}px;
    line-height: 20px; // Hardcoding because it does not match body2 lineHeight
  `,
};
