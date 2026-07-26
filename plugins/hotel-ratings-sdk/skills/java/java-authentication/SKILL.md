---
name: java-authentication
description: Configure authentication on an APIMatic-generated Java SDK client — each scheme is a {Scheme}Model built with a nested Builder (required fields in the constructor, optional via fluent setters) and registered via .{scheme}Credentials(model) on the client builder; covers Basic, custom header, custom query-parameter (API key), OAuth 2 bearer token, and OAuth 2 client-credentials with automatic token fetch/refresh. Use the moment you set credentials, an API key, a token, or OAuth on any APIMatic Java SDK — load it even after reading the builder options in the source, since the option name alone doesn't tell you it takes a built Model object, when OAuth tokens are fetched, or that secrets must come from the environment.
---

# Authenticating an APIMatic Java SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as a
**`{Scheme}Model`** built with a nested `Builder` inner class and registered on the client builder with a
`.{scheme}Credentials(model)` call. Build the model with its required constructor args, chain any optional
builder methods, call `.build()`, and pass the result when constructing the client.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK — replace them with
> the concrete identifiers from the source.

To see which schemes a specific SDK accepts, read the credential setter methods on `HotelRatingsClient.Builder`
(and the generated `doc/auth/*.md` files, which list each scheme's fields and a usage snippet). An SDK
whose API uses only Basic auth, for example, exposes only `.basicAuthCredentials(...)`.

**The source and these companion skills are complementary — load both.** The generated source is
authoritative for which schemes exist and their constructor parameters; this skill covers the usage
pattern and the gotchas the signatures don't show.

## Basic auth

```java
HotelRatingsClient client = new HotelRatingsClient.Builder()
    .basicAuthCredentials(new BasicAuthModel.Builder(
            System.getenv("{USERNAME_ENV}"),
            System.getenv("{PASSWORD_ENV}")
        )
        .build())
    .build();
```

Sends `Authorization: Basic base64(username:password)` on every request that requires it.

## API key — custom query parameter and custom header signature

APIMatic models API-key schemes as "custom query parameter" or "custom header signature". Each generates
its own `{Scheme}Model` whose constructor parameters carry the credential value(s); their wire names and
placement are fixed by the scheme:

```java
// Custom query-parameter scheme (e.g. ApiKeyModel):
.apiKeyCredentials(new ApiKeyModel.Builder(
        System.getenv("{TOKEN_ENV}"),
        System.getenv("{API_KEY_ENV}")
    )
    .build())

// Custom header signature scheme (e.g. ApiHeaderModel):
.apiHeaderCredentials(new ApiHeaderModel.Builder(
        System.getenv("{TOKEN_ENV}"),
        System.getenv("{API_KEY_ENV}")
    )
    .build())
```

The constructor parameter count and meaning come from the API's scheme — check the `{Scheme}Model.Builder`
constructor and `doc/auth/custom-*.md` for which value maps to which header or query parameter.

## OAuth 2.0 — bearer token

When you already hold a token (no grant flow):

```java
.oAuthBearerTokenCredentials(new OAuthBearerTokenModel.Builder(
        System.getenv("{ACCESS_TOKEN_ENV}")
    )
    .build())
```

Sends `Authorization: Bearer <token>`.

## OAuth 2.0 — client credentials grant

```java
HotelRatingsClient client = new HotelRatingsClient.Builder()
    .oAuthCCGCredentials(new OAuthCCGModel.Builder(
            System.getenv("{CLIENT_ID_ENV}"),
            System.getenv("{CLIENT_SECRET_ENV}")
        )
        .oAuthOnTokenUpdate(oAuthToken -> {
            // Fired whenever the token is updated — persist it here
            saveTokenToDatabase(oAuthToken);
        })
        .oAuthTokenProvider((lastOAuthToken, credentialsManager) -> {
            // Called when the last token is absent or expired
            OAuthToken stored = loadTokenFromDatabase();
            if (stored != null && !credentialsManager.isTokenExpired(stored)) {
                return stored;
            }
            return credentialsManager.fetchToken();
        })
        .build())
    .build();
```

The SDK fetches and caches the token **automatically** the first time an endpoint requiring this scheme is
called, and refreshes it when it nears expiry. The `oAuthTokenProvider` and `oAuthOnTokenUpdate` callbacks
let you persist the token across process restarts (load from DB on startup, save on update). Omit both
if you don't need persistence.

## More schemes

For the full matrix — OAuth2 authorization-code grant (which needs a manual authorization-URL redirect
+ code exchange via `client.getOAuthACGCredentials().fetchToken(code)`), resource-owner password grant,
token persistence callbacks, combined **AND**/**OR** scheme requirements, loading credentials from
environment variables, and no-auth — see [reference.md](reference.md).

## Notes

- A given SDK only exports the `{Scheme}Model` / setter for the schemes its API uses; names are generated
  per-API (hence the `{...}` placeholders above).
- Set credentials **on the `HotelRatingsClient.Builder`** before calling `.build()` — the client is immutable
  after construction. To change credentials (e.g. attach a fetched OAuth token), use
  `client.newBuilder().{scheme}Credentials(...).build()`.
- An endpoint may require **several** schemes (`A AND B`) or **any of** several (`A OR B`). Configure
  every scheme the operations you call may require — the per-operation requirement is in
  `doc/controllers/*.md`.
- **Keep secrets out of source.** Load credentials from `System.getenv(...)`, a secrets manager, or an
  injected configuration object — never hardcode them.
- Access the active credentials via `client.get{Scheme}Credentials()` (e.g.
  `client.getOAuthCCGCredentials()`); this returns the `{Scheme}Credentials` interface with getters.
- Re-building via `client.newBuilder()` is the standard mutation pattern — it copies all current
  configuration and lets you override only what changed.
