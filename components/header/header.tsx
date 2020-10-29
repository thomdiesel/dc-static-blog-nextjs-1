import React, { ReactElement } from 'react';
import theme from '../../common/styles/default/theme';
import Logo from '../logo/logo';
import StaticLink from '../static-link/static-link';
import { useRouter } from 'next/router';

const Header = ({ title }: { title: string }): ReactElement => {
  const router = useRouter();
  const { vse } = router.query;

  const headerLink = vse ? `/?vse=${vse}` : '/';
  return (
    <>
      <section>
        <header>
          <StaticLink href={headerLink}>
            <Logo darkMode={false} />
          </StaticLink>
          <h1>CK Community</h1>
        </header>
      </section>

      <style jsx>{`
        section {
          display: flex;
          flex: 1 0 auto;
          justify-content: center;
          background-color: ${theme.colors.white};
        }
        header {
          display: flex;
          align-items: center;
          min-height: 75px;
          width: ${theme.layout.widePageWidth};
          margin: 0 12px;
        }
        h1 {
          font-size: ${theme.fonts.size.large};
          font-weight: ${theme.fonts.weight.medium};
          text-transform: uppercase;
          color: black;
          border-left: 1px solid ${theme.colors.dustyGray};
          margin-left: 18px;
          padding-left: 18px;
        }
        @media (max-width: ${theme.layout.narrowPageWidth}) {
          h1 {
            font-size: ${theme.fonts.size.small};
          }
        }
      `}</style>
    </>
  );
};

export default Header;
