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
| HTTP bearer | `TokenProvider` | `Authorization: Bearer {token}` |
| API key in header | `TokenProvider` | the API's header name |
| API key in query | `TokenProvider` | the API's query parameter |
| API key in cookie | `TokenProvider` | a `Cookie` pair under the API's name |
| HTTP basic | `BasicAuthCredentials` | `Authorization: Basic base64(user:pass)` |
| OAuth 2 client credentials | `OAuth2ClientCredentials` | `Authorization: Bearer {fetched token}` |
| OAuth 2 password | `OAuth2PasswordCredentials` | `Authorization: Bearer {fetched token}` |
| OAuth 2 authorization code | `OAuth2AuthorizationCodeCredentials` | `Authorization: Bearer {fetched token}` |

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

All four of these kinds are the **same slot to you**: `TokenProvider`, which is a string, or something
that produces one. Which channel it travels on is the scheme's business.

A query-placed key is percent-encoded exactly as an endpoint's own query parameter. A cookie-placed key
is **also** percent-encoded, and it is merged into any `Cookie` header already on the request rather
than replacing it — only a cookie of the same name is overwritten.

### A `TokenProvider` may be a function

```ts
type TokenProvider = string | ((signal: AbortSignal) => string | Promise<string>);
```

Pass a **function** when the secret rotates, comes from a vault, or is not known at construction time.
It is called on **every request** that needs the scheme, and it may be async:

```ts
const client = new {Api}Client({
  {scheme}: async () => await vault.read("api-key"),   // re-read per request
});
```

There is no caching around your callback — if the lookup is expensive, cache inside the callback. An
empty string counts as **absent** and the scheme sends nothing, so guard against a blank env var.

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
invalidates the cached token and re-acquires on the next call.

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
- **Only the authorization-code grant refreshes.** Client-credentials and resource-owner-password
  re-run the whole grant when the token expires, and a `refresh_token` in a password-grant response is
  **discarded** — do not infer refresh behaviour from what the provider returns. A refresh response
  that omits `refresh_token` keeps the previous one, and a failed refresh does not throw: it falls back
  to a full re-grant.
- On `401`, the cached token is invalidated and re-acquired on the **next** call — `401` is not in the
  default `statusCodesToRetry`, so the failing request is **not** re-sent; handle it as an ordinary
  `ApiError` (see `typescript-error-handling`). Add `401` to `statusCodesToRetry` to have the failing
  call re-sent with a fresh token — every attempt resolves its credential again. A static key is
  re-sent unchanged, so that only helps a scheme that fetches its credential.
- **Invalidation is a hint, not a barrier.** It clears the cache without cancelling a token fetch
  already in flight, so that fetch can complete and re-populate it; "invalidate, then read" does not
  guarantee a fresh token.

⚠ **A `401` on the authorization-code grant is an interactive re-authorization, not a silent
refresh.** Invalidation clears the whole cached token, refresh token included, so "re-acquired" means
the *full* grant runs again and `promptForAuthorizationCode` fires. Expiry takes the refresh path; a
`401` does not. Plan for that in a non-interactive host.

**A short-lived token is renewed halfway through its lifetime.** The 30-second buffer applies to a
token issued for a minute or more; below that, the token is reused for half its `expires_in` — a 20 s
token for 10 s. So no token is stale the moment it is cached, and a sub-minute token costs one token
round-trip per half-lifetime rather than one per call.

⚠ **A token response without a positive `expires_in` never expires in the cache** — the first token
is kept for the life of the client and only a `401` replaces it, so a token revoked server-side is
sent until a request fails with it. For proactive rotation, supply your own token strategy (below).

### Supplying your own token source

The token strategy is a public extension point: alongside each OAuth 2 credentials member the options
type exposes a **`{scheme}Strategy`** member, typed `OAuth2TokenStrategy<{CredentialsType}>` (or
`OAuth2RefreshableTokenStrategy<…>` for the authorization-code grant), and the generated client falls
back to the built-in strategy only when you leave it unset.

