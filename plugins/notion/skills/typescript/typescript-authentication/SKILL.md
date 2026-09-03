---
name: typescript-authentication
description: Authentication for an APIMatic-generated TypeScript SDK — supplying credentials on the client options object, the credential shape each scheme kind takes, OAuth 2 token caching and refresh, and replacing the token source. Load before wiring credentials into the client, or when a call comes back 401/403.
---

# Authenticating an APIMatic TypeScript SDK client

How you authenticate depends on the security scheme(s) the API declares. APIMatic surfaces each scheme
as an **optional credential member on `ClientOptions`**; set the one(s) your API uses, then construct
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

The credential types below live under `src/core/auth/` and are exported from the package root; they
are the **same across all APIMatic TypeScript SDKs**. Only the **option member names** are generated
per-API (hence the `{scheme}` placeholders). The generator distinguishes **eight** scheme kinds — that
list is closed, so if the spec declared something outside it, read `src/auth-schemes.ts` to see what
was actually emitted rather than assuming a ninth shape. The eight collapse to **three** credential
shapes:

| Scheme kind | `ClientOptions.{scheme}` type | Sent as |
| --- | --- | --- |
| HTTP bearer | `TokenProvider` | `Authorization: Bearer {token}` |
| API key in header | `TokenProvider` | the spec's header name |
| API key in query | `TokenProvider` | the spec's query parameter |
| API key in cookie | `TokenProvider` | a `Cookie` pair under the spec's name |
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

A username containing `:` throws `SdkError` **from the constructor** (RFC 7617 §2), so a bad value
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
generated scheme, not by anything you pass. Set the configured key member to your key string:

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
type TokenProvider = string | (() => string | Promise<string>);
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
An empty string is treated as absent and no `scope` field is sent. The generator emits **no scope
enum or literal union** even where the spec declares a scope vocabulary, so a scope the flow does not
document type-checks fine and fails at the provider instead.

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
  same point at which the other grants fetch their token. In a server app that is almost never what
  you want mid-request; see *Supplying your own token source* below.
- **PKCE is on by default.** Omitting `pkce` means `PkceMethod.S256`; `pkce: null` disables it. The
  verifier and challenge are generated with `crypto.getRandomValues` / `crypto.subtle`, so the runtime
  needs Web Crypto (Node 20+ and browsers have it).
- The `signal` handed to your callback is the request's own signal — honour it, or a cancelled or
  timed-out request leaves you waiting on a redirect forever.

⚠ **The prompt runs on the triggering request's timeout budget** — the clock starts before auth is
resolved, so a human has `timeout` milliseconds (default `60_000`) to complete the whole login, and
whatever they take is subtracted from the operation's own budget. A browser round-trip does not fit
inside a default timeout. Acquire the token out of band (*Supplying your own token source*) rather
than raising `timeout` to human scale, which would also un-bound every ordinary call.

⚠ **The prompt must not make an SDK call that uses this same scheme.** Concurrent acquisitions share
one in-flight promise, so a call made from inside the prompt waits on the acquisition that is waiting
on the prompt — a deadlock that breaks only when the request timeout fires. The same applies to a
custom token source's `getToken`.

⚠ **`state` is passed through verbatim and the SDK does not validate it on the way back.** It is sent
on the authorization request and never generated or checked here — the SDK never sees the redirect, so
producing and verifying it are yours alone. Your redirect handler must compare it against what you
generated before returning the code, or the CSRF token is decorative.

⚠ **`clientSecret` is optional in the type, and only one of the two ways it can be missing throws.**

| PKCE | `clientSecret` missing ⇒ |
| --- | --- |
| disabled (`pkce: null`) | `AuthError("A client secret is required when PKCE is disabled…")` — **before** the prompt runs |
| enabled, token request is header-placed | no error: the SDK sends `Authorization: Basic base64(clientId:)` and the provider rejects it — **after** the user has completed the full browser round-trip |
| enabled, token request is body-placed | fine — this is the public-client case |

The placement is fixed by the spec, not by you, and is visible as the `placement` argument in
`src/auth-schemes.ts` (`"header"` sends `Authorization: Basic base64(clientId:clientSecret)` on the
token request; `"body"` sends `client_id` / `client_secret` as form fields). Check which one your
generated `src/auth-schemes.ts` passes before treating the secret as optional — the header case's
failure is the expensive one, because it costs an interactive login before the exchange fails.

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

- Tokens are cached **in memory, per client instance**, and reused until **30 s** before expiry.
- Acquisition is **lazy** — on the first request that requires the scheme, not at construction. A
  client built with bad credentials constructs perfectly happily; the failure surfaces at the first
  operation. One in-flight acquisition is **shared**: concurrent requests that arrive during a fetch
  wait on that fetch rather than each starting their own.
