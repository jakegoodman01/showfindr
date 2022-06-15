Rails.application.routes.draw do
  # Setup GraphQL and GraphiQL
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"

  root to: "home#index"
end