```ts
const client = new {Api}Client({
  {scheme}: { /* the same credentials object */ },
  {scheme}Strategy: {
    async getToken(credentials, signal) {
      const stored = await tokenStore.load();
      if (stored) return stored;                       // { accessToken, tokenType, expiresIn?, … }
      const fresh = await mintTokenSomehow(credentials, signal);
      await tokenStore.save(fresh);
      return fresh;
    },
    // Authorization-code grant only — return null to fall back to a full re-grant:
    async tryRefreshToken(credentials, refreshToken, signal) {
      const refreshed = await refreshSomehow(credentials, refreshToken, signal);
      if (refreshed) await tokenStore.save(refreshed);
      return refreshed ?? null;
    },
  },
});
```

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

## The failure mode that surprises everyone

A token endpoint that answers `400 invalid_client` rejects the *operation* call with `AuthError` — its
`method`/`uri` name the operation, the token endpoint's `ApiError` is on `.cause`, nothing was sent,
and `.asApiResult()` does not convert it. Catch it around every authenticated call; the ladder is in
**typescript-error-handling**.

## Combined / multiple schemes

An operation can require more than one scheme, or any one of a set. The composition is applied for you
by `allAuth(...)` / `anyAuth(...)`; you configure it by setting the relevant credential members.

- **AND (`allAuth`)** — every scheme resolves and their headers, query params and cookies are all
  sent. If one has no credential it contributes nothing, and the request goes out **partially
  authenticated** rather than failing.
- **OR (`anyAuth`)** — the **first** scheme in declaration order that has credentials is used and the
  rest are ignored. So which credential is sent depends on declaration order in `src/auth-schemes.ts`,
  not on which looks more specific. A `TokenProvider` **function** always counts as "has credentials",
  even if it returns an empty string — so a function provider always wins the OR.

Because composition is **per operation**, one client may authenticate different operations with
different schemes — so set every member the operations your integration actually calls need, not just
the ones the API's front page advertises. The per-operation requirement is the **Auth** bullet on the
operation's block in `map/operations/*.md` (and in `api-reference.md`), which spells the composition
out: `` `{scheme}` ``, `all of …`, or `any of … — the first one configured is sent`.

## No auth

An operation whose **Auth** bullet reads `none — public; no credential is sent` sends **no credential
even when every option member is filled**, and nothing you pass at construction adds one.

## ⚠ Missing credentials must stop the app from starting

Every section above covers supplying a credential. This one covers its **absence** — the case a
configuration-driven app hits in the real world, and the one most integrations get wrong.

**Every credential member is optional and an unset one does not throw.** The operation that wanted it
simply sends no credential, and you get whatever the API answers — typically a `401`, surfacing as an
`ApiError`, not as an auth failure. The SDK will never tell you that you forgot to supply a
credential; only the provider will, one round-trip later and one layer away from the cause. A
"mysterious 401" is very often an unfilled option member — check that before suspecting the
credentials themselves.

An API that serves anonymous traffic at all — public endpoints, or a reduced rate limit for keyless
callers — makes this worse by answering `200` and hiding the omission entirely. So verify the member
is actually set rather than waiting for a `401` to tell you.

**A required credential that is not configured is a deployment fault, not a request fault.** There is
no `.env` support and no `fromEnvironment()` helper in the SDK, so **validate every required
credential in your startup path and refuse to boot** — not lazily on first use, which is a request.
The factory in **typescript-client-initialization** shows the shape.

Three rules for the message it fails with:

- **Name the missing config key**, so the operator knows what to set. `"API_KEY is not configured"` —
  not `"authentication failed"`.
- **Never echo the value**, present or absent — no length, no prefix, no masked form. A
  `"configured: sk_live_1234…"` line is a secret in a log.
- **Do not fall back to a default, a placeholder, or an unauthenticated client.** Booting degraded
  hides the fault and pushes it to the first caller.

Check every credential the scheme requires. Basic auth needs both halves — a username with an empty
password is misconfigured, not partially configured. An empty-string `TokenProvider` is treated as
absent, so a blank env var is the same fault as an unset one.

## Notes

- **Credentials are fixed at construction.** `ClientOptions` is `readonly` and the auth schemes are
  built in the constructor, so to rotate a credential you use a `TokenProvider` **function**, replace
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
- `AuthError` (a credential could not be *obtained*) versus a 401/403 `ApiError` (refused by the API):
  **typescript-error-handling**.
- A token endpoint may live on its own server group, so redirecting the operations' group at a mock
  does not move it (**typescript-configuration-resilience**).
- Keep secrets out of source — read `process.env` or your secret manager at the call site.
