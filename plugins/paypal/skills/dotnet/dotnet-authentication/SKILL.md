---
name: "dotnet-authentication"
description: "Authentication for the PayPal Server SDK .NET SDK in C# — this API authenticates with OAuth 2.0 client credentials, and this skill gives the credential each scheme takes, the PayPalServerSdkClientOptions property to set it on, and the startup check that keeps a missing secret from surfacing as a 401. Load before wiring credentials into the client, or when a call comes back 401/403."
---

# Authenticating the PayPal Server SDK .NET SDK client

This API authenticates with OAuth 2.0 client credentials. APIMatic surfaces each scheme as a **nullable credentials property** on `PayPalServerSdkClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `PayPalServerSdkClientOptions` | Credential |
| --- | --- | --- |
| OAuth 2.0 client credentials | `Oauth2` | `OAuth2ClientCredentials` |

**That table is the entire authentication surface of this SDK.** `PayPalServerSdk.Core.Authentication` ships *every* scheme class APIMatic supports as shared runtime code, including kinds this API does not use, so read what is configurable off the properties above rather than off that folder.

## OAuth 2.0 — client credentials (machine-to-machine)

```csharp
using PayPalServerSdk.Core.Authentication.OAuth2.ClientCredentials;

options.Oauth2 = new OAuth2ClientCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    Scope = "..."            // optional
};
```

The SDK fetches the token from `https://api-m.sandbox.paypal.com/v1/oauth2/token` and caches it, acquiring a fresh one when it expires; on a `401` it invalidates the cached token and re-acquires. The token request carries the client id and secret as HTTP Basic credentials, so `ClientSecret` is required.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **Nothing here refreshes.** The grants above are not wired to `IOAuth2RefreshableTokenStrategy` — when a token expires the whole grant re-runs. A `refresh_token` in the response is discarded, because the non-refreshable `OAuthToken` has no binding for it. Do not infer refresh behaviour from what the provider returns.
- On `401`, the cached token is invalidated and re-acquired on the next call — the failing request is **not** retried.
- **Invalidation is a hint, not a barrier.** `Invalidate()` clears the cache without taking the fetch lock, so a token fetch already in flight can complete and re-populate it. That is deliberate — the refreshed token post-dates the invalidation — but it means "invalidate then immediately read" is not a guarantee of a fresh token.

⚠ **If the token response omits `expires_in`, the token never expires as far as the SDK is concerned.** `expires_in` is RECOMMENDED but not required by RFC 6749, and the SDK's expiry check short-circuits to "not expired" when it is absent — so the first token is cached for the life of the client and the only thing that ever replaces it is a `401`. That is usually fine and occasionally not: a token revoked server-side keeps being sent until a request fails with it. If your provider omits `expires_in` and you need proactive rotation, supply your own token strategy (below) rather than trying to bound the cache.

### Supplying your own token source

The token strategy is a public extension point: `PayPalServerSdkClientOptions` exposes a strategy property beside each credentials property, and the generated client falls back to the built-in strategy only when you leave it null.

| Grant | Strategy property on `PayPalServerSdkClientOptions` | Type |
| --- | --- | --- |
| Client credentials | `Oauth2TokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>` |

```csharp
options.Oauth2TokenStrategy = new MyTokenStrategy();   // Task<OAuthToken> GetToken(creds, ct)
```

Reach for it when the token must come from somewhere other than the SDK's own call to the token endpoint — a shared cache across processes, a secrets broker, a sidecar that already holds a valid token, or a test double. The per-client in-memory cache above still wraps whatever you return.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `PayPalServerSdkClientOptions` yields a no-op scheme, not an error, so the call reaches the provider with no credential and comes back `401`. The SDK will never tell you that you forgot to supply one; only the provider will, one round-trip later and one layer away from the cause.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can never succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<PayPalServerSdkClientSettings>()
    .Bind(builder.Configuration.GetSection("PayPalServerSdkClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ClientId))
    throw new InvalidOperationException(
        "PayPalServerSdkClient:ClientId is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"PayPalServerSdkClient:ClientId is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value the schemes actually need. For this SDK that is:

| Value to validate | Feeds `PayPalServerSdkClientOptions` property |
| --- | --- |
| `ClientId` | `Oauth2` |
| `ClientSecret` | `Oauth2` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddPayPalServerSdkClient(options => ...)` callback when registering via DI. `PayPalServerSdkClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddPayPalServerSdkClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

