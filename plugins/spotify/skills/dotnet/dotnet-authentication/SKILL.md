---
name: "dotnet-authentication"
description: "Load before wiring credentials into the Spotify Web API .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers the OAuth 2.0 authorization-code grant and OAuth 2.0 client credentials: the credential each scheme takes, the SpotifyWebApiClientOptions property it goes on, the environment variable that fills it when unset, and a startup check that fails fast on a missing secret."
---

# Authenticating the Spotify Web API .NET SDK client

This API authenticates with the OAuth 2.0 authorization-code grant and OAuth 2.0 client credentials. Each scheme is a **nullable credentials property** on `SpotifyWebApiClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `SpotifyWebApiClientOptions` | Credential |
| --- | --- | --- |
| OAuth 2.0 authorization code | `Oauth20` | `OAuth2AuthorizationCodeCredentials?` |
| OAuth 2.0 client credentials | `Oauth20ClientCredentials` | `OAuth2ClientCredentials?` |

**That table and the environment variables below are the entire authentication surface of this SDK.** `SpotifyWebApi.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

**API Provider Notes:**

> Spotify supports OAuth 2.0 for authenticating all API requests.

```csharp
using SpotifyWebApi.Core.Authentication.OAuth2.AuthorizationCode;

options.Oauth20 = new OAuth2AuthorizationCodeCredentials
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

The SDK sends the user to `https://accounts.spotify.com/authorize`, exchanges the returned code for a token at `https://accounts.spotify.com/api/token`, and refreshes it when it expires; if the refresh fails, it invokes `PromptForAuthorizationCode` again to re-authorize.

`PromptForAuthorizationCode` runs inside the call that needs a new token, so it must not make an SDK call that uses this scheme. It counts against the per-attempt `options.Retry.Timeout`, 100 s by default, and a timed-out attempt on a retryable call is retried and prompts again. A prompt that throws anything but `OperationCanceledException` fails the call with `AuthSchemeException`. `State` is sent as you set it and never checked, so your redirect handler must verify it.

⚠ **`ClientSecret` is required here — PKCE does not make it optional.** The code exchange sends the client id and secret as HTTP Basic credentials. Omit it and the call fails with an `AuthSchemeException` wrapping an `InvalidOperationException`:

- **PKCE disabled** (`Pkce = null`) — *before* `PromptForAuthorizationCode` runs.
- **PKCE enabled** (the default `S256`) — *after* the user has completed the browser round-trip.

## OAuth 2.0 — client credentials (machine-to-machine)

**API Provider Notes:**

> Server-to-server OAuth 2.0 client credentials flow. Tokens obtained this way carry no user context and no scopes, so they only work on endpoints that read public catalog data. Verified against the live token endpoint.

```csharp
using SpotifyWebApi.Core.Authentication.OAuth2.ClientCredentials;

options.Oauth20ClientCredentials = new OAuth2ClientCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    Scope = "..."            // optional
};
```

