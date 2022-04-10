import React from 'react'
import Products from './Products'

export default function Main() {
    return (
        <div className='container'>
            <h1>Main Components</h1>
            <hr />

            <div>
                <h1 className='display-4'>Products</h1>
                <hr />

                <Products/>
            </div>
        </div>
    )
}
