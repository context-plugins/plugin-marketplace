# Authentication reference (APIMatic .NET — APIMATIC v3.0)

Full matrix of auth schemes the APIMATIC v3.0 .NET generator supports. Each scheme is a
**`{Scheme}Model`** built with `new {Scheme}Model.Builder(...).Build()` and registered on the
`AIceptionInteractiveClient.Builder` with a matching `.{Scheme}Credentials(...)` setter. The concrete class names
and the number of required `Builder` constructor arguments are per-API — take them from
`Authentication/` in the generated source and from `doc/auth/*.md`.

> **Which schemes does my SDK expose?** Open `AIceptionInteractiveClient.cs` and look at the nested `Builder` class
> — only the schemes the API uses appear as `.{Scheme}Credentials(...)` setters. The list below
> covers every scheme the generator can emit; your SDK has a subset.

## Basic auth

```csharp
using AIceptionInteractive.Standard.Authentication;

.BasicAuthCredentials(
    new BasicAuthModel.Builder(
        Environment.GetEnvironmentVariable("{API}_USERNAME"),
        Environment.GetEnvironmentVariable("{API}_PASSWORD"))
    .Build())
```

Sends `Authorization: Basic base64(username:password)` on every request that requires it.
Constructor takes `(string username, string password)`.

## Custom query parameter (API key in query string)

APIMatic models API-key-in-query-string schemes as "custom query parameter" auth. Example from the
generated SDK (`doc/auth/custom-query-parameter.md` names the fields):

```csharp
.ApiKeyCredentials(
    new ApiKeyModel.Builder(
        "token-value",
        "api-key-value")
    .Build())
```

Constructor takes the credential values in the order the API defines them. The wire name and query
parameter placement are fixed by the generated `ApiKeyManager`.

## Custom header signature (API key in header)

```csharp
.ApiHeaderCredentials(
    new ApiHeaderModel.Builder(
        "token-value",
        "api-key-value")
    .Build())
```

Same pattern as custom query parameter; the generated `ApiHeaderManager` wires the header name.

## OAuth 2.0 — bearer token (static token you already hold)

```csharp
.OAuthBearerTokenCredentials(
    new OAuthBearerTokenModel.Builder(
        Environment.GetEnvironmentVariable("{API}_ACCESS_TOKEN"))
    .Build())
```

Sends `Authorization: Bearer <token>`. No automatic refresh — you supply the token and manage its
lifetime yourself.

## OAuth 2.0 — client credentials grant (CCG, machine-to-machine)

```csharp
.OAuthCCGCredentials(
    new OAuthCCGModel.Builder(
        Environment.GetEnvironmentVariable("{API}_CLIENT_ID"),
        Environment.GetEnvironmentVariable("{API}_CLIENT_SECRET"))
    .Build())
```

The SDK fetches the token **automatically** the first time an endpoint requiring this scheme is called
and refreshes it near expiry. Additional `OAuthCCGModel.Builder` methods:

| Builder method | Type | Purpose |
| --- | --- | --- |
| `.OAuthToken(OAuthToken token)` | `OAuthToken` | Seed a previously stored token (skips the initial fetch) |
| `.OAuthTokenProvider(Func<OAuthCCGManager, OAuthToken, Task<OAuthToken>>)` | callback | Called when no token or token is expired; return a valid token (load from DB or call `credentialsManager.FetchTokenAsync()`) |
| `.OAuthOnTokenUpdate(Action<OAuthToken>)` | callback | Fires whenever a new token is obtained — use to persist it |
| `.OAuthClockSkew(TimeSpan?)` | `TimeSpan?` | Clock-skew buffer when checking token expiry |

## OAuth 2.0 — authorization code grant (ACG, 3-legged)

ACG requires a **manual browser-redirect + code-exchange step** before calling endpoints:

