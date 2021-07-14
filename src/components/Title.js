import React from 'react'

export default function Title({title}){ //same as doing props and then console.log(props), then props.title
    console.log(title)
    return <h1>{title}</h1>;
}