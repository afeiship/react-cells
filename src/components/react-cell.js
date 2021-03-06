import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    clickable: PropTypes.bool,
  };

  static defaultProps = {
    clickable: true
  };
  /*===properties end===*/

  render() {
    const { className, clickable, ...props } = this.props;
    return (
      <div data-clickable={clickable} className={classNames('react-cell', className)} {...props} />
    );
  }
}
