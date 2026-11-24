---
name: python-authentication
description: Load before setting credentials on an APIMatic-generated Python SDK client, or when a call fails with 401/403 or a token fetch fails. Covers each scheme's constructor keyword in typed or dict form — Basic, bearer, API key and the three OAuth2 grants — the managed token lifecycle and caching, composite schemes, what a failed token fetch raises, and loading secrets.
---

# Authenticating an APIMatic Python SDK client

How you authenticate depends on the security scheme(s) the API uses. APIMatic surfaces each scheme as a
**keyword-only argument on the client constructor**, taking either a typed credentials model or a plain
dict of the same keys; set the one(s) your API uses, then construct the client (see
`python-client-initialization`).

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{root_package}`, `{Client}`, `{oauth2}`) — replace it with the concrete identifier from the source.

To see which schemes a specific SDK accepts, read the **credentials keywords on its client
constructor** — those are the source of truth (take them from the contract sheet, grounded in the SDK
map's constructor-keyword table and its *Servers & auth* section, not from recall).
`{root_package}/auth.py` is the cheap cross-check: its `AuthSchemes` holder carries exactly one field
per declared scheme, named as the constructor keyword. Never infer a scheme from
`{root_package}/core/auth/schemes/`: it ships every scheme kind, whatever the API accepts. (An SDK
whose API uses only OAuth2 client credentials, for instance, exposes a single `{oauth2}=` keyword and
its `{oauth2}_token_source=` override.)

The credential classes below live under `{root_package}.core` and are the **same across all APIMatic
Python SDKs**; only the **keyword names** differ per SDK — each is the scheme's id, snake_cased (hence
the `{...}` placeholders).

## The two spellings

Every credential keyword accepts a typed model or a mapping, and the two produce identical requests:

```python
from {root_package}.core import ClientCredentials

client = {Client}({oauth2}=ClientCredentials(client_id=cid, client_secret=secret))
client = {Client}({oauth2}={"client_id": cid, "client_secret": secret})
```

Prefer the typed form in application code — it is what your type checker can verify. The dict form is
for config-driven construction, where the keys arrive from a settings object.

Credential models are frozen with **`extra="forbid"`**, so the dict form is checked properly: a
misspelled or unexpected key raises `pydantic.ValidationError` at construction rather than being
silently dropped. `ValidationError` subclasses `ValueError`, so an existing `except ValueError`
around your startup path already catches it.

## Basic auth

```python
from {root_package}.core import BasicAuthCredentials

client = {Client}({basic_auth}=BasicAuthCredentials(username="...", password="..."))
```

Sends `Authorization: Basic base64(username:password)`. A `:` in the username is rejected at
construction — RFC 7617 encodes `user-id:password`, so a colon in the user-id cannot be decoded
unambiguously — which surfaces as a `ValidationError` instead of a header the server misreads.

## Bearer token

The constructor keyword takes the token **as a plain string**, not a model:

```python
client = {Client}({bearer_auth}="ACCESS_TOKEN")
```

Sends `Authorization: Bearer ACCESS_TOKEN`. An `openIdConnect` scheme reaches the SDK the same way —
its discovery document says how a token is obtained, not how it is sent.

## API key (header, query, or cookie)

The key is sent as a header, query parameter, or cookie — its placement and name are fixed by the
SDK's scheme. Set the configured key keyword to your key string:

```python
client = {Client}({api_key}="API_KEY")
```

A query-placed key is percent-encoded exactly as an endpoint's own query parameter; a cookie-placed key
is sent verbatim.

> **Applies only when the SDK declares an OAuth2 scheme.** The next five sections — the three grants,
> the managed token lifecycle, and the token-fetch failure mode — describe machinery that exists only
> if the map's *Servers & auth* section lists an OAuth2 scheme. Where it lists none, skip ahead to
> *Combined / multiple schemes*; nothing below can occur in that SDK.

## OAuth 2.0 — client credentials (machine-to-machine)

```python
from {root_package}.core import ClientCredentials

