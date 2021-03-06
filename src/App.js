/* eslint-disable no-unused-vars */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import Cap from './components/cap'
import Bottom from './components/bottom'
import FileInput from './components/inputfile'
import PhotoEdit from './components/photoEdit'
import Photo from './components/photo'
import Filtres from './components/filtres'
import { injectIntl, defineMessages } from 'react-intl'
import PropTypes from 'prop-types'

const messages = defineMessages({
  about: {
    id: 'app.about',
    defaultMessage: 'About text editor'
  },
  content: {
    id: 'app.content',
    defaultMessage: 'Online photo editor for PC. In our editor, a large selection of filters for the photo. You can choose one of the proposed photos or upload your own.'
  }
})

/**
 * The props supported by the `App` component
 *
 * @typedef {Object} App~propTypes
 * @property {function} intl - to change language
*/

/**
 * Main class
 */
class App extends React.Component {
  /** * @type {App~propTypes} */ propTypes = {
    intl: PropTypes.func
  }
  /**
   * @property {string} imagePreviewUrl - image url
   * @property {string} name - image name
   * @property {string} filter - filter
   */
  state = {
    imagePreviewUrl: '',
    name: '1.jpg',
    filter: 'normal'
  }
  /**
   * Function to update the image
   */
  updateImg = (value1, value2) => {
    this.setState({ name: value1, imagePreviewUrl: value2 })
  }
  /**
   * Function to update the filter
   */
  updateFilter = (value) => {
    this.setState({ filter: value })
  }
  render () {
    const { intl: { formatMessage } } = this.props
    return (
      <div>
        <div id='home'>
          <Cap/>
          <br/>
          <FileInput updateImg={this.updateImg}/>
          <PhotoEdit updateImg={this.updateImg}/>
          <br/>
        </div>
        <div id='IM'>
          <Photo imagePreviewUrl={this.state.imagePreviewUrl} name={this.state.name} filter={this.state.filter}/>
          <Filtres updateFilter={this.updateFilter}/>
        </div>
        <br/>
        <div id='about'>
          <div className='title'>
            <h2>{formatMessage(messages.about)}</h2>
          </div >
          <p className='text-center'>
            {formatMessage(messages.content)}
          </p>
          <footer className='footer'></footer>
        </div>
        <Bottom />
      </div>
    )
  }
}

export default injectIntl(App)
