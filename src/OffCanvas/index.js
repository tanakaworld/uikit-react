import cx from 'classnames'
import KeyHandler, { KEYDOWN } from 'react-key-handler'
import { Component, PropTypes, createElement } from 'react'

class OffCanvas extends Component
{
  static propTypes = {
    children: PropTypes.node,
    target: PropTypes.node,
  }

  static defaultProps = {
    target: 'button',
  }

  state = {
    isActive: false, shouldDisplay: false,
  }

  handleClose = () => {
    this.setState(
      { isActive: false },
      () => setTimeout(() => this.setState({ shouldDisplay: false }), 300)
    )
  }

  handleOpen = () => {
    this.setState(
      { shouldDisplay: true },
      () => setTimeout(() => this.setState({ isActive: true }), 50)
    )
  }

  handleOverlayClick = event => event.stopPropagation()

  render() {
    const { handleOpen, handleClose, handleOverlayClick } = this
    const target = this.props.target && createElement(this.props.target, {
      handleOpen, children: 'open',
    })
    const { children } = this.props
    const classOuter = cx('uk-offcanvas', {
      'uk-active': this.state.isActive,
    })
    const classInner = cx('uk-offcanvas-bar', {
      'uk-offcanvas-bar-show': this.state.isActive,
    })
    return (
      <div>
        <KeyHandler keyEventName={KEYDOWN} keyValue="Escape" onKeyHandle={handleClose} />
        {target}
        <div
          aria-hidden={this.state.isActive}
          className={classOuter}
          onClick={handleOverlayClick}
        >
          <div className={classInner}>
            <div className="uk-panel">
              { children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OffCanvas
