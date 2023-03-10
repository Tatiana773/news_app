import React from 'react'
import Image from '../../components/UI/Image'

const NewsPreview = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <div>
                <Image src={item.preview} width="426px"/>
            </div>
            <small>{item.summary}</small>
        </div>
    )
}

export default NewsPreview
