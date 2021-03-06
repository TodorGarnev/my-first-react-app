import React from 'react'
import PropTypes from 'prop-types'

import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClasss'

const person = (props) => {
    return (
        <Aux>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux >
    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(person, classes.Person)