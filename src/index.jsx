import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import YoutubeButton from './YTButton';

export default class EmbedPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { started: false };

    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    iframeAttrs: PropTypes.object,
    buttonLabel: PropTypes.string
  }

  static defaultProps = {
    iframeAttrs: {
      allowFullScreen: true,
      allow: 'autoplay',
      scrolling: 'no',
      frameBorder: '0'
    },
    buttonLabel: 'Play video'
  }

  onClick(event) {
    event.preventDefault();

    this.setState({ started: true });
  }

  render() {
    const {
      className,
      href,
      description,
      image,
      iframeAttrs,
      buttonLabel
    } = this.props;
    const {started} = this.state;
    const rootClassName = classNames('rdi-embed-player', className);

    if (started) {
      return (
        <iframe {...iframeAttrs} className={rootClassName} src={href} />
      );
    }

    return (
      <div className={rootClassName} onClick={this.onClick}>
        <a className="rdi-embed-player__link" href={href}>
          <img className="rdi-embed-player__image"
            src={image}
            alt={description}
          />
        </a>
        <YoutubeButton
          className="rdi-embed-player__button"
          aria-label={buttonLabel}
        />
      </div>
    );
  }
}