- The fetch is a form-encoded `POST` to the token endpoint, sent with **no auth scheme of its own**,
  and it runs on the triggering request's timeout and abort signal — so token-fetch time comes out of
  that operation's budget.
- **The cache lives in the client object.** Build the client once (see
  `typescript-client-initialization`) or every call re-runs the grant.
- **Only the authorization-code grant refreshes.** It is the one grant wired to
  `oauth2RefreshableScheme` / `OAuth2RefreshableTokenStrategy`. Client-credentials and
  resource-owner-password re-run the whole grant when the token expires — and a `refresh_token` in a
  password-grant response is **discarded**, because the non-refreshable `OAuthToken` has no field for
  it. Do not infer refresh behaviour from what the provider returns.
- When the authorization-code grant does refresh, a refresh response that omits `refresh_token`
  carries the previous one forward. A refresh that fails does not throw — it returns `null` internally
  and falls back to a full re-grant.
- On `401`, the cached token is invalidated and re-acquired on the **next** call — the failing request
  is **not** retried. Handle the 401 as an ordinary `ResponseError` (see `typescript-error-handling`);
  the recovery is automatic on the following attempt, not on this one.

⚠ **A `401` on the authorization-code grant is an interactive re-authorization, not a silent
refresh.** Invalidation clears the whole cached token, refresh token included, so "re-acquired" means
the *full* grant runs again and `promptForAuthorizationCode` fires. Expiry takes the refresh path; a
`401` does not. Plan for that in a non-interactive host.

⚠ **The 30-second buffer is flat, with no floor.** A token whose `expires_in` is **30 or less** is
already past its adjusted deadline the moment it is cached, so every request re-runs the grant and the
cache never serves anyone. There is no half-of-lifetime fallback for short tokens. If your provider
issues sub-minute tokens, supply your own token strategy rather than paying a token round-trip per
call.

⚠ **If the token response omits `expires_in`, the token never expires as far as the SDK is
concerned** — and a non-positive `expires_in` is treated the same way. `expires_in` is RECOMMENDED but
not required by RFC 6749, and the SDK's expiry check short-circuits to "not expired" when it is
absent, so the first token is cached for the life of the client and the only thing that ever replaces
it is a `401`. That is usually fine and occasionally not: a token revoked server-side keeps being sent
until a request fails with it. If your provider omits `expires_in` and you need proactive rotation,
supply your own token strategy (below) rather than trying to bound the cache.

- **Invalidation is a hint, not a barrier.** It clears the cache without cancelling an acquisition
  already in flight, so that fetch can complete and re-populate it. That is deliberate — the newer
  token post-dates the invalidation — but it means "invalidate then immediately read" is not a
  guarantee of a fresh token.

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

**A failed token fetch surfaces out of your *operation* call, and `.asApiResult()` does not protect
you from it.**

Auth is resolved inside the same dispatch the operation runs through, so both consequences follow from
one fact — the token fetch happens *during* your operation:

1. **The traceback points at the operation you called**, not at anything named "auth". A token
   endpoint that answers `400 invalid_client` becomes an `AuthError` thrown from
   `client.{resource}.{operation}(...)`, with the underlying `ResponseError` on `.cause`. Reading only
   the top frame sends you looking in the wrong place entirely.
2. **The non-throwing form still rejects.** `.asApiResult()` converts the *operation's* error response
   into an `{ ok: false }` result instead of throwing — but auth is resolved before any response
   exists, so an `AuthError` propagates straight out of the `await`. Code written specifically to
   avoid exceptions still needs a `try`/`catch` around an authenticated call.

So a boundary that only inspects `result.ok` is incomplete:

```ts
import { AuthError } from "{package-name}";

try {
  const result = await client.{resource}.{operation}(request).asApiResult();
  if (!result.ok) { /* the operation's own error union */ }
} catch (err) {
  if (err instanceof AuthError) {
    // Credentials/token problem — the operation request was never sent.
    throw new ConfigurationError("API credentials rejected", { cause: err });
  }
  throw err;
}
```

Treat it as a **configuration** failure, distinct from an operation rejection: nothing was attempted,
so retrying it or reporting it as a failed operation are both wrong. `typescript-error-handling` has
the full catch ladder.

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

**This layer never withholds a request over a missing credential, and never throws for one.** An
unconfigured member simply drops out and the request goes out with whatever *was* configured; with
nothing configured at all it goes out unauthenticated. The server decides.