The SDK fetches the token from `https://accounts.spotify.com/api/token` and caches it, acquiring a fresh one when it expires; on a `401` it drops the cached token, acquires a new one and re-sends the call once (the upload exception is under **Token caching & refresh**). The token request carries the client id and secret as HTTP Basic credentials, so `ClientSecret` is required.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **`options.Oauth20` requests the whole catalogue (`app-remote-control playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-read-private user-read-email user-follow-read user-follow-modify user-top-read user-read-playback-position user-read-playback-state user-read-recently-played user-read-currently-playing user-modify-playback-state ugc-image-upload streaming`) on every token request**, so one token — and one consent — covers every operation.
- **`options.Oauth20ClientCredentials` mints one token per scope set.** An operation that declares scopes gets a token requested with exactly those scopes (the SDK map's **Auth** bullet lists them); operations that declare none share one token requested without a scope.
- **Only the authorization-code grant refreshes.** The SDK keeps the `refresh_token` the server issues and renews silently; when the refresh fails the full grant runs again. Client credentials re-run in full when the token expires, and a `refresh_token` in that response is ignored.
- On `401`, the rejected token is dropped, a new one is obtained and the failing request is **re-sent once** — under every retry setting, including `RetryOptions.Disabled()`; a second `401` is returned to you. A request whose body cannot be re-sent (a binary or file upload) is not re-sent, but its `401` still drops the cached token, so the next call recovers. For the authorization-code grant the refresh token is tried first, so the re-send is silent unless the refresh itself fails — then `PromptForAuthorizationCode` fires inside the call. **Plan for that in a non-interactive host** — a background worker will block on a prompt nobody can answer.
- After a `401` clears the cache, a token fetch already in flight can still re-populate it, so the next call is not guaranteed a newly fetched token.

Setting `Scope` on the credentials replaces the per-scheme behaviour above with one token requested with that value; an empty `Scope` requests none. Set it to the scopes your client is registered for when the API declares more than it grants you: the default asks for the whole catalogue, and an authorization server that enforces per-client scope registration answers `invalid_scope` to that request.

⚠ **If the token response omits `expires_in`, the SDK treats the token as never expiring**: it is cached for the client's lifetime and replaced only after a `401`, so a token revoked server-side keeps being sent until a request fails with it — a failure the one re-send above recovers, at the cost of a round trip.

## Combining the schemes

This SDK has more than one credentials property, and its operations compose them; you choose by which properties on `SpotifyWebApiClientOptions` you set.

**OR — alternatives, in the order the API lists them.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that applies wins, and `AuthSchemeException` is thrown when none is configured, naming every alternative, or when every configured one fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## Environment variables

A credentials property left `null` is read from an environment variable when the client is constructed — the SDK name in upper snake case, the property name in upper snake case, and for a multi-member credential the member:

| Property on `SpotifyWebApiClientOptions` | Environment variables |
| --- | --- |
| `Oauth20ClientCredentials` | `SPOTIFY_WEB_API_OAUTH20_CLIENT_CREDENTIALS_CLIENT_ID`, `SPOTIFY_WEB_API_OAUTH20_CLIENT_CREDENTIALS_CLIENT_SECRET`, `SPOTIFY_WEB_API_OAUTH20_CLIENT_CREDENTIALS_SCOPE` (optional) |

`options.Oauth20` has no environment default.

- A value set in code always wins over the environment.
- A variable that is unset, empty or whitespace counts as not configured.
- A multi-member credential is used only when every required variable is set. If some are missing the property stays `null`; constructing the client never throws, and a call that requires that credential fails before anything is sent.
- Variables are read once, when the client is constructed. Changing them afterwards has no effect on an existing client.

Binding `SpotifyWebApiClientOptions` from `IConfiguration` keeps both paths: a property the binding leaves `null` still falls back to its variable. The README's **Credentials from environment variables** section shows the binding.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `SpotifyWebApiClientOptions` that nothing fills — code or an environment variable — fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<SpotifyWebApiClientSettings>()
    .Bind(builder.Configuration.GetSection("SpotifyWebApiClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ClientId))
    throw new InvalidOperationException(
        "SpotifyWebApiClient:ClientId is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

**If the SDK's environment variables supply the credential**, `ValidateOnStart()` sees nothing: the SDK reads the variable itself, and a settings type bound from `IConfiguration` would refuse to boot a host the SDK authenticates. Check the variable instead, with the same guard before the host is ready — the **Or environment variable** column below names it.

Three rules for the message it fails with:

- **Name the missing config key or variable**, so the operator knows what to set — `"SpotifyWebApiClient:ClientId is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `SpotifyWebApiClientOptions` property | Or environment variable |
| --- | --- | --- |
| `ClientId` | `Oauth20` | — |
| `ClientSecret` | `Oauth20` | — |
| `RedirectUri` | `Oauth20` | — |
| `ClientId` | `Oauth20ClientCredentials` | `SPOTIFY_WEB_API_OAUTH20_CLIENT_CREDENTIALS_CLIENT_ID` |
| `ClientSecret` | `Oauth20ClientCredentials` | `SPOTIFY_WEB_API_OAUTH20_CLIENT_CREDENTIALS_CLIENT_SECRET` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddSpotifyWebApiClient(options => ...)` callback when registering via DI. `SpotifyWebApiClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddSpotifyWebApiClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app — or leave the property unset and let the SDK read its environment variable (see **Environment variables**).

