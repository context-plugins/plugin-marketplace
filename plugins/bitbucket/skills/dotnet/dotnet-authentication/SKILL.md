---
name: "dotnet-authentication"
description: "Load before wiring credentials into the Bitbucket .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers HTTP Basic, the OAuth 2.0 authorization-code grant and an API key in a header: the credential each scheme takes, the BitbucketClientOptions property it goes on, the environment variable that fills it when unset, and a startup check that fails fast on a missing secret."
---

# Authenticating the Bitbucket .NET SDK client

This API authenticates with HTTP Basic, the OAuth 2.0 authorization-code grant and an API key in a header. Each scheme is a **nullable credentials property** on `BitbucketClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `BitbucketClientOptions` | Credential |
| --- | --- | --- |
| HTTP Basic | `Basic` | `BasicAuthCredentials?` |
| OAuth 2.0 authorization code | `Oauth2` | `OAuth2AuthorizationCodeCredentials?` |
| API key — `Authorization` header | `ApiKey` | `string?` |

**That table, the provider delegate beside each static credential and the environment variables below are the entire authentication surface of this SDK.** `Bitbucket.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## Basic auth

**API Provider Notes:**

> Basic HTTP Authentication as per [RFC-2617](https://tools.ietf.org/html/rfc2617) (Digest not supported). Note that Basic Auth is available only with username and app password as credentials.

```csharp
using Bitbucket.Core.Authentication.Basic;

options.Basic = new BasicAuthCredentials
{
    Username = "...",
    Password = "..."
};
```

Sends `Authorization: Basic base64(username:password)`. Both halves are required — a username with an empty password is misconfigured, not partially configured.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

**API Provider Notes:**

> OAuth 2 as per [RFC-6749](https://tools.ietf.org/html/rfc6749).

```csharp
using Bitbucket.Core.Authentication.OAuth2.AuthorizationCode;

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

The SDK sends the user to `https://bitbucket.org/site/oauth2/authorize`, exchanges the returned code for a token at `https://bitbucket.org/site/oauth2/access_token`, and refreshes it when it expires; if the refresh fails, it invokes `PromptForAuthorizationCode` again to re-authorize.

`PromptForAuthorizationCode` runs inside the call that needs a new token, so it must not make an SDK call that uses this scheme. It counts against the per-attempt `options.Retry.Timeout`, 100 s by default, and a timed-out attempt on a retryable call is retried and prompts again. A prompt that throws anything but `OperationCanceledException` fails the call with `AuthSchemeException`. `State` is sent as you set it and never checked, so your redirect handler must verify it.

⚠ **`ClientSecret` is required here — PKCE does not make it optional.** The code exchange sends the client id and secret as HTTP Basic credentials. Omit it and the call fails with an `AuthSchemeException` wrapping an `InvalidOperationException`:

- **PKCE disabled** (`Pkce = null`) — *before* `PromptForAuthorizationCode` runs.
- **PKCE enabled** (the default `S256`) — *after* the user has completed the browser round-trip.

## API key (header)

**API Provider Notes:**

> API Keys can be used as Basic HTTP Authentication credentials and provide a substitute for the account's actual username and password. API Keys are only available to team accounts and there is only 1 key per account. API Keys do not support scopes and have therefore access to all contents of the account.

The key travels in the `Authorization` request header. The header name is fixed — you supply only the value:

```csharp
options.ApiKey = "API_KEY";
```

## Credential providers

Every static credential above has a companion **provider** property on `BitbucketClientOptions`: a delegate the SDK asks on every request, for a secret that rotates while the process runs. Set it instead of the credential — a provider wins over both the credential property and its environment variable.

| Credential | Provider | Delegate |
| --- | --- | --- |
| `options.Basic` | `options.BasicProvider` | `CredentialProvider<BasicAuthCredentials>?` |
| `options.ApiKey` | `options.ApiKeyProvider` | `CredentialProvider<string>?` |

```csharp
options.BasicProvider = async ct => new BasicAuthCredentials
{
    Username = "...",
    Password = await vault.ReadAsync("api-password", ct)
};
```

- The provider runs inside every attempt, before the request is sent, and counts against the per-attempt `options.Retry.Timeout` — keep it fast, and cache in your own code when the source is slow.
- A provider that returns `null` means the credential is unavailable for that call: the call fails with `AuthSchemeException` naming the scheme, even on an operation that accepts anonymous callers. Under **OR**, the next configured alternative is tried first.
- A provider that throws fails the call with `AuthSchemeException` wrapping the exception; an `OperationCanceledException` for the call's own token passes through unwrapped.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **`options.Oauth2` requests the whole catalogue (`repository repository:write repository:admin repository:delete project project:admin email account account:write team team:write pipeline pipeline:write pipeline:variable runner runner:write test test:write pullrequest pullrequest:write webhook issue issue:write snippet snippet:write wiki`) on every token request**, so one token — and one consent — covers every operation.
- **This grant refreshes**: the SDK keeps the `refresh_token` the server issues and renews silently; when the refresh fails the full grant runs again.
- On `401`, the rejected token is dropped, a new one is obtained and the failing request is **re-sent once** — under every retry setting, including `RetryOptions.Disabled()`; a second `401` is returned to you. A request whose body cannot be re-sent (a binary or file upload) is not re-sent, but its `401` still drops the cached token, so the next call recovers. For the authorization-code grant the refresh token is tried first, so the re-send is silent unless the refresh itself fails — then `PromptForAuthorizationCode` fires inside the call. **Plan for that in a non-interactive host** — a background worker will block on a prompt nobody can answer.
- After a `401` clears the cache, a token fetch already in flight can still re-populate it, so the next call is not guaranteed a newly fetched token.

Setting `Scope` on the credentials replaces the per-scheme behaviour above with one token requested with that value; an empty `Scope` requests none. Set it to the scopes your client is registered for when the API declares more than it grants you: the default asks for the whole catalogue, and an authorization server that enforces per-client scope registration answers `invalid_scope` to that request.

⚠ **If the token response omits `expires_in`, the SDK treats the token as never expiring**: it is cached for the client's lifetime and replaced only after a `401`, so a token revoked server-side keeps being sent until a request fails with it — a failure the one re-send above recovers, at the cost of a round trip.

## Combining the schemes

This SDK has more than one credentials property, and its operations compose them; you choose by which properties on `BitbucketClientOptions` you set.

**OR — alternatives, in the order the API lists them.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that applies wins, and `AuthSchemeException` is thrown when none is configured, naming every alternative, or when every configured one fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## Environment variables

A credentials property left `null` is read from an environment variable when the client is constructed — the SDK name in upper snake case, the property name in upper snake case, and for a multi-member credential the member:

| Property on `BitbucketClientOptions` | Environment variables |
| --- | --- |
| `Basic` | `BITBUCKET_BASIC_USERNAME`, `BITBUCKET_BASIC_PASSWORD` |
| `ApiKey` | `BITBUCKET_API_KEY` |

`options.Oauth2` has no environment default.

- A value set in code always wins over the environment.
- A variable that is unset, empty or whitespace counts as not configured.
- A multi-member credential is used only when every required variable is set. If some are missing the property stays `null`; constructing the client never throws, and a call that requires that credential fails before anything is sent.
- Variables are read once, when the client is constructed. Changing them afterwards has no effect on an existing client.

Binding `BitbucketClientOptions` from `IConfiguration` keeps both paths: a property the binding leaves `null` still falls back to its variable. The README's **Credentials from environment variables** section shows the binding.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `BitbucketClientOptions` that nothing fills — code, a provider or an environment variable — fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<BitbucketClientSettings>()
    .Bind(builder.Configuration.GetSection("BitbucketClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.Username))
    throw new InvalidOperationException(
        "BitbucketClient:Username is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

**If the SDK's environment variables supply the credential**, `ValidateOnStart()` sees nothing: the SDK reads the variable itself, and a settings type bound from `IConfiguration` would refuse to boot a host the SDK authenticates. Check the variable instead, with the same guard before the host is ready — the **Or environment variable** column below names it.

**If a provider supplies the credential**, there is nothing to check at startup: the delegate is asked on every request, so the check belongs where the provider reads the secret, and a provider that returns `null` fails the call with `AuthSchemeException`.

Three rules for the message it fails with:

- **Name the missing config key or variable**, so the operator knows what to set — `"BitbucketClient:Username is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `BitbucketClientOptions` property | Or environment variable |
| --- | --- | --- |
| `Username` | `Basic` | `BITBUCKET_BASIC_USERNAME` |
| `Password` | `Basic` | `BITBUCKET_BASIC_PASSWORD` |
| `ClientId` | `Oauth2` | — |
| `ClientSecret` | `Oauth2` | — |
| `RedirectUri` | `Oauth2` | — |
| `ApiKey` | `ApiKey` | `BITBUCKET_API_KEY` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddBitbucketClient(options => ...)` callback when registering via DI. `BitbucketClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client. A provider is the one way to change a credential without a new client: the delegate you set before construction is asked on every request, so a rotated secret reaches the next call; assigning a different delegate afterwards has no effect (see **Credential providers**).
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddBitbucketClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app — or leave the property unset and let the SDK read its environment variable (see **Environment variables**).

