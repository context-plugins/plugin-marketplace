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
class** — those are the source of truth (take them from the contract sheet, grounded from the
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
    ClientSecret = "...",                       // see the note below — often required even with PKCE
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

⚠ **`ClientSecret` is optional only when PKCE is enabled *and* the token request is form-body style.**
Two independent guards, failing at different moments:

| PKCE | token request built | no secret ⇒ |
| --- | --- | --- |
| disabled (`Pkce = null`) | either factory | `InvalidOperationException("ClientSecret is required when PKCE is disabled.")` — **before** the prompt runs |
| enabled (default `S256`) | `ForBasicAuthRequest` | `InvalidOperationException("Basic auth requires a client secret. For public clients, enable PKCE by …")` — **after** `PromptForAuthorizationCode` has already run |
| enabled | `ForFormBodyRequest` | fine — this is the public-client case |

The Basic form is the common wiring, and its failure is the expensive one: the user completes a full
browser round-trip before the exchange throws. Check which factory your generated `AuthSchemes` uses before
treating the secret as optional.

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

- Tokens are cached in-memory, per client instance, and reused until **30s** before expiry.
- **Only the authorization-code grant refreshes.** It is the one grant wired to
  `IOAuth2RefreshableTokenStrategy` / `OAuth2RefreshableScheme`. Client-credentials and
  resource-owner-password re-run the whole grant when the token expires — and a `refresh_token` in a
  password-grant response is discarded, because the non-refreshable `OAuthToken` has no binding for it. Do
  not infer refresh behaviour from what the provider returns.
- On `401`, the cached token is invalidated and re-acquired on the next call — the failing request is
  **not** retried. For the authorization-code grant, invalidation drops the refresh token along with the
  access token, so "re-acquired" means the *full* grant runs again and `PromptForAuthorizationCode` fires:
  a `401` there is an interactive re-authorization, not a silent refresh. Plan for that in a
  non-interactive host.

⚠ **If the token response omits `expires_in`, the token never expires as far as the SDK is concerned.**
`expires_in` is RECOMMENDED but not required by RFC 6749, and the SDK's expiry check short-circuits to
"not expired" when it is absent — so the first token is cached for the life of the client and the only
thing that ever replaces it is a `401`. That is usually fine and occasionally not: a token revoked
server-side keeps being sent until a request fails with it. If your provider omits `expires_in` and you
need proactive rotation, supply your own token strategy (below) rather than trying to bound the cache.

- **Invalidation is a hint, not a barrier.** `Invalidate()` clears the cache without taking the fetch lock,
  so a token fetch already in flight can complete and re-populate it. That is deliberate — the refreshed
  token post-dates the invalidation — but it means "invalidate then immediately read" is not a guarantee of
  a fresh token.

### Supplying your own token source

The token strategy is a public extension point: the options class exposes a
`{OAuthProperty}TokenStrategy` alongside the credentials, typed
`IOAuth2TokenStrategy<{CredentialsType}>` (or `IOAuth2RefreshableTokenStrategy<…>` for refreshable grants),
and the generated client falls back to the built-in strategy only when you leave it null.

```csharp
options.{OAuthProperty}TokenStrategy = new MyTokenStrategy();   // Task<OAuthToken> GetToken(creds, ct)
```

Reach for it when the token must come from somewhere other than the SDK's own call to the token endpoint —
a shared cache across processes, a secrets broker, a sidecar that already holds a valid token, or a test
double. The per-client in-memory cache above still wraps whatever you return.

## Combined / multiple schemes

When an operation (or the whole API) requires more than one scheme, APIMatic composes them:

- **AND** — all schemes are applied to every request (`AuthSchemeAll`).
- **OR** — schemes with **no credentials configured are skipped, not tried**; the first configured scheme
  that succeeds wins, and `AuthSchemeException` is thrown only if every *configured* scheme fails
  (`AuthSchemeAny`).

You configure this by setting the relevant credentials properties on the options class; the generated
client wires the AND/OR composition for you.

⚠ **Configure nothing and the request goes out unauthenticated — no exception.** This is the behaviour of a
single unconfigured scheme too: an unset credentials property yields a no-op scheme, not an error, so the
call reaches the provider with no `Authorization` header and comes back `401`. The SDK will never tell you
that you forgot to supply a credential; only the provider will, one round-trip later and one layer away
from the cause. That is why the startup check in *Missing credentials must stop the app from starting*
(below) is not optional politeness.

## No auth

Some endpoints/APIs need no credentials (`NoneAuthScheme`) — leave the credentials properties unset.

## ⚠ Missing credentials must stop the app from starting

Every section above covers supplying a credential. This one covers its **absence** — the case a
configuration-driven app hits in the real world, and the one most integrations get wrong.

**A required credential that is not configured is a deployment fault, not a request fault.** If the app
boots with a blank secret, the failure surfaces later as a `401` from the provider on whichever unlucky
request arrives first: an operator sees a provider outage, retry logic hammers a call that can never
succeed, and the actual cause — an unset environment variable — is two layers away from the symptom.

**Validate at startup and refuse to boot.** Bind the credentials into an options object and make the host
check it before the app serves anything:

```csharp
builder.Services
    .AddOptions<{Api}Settings>()
    .Bind(builder.Configuration.GetSection("{Api}"))
    .ValidateDataAnnotations()      // [Required] on each credential property
    .ValidateOnStart();             // throws during startup, not on first request
```

`ValidateOnStart()` is the load-bearing call — without it, `IOptions<T>` validation is lazy and fires on
first resolution, which is a request, which is exactly the late failure you are trying to avoid. For a
console app or anywhere the options pipeline is overkill, an explicit guard is equally acceptable as long
as it runs **before** the app is ready:

```csharp
if (string.IsNullOrWhiteSpace(settings.{Credential}))
    throw new InvalidOperationException(
        "{Api}:{Credential} is not configured. Set it via environment variable, user-secrets, " +
        "or your secret store before starting the app.");
```

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set. `"{Api}:{Credential} is not
  configured"` — not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A "configured:
  AC1234…" line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded hides
  the fault and pushes it to the first caller.

Check every credential the scheme requires. Basic auth needs both halves — a username with an empty
password is misconfigured, not partially configured.

## Notes

- A given SDK only exposes the credentials properties for the schemes its API uses; those names are
  generated per-API (hence the `{...Property}` placeholders above).
- Set credentials **before** constructing the client, or inside the `Add{Api}Client(options => ...)`
  callback when registering via DI.
- Keep secrets out of source — load them from configuration (environment variables, a secret store, or any
  other `IConfiguration` source) instead of hardcoding, either inside the `Add{Api}Client(options => ...)`
  callback for the host or via a `ConfigurationBuilder()...Build()` chain for a console app.
