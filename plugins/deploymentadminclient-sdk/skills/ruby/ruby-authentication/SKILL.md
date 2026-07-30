---
name: ruby-authentication
description: Configure authentication on an APIMatic-generated Ruby SDK client — each scheme is a typed XxxCredentials data class instantiated with keyword args and passed to Client.new; covers BasicAuthCredentials (username/password), custom-header and custom-query-parameter credentials (ApiHeaderCredentials, ApiKeyCredentials), OAuth 2 bearer token (OAuthBearerTokenCredentials), and OAuth 2 client credentials grant (OAuthCCGCredentials with automatic token fetch). Use the moment you set credentials, an API key, a token, or OAuth on any APIMatic Ruby SDK — load it even after reading the constructor in the source, since the kwarg name alone doesn't tell you it takes a typed credentials object, that from_env exists on each credentials class, or that updating credentials requires clone_with and a new client.
---

# Authenticating an APIMatic Ruby SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as
a **typed `{Scheme}Credentials` data class**: you build it with keyword args and pass it as a named
kwarg to `Client.new`. Set the one(s) your API uses when constructing the client.

> Throughout, `DeploymentAdminClient` and other `{...}` tokens are placeholders for names you take from your SDK —
> replace them with the concrete identifiers from the source.

To see which schemes a specific SDK accepts, read the `initialize` keyword list in
`lib/deploymentadminclient/client.rb` and the `{scheme}_credentials:` kwargs — those are the source of truth. An
SDK whose API uses only basic auth, for instance, only accepts `basic_auth_credentials:`. The generated
`doc/auth/*.md` files list each scheme's credential fields and a usage snippet.

## Basic auth

```ruby
require 'deploymentadminclient'
include DeploymentAdminClient

client = Client.new(
  basic_auth_credentials: BasicAuthCredentials.new(
    username: ENV.fetch('BASIC_AUTH_USERNAME'),
    password: ENV.fetch('BASIC_AUTH_PASSWORD')
  )
)
```

`BasicAuthCredentials` raises `ArgumentError` if either field is nil. Sends
`Authorization: Basic base64(username:password)` on every request that requires this scheme.

## Custom query-parameter auth (API key)

APIMatic models API-key-in-query-string schemes as "custom query parameter" auth. The credentials
class carries the values; the wire parameter names and placement are fixed by the generated scheme:

```ruby
client = Client.new(
  api_key_credentials: ApiKeyCredentials.new(
    token: ENV.fetch('API_KEY_TOKEN'),
    api_key: ENV.fetch('API_KEY_API_KEY')
  )
)
```

Constructor parameter names and count come from the API's scheme — check the `ApiKeyCredentials`
`initialize` signature in `lib/deploymentadminclient/http/auth/api_key.rb` and the `doc/auth/custom-query-parameter.md`
file for which value maps to which query parameter.

## Custom header auth (API key in header)

```ruby
client = Client.new(
  api_header_credentials: ApiHeaderCredentials.new(
    token: ENV.fetch('API_HEADER_TOKEN'),
    api_key: ENV.fetch('API_HEADER_API_KEY')
  )
)
```

Sends the values as custom request headers. Check `lib/deploymentadminclient/http/auth/api_header.rb` and
`doc/auth/custom-header-signature.md` for the exact header names.

## OAuth 2.0 — bearer token (no grant flow)

When you already hold a token:

```ruby
client = Client.new(
  o_auth_bearer_token_credentials: OAuthBearerTokenCredentials.new(
    access_token: ENV.fetch('O_AUTH_BEARER_TOKEN_ACCESS_TOKEN')
  )
)
```

Sends `Authorization: Bearer <token>` on requests that require this scheme. No token fetch or refresh
is performed — you supply the token directly.

## OAuth 2.0 — client credentials grant (CCG)

```ruby
client = Client.new(
  o_auth_ccg_credentials: OAuthCCGCredentials.new(
    o_auth_client_id: ENV.fetch('O_AUTH_CCG_O_AUTH_CLIENT_ID'),
    o_auth_client_secret: ENV.fetch('O_AUTH_CCG_O_AUTH_CLIENT_SECRET')
  )
)
```

The SDK fetches and caches the token **automatically** before the first endpoint call that requires
this scheme, and refreshes it when it nears expiry (configurable via `o_auth_clock_skew:`). You can
also seed a stored token or register persistence callbacks — see [reference.md](reference.md).

## More schemes

For OAuth 2.0 authorization code grant (ACG), resource-owner password credentials grant (ROPCG),
token persistence callbacks, combined AND/OR scheme requirements, environment-variable configuration,
and no-auth — see [reference.md](reference.md).

## Notes

- A given SDK only exports the credentials types and `{scheme}_credentials:` kwargs for the schemes
  its API uses; names are generated per-API (hence the `{...}` placeholders above).
- Pass credentials **in the `Client.new` call** — the client is effectively immutable after
  construction. To change credentials (e.g. attach a fetched OAuth token), call
  `config.clone_with(...)` and `clone_with(...)` on the credentials object, then build a new client:

  ```ruby
  new_creds = client.config.o_auth_ccg_credentials.clone_with(o_auth_token: token)
  new_config = client.config.clone_with(o_auth_ccg_credentials: new_creds)
  client = Client.new(config: new_config)
  ```

- An endpoint may require **several** schemes (`A AND B`) or **any of** several (`A OR B`). Configure
  every scheme the operations you call require. The per-operation requirement is in
  `doc/controllers/*.md` under an **Authentication** heading.
- **Keep secrets out of source.** Load credentials from `ENV.fetch(...)`, a secrets manager, or
  `Client.from_env` — never hardcode them. Each `{Scheme}Credentials` class also exposes
  `{Scheme}Credentials.from_env` which reads the scheme's fields from standardized env-var names
  (e.g. `BASIC_AUTH_USERNAME`, `O_AUTH_CCG_O_AUTH_CLIENT_ID`).
