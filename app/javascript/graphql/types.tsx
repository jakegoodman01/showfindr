import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Artist = {
  __typename?: 'Artist';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  artists: Array<Artist>;
};

export type AllArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArtistsQuery = { __typename?: 'Query', artists: Array<{ __typename?: 'Artist', id: string, name?: string | null }> };


export const AllArtistsDocument = gql`
    query allArtists {
  artists {
    id
    name
  }
}
    `;

/**
 * __useAllArtistsQuery__
 *
 * To run a query within a React component, call `useAllArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllArtistsQuery(baseOptions?: Apollo.QueryHookOptions<AllArtistsQuery, AllArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllArtistsQuery, AllArtistsQueryVariables>(AllArtistsDocument, options);
      }
export function useAllArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllArtistsQuery, AllArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllArtistsQuery, AllArtistsQueryVariables>(AllArtistsDocument, options);
        }
export type AllArtistsQueryHookResult = ReturnType<typeof useAllArtistsQuery>;
export type AllArtistsLazyQueryHookResult = ReturnType<typeof useAllArtistsLazyQuery>;
export type AllArtistsQueryResult = Apollo.QueryResult<AllArtistsQuery, AllArtistsQueryVariables>;