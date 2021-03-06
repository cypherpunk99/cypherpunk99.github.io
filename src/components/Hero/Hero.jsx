import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  // const { hero } = useContext(PortfolioContext);
  // const { name, subtitle } = hero; // cta

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {'Hi, my name is '}
            <span className="text-color-main">Alexander Matveev</span>
            <br />I am a <span className="text-color-main">full-stack javascript developer</span>
          </h1>
        </Fade>
        {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px"> */}
        {/* <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p> */}
        {/* </Fade> */}

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name: networkName, url } = network;
                return (
                  <a
                    key={id}
                    href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={networkName}
                  >
                    <i className={`fa fa-${networkName || 'refresh'} fa-inverse`} />
                  </a>
                );
              })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
