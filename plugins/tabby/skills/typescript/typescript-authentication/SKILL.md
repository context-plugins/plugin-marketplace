---
name: typescript-authentication
description: Load before setting credentials on an APIMatic-generated TypeScript SDK client, or when a call returns 401/403 — API keys, bearer and basic auth, the OAuth 2 client-credentials, password and authorization-code grants, token caching and refresh, and supplying your own token source.
---

# Authenticating an APIMatic TypeScript SDK client

How you authenticate depends on the security scheme(s) the API declares. Each scheme is an
**optional credential member on `ClientOptions`**; set the one(s) your API uses, then construct
the client (see `typescript-client-initialization`). There is no separate credentials builder, no
per-request auth override, and no way to change a credential after construction.

```ts
const client = new {Api}Client({ {scheme}: /* credentials for that scheme */ });
```

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{Api}Client`, `{package-name}`, `{scheme}`) — replace it with the concrete identifier from the
> source.

To see which schemes a specific SDK accepts, read the **credential members on its `ClientOptions`
type** in `src/client-options.ts` — those are the source of truth. `src/core/auth/` ships *every*
scheme factory as shared runtime code regardless of what the API accepts, so rely on the options type
rather than that folder. Where a member's name does not tell you its kind, `src/auth-schemes.ts` shows
which core factory each member is wired to.

The credential types below live under `src/core/auth/`, are exported from the package root and are
the **same across all APIMatic TypeScript SDKs**; only the **option member names** are per API (hence
the `{scheme}` placeholders). There are exactly **eight** scheme kinds, taking **three** credential
shapes:

| Scheme kind | `ClientOptions.{scheme}` type | Sent as |
| --- | --- | --- |
| HTTP bearer | `SecretProvider` | `Authorization: Bearer {token}` |
| API key in header | `SecretProvider` | the API's header name |
| API key in query | `SecretProvider` | the API's query parameter |
| API key in cookie | `SecretProvider` | a `Cookie` pair under the API's name |
| HTTP basic | `BasicAuthCredentials` | `Authorization: Basic base64(user:pass)` |
| OAuth 2 client credentials | `OAuth2ClientCredentials` | `Authorization: Bearer {fetched token}` |
| OAuth 2 password | `OAuth2PasswordCredentials` | `Authorization: Bearer {fetched token}` |
| OAuth 2 authorization code | `OAuth2AuthorizationCodeCredentials` | `Authorization: Bearer {fetched token}` |

## Environment variables

Every credential member except the authorization-code grant has environment variables, and the
client reads them **once, when it is built**, for each member you leave unset. A name is the API's
name and the member's, in upper snake case: one variable for a token or key, and one per field for
basic auth (`…_USERNAME`, `…_PASSWORD`) and the client-credentials and password grants (`…_CLIENT_ID`,
`…_CLIENT_SECRET`, `…_SCOPE`, plus `…_USERNAME` and `…_PASSWORD` for the password grant). Each
member's TSDoc in `src/client-options.ts` names its own, as does the getting-started skill's auth
table — read them there rather than guessing.

- A value set in code always wins, including a placeholder copied from a sample.
- A variable that is unset, empty or whitespace counts as unset.
- A credential with several fields is read only when every required field's variable is set; otherwise
  the member stays unset, and a call that needs it is refused with `AuthError`.
- Changing a variable after the client is built does not reach that client.
- In a browser there is no `process.env`, so nothing is read.

## Basic auth

```ts
const client = new {Api}Client({
  {scheme}: {
    username: process.env.API_USERNAME!,
    password: process.env.API_PASSWORD!,
  },
});
```

Sends `Authorization: Basic base64(username:password)`.

A username containing `:` throws `ConfigurationError` **from the constructor** (RFC 7617 §2), so a bad value
fails fast rather than on the first call. The password is not validated — an empty one is sent as an
empty one.

## Bearer token

Set the configured token member to your access-token string:

```ts
const client = new {Api}Client({ {scheme}: process.env.ACCESS_TOKEN! });
```

Sends `Authorization: Bearer ACCESS_TOKEN`.

## API key (header, query, or cookie)

The key is sent as a header, query parameter, or cookie — its placement and name are fixed by the
SDK, not by anything you pass. Set the configured key member to your key string:

```ts
const client = new {Api}Client({ {scheme}: process.env.API_KEY! });
```

All four of these kinds are the **same slot to you**: `SecretProvider`, which is a string, or something
that produces one. Which channel it travels on is the scheme's business.

A query-placed key is percent-encoded exactly as an endpoint's own query parameter. A cookie-placed key
is **also** percent-encoded, and it is merged into any `Cookie` header already on the request rather
than replacing it — only a cookie of the same name is overwritten.

### A `SecretProvider` may be a function

```ts
type SecretProvider = string | ((signal: AbortSignal) => string | Promise<string>);
```

Pass a **function** when the secret rotates, comes from a vault, or is not known at construction time.
It is called on **every request** that needs the scheme, and it may be async:

```ts
const client = new {Api}Client({
  {scheme}: async () => await vault.read("api-key"),   // re-read per request
});
```

There is no caching around your callback — if the lookup is expensive, cache inside the callback. An
empty string counts as **unset**, so a call that requires the scheme is refused with `AuthError`; a
function counts as configured without being called, and one that returns nothing or an empty string
fails that call with `AuthError` rather than sending it without the credential.

> **The next five sections apply only when the SDK declares an OAuth 2 scheme.** The three grants, the
> token lifecycle, and the token-fetch failure mode describe machinery that exists only if
> `src/client-options.ts` carries an `OAuth2…Credentials` member. Where it carries none, skip ahead to
> *Combined / multiple schemes*; nothing below can occur in that SDK.

## OAuth 2.0 — client credentials (machine-to-machine)

```ts
const client = new {Api}Client({
  {scheme}: {
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,   // required for this grant
    scope: "read write",                        // optional — omit if the API needs none
  },
});
```

The SDK fetches and caches the token itself, acquiring a fresh one when it expires; on a `401` it
drops that token and sends the call once more with a fresh one.

**Each operation asks for the scopes it declares.** Leave `scope` unset and every call requests the
scopes its operation's requirement lists — the operation's **Auth** bullet names them — and the SDK
keeps one token per scope set. Setting `scope` requests that one value for every call and keeps a
single token.

`scope` is a **single space-delimited string**, not a list — you join it yourself, per RFC 6749 §3.3.
An empty string is treated as absent and no `scope` field is sent. It is typed plain `string` — **no
scope enum or literal union** — so a scope the provider does not offer type-checks and fails at the
provider.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

This is the one grant that needs a human in the loop, so its credentials carry a **callback** the SDK
sends you to the authorization URL through. You return the authorization code:

```ts
import { PkceMethod } from "{package-name}";

