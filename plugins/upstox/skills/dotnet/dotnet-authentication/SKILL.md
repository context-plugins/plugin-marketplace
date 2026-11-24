---
name: "dotnet-authentication"
description: "Load before wiring credentials into the Upstox .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers the OAuth 2.0 authorization-code grant: the credential each scheme takes, the UpstoxClientOptions property it goes on, and a startup check that fails fast on a missing secret."
---

# Authenticating the Upstox .NET SDK client

This API authenticates with the OAuth 2.0 authorization-code grant. Each scheme is a **nullable credentials property** on `UpstoxClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `UpstoxClientOptions` | Credential |
| --- | --- | --- |
| OAuth 2.0 authorization code | `Oauth2` | `OAuth2AuthorizationCodeCredentials?` |

**That table is the entire authentication surface of this SDK.** `Upstox.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

```csharp
using Upstox.Core.Authentication.OAuth2.AuthorizationCode;

options.Oauth2 = new OAuth2AuthorizationCodeCredentials
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

The SDK sends the user to `https://api-v2.upstox.com/v2/login/authorization/dialog`, exchanges the returned code for a token at `https://api-v2.upstox.com/v2/login/authorization/token`, and refreshes it when it expires; if the refresh fails, it invokes `PromptForAuthorizationCode` again to re-authorize.

`PromptForAuthorizationCode` runs inside the call that needs a new token, so it must not make an SDK call that uses this scheme. It counts against the per-attempt `options.Retry.Timeout`, 100 s by default, and a timed-out attempt on a retryable call is retried and prompts again. A prompt that throws anything but `OperationCanceledException` fails the call with `AuthSchemeException`. `State` is sent as you set it and never checked, so your redirect handler must verify it.

⚠ **`ClientSecret` is required here — PKCE does not make it optional.** The code exchange sends the client id and secret as HTTP Basic credentials. Omit it and the call fails with an `AuthSchemeException` wrapping an `InvalidOperationException`:

- **PKCE disabled** (`Pkce = null`) — *before* `PromptForAuthorizationCode` runs.
- **PKCE enabled** (the default `S256`) — *after* the user has completed the browser round-trip.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **`options.Oauth2` requests the whole catalogue (`read write`) on every token request**, so one token — and one consent — covers every operation.
- **This grant refreshes**: the SDK keeps the `refresh_token` the server issues and renews silently; when the refresh fails the full grant runs again.
- On `401`, the rejected token is dropped, a new one is obtained and the failing request is **re-sent once** — under every retry setting, including `RetryOptions.Disabled()`; a second `401` is returned to you. A request whose body cannot be re-sent (a binary or file upload) is not re-sent, but its `401` still drops the cached token, so the next call recovers. For the authorization-code grant the refresh token is tried first, so the re-send is silent unless the refresh itself fails — then `PromptForAuthorizationCode` fires inside the call. **Plan for that in a non-interactive host** — a background worker will block on a prompt nobody can answer.
- After a `401` clears the cache, a token fetch already in flight can still re-populate it, so the next call is not guaranteed a newly fetched token.

Setting `Scope` on the credentials replaces the per-scheme behaviour above with one token requested with that value; an empty `Scope` requests none. Set it to the scopes your client is registered for when the API declares more than it grants you: the default asks for the whole catalogue, and an authorization server that enforces per-client scope registration answers `invalid_scope` to that request.

⚠ **If the token response omits `expires_in`, the SDK treats the token as never expiring**: it is cached for the client's lifetime and replaced only after a `401`, so a token revoked server-side keeps being sent until a request fails with it — a failure the one re-send above recovers, at the cost of a round trip.

## Operations that need no credentials

Some operations on this API are public: they send no credential, whatever you set on `UpstoxClientOptions`. You still construct the same client — there is no separate unauthenticated client — and the credentials you configured are simply not applied to those calls.

## Environment variables

`options.Oauth2` has no environment default.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `UpstoxClientOptions` that nothing fills fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<UpstoxClientSettings>()
    .Bind(builder.Configuration.GetSection("UpstoxClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ClientId))
    throw new InvalidOperationException(
        "UpstoxClient:ClientId is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set — `"UpstoxClient:ClientId is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value the schemes actually need. For this SDK that is:

| Value to validate | Feeds `UpstoxClientOptions` property |
| --- | --- |
| `ClientId` | `Oauth2` |
| `ClientSecret` | `Oauth2` |
| `RedirectUri` | `Oauth2` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddUpstoxClient(options => ...)` callback when registering via DI. `UpstoxClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddUpstoxClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app.

