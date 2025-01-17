import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bulma from '../../Bulma';
import config from '../../../config.json';
import copyToClipboard from '../../../helpers/copyToClipboard';
import PATHS from '../../../routes/paths';
import { NotificationContext } from '../../../contexts/NotificationsContext';
import obfuscateMailLink from '../../../helpers/obfuscateMailLink';
import random from '../../../helpers/random';
import imagePath from '../../../helpers/imagePath';

const Footer = () => {
  const { addNotification } = React.useContext(NotificationContext);
  const loc = useLocation();
  const permanentLink = React.useMemo(
    () => config.permanentVersionedDomain + loc.pathname,
    [loc]
  );

  return (
    <Bulma.Footer>
      <div className="is-flex is-justify-content-space-between">
        <div className="left-wrapper">
          <a
            href="https://www.sib.swiss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIB Swiss Institute of Bioinformatics
          </a>
          <a
            className="image cc"
            rel="license noopener noreferrer"
            href="https://creativecommons.org/publicdomain/zero/1.0/"
            target="_blank"
          >
            <Bulma.Image
              className="no-responsive"
              src={imagePath('/cc-zero.png')}
              alt="CC0"
              height={15}
              width={80}
            />
          </a>
        </div>
        <div className="right-wrapper">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <a
            onClick={() => {
              copyToClipboard(permanentLink);
              addNotification({
                id: random.toString(),
                children: (
                  <>
                    Copied link <u>{permanentLink}</u>
                  </>
                ),
                className: 'is-success',
              });
            }}
          >
            Copy permanent link
          </a>
          <Link to={PATHS.ABOUT.PUBLICATION}>Cite us</Link>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <a onClick={obfuscateMailLink(config.contactEmail)}>Contact us</a>
        </div>
      </div>
    </Bulma.Footer>
  );
};

export default Footer;