Because composition is **per operation**, one client may authenticate different operations with
different schemes — so set every member the operations your integration actually calls need, not just
the ones the API's front page advertises. The per-operation requirement is the **Auth** bullet on the
operation's block in `map/operations/*.md` (and in `api-reference.md`), which spells the composition
out: `` `{scheme}` ``, `all of …`, or `any of … — the first one configured is sent`.

## No auth

An operation the spec marked public is wired to `noneAuth` and sends **no credential even when every
option member is filled**. Its **Auth** bullet reads `none — public; no credential is sent`. Nothing
you pass at construction adds a credential to such an operation — if it needs one, that is a spec
problem, not a configuration one.

## ⚠ Missing credentials must stop the app from starting

Every section above covers supplying a credential. This one covers its **absence** — the case a
configuration-driven app hits in the real world, and the one most integrations get wrong.

**Every credential member is optional and an unset one does not throw.** The operation that wanted it
simply sends no credential, and you get whatever the API answers — typically a `401`, surfacing as a
`ResponseError`, not as an auth failure. The SDK will never tell you that you forgot to supply a
credential; only the provider will, one round-trip later and one layer away from the cause. A
"mysterious 401" is very often an unfilled option member — check that before suspecting the
credentials themselves.

An API that serves anonymous traffic at all — public endpoints, or a reduced rate limit for keyless
callers — makes this worse by answering `200` and hiding the omission entirely. So verify the member
is actually set rather than waiting for a `401` to tell you.

**A required credential that is not configured is a deployment fault, not a request fault.** If the
app boots with a blank secret, an operator sees a provider outage, retry logic hammers a call that can
never succeed, and the actual cause — an unset environment variable — is two layers away from the
symptom. There is no `.env` support and no `fromEnvironment()` helper in the SDK, so **validate at the
call site and refuse to boot**:

```ts
function buildClient(): {Api}Client {
  const key = process.env.API_KEY;
  if (!key) {
    throw new Error(
      "API_KEY is not configured. Set it via environment variable or your secret store " +
      "before starting the app.",
    );
  }

  return new {Api}Client({
    serverEnvironment: ServerEnvironment.Production,
    {scheme}: key,
  });
}
```

Run that check **before** the app is ready to serve — at module load or in your startup path, not
lazily on first use, which is a request, which is exactly the late failure you are trying to avoid.

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

- A given SDK only exposes the credential members for the schemes its API declares; those names are
  generated per-API (hence the `{scheme}` placeholders above). Fill every member the operations you
  call need.
- **Credentials are fixed at construction.** `ClientOptions` is `readonly` and the auth schemes are
  built in the constructor, so to rotate a credential you use a `TokenProvider` **function**, replace
  the strategy, or build a new client. There is no mutable accessor.
- **Rotating a long-lived client:** the token cache is per client instance, so swap atomically — build
  the new client, then replace the shared reference. In-flight calls finish on the old one and there
  is no window where calls have no credential. Do not mutate the old client.
- **Auth wins every header, query and cookie collision.** Auth params are merged **last**, after the
  client's defaults and the endpoint's own, so a scheme's `Authorization` header overwrites anything
  set earlier under that name. There is no per-request header override to undo it — a `fetch` wrapper
  is the only place you can strip or replace an auth header (see
  `typescript-configuration-resilience`).
- **Nothing hides secrets in a log.** Credentials are plain objects with no redacting `toString`, so
  `console.log(options)` or a serialized `ClientOptions` prints them in full. The SDK also logs
  nothing itself, so anything that leaks is something you wrote.
- On the OAuth 2 token request, header placement sends `base64(clientId:clientSecret)` **without
  percent-encoding either half** first. A client id or secret containing a character RFC 6749 §2.3.1
  would have you encode is sent raw, so a provider that follows the RFC strictly may reject it — use
  body placement or a custom strategy if your secret is not in the unreserved set.
- **`AuthError` means a credential could not be obtained** — the token request failed, or PKCE was
  disabled without a secret. Being *refused* a credential by the API is a `ResponseError` with status
  401/403 instead. The two are disjoint, and one `catch` arm cannot absorb the other. A token endpoint
  that answers with an error status surfaces as `AuthError` with that `ResponseError` on `.cause`.
- Credentials never appear in a thrown error's message.
- **A token endpoint may live on a different server group than the operations.** Overriding
  `serverOptions.default.{environment}.baseUrl` therefore does not move the token request — override
  that group too if you need both redirected at a mock. See `typescript-configuration-resilience`.
- Keep secrets out of source — read `process.env` or your secret manager at the call site. Set
  credentials **before** constructing the client; there is no way to add them afterwards.
