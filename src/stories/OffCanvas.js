import { storiesOf, action } from '@kadira/storybook'
import { Component } from 'react'
import { OffCanvas, Button } from 'uikit-react'

/* eslint-disable */
class OpenButton extends Component {
  handleClick = () => {
    action('handleOpen')()
    this.props.handleOpen()
  }
  render() {
    const { handleClick } = this
    return <Button onClick={handleClick}>Open</Button>
  }
}


storiesOf('OffCanvas', module)
  .addWithInfo('Basic Usage', () => (
    <OffCanvas target={OpenButton}>
      <div class="uk-panel">Lorem ipsum dolor sit amet, <a href="#">consectetur  </a>
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </div>
    </OffCanvas>
  ), { header: false, inline: true, propTables: [OffCanvas] })
  .addWithInfo('Flip modifier', () => (
    <OffCanvas target={OpenButton} alignment='right'>
      <div class="uk-panel">Lorem ipsum dolor sit amet, <a href="#">consectetur  </a>
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </div>
      <div class="uk-panel">Lorem ipsum dolor sit amet, <a href="#">consectetur  </a>
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </div>
    </OffCanvas>
  ), { header: false, inline: true, propTables: [OffCanvas] })
