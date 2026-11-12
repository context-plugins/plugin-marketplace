---
name: python-error-handling
description: Load before writing any try/except around an APIMatic-generated Python SDK call, an exception-translation layer or error middleware. Covers the SdkError family — ApiError and its per-operation error union, ResponseDecodeError, SdkConnectionError / SdkTimeoutError and AuthSchemeError — narrowing with isinstance or match, and with_raw_response.
---

# Error handling for an APIMatic Python SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{Operation}`, `{Group}`, `{root_package}`) — replace it with the concrete identifier from the
> source.

Operations **raise on non-2xx responses** by default (for a non-raising alternative, see the
**`with_raw_response`** section below). Everything the SDK raises for a call derives from one root,
`SdkError`, so one `except SdkError` covers any number of calls:

| Exception | Raised when | Attributes beyond `method`, `url` |
|---|---|---|
| `ApiError[E]` | an error status (parsed mode only) | `error`, `status_code`, `headers` |
| `ResponseDecodeError` | a body, 2xx or documented error, its declared type rejects | `status_code`, `headers` |
| `SdkConnectionError` | no usable response: the send failed after the retries, or the body read failed | — |
| `SdkTimeoutError` (a `SdkConnectionError`) | the connection failure that was a timeout | `timeout` |
| `AuthSchemeError` | a credential that could not be applied | `scheme_failures` |

Every member names the call (`e.method`, and `e.url`, the path rendered with no query) and keeps what
caused it, as the library or pydantic raised it, on `e.__cause__`. `ApiError` and `ResponseDecodeError`
are **siblings**: `except ApiError` never catches a 2xx that broke its contract, and
`except (ApiError, ResponseDecodeError)` spells "the server answered".

```python
from {root_package}.core import ApiError, RawError, SdkError
```

`ApiError` is generic in its payload (`ApiError[E]`), but you catch it **unparametrized**. A runtime
`except` clause cannot discriminate a type parameter, so `except ApiError` catches every operation's
failure and you narrow on `e.error` afterwards.

## Catch the exception

`ApiError` carries three things beyond the call:

| Attribute | Type | Notes |
|---|---|---|
| `e.error` | the operation's error union | The decoded body. **This is the information.** |
| `e.status_code` | `int` | The status that failed — set whichever arm of the union you got. |
| `e.headers` | `Mapping[str, str]` | The response head, keys lowercased. |

**`str(e)` and `repr(e)` deliberately omit the body**, so response bodies stay out of logs and
tracebacks: `str(e)` is the call and the status, `GET https://host/path returned 404 (Not Found)`, and
`repr(e)` the status and the payload's *type name*. A
handler that logs `str(e)` and nothing else discards every diagnostic; read `.error` and log the
fields you choose.

### Which error union does an operation carry?

Every operation's union is declared in its own module, `{root_package}/errors/{operation}_error.py`,
as a type alias:

```python
{Operation}ErrorBody: TypeAlias = {TypedError} | RawError
```

Four places give you that alias, in order of preference:

1. **The contract sheet** — it lists the union per operation.
2. **The operation's map block** (`map/operations/{group}.md`) — its **Error** line names the alias
   and its case, and its **Error arms** bullet lists each arm *with the HTTP statuses it maps from*.
3. **The operation's docstring**, whose `Raises:` section ends with the union verbatim:
   `` `error` is `{TypedError} | RawError`. ``
4. **The error module itself**, whose `map` is a `match` on `status_code` naming the schema each
   status decodes to.

**`RawError` is always the last arm**: any status the operation does not document yields `RawError`,
so no operation's failure is guaranteed typed. An operation that documents *no* error schema has no
error module at all and always yields `RawError`.

### Narrowing the union

> **Applies only when the operation declares a typed arm (Case A).** An SDK whose map reports zero
> per-operation error unions, or an operation whose alias is `RawError` alone (Case B), has nothing to
> narrow — `e.error` is always `RawError` there. Skip to *Result-style alternative* for those.

**The typed arm differs per operation.** A check written against one operation's arm silently falls
through to the `RawError` branch on another's and loses every field it carried, so take each
operation's arms from its own sheet row or the map's per-operation **Error arms** bullet — never from
a sibling call.

An operation can also declare **more than one** typed arm — one per documented status or status
*range* (`4XX`, `5XX`), so a union may read `{TypedError1} | {TypedError2} | RawError`. Handle each.

Narrow with `match` or `isinstance` — a type checker understands both — on a class arm only; a `oneOf`
alias is not a class either, so match its variants. After narrowing the class arms, what remains is
the `Any`, `list[...]` or `dict[...]` body: branch on `e.status_code` there. `isinstance(e.error, Any)`
and `case Any()` raise `TypeError`, and mypy flags neither.

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

