---
name: go-authentication
description: Configure authentication on an APIMatic-generated Go SDK client — each scheme is a typed credentials struct created with New{Scheme}Credentials(...) and set via a With{Scheme}Credentials(...) option on the Configuration; covers Basic, custom header, custom query-parameter (API key), OAuth 2 bearer token, and OAuth 2 client-credentials with automatic token fetch/refresh. Use the moment you set credentials, an API key, a token, or OAuth on any APIMatic Go SDK — load it even after reading the options in the source, since the option name alone doesn't tell you it takes a constructed credentials struct, when the token is fetched, or that secrets must come from the environment.
---

# Authenticating an APIMatic Go SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as a
**typed credentials struct**: you build it with `New{Scheme}Credentials(...)` and register it on the
`Configuration` with a matching `With{Scheme}Credentials(...)` option. Set the one(s) your API uses when
building the configuration you pass to `NewClient`.

> Throughout, `paze` and other `{...}` tokens are placeholders for names you take from your SDK —
> replace them with the concrete identifiers from the source.

To see which schemes a specific SDK accepts, read the `With...Credentials` options in `configuration.go`
and the per-scheme `*_authentication.go` files — those are the source of truth. An SDK whose API uses only
Basic, for instance, exports only `WithBasicAuthCredentials` / `NewBasicAuthCredentials`. The generated
`doc/auth/*.md` files list each scheme's credential fields and a usage snippet.

## Basic auth

```go
client := paze.NewClient(
    paze.CreateConfiguration(
        paze.WithBasicAuthCredentials(
            paze.NewBasicAuthCredentials(
                os.Getenv("{USERNAME_ENV}"),
                os.Getenv("{PASSWORD_ENV}"),
            ),
        ),
    ),
)
```

Sends `Authorization: Basic base64(username:password)` on every request that requires it.

## API key — custom header or custom query parameter

APIMatic models API-key schemes as "custom header" or "custom query parameter" auth. The credentials
struct carries the value(s); the wire name and placement are fixed by the generated scheme:

```go
// custom query-parameter scheme (often surfaced as ApiKeyCredentials):
paze.WithApiKeyCredentials(paze.NewApiKeyCredentials("token", "api-key"))

// custom header scheme (often surfaced as ApiHeaderCredentials):
paze.WithApiHeaderCredentials(paze.NewApiHeaderCredentials("token", "api-key"))
```

The constructor parameter names and how many there are come straight from the API's scheme — check the
`New...Credentials` signature and the `doc/auth/custom-*.md` file for which value maps to which header or
query parameter.

## OAuth 2.0 — bearer token

When you already hold a token (no grant flow):

```go
paze.WithOAuthBearerTokenCredentials(
    paze.NewOAuthBearerTokenCredentials(os.Getenv("{ACCESS_TOKEN_ENV}")),
)
```

Sends `Authorization: Bearer <token>`.

## OAuth 2.0 — client credentials grant

```go
client := paze.NewClient(
    paze.CreateConfiguration(
        paze.WithOAuthCCGCredentials(
            paze.NewOAuthCCGCredentials(
                os.Getenv("{CLIENT_ID_ENV}"),
                os.Getenv("{CLIENT_SECRET_ENV}"),
            ),
        ),
    ),
)
```

The SDK fetches and caches the token **automatically** the first time an endpoint requiring this scheme
is called, and refreshes it when it nears expiry (a configurable clock skew). You can also seed a stored
token or persist updated ones via builder methods on the credentials struct
(`.WithOAuthToken(...)`, `.WithOAuthTokenProvider(...)`, `.WithOAuthOnTokenUpdate(...)`) — see
[reference.md](reference.md).

## More schemes

For the full matrix — OAuth2 authorization-code grant (which needs a manual authorization-URL + code
exchange step via `client.OAuthACGManager()`), resource-owner password grant, token persistence
callbacks, combined **AND**/**OR** scheme requirements, environment-variable configuration, and no-auth —
see [reference.md](reference.md).

## Notes

- A given SDK only exports the credentials types/options for the schemes its API uses; names are generated
  per-API (hence the `{...}` placeholders above).
- Set credentials **on the `Configuration`** you pass to `NewClient` — the client is immutable after
  construction. To change credentials later (e.g. attach a fetched OAuth token), use
  `client.CloneWithConfiguration(...)`.
- An endpoint may require **several** schemes (`A AND B`) or **any of** several (`A OR B`). Configure every
  scheme the operations you call require — the per-operation requirement is in `doc/controllers/*.md`.
- **Keep secrets out of source.** Load credentials from environment variables (`os.Getenv`), a secret
  manager, or `CreateConfigurationFromEnvironment` — never hardcode them.
