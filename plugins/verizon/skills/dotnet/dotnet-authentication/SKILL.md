---
name: "dotnet-authentication"
description: "Authentication for the Verizon .NET SDK in C# — this API authenticates with an API key in a header and OAuth 2.0 client credentials, and this skill gives the credential each scheme takes, the VerizonClientOptions property to set it on, and the startup check that keeps a missing secret from surfacing as a 401. Load before wiring credentials into the client, or when a call comes back 401/403."
---

# Authenticating the Verizon .NET SDK client

This API authenticates with an API key in a header and OAuth 2.0 client credentials. APIMatic surfaces each scheme as a **nullable credentials property** on `VerizonClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `VerizonClientOptions` | Credential |
| --- | --- | --- |
| API key — `VZ-M2M-Token` header | `VzM2MToken` | `string` |
| API key — `SessionToken` header | `SessionToken` | `string` |
| OAuth 2.0 client credentials | `ThingspaceOauth` | `OAuth2ClientCredentials` |
| OAuth 2.0 client credentials | `ThingspaceOauth1` | `OAuth2ClientCredentials` |

**That table is the entire authentication surface of this SDK.** `Verizon.Core.Authentication` ships *every* scheme class APIMatic supports as shared runtime code, including kinds this API does not use, so read what is configurable off the properties above rather than off that folder.

## API key (header) — `VzM2MToken`

**API Provider Notes:**

> M2M Session Token ([How to generate an M2M session token?]($e/Session%20Management/StartConnectivityManagementSession))

The key travels in the `VZ-M2M-Token` request header. The header name is fixed by the generated scheme — you supply only the value:

```csharp
options.VzM2MToken = "API_KEY";
```

## API key (header) — `SessionToken`

**API Provider Notes:**

> This is the Session/M2M token needed to authenticate the user. It should be acquired by using the ThingSpace APIs. For detail on how to obtain a Session/M2M token please refer to the
> - [ThingSpace Quick Start Guide - Obtaining a VZ-M2M Session Token Programmatically](https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens/obtaining-a-vz-m2m-sessiontoken-programmatically)
> - or the [ThingSpace API Video Guide 1](https://www.youtube.com/watch?v=QPJQFT3637w) and [ThingSpace API Video Guide 2](https://www.youtube.com/watch?v=hc9udGp4P_s)

The key travels in the `SessionToken` request header. The header name is fixed by the generated scheme — you supply only the value:

```csharp
options.SessionToken = "API_KEY";
```

## OAuth 2.0 — client credentials (machine-to-machine) — `ThingspaceOauth`

**API Provider Notes:**

> This is the ThingSpace token, from [Credentials and Tokens](https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens)
>   is used

```csharp
using Verizon.Core.Authentication.OAuth2.ClientCredentials;

options.ThingspaceOauth = new OAuth2ClientCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    Scope = "..."            // optional
};
```

The SDK fetches the token from `https://thingspace.verizon.com/api/ts/v1/oauth2/token` and caches it, acquiring a fresh one when it expires; on a `401` it invalidates the cached token and re-acquires. The token request carries the client id and secret as HTTP Basic credentials, so `ClientSecret` is required.

## OAuth 2.0 — client credentials (machine-to-machine) — `ThingspaceOauth1`

**API Provider Notes:**

> This is where the ThingSpace access token, from [Credentials and Tokens](https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens) is used

```csharp
using Verizon.Core.Authentication.OAuth2.ClientCredentials;

options.ThingspaceOauth1 = new OAuth2ClientCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    Scope = "..."            // optional
};
```

The SDK fetches the token from `https://thingspace.verizon.com/api/ts/v1/` and caches it, acquiring a fresh one when it expires; on a `401` it invalidates the cached token and re-acquires. The token request carries the client id and secret as HTTP Basic credentials, so `ClientSecret` is required.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **Nothing here refreshes.** The grants above are not wired to `IOAuth2RefreshableTokenStrategy` — when a token expires the whole grant re-runs. A `refresh_token` in the response is discarded, because the non-refreshable `OAuthToken` has no binding for it. Do not infer refresh behaviour from what the provider returns.
- On `401`, the cached token is invalidated and re-acquired on the next call — the failing request is **not** retried.
- **Invalidation is a hint, not a barrier.** `Invalidate()` clears the cache without taking the fetch lock, so a token fetch already in flight can complete and re-populate it. That is deliberate — the refreshed token post-dates the invalidation — but it means "invalidate then immediately read" is not a guarantee of a fresh token.

⚠ **If the token response omits `expires_in`, the token never expires as far as the SDK is concerned.** `expires_in` is RECOMMENDED but not required by RFC 6749, and the SDK's expiry check short-circuits to "not expired" when it is absent — so the first token is cached for the life of the client and the only thing that ever replaces it is a `401`. That is usually fine and occasionally not: a token revoked server-side keeps being sent until a request fails with it. If your provider omits `expires_in` and you need proactive rotation, supply your own token strategy (below) rather than trying to bound the cache.

### Supplying your own token source

The token strategy is a public extension point: `VerizonClientOptions` exposes a strategy property beside each credentials property, and the generated client falls back to the built-in strategy only when you leave it null.

| Grant | Strategy property on `VerizonClientOptions` | Type |
| --- | --- | --- |
| Client credentials | `ThingspaceOauthTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>` |
| Client credentials | `ThingspaceOauth1TokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>` |

```csharp
options.ThingspaceOauthTokenStrategy = new MyTokenStrategy();   // Task<OAuthToken> GetToken(creds, ct)
```

Reach for it when the token must come from somewhere other than the SDK's own call to the token endpoint — a shared cache across processes, a secrets broker, a sidecar that already holds a valid token, or a test double. The per-client in-memory cache above still wraps whatever you return.

## Combining the schemes

This SDK generates more than one credentials property, and its operations compose them. You configure the composition by setting the relevant properties on `VerizonClientOptions` — the generated client wires the rest.

**AND (`AuthSchemeAll`) — every scheme in the group is applied to the request.** Leave one of them unconfigured and the request still goes out, just without that credential; the provider decides what to make of a half-authenticated call.

**OR (`AuthSchemeAny`) — alternatives, tried in order.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that succeeds wins, and `AuthSchemeException` is thrown only if every *configured* scheme fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** An unset credentials property on `VerizonClientOptions` yields a no-op scheme, not an error, so the call reaches the provider with no credential and comes back `401`. The SDK will never tell you that you forgot to supply one; only the provider will, one round-trip later and one layer away from the cause.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can never succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<VerizonClientSettings>()
    .Bind(builder.Configuration.GetSection("VerizonClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.VzM2MToken))
    throw new InvalidOperationException(
        "VerizonClient:VzM2MToken is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"VerizonClient:VzM2MToken is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `VerizonClientOptions` property |
| --- | --- |
| `VzM2MToken` | `VzM2MToken` |
| `SessionToken` | `SessionToken` |
| `ClientId` | `ThingspaceOauth` |
| `ClientSecret` | `ThingspaceOauth` |
| `ClientId` | `ThingspaceOauth1` |
| `ClientSecret` | `ThingspaceOauth1` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddVerizonClient(options => ...)` callback when registering via DI. `VerizonClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddVerizonClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

