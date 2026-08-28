---
name: python-error-handling
description: Error and exception handling for an APIMatic-generated Python SDK — load before writing any try/except around an SDK call, an exception-translation layer, or error middleware. Covers the single ApiError type and its per-operation error union, narrowing with isinstance or match, the failures that are NOT ApiError and reach your boundary unmatched, and the traps that make an otherwise reasonable except ladder silently wrong.
---

# Error handling for an APIMatic Python SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{Operation}`, `{Group}`, `{root_package}`) — replace it with the concrete identifier from the
> source.

Operations **raise on non-2xx responses** by default (for a non-raising alternative, see the
**`with_raw_response`** section below). The raised type is always `ApiError` — there is exactly one
exception class in these SDKs, and the variation lives entirely in the payload it carries.

```python
from {root_package}.core import ApiError, RawError
```

`ApiError` is generic in its payload (`ApiError[E]`), but you catch it **unparametrized**. A runtime
`except` clause cannot discriminate a type parameter, so `except ApiError` catches every operation's
failure and you narrow on `e.error` afterwards. This is the opposite of a generator that encodes the
error type into the exception class: here the compiler-equivalent check happens at the `isinstance`,
not at the `except`.

## Catch the exception

`ApiError` carries three things:

| Attribute | Type | Notes |
|---|---|---|
| `e.error` | the operation's error union | The decoded body. **This is the information.** |
| `e.response` | `HttpResponse` | `status_code`, `headers`, `content`, `text()`, `json()` |
| `e.status_code` | `int` | Shortcut for `e.response.status_code` |

**`str(e)` and `repr(e)` deliberately omit the body.** They render as `HTTP 422: {TypedError}` — the
status and the payload's *type name* only, so response bodies stay out of logs and tracebacks by
default. That is a sound default and a trap: a handler that logs `str(e)` and nothing else records
that something failed and discards every diagnostic. Read `.error` explicitly and log the fields you
choose.

The status is **always** on `e.status_code`, whichever arm of the union you got — you never have to
choose between a typed body and knowing the status.

### Which error union does an operation carry?

Every operation's union is generated into its own module, `{root_package}/errors/{operation}_error.py`,
as a type alias:

```python
{Operation}ErrorBody: TypeAlias = {TypedError} | RawError
```

Four places give you that alias, in order of preference:

1. **The contract sheet** — it lists the union per operation.
2. **The operation's map block** (`map/operations/{group}.md`) — its **Error** line names the alias
   and its case, and its **Error arms** bullet lists each arm *with the HTTP statuses it maps from*.
   This is where the sheet's row should have come from.
3. **The operation's docstring**, whose `Raises:` section ends with the union verbatim:
   `` `error` is `{TypedError} | RawError`. ``
4. **The error module itself**, whose `map` is a `match` on `response.status_code` naming the schema
   each status decodes to.

**`RawError` is always the last arm.** The generator emits it unconditionally as the catch-all, so
every operation can hand you a `RawError` for any status it does not document — there is no operation
whose failure is guaranteed typed. An operation that documents *no* error schema has no error module
at all and always yields `RawError`.

### Narrowing the union

> **Applies only when the operation declares a typed arm (Case A).** An SDK whose map reports zero
> per-operation error unions, or an operation whose alias is `RawError` alone (Case B), has nothing to
> narrow — `e.error` is always `RawError` there. Skip to *Result-style alternative* for those.

**The typed arm is not one type across the API, and assuming it is is the mistake that costs the
afternoon.** A description that declares a different error schema per tag gets a different model per
tag, so a check written against one operation's arm silently fails on another's — those failures fall
through to the `RawError` branch and lose every field they actually carried. Take the arm from the
contract sheet per operation — the map's **Error arms** bullet is per-operation for exactly this
reason — never reuse one from a sibling call.

An operation can also declare **more than one** typed arm — one per documented status or status
*range* (`4XX`, `5XX` are legal), so a union may read `{TypedError1} | {TypedError2} | RawError`.
Handle each arm you declared.

Narrow with `match` or `isinstance`; both are understood by a type checker:

```python
from {root_package}.core import ApiError, RawError
from {root_package}.models import {TypedError}

try:
    result = client.{Group}.{Operation}(...)
except ApiError as e:
    match e.error:
        case {TypedError}() as err:
            log.warning("rejected: %s (%s)", err.{message_field}, e.status_code)
        case RawError() as raw:
            log.error("HTTP %s: %s", raw.status_code, raw.text())
```

