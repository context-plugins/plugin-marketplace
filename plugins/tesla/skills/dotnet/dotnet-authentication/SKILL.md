---
name: "dotnet-authentication"
description: "Authentication for the Tesla Fleet Management API .NET SDK in C# — this API authenticates with a Bearer token, OAuth 2.0 client credentials and the OAuth 2.0 authorization-code grant, and this skill gives the credential each scheme takes, the TeslaFleetManagementApiClientOptions property to set it on, and the startup check that keeps a missing secret from surfacing as a 401. Load before wiring credentials into the client, or when a call comes back 401/403."
---

# Authenticating the Tesla Fleet Management API .NET SDK client

This API authenticates with a Bearer token, OAuth 2.0 client credentials and the OAuth 2.0 authorization-code grant. APIMatic surfaces each scheme as a **nullable credentials property** on `TeslaFleetManagementApiClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `TeslaFleetManagementApiClientOptions` | Credential |
| --- | --- | --- |
| Bearer token | `BearerAuth` | `string` |
| OAuth 2.0 client credentials | `ThirdpartytokenClientCredentials` | `OAuth2ClientCredentials` |
| OAuth 2.0 authorization code | `ThirdpartytokenAuthorizationCode` | `OAuth2AuthorizationCodeCredentials` |

**That table is the entire authentication surface of this SDK.** `TeslaFleetManagementApi.Core.Authentication` ships *every* scheme class APIMatic supports as shared runtime code, including kinds this API does not use, so read what is configurable off the properties above rather than off that folder.

## Bearer token

`options.BearerAuth` is a plain `string` — assign the access token itself, with no `Bearer` prefix, which the SDK adds:

```csharp
options.BearerAuth = "ACCESS_TOKEN";
```

Sends `Authorization: Bearer ACCESS_TOKEN`.

## OAuth 2.0 — client credentials (machine-to-machine)

```csharp
using TeslaFleetManagementApi.Core.Authentication.OAuth2.ClientCredentials;

options.ThirdpartytokenClientCredentials = new OAuth2ClientCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    Scope = "..."            // optional
};
```

The SDK fetches the token from `https://fleet-api.prd.na.vn.cloud.tesla.com/token` and caches it, acquiring a fresh one when it expires; on a `401` it invalidates the cached token and re-acquires. The token request carries the client id and secret in the form body.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

```csharp
using TeslaFleetManagementApi.Core.Authentication.OAuth2.AuthorizationCode;

options.ThirdpartytokenAuthorizationCode = new OAuth2AuthorizationCodeCredentials
{
    ClientId = "...",
    ClientSecret = "...",
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

The SDK sends the user to `https://fleet-api.prd.na.vn.cloud.tesla.com/authorize`, exchanges the returned code for a token at `https://fleet-api.prd.na.vn.cloud.tesla.com/token`, and refreshes it when it expires; if the refresh fails, it invokes `PromptForAuthorizationCode` again to re-authorize.

`PromptForAuthorizationCode` runs inside the call that needs a new token, under the scheme's fetch lock, so it must not make an SDK call that uses this scheme. It counts against the per-attempt `options.Retry.Timeout`, 100 s by default, and when the call is retryable (by default a `GET`, `HEAD`, `PUT` or `OPTIONS`) a timed-out attempt is retried and prompts again. A prompt that throws anything but `OperationCanceledException` fails the call with `AuthSchemeException`. `State` is sent as you set it and never checked, so your redirect handler must verify it.

