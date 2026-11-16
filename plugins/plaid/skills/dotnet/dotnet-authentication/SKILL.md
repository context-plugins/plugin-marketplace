---
name: "dotnet-authentication"
description: "Load before wiring credentials into the The Plaid API .NET SDK client in C#, or when a call throws AuthSchemeException or comes back 401/403. Covers an API key in a header and OAuth 2.0 client credentials: the credential each scheme takes, the ThePlaidApiClientOptions property it goes on, the environment variable that fills it when unset, and a startup check that fails fast on a missing secret."
---

# Authenticating the The Plaid API .NET SDK client

This API authenticates with an API key in a header and OAuth 2.0 client credentials. Each scheme is a **nullable credentials property** on `ThePlaidApiClientOptions`; set the ones below, then construct the client (see `dotnet-client-initialization`).

| Scheme | Property on `ThePlaidApiClientOptions` | Credential |
| --- | --- | --- |
| API key — `PLAID-CLIENT-ID` header | `ClientId` | `string?` |
| API key — `PLAID-SECRET` header | `Secret` | `string?` |
| API key — `Plaid-Version` header | `PlaidVersion` | `string?` |
| OAuth 2.0 client credentials | `Oauth2` | `OAuth2ClientCredentials?` |

**That table, the provider delegate beside each static credential and the environment variables below are the entire authentication surface of this SDK.** `ThePlaidApi.Core.Authentication` also holds scheme classes this API does not use, so read what is configurable off the properties above rather than off that folder.

## API key (header) — `ClientId`

The key travels in the `PLAID-CLIENT-ID` request header. The header name is fixed — you supply only the value:

```csharp
options.ClientId = "API_KEY";
```

## API key (header) — `Secret`

The key travels in the `PLAID-SECRET` request header. The header name is fixed — you supply only the value:

```csharp
options.Secret = "API_KEY";
```

## API key (header) — `PlaidVersion`

The key travels in the `Plaid-Version` request header. The header name is fixed — you supply only the value:

```csharp
options.PlaidVersion = "API_KEY";
```

## OAuth 2.0 — client credentials (machine-to-machine)

**API Provider Notes:**

> The Plaid API supports client credentials, authorization code, and custom delegation flows.

```csharp
using ThePlaidApi.Core.Authentication.OAuth2.ClientCredentials;

options.Oauth2 = new OAuth2ClientCredentials
{
    ClientId = "...",
    ClientSecret = "...",
    Scope = "user:write"     // required by Plaid: its token endpoint rejects a request without a scope
};
```

The SDK fetches the token from `/oauth/token` on the selected environment (`https://production.plaid.com` or `https://sandbox.plaid.com`) and caches it, acquiring a fresh one when it expires; on a `401` it drops the cached token, acquires a new one and re-sends the call once (the upload exception is under **Token caching & refresh**). The token request carries the client id and secret in the form body.

## Credential providers

Every static credential above has a companion **provider** property on `ThePlaidApiClientOptions`: a delegate the SDK asks on every request, for a secret that rotates while the process runs. Set it instead of the credential — a provider wins over both the credential property and its environment variable.

| Credential | Provider | Delegate |
| --- | --- | --- |
| `options.ClientId` | `options.ClientIdProvider` | `CredentialProvider<string>?` |
| `options.Secret` | `options.SecretProvider` | `CredentialProvider<string>?` |
| `options.PlaidVersion` | `options.PlaidVersionProvider` | `CredentialProvider<string>?` |

```csharp
options.ClientIdProvider = async ct => await vault.ReadAsync("api-key", ct);
```

- The provider runs inside every attempt, before the request is sent, and counts against the per-attempt `options.Retry.Timeout` — keep it fast, and cache in your own code when the source is slow.
- A provider that returns `null` means the credential is unavailable for that call: the call fails with `AuthSchemeException` naming the scheme, even on an operation that accepts anonymous callers. Under **OR**, the next configured alternative is tried first.
- A provider that throws fails the call with `AuthSchemeException` wrapping the exception; an `OperationCanceledException` for the call's own token passes through unwrapped.

## Token caching & refresh

