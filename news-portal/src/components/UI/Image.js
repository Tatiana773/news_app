import React from 'react'

const Image = ({src, width, height, alt}) => {
    const isAbsolutePath = src.startsWith('blob:') || src.startsWith('http')

    src = isAbsolutePath ? src : require('../../assets/images/' + src)
    width = width || '24px'
    height = height || 'auto'

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}

export default Image
