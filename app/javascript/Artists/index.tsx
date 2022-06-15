import React from 'react'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/client'
import {withProvider} from '../graphqlProvider'

const artistsQuery = gql`
  query allArtists {
    artists {
      name
    }
  }
`

const loading = false

const Artist: React.FunctionComponent = ({name}) => {
  return <li>{name}</li>
}

const Artists = () => {
  const {data, loading, error} = useQuery(artistsQuery)
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

export default withProvider(Artists)