`ClientSecret` is **optional while PKCE is enabled** (the default `S256`): this SDK builds the token request with `OAuth2AuthorizationCodeStrategy.ForFormBodyRequest`, the public-client case. Set `Pkce = null` and the secret becomes required — the call fails with an `AuthSchemeException` wrapping `InvalidOperationException("ClientSecret is required when PKCE is disabled.")`, thrown *before* `PromptForAuthorizationCode` runs.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **Only the authorization-code grant refreshes.** It is the one grant wired to `IOAuth2RefreshableTokenStrategy` / `OAuth2RefreshableScheme`. The other grants above re-run in full when the token expires — and a `refresh_token` in their token response is discarded, because the non-refreshable `OAuthToken` has no binding for it. Do not infer refresh behaviour from what the provider returns.
- On `401`, the cached token is invalidated and re-acquired on the next call — the failing request is **not** retried. For the authorization-code grant, invalidation drops the refresh token along with the access token, so "re-acquired" means the *full* grant runs again and `PromptForAuthorizationCode` fires: a `401` there is an interactive re-authorization, not a silent refresh. **Plan for that in a non-interactive host** — a background worker will block on a prompt nobody can answer.
- **Invalidation is a hint, not a barrier.** `Invalidate()` clears the cache without taking the fetch lock, so a token fetch already in flight can complete and re-populate it. That is deliberate — the refreshed token post-dates the invalidation — but it means "invalidate then immediately read" is not a guarantee of a fresh token.

⚠ **If the token response omits `expires_in`, the token never expires as far as the SDK is concerned.** `expires_in` is RECOMMENDED but not required by RFC 6749, and the SDK's expiry check short-circuits to "not expired" when it is absent — so the first token is cached for the life of the client and the only thing that ever replaces it is a `401`. That is usually fine and occasionally not: a token revoked server-side keeps being sent until a request fails with it. If your provider omits `expires_in` and you need proactive rotation, supply your own token strategy (below) rather than trying to bound the cache.

### Supplying your own token source

The token strategy is a public extension point: `TeslaFleetManagementApiClientOptions` exposes a strategy property beside each credentials property, and the generated client falls back to the built-in strategy only when you leave it null. The strategy is used only when the credentials property beside it is also set, and `GetToken` receives that object.

| Grant | Strategy property on `TeslaFleetManagementApiClientOptions` | Type |
| --- | --- | --- |
| Client credentials | `ThirdpartytokenClientCredentialsTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>` |
| Authorization code | `ThirdpartytokenAuthorizationCodeTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>` |

```csharp
options.ThirdpartytokenClientCredentials = new OAuth2ClientCredentials { /* its required members */ };
options.ThirdpartytokenClientCredentialsTokenStrategy = new MyTokenStrategy();   // Task<OAuthToken> GetToken(creds, ct)
```

Reach for it when the token must come from somewhere other than the SDK's own call to the token endpoint — a shared cache across processes, a secrets broker, a sidecar that already holds a valid token, or a test double. The per-client in-memory cache above still wraps whatever you return.

## Combining the schemes

This SDK generates more than one credentials property, and its operations compose them. You configure the composition by setting the relevant properties on `TeslaFleetManagementApiClientOptions` — the generated client wires the rest.

**OR (`AuthSchemeAny`) — alternatives, tried in order.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that succeeds wins, and `AuthSchemeException` is thrown only if every *configured* scheme fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `TeslaFleetManagementApiClientOptions` yields a no-op scheme, not an error, so the call reaches the provider with no credential and comes back `401`. The SDK will never tell you that you forgot to supply one; only the provider will, one round-trip later and one layer away from the cause.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can never succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<TeslaFleetManagementApiClientSettings>()
    .Bind(builder.Configuration.GetSection("TeslaFleetManagementApiClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.BearerAuth))
    throw new InvalidOperationException(
        "TeslaFleetManagementApiClient:BearerAuth is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"TeslaFleetManagementApiClient:BearerAuth is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `TeslaFleetManagementApiClientOptions` property |
| --- | --- |
| `BearerAuth` | `BearerAuth` |
| `ClientId` | `ThirdpartytokenClientCredentials` |
| `ClientSecret` | `ThirdpartytokenClientCredentials` |
| `ClientId` | `ThirdpartytokenAuthorizationCode` |
| `ClientSecret` | `ThirdpartytokenAuthorizationCode` |
| `RedirectUri` | `ThirdpartytokenAuthorizationCode` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddTeslaFleetManagementApiClient(options => ...)` callback when registering via DI. `TeslaFleetManagementApiClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddTeslaFleetManagementApiClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

