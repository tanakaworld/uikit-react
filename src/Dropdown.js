import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

export default class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onHover: PropTypes.bool,
    delay: PropTypes.number,
    hoverDelayIdle: PropTypes.number,
  }

  static defaultProps = {
    type: 'button',
    disabled: false,
    className: '',
    hoverDelayIdle: 250,
    onHover: false,
  }
  state = { isActive: false, mode: true }

  handleMouseOver = () => {
    if (this.props.delay) {
      setTimeout(() => {
        this.setState({ isActive: !this.state.isActive })
      }, this.props.delay)
    } else {
      this.setState({ isActive: !this.state.isActive })
    }
  }

  handleMouseOut = () => {
    setTimeout(() => {
      this.setState({ isActive: false })
    }, this.props.hoverDelayIdle)
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const className = classNames('uk-button-dropdown', {
      'uk-open': this.state.isActive,
    })
    return (
      <div
        className={className}
        onMouseOver={this.props.onHover && this.handleMouseOver}
        onClick={this.handleClick}
        data-uk-dropdown={this.state.mode}
        aria-haspopup="true"
        aria-expanded={this.state.isActive}
        onMouseLeave={this.handleMouseOut}
      >
        {this.props.children}
      </div>
    )
  }
}