const client = new {Api}Client({
  {scheme}: {
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET,   // optional — see the note below
    redirectUri: "https://app.example.com/callback",
    scope: "read write",                       // optional
    state: crypto.randomUUID(),                // optional CSRF token
    pkce: PkceMethod.S256,                     // default; RFC 7636
    promptForAuthorizationCode: async (authorizationUrl, signal) => {
      // Send the user to authorizationUrl, then return the `code` your redirect endpoint received.
      return await waitForRedirectCode(authorizationUrl, signal);
    },
  },
});
```

The URL handed to your callback carries `response_type=code`, `client_id`, `redirect_uri`, `scope`
(when set), `state` (when set), and — unless PKCE is disabled — `code_challenge` plus
`code_challenge_method`. The matching `code_verifier` is sent on the token exchange automatically; you
never see or manage it.

- **`scope` defaults to every scope the grant declares.** The grant keeps one token, so set `scope`
  only to narrow it.
- **`promptForAuthorizationCode` is called lazily**, on the first request needing the scheme — the
  same point at which the other grants fetch their token. For a server app, see *Supplying your own
  token source* below.
- **PKCE is on by default.** Omitting `pkce` means `PkceMethod.S256`; `pkce: null` disables it. The
  verifier and challenge are generated with `crypto.getRandomValues` / `crypto.subtle`, so the runtime
  needs Web Crypto (Node 20+ and browsers have it).
- The `signal` handed to your callback is the call's own signal, or one that never aborts when the
  call was given none — honour it, or a cancelled call leaves you waiting on a redirect forever.
- **Rejecting the callback is how you decline.** A user who closes the window, or a callback that
  throws for any other reason, surfaces as `AuthError` with your error on `.cause`, and no token
  request is sent. It is deliberately *not* a `ConnectionError`: a connection failure invites a
  retry, a declined consent needs the user asked again. Two rejections pass through untouched
  instead of being wrapped — one of the SDK's own error classes, and, when the call has been
  cancelled underneath you, the signal's own `reason`.

⚠ **No timeout covers the prompt, and it is not retried.** Only the call's `signal` ends it early,
and only if the prompt honours it.

⚠ **The prompt must not make an SDK call that uses this same scheme.** Concurrent acquisitions share
one in-flight promise, so a call made from inside the prompt waits on the acquisition that is waiting
on the prompt — a deadlock that breaks only when a signal aborts. The same applies to a custom token source's
`getToken`.

⚠ **`state` is passed through verbatim and the SDK does not validate it on the way back.** It is sent
on the authorization request and never generated or checked here — the SDK never sees the redirect, so
producing and verifying it are yours alone. Your redirect handler must compare it against what you
generated before returning the code, or the CSRF token is decorative.

⚠ **`clientSecret` is optional in the type, and leaving it out throws only when PKCE is off.**

| PKCE | `clientSecret` missing ⇒ |
| --- | --- |
| disabled (`pkce: null`) | `AuthError("A client secret is required when PKCE is disabled…")` — **before** the prompt runs |
| enabled | fine — this is the public-client case: the code exchange and every refresh send `client_id` as a form field and no `Authorization` header |

An empty string counts as missing. The placement is not yours to choose: it is the `placement`
argument in `src/auth-schemes.ts` — `"header"` sends `Authorization: Basic
base64(clientId:clientSecret)` on the token request, `"body"` sends `client_id` / `client_secret`
as form fields. Without a secret, both placements send `client_id` alone, so a public client works
whichever one your spec chose.

## OAuth 2.0 — resource owner password

```ts
const client = new {Api}Client({
  {scheme}: {
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET,   // optional (public clients)
    username: process.env.API_USERNAME!,
    password: process.env.API_PASSWORD!,
    scope: "read",                             // optional
  },
});
```

The password is sent once: a token that came with a refresh token is renewed through it, and the
password goes out again only when that refresh is refused. Leave `scope` unset and the one token
requests every scope the grant declares; set it to narrow that.

## Token caching & refresh (all OAuth 2 grants)

- Tokens are cached **in memory, per client instance**, and reused until **30 s** before expiry, or
  for **half their lifetime** when that is longer.
- Acquisition is **lazy** — on the first request that requires the scheme, not at construction. A
  client built with bad credentials constructs perfectly happily; the failure surfaces at the first
  operation. One in-flight acquisition is **shared**: concurrent requests that arrive during a fetch
  wait on that fetch rather than each starting their own.
- The fetch is a form-encoded `POST` to the token endpoint, sent with **no auth scheme of its own**,
  and it runs on its own `retry.timeout` and the call's abort signal — so token-fetch time does not
  come out of the operation's attempt.
- **A failure while obtaining the token ends the call.** The token request is itself a `POST` under the
  client's retry policy, so with the default `httpMethodsToRetry` even a `503` from the token endpoint
  is an immediate `AuthError`; name `POST` in the gate and the token request retries a retryable status
  first.
- **The cache lives in the client object.** Build the client once (see
  `typescript-client-initialization`) or every call re-runs the grant.
- **The password and authorization-code grants refresh; client credentials re-runs its grant.** An
  expired token is renewed through the refresh token the last response carried. A refresh response
  that omits `refresh_token` keeps the previous one, and a refused refresh does not throw: it falls
  back to the full grant.
- **A `401` re-authenticates once.** On a `401` to a call authenticated through an OAuth 2 grant, the
  SDK drops the token that call carried and sends the call once more with a fresh one. That one
  re-send is outside `retry.maxRetries` and the method list, gets the whole retry budget again, and is
  not reported to `onRetry`; a second `401` rejects as an ordinary `ApiError` (see
  `typescript-error-handling`). A call whose body is a stream is not re-sent, but its `401` still drops
  the token. A static key's `401` rejects at once. Adding `401` to `statusCodesToRetry` retries it
  within each pass too, so a dead OAuth 2 credential costs up to 2 × (`maxRetries` + 1) requests.
- **The drop is precise.** Only the token the rejected request carried is dropped, so a `401` that
  arrives after another call already fetched a newer token leaves that token in place. It does not
  cancel a token fetch already in flight.

**A `401` on the authorization-code grant refreshes; it does not prompt.** The refresh token survives
the `401`, so the re-send obtains its token through a refresh, and `promptForAuthorizationCode` fires
only when the refresh is refused or no refresh token was issued.

**A short-lived token is renewed halfway through its lifetime.** The 30-second buffer applies to a
token issued for a minute or more; below that, the token is reused for half its `expires_in` — a 20 s
token for 10 s. So no token is stale the moment it is cached, and a sub-minute token costs one token
round-trip per half-lifetime rather than one per call.

⚠ **A token response without a positive `expires_in` never expires in the cache** — the first token
is kept for the life of the client and only a `401` replaces it, so a token revoked server-side is
sent until a request fails with it. For proactive rotation, supply your own token strategy (below).
An `expires_in` sent as a string of digits, as some providers send it, is read as that number; any
other string is a token response the SDK cannot read.

### Supplying your own token source

The token strategy is a public extension point: alongside each OAuth 2 credentials member the options
type exposes a **`{scheme}Strategy`** member, typed `OAuth2TokenStrategy<{CredentialsType}>` (or
`OAuth2RefreshableTokenStrategy<…>` for the password and authorization-code grants), and the generated
client falls back to the built-in strategy only when you leave it unset.

**A strategy replaces the token request, not the credentials.** The scheme counts as configured only
when its `{scheme}` member is set, so a strategy supplied without it is refused with `AuthError` like
any unset credential. Set the credentials too, even when your strategy ignores them.

```ts
const client = new {Api}Client({
  {scheme}: { /* the same credentials object */ },
  {scheme}Strategy: {
    async getToken(credentials, signal, scope) {
      const stored = await tokenStore.load(scope);
      if (stored) return stored;                       // { accessToken, tokenType, expiresIn?, … }
      const fresh = await mintTokenSomehow(credentials, scope, signal);
      await tokenStore.save(scope, fresh);
      return fresh;
    },
    // Password and authorization-code grants only — return null to fall back to a full re-grant:
    async tryRefreshToken(credentials, refreshToken, signal, scope) {
      const refreshed = await refreshSomehow(credentials, refreshToken, signal);
      if (refreshed) await tokenStore.save(scope, refreshed);
      return refreshed ?? null;
    },
  },
});
```

`scope` is the space-delimited scopes this token is for: your own `scope` when you set one, otherwise
the ones the operation or the grant declares, and `undefined` when there are none. Key anything you
store by it: a client-credentials scheme asks for one token per scope set. Read the scopes from this
argument, not from `credentials.scope`, which holds only what you set. `credentials` is the object you
configured, never a copy, so a credentials class keeps its getters and methods.

Reach for it when the token must come from somewhere other than the SDK's own call to the token
endpoint — a cache shared across processes, a secrets broker, a sidecar that already holds a valid
token, or a test double. The per-client in-memory cache above still wraps whatever you return.

The token shape is `OAuthToken` (`accessToken`, `tokenType`, `expiresIn?`, `scope?`) plus
`refreshToken?` on `OAuthTokenRefreshable`. Note the field names are **camelCase** — the SDK maps them
to the wire's `access_token` / `expires_in` / `refresh_token` for you, so a strategy of your own
returns camelCase and a token you persisted as raw JSON needs converting on the way back in. Read the
`{scheme}Strategy` member's declared type in `src/client-options.ts` rather than inferring which of
the two interfaces it takes.

⚠ **Never re-enter the interactive prompt from a request handler.** Acquire the authorization-code
token out of band, store it, and let `getToken` read the store — otherwise a cache miss under load
turns into a redirect attempt inside a request.

### A token you already hold

When the API is modelled as OAuth 2 but your app already holds an access token — issued by another
service, or pasted in for a test — return it from a strategy, and set the credentials member to
placeholder values the strategy never reads:

```ts
const client = new {Api}Client({
  {scheme}: { clientId: "unused", clientSecret: "unused" },   // the shape {CredentialsType} requires
  {scheme}Strategy: {
    getToken: async () => ({ accessToken: process.env.ACCESS_TOKEN!, tokenType: "Bearer" }),
  },
});
```

Fill whatever members your grant's credentials type requires — a password grant needs `username`
and `password`, an authorization-code grant `redirectUri` and `promptForAuthorizationCode` — and add
`tryRefreshToken: async () => null` for those two grants, whose strategy type requires it. With no
`expiresIn` the token is reused until a `401` drops it; the call's one re-send then asks `getToken`
again, so return a fresh token there if you can get one.

## The failure mode that surprises everyone

A token endpoint that answers `400 invalid_client` rejects the *operation* call with `AuthError` — its
`method`/`uri` name the operation, the token endpoint's `ApiError` is on `.cause`, nothing was sent,
and `.asApiResult()` does not convert it. Catch it around every authenticated call; the ladder is in
**typescript-error-handling**.

## Combined / multiple schemes

An operation can require more than one scheme, or any one of a set, and can also admit callers with
no credential at all. The composition is applied for you by `allAuth(...)`, `anyAuth(...)` and
`orAnonymous(...)`; you configure it by setting the relevant credential members.

- **AND (`allAuth`)** — every scheme resolves and their headers, query params and cookies are all
  sent. If any of them is unset the call is refused with `AuthError` naming every missing one, and
  nothing goes out.
- **OR (`anyAuth`)** — the configured schemes are tried in declaration order and the first that
  resolves is sent, so which credential goes out depends on declaration order in
  `src/auth-schemes.ts`, not on which looks more specific. A configured scheme that fails — a refused
  token endpoint, a `SecretProvider` function that returns nothing — falls through to the next. When
  none is configured the call is refused with `AuthError` listing each alternative. A `SecretProvider`
  **function** counts as configured without being called.
- **OR anonymous (`orAnonymous`)** — the spec also lists an empty requirement, so the operation admits
  anonymous callers: the credential is sent when it is configured, and the call goes out without one
  when it is not. This is the only way an operation with a requirement is sent bare.

Because composition is **per operation**, one client may authenticate different operations with
different schemes — so set every member the operations your integration actually calls need, not just
the ones the API's front page advertises. The per-operation requirement is the **Auth** bullet on the
operation's block in `map/operations/*.md` (and in `api-reference.md`), which spells the composition
out: `` `{scheme}` ``, `all of …`, `any of … — the first one configured is sent`, and a requirement
that also admits anonymous callers ends `or anonymous`.

## No auth

An operation whose **Auth** bullet reads `none — public; no credential is sent` sends **no credential
even when every option member is filled**, and nothing you pass at construction adds one.

## ⚠ Missing credentials must stop the app from starting

Every section above covers supplying a credential. This one covers its **absence** — the case a
configuration-driven app hits in the real world, and the one most integrations get wrong.

**Every credential member is optional at construction and required at the call.** The client builds
without it; a call whose operation requires it rejects with `AuthError` naming the option to set,
before anything is sent. The one exception is an operation that also admits anonymous callers (its
**Auth** bullet ends `or anonymous`), which goes out without the credential. So a `401` means the API rejected the credential that went out, not that one
was missing. But the refusal comes per call, not at startup: an app missing a credential boots, and
fails on the first request that needs it.

**A required credential that is not configured is a deployment fault, not a request fault.** The SDK
reads its own environment variables but loads no `.env` file and checks nothing at construction, so
**validate every required credential in your startup path and refuse to boot** — not lazily on first
use, which is a request.
The factory in **typescript-client-initialization** shows the shape.

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set. `"API_KEY is not configured"` —
  not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A
  `"configured: sk_live_1234…"` line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded
  hides the fault and pushes it to the first caller.

Check every credential the scheme requires. Basic auth needs both halves — a username with an empty
password is misconfigured, not partially configured. An empty-string `SecretProvider` is treated as
absent, so a blank env var is the same fault as an unset one.

## Notes

- **Credentials are fixed at construction.** `ClientOptions` is `readonly` and the auth schemes are
  built in the constructor, so to rotate a credential you use a `SecretProvider` **function**, replace
  the strategy, or build a new client. There is no mutable accessor.
- **Rotating a long-lived client:** the token cache is per client instance, so swap atomically — build
  the new client, then replace the shared reference. In-flight calls finish on the old one and there
  is no window where calls have no credential. Do not mutate the old client.
- **Auth wins every header, query and cookie collision** — a scheme's `Authorization` header
  overwrites anything else under that name, and only a `fetch` wrapper can strip or replace it (see
  `typescript-configuration-resilience`).
- **Nothing hides secrets in a log you write.** Credentials are plain objects with no redacting
  `toString`, so `console.log(options)` or a serialized `ClientOptions` prints them in full. The SDK's
  own logging masks a credential in a header, the query or an OAuth form body, but not in a JSON request
  body (**typescript-configuration-resilience**).
- On the OAuth 2 token request, header placement with a secret sends
  `base64(clientId:clientSecret)` **without percent-encoding either half** first. A client id or
  secret containing a character RFC 6749 §2.3.1 would have you encode is sent raw, so a provider that
  follows the RFC strictly may reject it — use body placement or a custom strategy if your secret is
  not in the unreserved set.
- `AuthError` (a credential is not configured or could not be *obtained*) versus a 401/403 `ApiError`
  (refused by the API):
  **typescript-error-handling**.
- A token endpoint may live on its own server group, so redirecting the operations' group at a mock
  does not move it (**typescript-configuration-resilience**).
- Keep secrets out of source — read `process.env` or your secret manager at the call site.