client = {Client}({oauth2}=ClientCredentials(
    client_id="...",
    client_secret="...",
    scopes=["a", "b"],          # optional
))
```

`scopes` is a **list**, and the SDK joins it with the space delimiter RFC 6749 §3.3 requires — never
pre-join it yourself, or you send one scope literally named `"a b"`. Omit it to get whatever the
client's default scopes are.

Where `{root_package}/auth.py` declares a `{Flow}Scope` `Literal` alias, `scopes` is typed by it — so
a scope the flow does not document fails the type check at the call site instead of the request at the
provider. A flow with no alias takes a plain `list[str] | None`.

## OAuth 2.0 — authorization code (3-legged, with PKCE)

```python
from {root_package}.core import AuthorizationCodeCredentials

client = {Client}({oauth2}=AuthorizationCodeCredentials(
    client_id="...",
    client_secret="...",                        # optional; needed only when PKCE is disabled (pkce=None)
    redirect_uri="https://app.example.com/callback",
    scopes=["a"],                               # optional
    state="...",                                # optional CSRF token
    pkce="S256",                                # default; RFC 7636 ("plain" where §7.2 permits it)
    prompt_for_authorization_code=get_code_from_user,
))
```

`prompt_for_authorization_code` is **required** and takes the fully built authorization URL, returning
the `code` your redirect endpoint received:

```python
def get_code_from_user(authorization_url: str) -> str:
    # Open/redirect the browser to authorization_url, then return the authorization code.
    ...
```

The SDK exchanges that code for a token and refreshes it when it expires; if the refresh is refused, it
calls the prompt again to re-authorize. Four things the signature does not show:

- **`state` is pass-through only.** It is sent on the authorization request and never generated or
  validated here — the SDK never sees the redirect, so producing and verifying it are yours alone.
- **`pkce=None` disables PKCE and then requires `client_secret`** — the combination that has neither is
  refused at construction, not at the first request.
- **The async client takes `AsyncAuthorizationCodeCredentials`**, whose prompt is a coroutine
  (`(str) -> Awaitable[str]`). Handing it a synchronous prompt is a *type* error rather than an event
  loop discovered blocked on a human in production.
- **The prompt runs inside the scheme's lock**, so it must not itself make a call that uses this scheme.

## OAuth 2.0 — resource owner password

```python
from {root_package}.core import PasswordCredentials