Every operation's raw peer, reached through `with_raw_response`, returns the outcome instead of
raising — **2xx is `Success`, everything else is `Failure`**, both carrying `.status_code` and
`.headers` (`python-calling-endpoints` has the mechanics):

```python
from {root_package}.core import Success, Failure

match client.{Group}.with_raw_response.{Operation}(...):
    case Success(payload=value):
        ...
    case Failure(error=err):
        ...        # 'err' is the same union as the raising path
```

On the failure path `ApiError` already carries the status and headers, so choosing this mode there is
about whether you want an exception — use it when a non-2xx is an expected outcome. **It is not
exception-free**: the rest of the family — a decode, connection or authentication failure — raises in
both modes (next section). Map a
`Failure` through the same function as the raising path — see *Guarding every call site*.

## The failures that are not `ApiError`

Each of these reaches your boundary without matching `except ApiError`, and each is an `SdkError`.

### Decode failures — `ResponseDecodeError`, in *both* response modes

If a body does not deserialize, the call raises `ResponseDecodeError` — pydantic's `ValidationError`,
or the parser's `ValueError` for a body that is not JSON at all, is its `__cause__` — in both response
modes: `with_raw_response` does **not** convert it into a `Failure`. Its `status_code` tells apart two
cases that mean opposite things:

- **A 2xx whose body drifted** → the call may well have *succeeded* server-side and you cannot read
  the result. The outcome is **unknown** (a 5xx at your boundary). For a write, re-read state rather
  than retrying blindly.
- **A non-2xx whose body does not match the declared error schema** → the request was **rejected**;
  only the detail was lost. Retrying can never succeed, so do not report it as an outage — a 5xx tells
  a retrying caller to keep retrying.

**On the success path a missing member does not raise.** Only a model's bare-annotated members are
required — on a response model often none — and every other member defaults to `UNSET`, so a response
missing a field validates cleanly:

```python
value = client.{Group}.{Operation}(...)   # 200 with a truncated or empty body
value.{member}                            # UNSET — not an exception, not None
```

A `ResponseDecodeError` on a 2xx means a *type* mismatch or a non-JSON body, not an absent field. Guard the
members you depend on, immediately after every call that matters:

```python
value = client.{Group}.{Operation}(...)
if value.{member} is UNSET:
    raise ProviderError(502, "{Operation} returned no {member}", outcome_unknown=True)
```

For a write, an absent identifier is "outcome unknown" like a decode failure — the call may have taken
effect and you cannot name what it created. Nothing in the SDK does this for you.

### Connection failures — `SdkConnectionError`, the library's exception on `__cause__`

Connection refused, DNS failure, TLS error, dropped socket and timeouts reach you — after the last
attempt — as `SdkConnectionError`, with the `httpx2` exception on `__cause__`; a timeout is its leaf
`SdkTimeoutError`, whose `timeout` is the window that elapsed. Whether the request reached the server
is a property of the **cause's** class:

| exception | did the request reach the server? | outcome |
| --- | --- | --- |
| `httpx2.ConnectError` | **no** — refused, DNS failure, TLS rejected | **known**: nothing happened |
| `httpx2.ConnectTimeout` | **no** — the connection was never established | **known**: nothing happened |
| `httpx2.PoolTimeout` | **no** — no connection was ever acquired from the pool | **known**: nothing happened |
| `httpx2.ProxyError` | **no** — the proxy refused before forwarding | **known**: nothing happened |
| `httpx2.ReadTimeout` | **maybe** — the request went out, the reply never came | **unknown** |
| `httpx2.WriteTimeout` | **maybe** — sending was interrupted mid-body | **unknown** |
| `httpx2.RemoteProtocolError` | **maybe** — the peer closed after the request went out | **unknown** |

`ConnectTimeout`, `PoolTimeout` and `ReadTimeout` all arrive as `SdkTimeoutError` yet fall on
**opposite sides of this table**, so `except SdkTimeoutError` does not split them — test `__cause__`:

```python
import httpx2
from {root_package}.core import SdkConnectionError

NEVER_SENT = (httpx2.ConnectError, httpx2.ConnectTimeout, httpx2.PoolTimeout, httpx2.ProxyError)

except SdkConnectionError as e:
    if isinstance(e.__cause__, NEVER_SENT):
        ...   # Nothing reached the provider. Fail the operation outright; there is nothing to reconcile.
    else:
        ...   # It may have landed. Record the outcome as UNKNOWN and reconcile before any retry.
```

A `__cause__` of `None` (a custom transport that chained nothing) falls to the unknown arm, the safe
one. `PoolTimeout`, the saturated-pool failure that arrives in bulk under load, was never sent;
marking it unknown floods reconciliation with requests that never left. A custom transport
(`python-client-initialization`) raises this family too, with *its* library's classes on `__cause__`,
so `NEVER_SENT` needs those.

