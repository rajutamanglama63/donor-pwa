import React from 'react'
import PropTypes from 'prop-types'

const New = ({title, testFunction = () => {}}) => {
  return (
    <div>New</div>
  )
}

New.propTypes = {
    title: PropTypes.string,
    testFunction: PropTypes.func.isRequired,
}

export default New