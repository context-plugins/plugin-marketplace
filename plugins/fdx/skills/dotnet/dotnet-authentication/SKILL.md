---
name: dotnet-authentication
description: Authentication for an APIMatic-generated .NET SDK in C# — supplying credentials, the auth scheme and manager shape, per-environment configuration, and rotating or refreshing credentials. Load before wiring credentials or an auth scheme into the client, or when a call fails with 401/403.
---

# Authenticating an APIMatic .NET SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as a
**nullable credentials property on the options class**; set the one(s) your API uses, then construct the
client (see `dotnet-client-initialization`).

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{RootNamespace}`,
> `{Api}ClientOptions`, `{BasicAuthProperty}`) — replace it with the concrete identifier from the source.

To see which schemes a specific SDK accepts, read the **credentials properties on its `{Api}ClientOptions`
class** — those are the source of truth (take them from the contract sheet the SDK helper agent grounds from the
SDK map/source, not a decompiled or reflected view of the installed package). The `{RootNamespace}.Core.Authentication` folder ships *every*
scheme class as shared runtime code regardless of what the API accepts, so rely on the options class rather
than that folder. (An SDK whose API uses only Basic, for instance, exposes a single
`options.{BasicAuthProperty}` of type `BasicAuthCredentials`.)

The credential classes below live under `{RootNamespace}.Core.Authentication.*` and are the **same across
all APIMatic .NET SDKs**; only the **options property names** are generated per-API (hence the
`{...Property}` placeholders).

## Basic auth

```csharp
using {RootNamespace}.Core.Authentication.Basic;

options.{BasicAuthProperty} = new BasicAuthCredentials
{
    Username = "...",
    Password = "..."
};
```

Sends `Authorization: Basic base64(username:password)`.

## Bearer token

Set the configured token property on the options class to your access-token string:

```csharp
options.{BearerAuthProperty} = "ACCESS_TOKEN";
```

Sends `Authorization: Bearer ACCESS_TOKEN`.

## API key (header, query, or cookie)

The key is sent as a header, query parameter, or cookie — its placement and name are fixed by the generated
scheme. Set the configured key property to your key string:

```csharp
options.{ApiKeyProperty} = "API_KEY";
```

## OAuth 2.0 — client credentials (machine-to-machine)

```csharp
using {RootNamespace}.Core.Authentication.OAuth2.ClientCredentials;

options.{OAuthProperty} = new OAuth2ClientCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    Scope = "..."            // optional
};
```

The SDK fetches and caches the token, acquiring a fresh one when it expires; on a `401` it invalidates the
cached token and re-acquires.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

```csharp
using {RootNamespace}.Core.Authentication.OAuth2.AuthorizationCode;

options.{OAuthProperty} = new OAuth2AuthorizationCodeCredentials
{
    ClientId = "...",
    ClientSecret = "...",                       // optional; needed only when PKCE is disabled (Pkce = null)
    RedirectUri = "https://app.example.com/callback",
    Scope = "...",                              // optional
    State = "...",                              // optional CSRF token
    Pkce = PkceMethod.S256,                     // default; RFC 7636
    PromptForAuthorizationCode = async (authorizationUrl, ct) =>
    {
        // Open/redirect the browser to authorizationUrl, then return the
        // authorization code your redirect endpoint received.
        return await GetCodeFromUserAsync(authorizationUrl, ct);
    }
};
```

The SDK exchanges the code for a token and refreshes it when it expires; if the refresh fails, it invokes
`PromptForAuthorizationCode` again to re-authorize.

## OAuth 2.0 — resource owner password

```csharp
using {RootNamespace}.Core.Authentication.OAuth2.Password;

options.{OAuthProperty} = new OAuth2PasswordCredentials
{
    ClientId = "...",
    ClientSecret = "...",   // optional
    Username = "...",
    Password = "...",
    Scope = "..."           // optional
};
```

## Token caching & refresh (all OAuth2 grants)

- Tokens are cached in-memory and reused until ~30s before expiry.
- Refreshable grants (those that return a refresh token) refresh automatically; otherwise a new token is
  acquired.
- On `401`, the cached token is invalidated and re-acquired on the next call.

## Combined / multiple schemes

When an operation (or the whole API) requires more than one scheme, APIMatic composes them:

- **AND** — all schemes are applied to every request (`AuthSchemeAll`).
- **OR** — the first scheme that succeeds is used; if all fail, an `AuthSchemeException` is thrown
  (`AuthSchemeAny`).

You configure this by setting the relevant credentials properties on the options class; the generated
client wires the AND/OR composition for you.

## No auth

Some endpoints/APIs need no credentials (`NoneAuthScheme`) — leave the credentials properties unset.

## Notes

- A given SDK only exposes the credentials properties for the schemes its API uses; those names are
  generated per-API (hence the `{...Property}` placeholders above).
- Set credentials **before** constructing the client, or inside the `Add{Api}Client(options => ...)`
  callback when registering via DI.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any
  other `IConfiguration` source) instead of hardcoding, either inside the `Add{Api}Client(options => ...)`
  callback for the host or via a `ConfigurationBuilder()...Build()` chain for a console app.