client = {Client}({oauth2}=PasswordCredentials(
    client_id="...",
    client_secret="...",        # optional; a public client sends client_id in the form body instead
    username="...",
    password="...",
    scopes=["a"],               # optional
))
```

## The managed token lifecycle (all OAuth2 grants)

You never request a token yourself. Set the credentials and the SDK does the rest — but *when* it does
is the part that matters:

- **The token is fetched lazily, on the first authenticated call** — not at construction. A client built
  with bad credentials constructs perfectly happily; the failure surfaces at the first operation.
- The fetch is a form-encoded `POST` to the token endpoint derived from the client's `base_url`, with
  the client id and secret sent as HTTP Basic (`client_secret_basic`) or in the form body
  (`client_secret_post`), per the scheme.
- The resulting token is **cached in memory on the client's auth scheme** and reused across calls, which
  is the whole reason a client must be long-lived (`python-client-initialization`); a burst of
  concurrent first calls pays for **one** fetch.
- A token with an `expires_in` is renewed ~30s before expiry (or at half its lifetime, whichever leaves
  more time, for tokens shorter than a minute). Without an `expires_in` there is no client-side deadline
  and the token is used until the server rejects it.
- **Refreshing applies only to the authorization-code grant**, where a re-acquisition would run your
  prompt again. Client-credentials and password re-acquire instead, so the password grant re-sends the
  resource owner's password at every expiry.
- **On a `401`, the cached token is invalidated** so the next call re-authenticates — but **the failing
  request is not retried**. This is deliberate: the caller sees one `401` and then recovery. Do not
  write a retry loop *just* for this; do expect that a revoked credential surfaces as exactly one
  failed call.

### Overriding token acquisition

Each OAuth grant's credential keyword is joined by `{oauth2}_token_source=`, which replaces how the
token is obtained — for a token broker, a sidecar, a pre-issued token, or a test double. It takes
anything satisfying the token-source protocol: `TokenSource` (`fetch(credentials) -> OAuthToken`),
`AsyncTokenSource` on the async client, and `RefreshableTokenSource` / `AsyncRefreshableTokenSource`
(`fetch` plus `refresh`) for the authorization-code grant. Use it rather than reaching into the
scheme's cache, which is private. Your source **must not issue a request that itself uses this scheme**
— it runs inside that scheme's lock and would deadlock.

## A failed token fetch raises `AuthSchemeError`

It names **your operation's** call, not the token endpoint, so an `except ApiError` around that call
never catches the token endpoint's `401`. What went wrong is on `__cause__`: an `ApiError` whose
`error` is a `RawError` when the endpoint refused (the RFC 6749 `error` code is in
`e.__cause__.error.json()`), or an `SdkConnectionError` when it could not be reached. It
surfaces out of your **operation call**, where the lazy fetch happens — the top frame names the
operation, the frames beneath it the token source — and it raises under `with_raw_response` too.
Treat it as a **configuration** failure: no operation request was sent, so neither retry it nor report
it as a failed operation; `python-error-handling` has the ladder.

## Combined / multiple schemes

When an operation (or the whole API) requires more than one scheme, the client composes them per
operation for you. You configure it by setting the relevant credentials keywords:

- **AND** (`AllSchemes`) — every *configured* member applies to the request.
- **OR** (`AnySchemes`) — the first *configured* member that applies wins. An unconfigured member is
  never tried, so one listed first cannot win and send the request unauthenticated, and a configured
  member that raises yields to the next. Only when every configured member raised does the call raise
  `AuthSchemeError`, each failure in `scheme_failures`. A failure a later member recovers from is
  absorbed: the call goes ahead on that member's credential. A failed token request logs its own
  lines (a WARNING where it was refused, an ERROR where it got no response), and those are the signal
  that a fallback credential is in use. The group adds no line of its own; wrap that scheme if you
  want one naming it.

**A missing credential never withholds a request and never raises.** Omitting a credentials keyword is
legal and silent — the client is built with a no-auth scheme — and an unconfigured composite member
simply drops out, so the request goes out with whatever *was* configured; with nothing configured at
all it goes out unauthenticated, and the server decides. Most APIs then answer `401`; an API that
serves anonymous traffic at all (public endpoints, or a reduced rate limit for keyless callers)
answers `200` and hides the omission entirely. Because composition is per-operation, one client may
authenticate different operations with different schemes — so verify every keyword the operations
your integration calls actually need is set, and on blanket `401`s check that before suspecting the
credentials themselves.

## No auth

Some endpoints/APIs need no credentials — an operation declaring no `security` sends none. Leave the
credentials keywords unset.

## Loading secrets

Keep credentials out of source and out of logs.

```python
import os

client_id = os.environ["{API}_CLIENT_ID"]          # KeyError names the missing var
client_secret = os.environ["{API}_CLIENT_SECRET"]
```

Prefer `os.environ[...]` over `os.getenv(...)` at startup: `getenv` returns `None`, which then travels
into the credential model and fails later with a message about validation rather than about your
deployment. If you want a friendlier message, check explicitly and fail fast — an obviously-missing
credential should never reach the first API call.

For anything larger than a script, read secrets through the project's existing settings layer
(`pydantic-settings`, `django.conf.settings`, a secret manager client) rather than reaching for
`os.environ` in the middle of a module.

Two things that help, both already built in:

- **Secrets are hidden in reprs.** The secret fields on credential models are declared `repr=False`,
  so logging a credential object or an SDK object that holds one does not print the secret. Do not
  rely on this for values you assemble yourself.
- **Never log a credential's `model_dump()`** — that *does* include the secret. The repr protection is
  on the repr only.

## Notes

- Set credentials **at construction**; assigning to a private attribute afterwards is not supported.
  To rotate a credential, build a new client, replace the reference, then close the old one — the
  token cache is per client instance, so there is no window where calls have no credential.
- A per-call `extra_headers` outranks the credential, so it can override or blank `Authorization` for
  one call (`python-calling-endpoints`).
