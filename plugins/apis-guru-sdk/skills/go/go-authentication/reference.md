# Go authentication — full reference

Companion to **go-authentication**. Covers the OAuth grant flows that need extra steps, token
persistence, combined scheme requirements, environment configuration, and no-auth. Confirm every name
against `configuration.go`, the `*_authentication.go` / `*Manager.go` files, and `doc/auth/*.md` in the
cloned source.

## How credentials are wired (recap)

Each scheme is a typed struct built with `New{Scheme}Credentials(...)` and registered with
`With{Scheme}Credentials(...)` on the `Configuration`. The structs expose builder methods (`.WithX(...)`)
that return a modified copy, and the `Configuration` exposes a getter per scheme (e.g.
`config.OAuthCCGCredentials()`). The client is immutable after `NewClient`; to change credentials later,
use `client.CloneWithConfiguration(...)`.

## OAuth 2.0 — client credentials grant (CCG)

```go
apisguru.WithOAuthCCGCredentials(
    apisguru.NewOAuthCCGCredentials(clientId, clientSecret),
)
```

The token is fetched automatically on first use and refreshed near expiry. Optional builder methods:

| Builder | Purpose |
| --- | --- |
| `.WithOAuthToken(models.OAuthToken)` | seed a previously stored token (skip the initial fetch) |
| `.WithOAuthTokenProvider(func(last models.OAuthToken, mgr apisguru.OAuthCCGManager) models.OAuthToken)` | supply/refresh the token yourself (e.g. load from DB; call `mgr.FetchToken(ctx)` to mint a new one) |
| `.WithOAuthOnTokenUpdate(func(models.OAuthToken))` | callback fired whenever the token updates — use it to persist the token |
| `.WithOAuthClockSkew(seconds int64)` | seconds of slack when checking expiry |

```go
creds := apisguru.NewOAuthCCGCredentials(id, secret).
    WithOAuthOnTokenUpdate(func(t models.OAuthToken) { saveToDB(t) }).
    WithOAuthTokenProvider(func(last models.OAuthToken, mgr apisguru.OAuthCCGManager) models.OAuthToken {
        if t := loadFromDB(); t.AccessToken != "" { return t }
        if t, err := mgr.FetchToken(context.TODO()); err == nil { return t }
        return last
    })
```

## OAuth 2.0 — authorization code grant (ACG)

ACG is a redirect flow: send the user to an authorization URL, receive a `code`, exchange it for a token.
The SDK does **not** perform the redirect.

```go
creds := apisguru.NewOAuthACGCredentials(clientId, clientSecret, redirectUri).
    WithOAuthScopes([]models.{OAuthScopeEnum}{ models.{OAuthScopeEnum}_{SCOPE} })  // scope enum is per-API

client := apisguru.NewClient(apisguru.CreateConfiguration(apisguru.WithOAuthACGCredentials(creds)))

// 1. Build the authorization URL and send the user there (see OAuthAuthorizationController / the
//    OAuthACGManager in the source for the helper that builds it).
// 2. After the redirect returns a `code`, exchange it:
token, err := client.OAuthACGManager().FetchToken(ctx, code)
if err != nil { /* ... */ }

// 3. Attach the fetched token for subsequent calls:
client = client.CloneWithConfiguration(
    apisguru.WithOAuthACGCredentials(client.Configuration().OAuthACGCredentials().WithOAuthToken(token)),
)
```

Persist the token (via `WithOAuthOnTokenUpdate` or by storing `token`) and re-seed with `.WithOAuthToken(...)`
so you don't re-run the redirect flow on every process start.

## OAuth 2.0 — resource owner password credentials grant (ROPCG)

```go
creds := apisguru.NewOAuthROPCGCredentials(clientId, clientSecret, username, password)
client := apisguru.NewClient(apisguru.CreateConfiguration(apisguru.WithOAuthROPCGCredentials(creds)))

// fetched automatically on first use; or eagerly, then re-attach like ACG:
token, err := client.OAuthROPCGManager().FetchToken(ctx)
```

The same `.WithOAuthToken / .WithOAuthTokenProvider / .WithOAuthOnTokenUpdate / .WithOAuthClockSkew`
builders apply.

## OAuth 2.0 — bearer token

When you already hold a token and there is no grant flow:

```go
apisguru.WithOAuthBearerTokenCredentials(apisguru.NewOAuthBearerTokenCredentials(accessToken))
```

## Basic / custom header / custom query parameter

```go
apisguru.WithBasicAuthCredentials(apisguru.NewBasicAuthCredentials(username, password))
apisguru.WithApiHeaderCredentials(apisguru.NewApiHeaderCredentials(token, apiKey))   // custom header scheme
apisguru.WithApiKeyCredentials(apisguru.NewApiKeyCredentials(token, apiKey))         // custom query-param scheme
```

The constructor parameters and wire placement come from the API's scheme — check the `New...Credentials`
signature and `doc/auth/*.md`.

## Custom auth

Some APIs define a bespoke scheme surfaced as `CustomAuthCredentials` / `WithCustomAuthCredentials`. Its
constructor parameters mirror what the scheme injects. Check `custom_auth_authentication.go` and
`doc/auth/`.

## Combined scheme requirements (AND / OR)

Each operation's doc states its requirement under an **Authentication** heading, e.g.:

- `basicAuth AND apiKey AND apiHeader` — configure **all** of those.
- `OAuthCCG OR OAuthBearerToken` — configure **any one**.
- Nested, e.g. `CustomAuth OR OAuthBearerToken OR (basicAuth AND apiKey AND apiHeader)`.

Configure every scheme the operations you call may require; the SDK applies the appropriate one(s) per
request.

## Configuration from environment variables

`CreateConfigurationFromEnvironment(...)` reads credentials from `APISGURU_...` variables — e.g.
`APISGURU_USERNAME`, `APISGURU_PASSWORD`, `APISGURU_TOKEN`, `APISGURU_API_KEY`,
`APISGURU_O_AUTH_CLIENT_ID`, `APISGURU_O_AUTH_CLIENT_SECRET`, `APISGURU_ACCESS_TOKEN`. Grep the
function in `configuration.go` for the exact names this SDK reads. Options you pass override env values.

## No auth

If the API (or an operation) requires no authentication, construct the client with no credentials. Some
SDKs mark a no-auth operation as deprecated for security reasons — heed that note.

## Security checklist

- Never hardcode secrets — use `os.Getenv`, a secret manager, or `CreateConfigurationFromEnvironment`.
- Persist OAuth tokens via `WithOAuthOnTokenUpdate` so refreshes survive restarts; re-seed with
  `WithOAuthToken`.
- Treat the client as immutable; rotate credentials by building a new client (or `CloneWithConfiguration`).