Where your boundary treats every provider rejection alike and the API declares several typed arms,
group them into one tuple rather than writing a clause each — but only over members they **all**
declare as required:

```python
PROVIDER_ERRORS = ({TypedError1}, {TypedError2})     # all declare {message_field}

if isinstance(e.error, PROVIDER_ERRORS):
    ...
```

`RawError` exposes `status_code`, `content`, `text()` and `json()`. **`json()` raises `ValueError`
when the body is not JSON** — and a `RawError` body often is not, since it is by definition the
undocumented case — so prefer `text()` for logging unless you know better.

## Result-style alternative — `with_raw_response` (no raising)

Every operation has a raw peer reached through `with_raw_response`, which returns the outcome instead
of raising:

```python
from {root_package}.core import Success, Failure

match client.{Group}.with_raw_response.{Operation}(...):
    case Success(payload=value):
        ...
    case Failure(error=err):
        ...        # 'err' is the same union as the raising path
```

`Success` and `Failure` are frozen dataclasses, so pattern matching needs nothing added; both carry
`.response`, which is **the only way to read response headers**. `.unwrap()` collapses either back to
the raising behaviour — in fact every parsed method is literally its raw peer plus `.unwrap()`.

The split is mechanical: **2xx is `Success`, everything else is `Failure`.** No nuance, no per-status
judgement. Use this variant when you need the status code or headers on the *success* path, or when a
non-2xx is an expected outcome rather than an exception.

**This mode is not exception-free.** See the next section: a decode failure raises in both modes, and
so does a failed token fetch.

## The failures that are not `ApiError`

Each of these reaches your boundary without matching `except ApiError`.

### Decode failures — and they bypass *both* response modes

If a body does not deserialize, decoding raises `pydantic.ValidationError` (a subclass of
`ValueError`), or a plain `ValueError` when the body is not JSON at all. The pipeline states the rule
outright: *a deserialization failure is not an API error, so it propagates in both response modes
rather than becoming a failure.* `with_raw_response` does **not** convert it into a `Failure`.

It arrives from two directions that mean opposite things:

- **A 2xx whose body drifted** → the call may well have *succeeded* server-side and you cannot read
  the result. The outcome is **unknown**. For a write, re-read state rather than retrying blindly.
- **A non-2xx whose body does not match the declared error schema** → the request was **rejected**;
  only the detail was lost. Retrying is pointless, since it can never succeed.

Mapping both to a 5xx is wrong half the time. At minimum, do not report a deterministic rejection as
an outage.

**On the success path this fires far less often than you would expect, and the gap it leaves is
worse.** Models are generated with required members only where the description marks them required —
which is frequently nowhere — and every other member defaults to `UNSET`. A response missing a field
therefore validates cleanly:

```python
value = client.{Group}.{Operation}(...)   # 200 with a truncated or empty body
value.{member}                            # UNSET — not an exception, not None
```

A `ValidationError` on a 2xx means a *type* mismatch or a non-JSON body, not an absent field. So the
guard belongs somewhere else than you would place it by habit:

```python
value = client.{Group}.{Operation}(...)
if value.{member} is UNSET:
    raise ProviderUnreadable("{Operation} returned no {member}; outcome unknown")
```

**Assert on the members you depend on, immediately after every call that matters.** For a write, an
absent identifier has the same "outcome unknown" character as a decode failure — the call may have
taken effect and you cannot name what it created. Nothing in the SDK does this for you.

### Transport failures — the HTTP library's exceptions, unwrapped

The SDK does **not** wrap its transport's exceptions. The protocol says implementations *may raise
their underlying library's exceptions*, and the default transport does not catch: connection refused,
DNS failure, TLS error, dropped socket and timeout all propagate through the SDK untouched. With the
shipped transport those are `httpx` exceptions:

```python
import httpx

except httpx.TimeoutException as e:   # ConnectTimeout / ReadTimeout / …
    ...
except httpx.HTTPError as e:          # base class for the rest
    ...
```

**A write that fails this way has an unknown outcome** — a reset after the bytes reached the server is
indistinguishable from one before.

Note the coupling: your error boundary imports the transport's exception types because the SDK's
transport does. If you supply a custom transport (`python-client-initialization`), it is *your*
transport's exceptions that arrive and this clause needs revisiting.

### Authentication failures wear the same exception

A failed token fetch raises `ApiError` — but its payload is `OAuthProviderError | RawError`, **not**
the operation's union. Two consequences:

- It surfaces out of the **operation call**, because the token is fetched lazily on first use. The
  traceback points at whichever operation ran first, not at the client you configured.
