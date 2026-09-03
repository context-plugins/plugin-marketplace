---
name: python-authentication
description: Authentication for an APIMatic-generated Python SDK — supplying credentials in typed or dict form, the scheme shapes, the managed OAuth2 token lifecycle and its caching, what a failed token fetch actually raises (and why it bypasses the non-raising response mode), and loading secrets safely. Load before wiring credentials into the client, or when a call fails with 401/403.
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
`{root_package}/auth.py` is the cheap cross-check:
its `AuthSchemes` holder carries exactly one field per declared scheme, and the field names *are* the
constructor keywords. The `{root_package}/core/auth/schemes/` directory ships *every* scheme the
generator supports as shared runtime code regardless of what the API accepts, so never infer a scheme
from that directory. (An SDK whose API uses only OAuth2 client credentials, for instance, exposes a
single `{oauth2}=` keyword and its `{oauth2}_token_source=` override.)

The credential classes below live under `{root_package}.core` and are the **same across all APIMatic
Python SDKs**; only the **keyword names** are generated per-API — each is the security scheme's id from
the spec, snake_cased (hence the `{...}` placeholders).

## The two spellings

Every credential keyword accepts a typed model or a mapping, and they are exactly equivalent — a
`coerce` classmethod is the single place the dict form is resolved, so the two cannot produce different
requests:

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
generated scheme. Set the configured key keyword to your key string:

```python
client = {Client}({api_key}="API_KEY")
```

A query-placed key is percent-encoded exactly as an endpoint's own query parameter; a cookie-placed key
is sent verbatim, because RFC 6265's `cookie-value` alphabet already admits every character a base64
key uses and encoding it would corrupt the credential.

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

When the flow declares a scope vocabulary, the generator emits a `Literal` alias for it in
`{root_package}/auth.py` (`{Flow}Scope`) and types `scopes` by that alias — so a scope the flow does not
document fails the type check at the call site instead of the request at the provider. A flow that
declares no scopes has no alias, and `scopes` is a plain `list[str] | None`.

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
- The fetch is a `POST` to the token endpoint derived from the client's `base_url`, form-encoded, with
  the client id and secret sent per the placement the spec declares — commonly HTTP Basic
  (`client_secret_basic`, both halves percent-encoded before base64), otherwise in the form body
  (`client_secret_post`).
- The resulting token is **cached in memory on the client's auth scheme** and reused across calls, which
  is the whole reason a client must be long-lived (`python-client-initialization`). The cache is
  double-checked under a lock, so a burst of concurrent first calls pays for **one** fetch.
- A token with an `expires_in` is renewed ~30s before expiry (or at half its lifetime, whichever leaves
  more time, for tokens shorter than a minute). Without an `expires_in` there is no client-side deadline
  and the token is used until the server rejects it.
- **Refreshing applies only to the authorization-code grant**, whose scheme prefers a refresh over a
  re-acquisition — a re-acquisition would run your prompt again. Client-credentials and password
  re-acquire instead (RFC 6749 §4.4.3 says the client-credentials grant SHOULD NOT be issued a refresh
  token), so the password grant re-sends the resource owner's password at every expiry.
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

## The failure mode that surprises everyone

**A failed token fetch raises the SDK's ordinary API exception — but its payload is a different type
than any operation's.** For a managed-OAuth SDK, the token endpoint's error body is fixed by
RFC 6749 §5.2, so the SDK decodes it into an `OAuthProviderError` (`error`, `error_description`,
`error_uri`) — or a `RawError` if the provider's body does not conform.

Two consequences, and both are the sort of thing that costs an afternoon:

1. **The exception surfaces out of your *operation* call**, because that is where the lazy fetch
   happens. A traceback for bad credentials points at the operation you called, and the frames
   underneath name the token source. Reading only the top frame sends you looking in the wrong place
   entirely.
2. **The non-raising response mode does not protect you.** The `with_raw_response` variant returns a
   result object instead of raising *for the operation* — but the token fetch calls `.unwrap()`
   internally, so an auth failure raises even there. Any code path that touches the SDK needs to handle
   this, including one written specifically to avoid exceptions.

So a boundary that catches only the operation's error union is incomplete. Narrow on the payload type:

```python
from {root_package}.core import ApiError, OAuthProviderError, RawError

try:
    result = client.{controller}.{operation}(body)
except ApiError as e:
    if isinstance(e.error, OAuthProviderError):
        # Credentials/token problem — no operation request was ever sent.
        log.error("auth failed: %s (%s)", e.error.error, e.error.error_description)
        raise ConfigurationError("API credentials rejected") from e
    ...  # the operation's own error union
```

Treat this as a **configuration** failure, distinct from an operation rejection: nothing was attempted,
so retrying it or reporting it as a failed operation are both wrong. `python-error-handling` has the
full catch ladder.

## Combined / multiple schemes

When an operation (or the whole API) requires more than one scheme, APIMatic composes them per
operation — OpenAPI's OR-of-ANDs, arm by arm — and the generated client wires the composition for you.
You configure it by setting the relevant credentials keywords:

- **AND** (`AllSchemes`) — every *configured* member applies to the request.
- **OR** (`AnySchemes`) — the first *configured* member applies. Selection is on **credential presence**,
  never on "applying it did not fail", so an unconfigured member listed first cannot win and send the
  request unauthenticated.

**This layer never withholds a request over a missing credential, and never raises for one.** An
unconfigured member simply drops out and the request goes out with whatever *was* configured; with
nothing configured at all it goes out unauthenticated. The server decides. Because composition is
per-operation, one client may authenticate different operations with different schemes — set every
keyword the operations your integration calls actually need.

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

- A given SDK only exposes the credentials keywords for the schemes its API uses; those names are
  generated per-API (hence the `{...}` placeholders above).
- **Omitting a credentials keyword is legal and silent.** The client is then built with a no-auth
  scheme and requests go out unauthenticated. Nothing warns you at construction. Most APIs then
  answer `401`; an API that serves anonymous traffic at all (public endpoints, or a reduced rate
  limit for keyless callers) answers `200` and hides the omission entirely — so verify the keyword is
  actually set rather than waiting for a `401` to tell you, and if you *are* getting blanket `401`s,
  check that before suspecting the credentials themselves.
- Set credentials **at construction**. The scheme is built there; assigning to a private attribute
  afterwards is not supported. To rotate a credential, build a new client and close the old one.
- Rotation with a long-lived client: the token cache is per client instance, so swapping in a new
  client atomically (build, then replace the reference, then close the old one) rotates without a
  window where calls have no credential.
- A per-call `extra_headers` outranks the credential: header precedence is API-wide → the endpoint's
  own → auth → `extra_headers`. That is the deliberate way to override an `Authorization` header — or
  blank it for a call meant to go out anonymous — and also the way to break auth by accident.
