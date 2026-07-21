---
name: dotnet-authentication
description: Configure authentication on an APIMatic-generated C#/.NET SDK client — each scheme is a {Scheme}Model credentials object built with new {Scheme}Model.Builder(...).Build() and registered on the client builder via .{Scheme}Credentials(...); covers Basic auth, custom header, custom query parameter (API key), OAuth 2 bearer token, and OAuth 2 client-credentials with automatic token fetch/refresh. Use the moment you set credentials, an API key, a token, or OAuth on any APIMatic .NET SDK — load it even after reading the builder setter in the source, since the setter name alone doesn't tell you it takes a built {Scheme}Model, when the token is fetched, that a half-filled credentials block is silently dropped, or that secrets must come from configuration.
---

# Authenticating an APIMatic C#/.NET SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as a
**`{Scheme}Model` credentials object**: you build it with `new {Scheme}Model.Builder(...).Build()` and
register it on the client `Builder` with a matching `.{Scheme}Credentials(...)` setter. Set the one(s)
your API uses when building the client (see **dotnet-client-initialization**).

> Throughout, `AIceptionInteractive`, `AIceptionInteractive.Standard`, and other `{...}` tokens are placeholders for names you take
> from your SDK — replace them with the concrete identifiers from the source.

To see which schemes a specific SDK accepts, read the `.{Scheme}Credentials` setters on the nested
`Builder` in `AIceptionInteractiveClient.cs` and the `Authentication/` folder (`{Scheme}Model`, `I{Scheme}Credentials`)
— those are the source of truth. An SDK whose API uses only Basic, for instance, exposes only
`.BasicAuthCredentials(...)` / `BasicAuthModel`. The generated `doc/auth/*.md` files list each scheme's
credential fields and a usage snippet.

## Basic auth

```csharp
using AIceptionInteractive.Standard;
using AIceptionInteractive.Standard.Authentication;

AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .BasicAuthCredentials(
        new BasicAuthModel.Builder(
            Environment.GetEnvironmentVariable("{API}_USERNAME"),
            Environment.GetEnvironmentVariable("{API}_PASSWORD"))
        .Build())
    .Build();
```

Sends `Authorization: Basic base64(username:password)` on every request that requires it.

## API key — custom header or custom query parameter

APIMatic models API-key schemes as "custom header" or "custom query parameter" auth. The `{Scheme}Model`
carries the value(s); the wire name and placement are fixed by the generated scheme. The two values are
commonly a `token` and an `apiKey`:

```csharp
// custom query-parameter scheme (often surfaced as ApiKeyCredentials / ApiKeyModel):
.ApiKeyCredentials(new ApiKeyModel.Builder("token", "api-key").Build())

// custom header scheme (often surfaced as ApiHeaderCredentials / ApiHeaderModel):
.ApiHeaderCredentials(new ApiHeaderModel.Builder("token", "api-key").Build())
```

The constructor parameter names and how many there are come straight from the API's scheme — check the
`{Scheme}Model.Builder` constructor and the `doc/auth/custom-*.md` file for which value maps to which
header or query parameter.

## OAuth 2.0 — bearer token

When you already hold a token (no grant flow):

```csharp
.OAuthBearerTokenCredentials(
    new OAuthBearerTokenModel.Builder(
        Environment.GetEnvironmentVariable("{API}_ACCESS_TOKEN"))
    .Build())
```

Sends `Authorization: Bearer <token>`.

## OAuth 2.0 — client credentials grant

```csharp
AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .OAuthCCGCredentials(
        new OAuthCCGModel.Builder(
            Environment.GetEnvironmentVariable("{API}_CLIENT_ID"),
            Environment.GetEnvironmentVariable("{API}_CLIENT_SECRET"))
        .Build())
    .Build();
```

The SDK fetches and caches the token **automatically** the first time an endpoint requiring this scheme is
called, and refreshes it near expiry. You can seed a stored token, supply a token provider, or persist
updated tokens via builder methods on `OAuthCCGModel.Builder`
(`.OAuthToken(...)`, `.OAuthTokenProvider(...)`, `.OAuthOnTokenUpdate(...)`, `.OAuthClockSkew(...)`) — see
[reference.md](reference.md).

## More schemes

For the full matrix — OAuth2 authorization-code grant (which needs a manual
`BuildAuthorizationUrl()` + `FetchToken(code)` step), resource-owner password grant, bearer token, custom
auth, token persistence callbacks, refresh, combined **AND**/**OR** scheme requirements,
configuration/env-var setup, and no-auth — see [reference.md](reference.md).

## Notes

- A given SDK only exposes the `{Scheme}Model` types and setters for the schemes its API uses; names are
  generated per-API (hence the `{...}` placeholders above).
- **A partially-filled credentials block is silently discarded.** At `.Build()`, the client nulls out any
  `{Scheme}Model` whose required fields aren't all set (e.g. a `BasicAuthModel` missing the password) —
  so a typo'd or unset secret yields a client with **no** auth for that scheme and a 401 at call time, not
  a build error. Verify every required field is populated.
- Set credentials **on the `Builder`** — the client is immutable after `.Build()`. To change credentials
  later (e.g. attach a fetched OAuth token), call `client.ToBuilder()`, re-set the scheme, and `.Build()` a
  new client.
- An endpoint may require **several** schemes (`A AND B`) or **any of** several (`A OR B`). Configure every
  scheme the operations you call require — the per-operation requirement is in `doc/controllers/*.md` under
  an **Authentication** heading.
- **Keep secrets out of source.** Load credentials from environment variables, `IConfiguration`/a secret
  manager, or `FromConfiguration` — never hardcode them.
