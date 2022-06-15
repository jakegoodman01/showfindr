import React from 'react'

const data = {
  artists: [
    {
      id: '1',
      name: 'Nirvana',
    },
    {
      id: '2',
      name: 'The Police',
    },
  ],
}

const loading = false

const Artist: React.FunctionComponent = ({name}) => {
  return <li>{name}</li>
}

const Artists = () => {
  if (loading) {
    return <span>"Loading..."</span>
  }
  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {data.artists.map((artist) => (
          <Artist {...artist} key={artist.id} />
        ))}
      </ul>
    </div>
  )
}

export default Artists