- It raises in `with_raw_response` mode too, because the fetch happens while the request is being
  built, before anything is sent.

Check it **first** in the ladder — nothing was ever sent, so it is a configuration fault, not a
rejection:

```python
from {root_package}.core import OAuthProviderError

except ApiError as e:
    if isinstance(e.error, OAuthProviderError):
        raise ConfigurationError(f"credentials rejected: {e.error.error}") from e
    ...
```

**A missing credential raises nothing at all.** The SDK never refuses to send a request because a
credential is absent — an unconfigured scheme contributes nothing and the request goes out
unauthenticated, so the server decides. With composite (AND/OR) security this holds too: a partial
set is applied as-is rather than withheld. There is no local "auth could not be satisfied" exception
to catch; you get a `401` from the provider instead. See `python-authentication`.

### Your own mistakes

`ValidationError` from constructing a model with a missing or wrong-typed member, and `TypeError` from
passing a positional argument to a keyword-only signature, are programming errors. Let them fail
loudly in development; do not let a production ladder swallow them.

## Guarding every call site

**Guard reads, not just writes.** It is easy to wrap the calls that create or modify something and
overlook the ones that only read — especially reads on a routine path (loading a screen, a scheduled
job, a health check). A connection failure during a read fails just as hard as one during a write. A
call left unguarded next to one that is guarded is the one that breaks.

**Convert failures to your own type in one place**, so the rest of the code has a single failure type
rather than four unrelated ones. Order matters — most specific first, and auth before the operation's
own union:

```python
import httpx
from pydantic import ValidationError
from {root_package}.core import ApiError, OAuthProviderError
from {root_package}.models import {TypedError}

try:
    result = client.{Group}.{Operation}(...)

except ApiError as e:
    if isinstance(e.error, OAuthProviderError):
        raise ProviderConfigError("credentials rejected") from e            # 5xx: our misconfig
    if isinstance(e.error, {TypedError}):
        raise ProviderRejected(e.status_code, e.error.{message_field}) from e   # map 4xx -> 4xx
    raise ProviderFailure(e.status_code, e.error.text()) from e             # RawError arm

except ValidationError as e:
    raise ProviderUnreadable("unreadable response; outcome unknown") from e  # do NOT assume failure

except httpx.HTTPError as e:
    raise ProviderUnavailable("provider unreachable; outcome unknown") from e
```

Always `raise ... from e`. Losing `__cause__` costs you the traceback that names which of the four
paths you were on.

## Presenting failures at your boundary

**Handle each failure kind the same way everywhere.** Pick one mapping from failure kind → outcome and
apply the identical ladder at every call site. When the same kind of failure becomes a different
result on a different operation, callers cannot reason about it.

**Keep distinct failures distinct — carry the provider's status.** A provider **4xx** (validation,
conflict, not-found) is actionable by your caller and should surface as a client 4xx. A transport
failure or an unknown error has no meaningful client status and belongs at 5xx. Collapsing everything
into one blanket status discards the only signal separating "you sent something invalid" from "the
provider is down".

**An unreadable body is two cases, not one — decide which before you map it.** An unreadable
*success* body is genuinely unknown: 5xx. An unreadable *error* body is not — the provider rejected
the request and only the detail was lost, so answering 5xx tells a retrying caller to keep retrying
something that can never succeed.

**Never map a parse failure onto a domain absence.** "I could not read the answer" is not "the
provider said no". On a lookup both leave you without a record, but only one is a fact — and where a
lookup gates a create, conflating them turns a corrupt response into a spurious create. If a miss is
signalled by an empty body, match on *empty*, not on *unparseable*.

**Never surface `str(e)` or a traceback to your caller.** For an SDK exception the string is only
`HTTP 422: {TypedError}`, so it is useless as well as leaky; a `ValidationError` embeds pydantic type
and field-path detail. Log the detail, return a message you wrote.

## Notes

- **There are no retries in this SDK.** No status is retried and nothing is resent on a transport
  failure — whatever you want retried, you build. See `python-configuration-resilience`.
- **A `401` invalidates the cached credential but does not retry the request.** The caller sees one
  `401`, and the *next* call obtains a fresh token. Do not read a single 401 as a permanent
  credential failure.
- `ApiError` implements `__reduce__`, so it pickles — it survives crossing a process boundary (a
  Celery result, a multiprocessing queue) with its payload intact.
- `e.response.headers` has **lowercased keys**, guaranteed by the transport contract — look up
  `"x-request-id"`, never `"X-Request-Id"`.