### A streamed download moves the failure out of the call

A file response returns as soon as the *head* arrives, so its status and headers are final, but a
connection dropped mid-transfer raises out of `read()`, `iter_bytes()` or `save_to(...)` — not out of
the call — and a `try` wrapped around the call alone catches nothing (`python-file-handling` has the
lifecycle, async included):

```python
f = client.{group}.{operation}(...)      # returns on the head; nothing is downloaded yet
try:
    f.save_to("out.bin")                 # the connection failure surfaces here
except SdkConnectionError:
    ...
```

### An event stream raises from the loop

An operation that returns an event stream succeeds as soon as the head arrives, like a download. What
follows raises from the **loop**: a frame the event type rejects, an oversized event or bad UTF-8
raises `ResponseDecodeError` after the stream has closed, and a dropped or stalled connection raises
`SdkConnectionError` — there is no SSE-specific class.
`python-event-streams` has the full table.

### A paginator raises from the loop

A paginated operation sends nothing at the call — it returns a `Paginator` — so its failures arrive
while iterating. Parsed item iteration raises `ApiError` at the failed page, after every item before
it: **wrap the `for`, not the call**.

```python
try:
    for item in client.{group}.{operation}(...):
        ...
except ApiError as e:
    ...
```

Raw mode never raises for an API error. Iterating the raw paginator for items yields the items of
every successful page and ends at the failed one; `iter_pages()` yields each page's `ApiResult`, and
a `Failure` is the last one it yields, so the walk ends there with the error body and no exception.
`ResponseDecodeError` and `SdkConnectionError` still raise from either loop, and a link walk raises
`ValueError` on a next link to a different origin.

### Authentication failures — `AuthSchemeError`

A credential that could not be applied raises `AuthSchemeError`, naming **your** call, not the token
endpoint's, so an `except ApiError` around the call never catches a token endpoint's `401`. The
scheme's own failure is `__cause__`, and every failure is in `scheme_failures`:

| `e.__cause__` | What happened |
|---|---|
| `ApiError` (its `error` a `RawError`) | the token endpoint refused; the RFC 6749 `error` code is in `e.__cause__.error.json()` |
| `SdkConnectionError` | the token endpoint could not be reached |
| `ResponseDecodeError` | the token endpoint answered with a body it should not have |
| `AnySchemesError` | every configured member of an OR requirement raised |
| anything else | your own scheme or token source raised it |

Two consequences:

- It surfaces out of the **operation call**, because the token is fetched lazily on first use. The
  traceback points at whichever operation ran first, not at the client you configured.
- It raises in `with_raw_response` mode too, because the fetch happens while the request is being
  built, before anything is sent.

Nothing was ever sent, so it is a configuration fault, not a rejection. The `except AuthSchemeError`
arm below maps it that way.

**A missing credential raises nothing**: the request goes out without it and the provider answers,
typically `401` (`python-authentication`).

### Your own mistakes

`ValidationError` from constructing a model with a missing or wrong-typed member, `TypeError` from
passing a positional argument to a keyword-only signature, and the `ValueError` for a value the SDK
refuses before sending (a path value its type rejects) are programming errors. None is an
`SdkError`. Let them fail
loudly in development; do not let a production ladder swallow them.

## Guarding every call site

**Guard reads, not just writes.** It is easy to wrap the calls that create or modify something and
overlook the ones that only read — especially reads on a routine path (loading a screen, a scheduled
job, a health check). A connection failure during a read fails just as hard as one during a write. A
call left unguarded next to one that is guarded is the one that breaks.

**Convert failures to your own type in one place**, so the rest of the code has a single failure type
rather than several. The type is yours: the SDK's family says *what happened*, and yours carries *what
your boundary answers*. If your codebase already has an
error type, give it these two fields instead of adding another:

```python
class ProviderError(Exception):
    def __init__(self, status_code, message, *, outcome_unknown=False):
        super().__init__(message)
        self.status_code = status_code          # the status your boundary returns
        self.outcome_unknown = outcome_unknown  # whether anything may have happened upstream
```

One map turns the provider's answer into it, keyed on the status and the decoded body — the same
arms whichever way you called (below):