- Tokens are cached in-memory, **per client instance**, and reused until **30s** before expiry.
- **`options.Oauth2` mints one token per scope set.** An operation that declares scopes gets a token requested with exactly those scopes (the SDK map's **Auth** bullet lists them); operations that declare none share one token requested without a scope.
- **Nothing here refreshes**: when a token expires the whole grant re-runs, and a `refresh_token` in the response is ignored — do not infer refresh behaviour from what the provider returns.
- On `401`, the rejected token is dropped, a new one is obtained and the failing request is **re-sent once** — under every retry setting, including `RetryOptions.Disabled()`; a second `401` is returned to you. A request whose body cannot be re-sent (a binary or file upload) is not re-sent, but its `401` still drops the cached token, so the next call recovers.
- After a `401` clears the cache, a token fetch already in flight can still re-populate it, so the next call is not guaranteed a newly fetched token.

Setting `Scope` on the credentials replaces the per-scheme behaviour above with one token requested with that value; an empty `Scope` requests none.

⚠ **If the token response omits `expires_in`, the SDK treats the token as never expiring**: it is cached for the client's lifetime and replaced only after a `401`, so a token revoked server-side keeps being sent until a request fails with it — a failure the one re-send above recovers, at the cost of a round trip.

## Combining the schemes

This SDK has more than one credentials property, and its operations compose them; you choose by which properties on `ThePlaidApiClientOptions` you set.

**AND — every scheme in the group is applied to the request.** Leave one of them unconfigured and the call fails before anything is sent with `AuthSchemeException` naming each missing scheme; there is no half-authenticated call.

**OR — alternatives, in the order the API lists them.** Schemes with **no credentials configured are skipped, not tried**; the first configured scheme that applies wins, and `AuthSchemeException` is thrown when none is configured, naming every alternative, or when every configured one fails. Configure exactly the one you intend to use — an extra credential set "just in case" changes which scheme authenticates the call. **Which one that is, is not a preference:** each scheme's **API Provider Notes** above are where the provider states when its scheme applies.

## Operations that need no credentials

Some operations on this API are public: they send no credential, whatever you set on `ThePlaidApiClientOptions`. You still construct the same client — there is no separate unauthenticated client — and the credentials you configured are simply not applied to those calls.

## Environment variables

A credentials property left `null` is read from an environment variable when the client is constructed — the SDK name in upper snake case, the property name in upper snake case, and for a multi-member credential the member:

| Property on `ThePlaidApiClientOptions` | Environment variables |
| --- | --- |
| `ClientId` | `THE_PLAID_API_CLIENT_ID` |
| `Secret` | `THE_PLAID_API_SECRET` |
| `PlaidVersion` | `THE_PLAID_API_PLAID_VERSION` |
| `Oauth2` | `THE_PLAID_API_OAUTH2_CLIENT_ID`, `THE_PLAID_API_OAUTH2_CLIENT_SECRET`, `THE_PLAID_API_OAUTH2_SCOPE` (optional to the SDK, but Plaid requires a scope) |

- A value set in code always wins over the environment.
- A variable that is unset, empty or whitespace counts as not configured.
- A multi-member credential is used only when every required variable is set. If some are missing the property stays `null`; constructing the client never throws, and a call that requires that credential fails before anything is sent.
- Variables are read once, when the client is constructed. Changing them afterwards has no effect on an existing client.

Binding `ThePlaidApiClientOptions` from `IConfiguration` keeps both paths: a property the binding leaves `null` still falls back to its variable. The README's **Credentials from environment variables** section shows the binding.

## ⚠ Missing credentials must stop the app from starting

⚠ **Configure nothing and the first call that needs the credential throws.** A credentials property on `ThePlaidApiClientOptions` that nothing fills — code, a provider or an environment variable — fails the call with `AuthSchemeException` before anything is sent, naming the scheme. That is a request-time failure for a deployment fault: catch it at startup instead.

**Validate at startup and refuse to boot.** Bind the credentials into your own options type and make the host check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<ThePlaidApiClientSettings>()
    .Bind(builder.Configuration.GetSection("ThePlaidApiClient"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a console app, an explicit guard is equally acceptable as long as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.ClientId))
    throw new InvalidOperationException(
        "ThePlaidApiClient:ClientId is not configured. Set it via environment variable, " +
        "user-secrets, or your secret store before starting the app.");
```

**If the SDK's environment variables supply the credential**, `ValidateOnStart()` sees nothing: the SDK reads the variable itself, and a settings type bound from `IConfiguration` would refuse to boot a host the SDK authenticates. Check the variable instead, with the same guard before the host is ready — the **Or environment variable** column below names it.

**If a provider supplies the credential**, there is nothing to check at startup: the delegate is asked on every request, so the check belongs where the provider reads the secret, and a provider that returns `null` fails the call with `AuthSchemeException`.

Three rules for the message it fails with:

- **Name the missing config key or variable**, so the operator knows what to set — `"ThePlaidApiClient:ClientId is not configured"`, not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured: AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides the fault and pushes it to the first caller.

Check every value **the scheme you chose** needs. The rows below are not one checklist: the schemes above are alternatives, so a row belonging to a scheme you are not using needs no value at all, and demanding one at startup blocks a boot that would have worked. Validate the rows whose property you set, and no others:

| Value to validate | Feeds `ThePlaidApiClientOptions` property | Or environment variable |
| --- | --- | --- |
| `ClientId` | `ClientId` | `THE_PLAID_API_CLIENT_ID` |
| `Secret` | `Secret` | `THE_PLAID_API_SECRET` |
| `PlaidVersion` | `PlaidVersion` | `THE_PLAID_API_PLAID_VERSION` |
| `ClientId` | `Oauth2` | `THE_PLAID_API_OAUTH2_CLIENT_ID` |
| `ClientSecret` | `Oauth2` | `THE_PLAID_API_OAUTH2_CLIENT_SECRET` |

## Notes

- Set credentials **before** constructing the client, or inside the `AddThePlaidApiClient(options => ...)` callback when registering via DI. `ThePlaidApiClientOptions` is read at construction; mutating it afterwards does not re-wire an existing client. A provider is the one way to change a credential without a new client: the delegate you set before construction is asked on every request, so a rotated secret reaches the next call; assigning a different delegate afterwards has no effect (see **Credential providers**).
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any other `IConfiguration` source) instead of hardcoding, either inside the `AddThePlaidApiClient(options => ...)` callback for a host or via a `ConfigurationBuilder()...Build()` chain for a console app — or leave the property unset and let the SDK read its environment variable (see **Environment variables**).

