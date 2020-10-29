import React, { ReactElement } from 'react';
import theme from '../../../common/styles/default/theme';

interface HeroBannerHeadingProps {
  heading: string;
}

const HeroBannerHeading = ({ heading }: HeroBannerHeadingProps): ReactElement => {
  return (
    <>
      <h1>CK Community</h1>
      <style jsx>
        {`
          h1 {
            color: ${theme.colors.mineShaft};
            font-size: ${theme.fonts.size.xxxLarge};
            font-weight: ${theme.fonts.weight.light};
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default HeroBannerHeading;