```python
import httpx2
from {root_package}.core import ApiError, AuthSchemeError, ResponseDecodeError, SdkConnectionError
from {root_package}.models import {TypedError}

NEVER_SENT = (httpx2.ConnectError, httpx2.ConnectTimeout, httpx2.PoolTimeout, httpx2.ProxyError)

def provider_error(status, error) -> ProviderError:
    match (status, error):
        # OUR credentials or OUR quota: the caller did nothing wrong and cannot fix it.
        case (401 | 403, _):
            return ProviderError(502, "provider refused our credentials")
        case (429, _):
            return ProviderError(503, "rate-limited")

        # The provider rejected THE CALLER'S request: hand back the same status so they can act on it.
        case (s, {TypedError}() as body) if 400 <= s < 500:
            return ProviderError(s, body.{message_field})
        case (s, _) if 400 <= s < 500:
            return ProviderError(s, "The provider rejected the request.")

        # A provider 5xx: no meaningful caller status, and a write may have landed.
        case _:
            return ProviderError(502, "Provider unavailable.", outcome_unknown=status >= 500)

try:
    result = client.{Group}.{Operation}(...)

except ApiError as e:
    raise provider_error(e.status_code, e.error) from e

except AuthSchemeError as e:
    raise ProviderError(502, "provider refused our credentials") from e   # never sent: configuration

except ResponseDecodeError as e:
    if 200 <= e.status_code < 300:
        raise ProviderError(502, "unreadable response", outcome_unknown=True) from e   # do NOT assume failure
    raise provider_error(e.status_code, None) from e                                  # rejected; detail lost

except SdkConnectionError as e:
    if isinstance(e.__cause__, NEVER_SENT):
        raise ProviderError(502, "Never sent.", outcome_unknown=False) from e   # KNOWN: nothing happened
    raise ProviderError(504, "No response.", outcome_unknown=True) from e       # UNKNOWN: may have landed
```

**Your own time limit needs its own arm.** In async code, an `asyncio.wait_for` around the call raises
`asyncio.TimeoutError`, which none of these arms catches — map it like a read timeout:
`ProviderError(504, "No response.", outcome_unknown=True)`.

**The raw variant maps through the same function.** A `Failure` is a value, not an exception, so there
is nothing to chain `from`; and a refused token fetch still raises `AuthSchemeError` here (it happens
before the request is sent), so the `except` arms above stay around the raw call too:

```python
match client.{Group}.with_raw_response.{Operation}(...):
    case Success(payload=value):
        ...
    case Failure(error=err, status_code=status):
        raise provider_error(status, err)
```

⚠ **Two arms raising the same class with the same values is not a split.** The distinction has to
reach something that acts on it, or it is a comment. Note that both arms above raise the **same
class** on purpose — what differs is the **values they pass**, so there is no way to write either
line without deciding which case you are in. Two different class names carrying the same status and
no flag gives you two `except` arms, two messages, and **one behaviour**.

The carrier is the two fields on `ProviderError` above, and both arms must set them; and somewhere
downstream, something that branches on **both** of them:

```python
except ProviderError as e:
    if e.outcome_unknown:
        schedule_reconciliation(operation, reference)   # settle what actually happened
    return error_response(e.status_code, safe_message)  # 502 never sent · 504 outcome unknown
```

Test that the two inputs yield different `(status_code, outcome_unknown)` (`python-testing`).

Always `raise ... from e`. Losing `__cause__` costs you the traceback that names which path you were on.

## Presenting failures at your boundary

**Handle each failure kind the same way everywhere.** Pick one mapping from failure kind → outcome and
apply the identical ladder at every call site. When the same kind of failure becomes a different
result on a different operation, callers cannot reason about it.

**Keep distinct failures distinct — carry the provider's status.** A provider **4xx** the caller can
act on (validation, conflict, not-found) surfaces as that same client 4xx; a transport failure or an
unknown error has no meaningful client status and belongs at 5xx. Collapsing everything into one
blanket status discards the only signal separating "you sent something invalid" from "the provider is
down".

**Never map a parse failure onto a domain absence.** "I could not read the answer" is not "the
provider said no". On a lookup both leave you without a record, but only one is a fact — and where a
lookup gates a create, conflating them turns a corrupt response into a spurious create. If a miss is
signalled by an empty body, match on *empty*, not on *unparseable*.

**Never surface `str(e)` or a traceback to your caller** — an `SdkError`'s message names the provider's
URL, and its `__cause__` (a pydantic `ValidationError`, an `httpx2` error) embeds field-path and host
detail. Log the detail, return a message you wrote.

## Notes

- **Retries are on by default**; what you catch is the last attempt's failure, the same one a single
  attempt would raise (`python-configuration-resilience`).
- **A `401` drops the cached token without retrying the call** (`python-authentication`): your code
  sees one `401` — your boundary answers `502` — and the next call fetches a fresh token.
- Every `SdkError` pickles, so it survives crossing a process boundary (a Celery result, a
  multiprocessing queue) with its payload intact; `copy` and `deepcopy` work too.
- Your own cancellation (`KeyboardInterrupt`, `asyncio.CancelledError`) is never wrapped.
