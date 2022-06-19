import React from 'react'
import {withProvider} from '../graphqlProvider'
import { useAllArtistsQuery } from 'graphql/types'

const loading = false;

const Artist: React.FunctionComponent = ({name}) => {
  return <li>{name}</li>
}

const Artists = () => {
  const {data, loading, error} = useAllArtistsQuery();
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

export default withProvider(Artists);
