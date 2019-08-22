import theme from '../../common/styles/default/theme';
import Logo from '../logo/logo';
import FooterLinksList from './footer-links-list';
import footerLinks from './footer-links';
import ExternalLink from '../external-link/external-link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinkSections = footerLinks.map((linkSection, index) => <FooterLinksList key={index} {...linkSection} />);
  return (
    <>
      <footer>
        <section>
          <div className="footer-info">
            <div className="footer-info-top">
              <Logo />
              <div className="social-links">
                <ExternalLink href="//twitter.com/amplience">
                  <img src="/static/images/social/ic_twitter.svg" alt="Twitter logo" />
                </ExternalLink>
                <ExternalLink href="//www.linkedin.com/company/amplience/">
                  <img src="/static/images/social/ic_linkedin.svg" alt="Linkedin logo" />
                </ExternalLink>
              </div>
            </div>
            <div className="copyright">&copy; Copyright Amplience {currentYear}</div>
          </div>
          <div className="footer-links">{footerLinkSections}</div>
        </section>
      </footer>

      <style jsx>{`
        footer {
          margin-top: 84px;
          padding-top: 50px;
          flex: auto;
          overflow-y: auto;
          background-color: ${theme.colors.whiteLilac};
          height: 400px;
          display: flex;
          justify-content: center;
        }

        section {
          width: ${theme.layout.widePageWidth};
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .footer-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .footer-info-top {
          flex-grow: 1;
        }

        .footer-links {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .social-links {
          display: flex;
          flex-direction: row;
        }

        .social-links :global(img) {
          width: 25px;
          margin: 5px;
        }

        .copyright {
          font-size: 0.875rem;
          margin-bottom: 25px;
          align-self: flex-end;
          color: ${theme.colors.silver};
        }

        @media (max-width: ${theme.layout.widePageWidth}) {
          footer {
            padding: 45px;
          }
        }

        @media (max-width: ${theme.layout.narrowPageWidth}) {
          footer {
            height: auto;
          }
          section {
            flex-direction: column-reverse;
          }

          .footer-info {
            margin-top: 45px;
            align-items: flex-start;
          }

          .footer-info :global(.logo) {
            width: 160px;
          }

          .social-links {
            display: none;
          }

          .copyright {
            margin-top: 15px;
            align-self: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