```csharp
// Step 1 — build client with credentials and scopes
AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .OAuthACGCredentials(
        new OAuthACGModel.Builder(
            "OAuthClientId",
            "OAuthClientSecret",
            "https://app.example.com/callback")   // OAuthRedirectUri
        .OAuthScopes(new List<OAuthScopeOAuthACGEnum> { OAuthScopeOAuthACGEnum.ReadScope })
        .Build())
    .Build();

// Step 2 — redirect user to the authorization URL
string authUrl = await client.OAuthACGCredentials.BuildAuthorizationUrl();
// open authUrl in the browser; receive the code at your redirect endpoint

// Step 3 — exchange code for token and rebuild the client
OAuthToken token = client.OAuthACGCredentials.FetchToken(authorizationCode);
client = client.ToBuilder()
    .OAuthACGCredentials(
        client.OAuthACGModel.ToBuilder()
            .OAuthToken(token)
            .Build())
    .Build();
```

`IsTokenExpired()` + `RefreshToken()` on the credentials object let you check and refresh manually.
Store/restore the token with `.OAuthToken(...)` on the model builder. Constructor takes
`(string oAuthClientId, string oAuthClientSecret, string oAuthRedirectUri)`.

## OAuth 2.0 — resource owner password credentials grant (ROPCG)

```csharp
.OAuthROPCGCredentials(
    new OAuthROPCGModel.Builder(
        "OAuthClientId",
        "OAuthClientSecret",
        Environment.GetEnvironmentVariable("{API}_USERNAME"),
        Environment.GetEnvironmentVariable("{API}_PASSWORD"))
    .Build())
```

After building the client, exchange credentials for a token and rebuild:

```csharp
OAuthToken token = client.OAuthROPCGCredentials.FetchToken();
client = client.ToBuilder()
    .OAuthROPCGCredentials(
        client.OAuthROPCGModel.ToBuilder()
            .OAuthToken(token)
            .Build())
    .Build();
```

Use `IsTokenExpired()` + `RefreshToken()` for token maintenance. Constructor takes
`(string oAuthClientId, string oAuthClientSecret, string oAuthUsername, string oAuthPassword)`.

## AND / OR combined scheme requirements

An operation may require **all** of several schemes (AND) or **any** of them (OR); the generated code
wires this for you via `WithAndAuth`/`WithOrAuth` inside the controller. Your job is simply to
configure every scheme the operations you call need. Examples from `doc/controllers/*.md`:

```
# AND — all three must succeed:
This endpoint requires basicAuth AND apiKey AND apiHeader

# OR — first succeeding scheme is used:
This endpoint requires apiKey OR apiHeader
```

Configure every scheme your operations require. An operation's auth requirement is documented under
its **Authentication** heading in `doc/controllers/*.md`.

## No auth

Some endpoints require no credentials (the controller's `RequestBuilder` omits `.WithAuth(...)`).
Leave those scheme credential setters absent on the client builder — no special configuration needed.

## Loading credentials from configuration (IConfiguration)

Rather than passing secrets in code, bind from JSON / environment variables via
`AIceptionInteractiveClient.Builder.FromConfiguration(IConfigurationSection)`:

```json
// config.json
{
  "AIceptionInteractive": {
    "BasicAuthCredentials": { "Username": "...", "Password": "..." },
    "OAuthCCGCredentials":  { "OAuthClientId": "...", "OAuthClientSecret": "..." }
  }
}
```

```csharp
var client = AIceptionInteractiveClient.Builder
    .FromConfiguration(configuration.GetSection("AIceptionInteractive"))
    .Build();
```

See `doc/configuration-based-initialization.md` in the SDK for the exact JSON key names for every
scheme.

## Important notes

- **A partially-filled credentials block is silently discarded.** At `.Build()`, the client nulls out
  any `{Scheme}Model` whose required constructor fields aren't all set. A missing or empty secret
  yields a client with **no** auth for that scheme, producing a `401` at call time, not a build-time
  error. Check every required field is populated.
- **Set credentials on the `Builder`** — the client is immutable after `.Build()`. To change
  credentials (e.g., attach a freshly fetched token), call `client.ToBuilder()`, re-set the scheme,
  and `.Build()` a new instance.
- **Keep secrets out of source.** Load them from environment variables, `IConfiguration`, or a secret
  manager — never hardcode.
