import React from 'react'

const PodcastDetails = ( {params}: {params: {podcastId: string}}) => {
  return (
    <p className='text-white'>PodcastDetails  {params.podcastId} </p>
  )
}

export default PodcastDetails