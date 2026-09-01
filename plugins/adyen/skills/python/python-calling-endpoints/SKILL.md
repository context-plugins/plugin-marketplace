---
name: python-calling-endpoints
description: Calling operations on an APIMatic-generated Python SDK — finding the group that owns an operation, the positional/keyword-only split and the parameters that never appear in the signature at all, passing a body as a model or a dict, the two response modes, per-call request options, and async usage. Load before writing the first call to an SDK operation, or when an operation's shape or return type is unclear.
---

# Calling endpoints on an APIMatic Python SDK

Operations are methods on **group accessors** of the client, named in `snake_case`:
`client.{group}.{operation}(...)`. An operation that belongs to no group sits **directly on the
client**, called `client.{operation}(...)`. The accessor, the exact operation name and its signature
come from the contract sheet, grounded in the SDK map's per-controller page
(`map/operations/{group}.md`), whose block for each operation is headed by its full accessor path and
carries the signature verbatim — operation names follow no fixed verb/resource pattern, so take the
real name from the sheet, never from memory.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{group}`,
> `{operation}`, `{Model}`) — replace it with the concrete identifier from the source.

## Method signature convention

Every endpoint lays its parameters out in the same fixed shape:

```python
def {operation}(
    self,
    {required params},                  # path, then query, then header, then body — in that order
    *,
    {optional params} = {default},      # same source order
    request_options = None,             # always the last slot
) -> {ReturnType}: ...
```

Everything after `*` is keyword-only and **every one of them has a real default**, so there is no
parameter you must pass `None` to just to reach a later one. Omit what you do not need; spelling out
`some_header=None, some_filter=None` is noise that hides the parameters you meant to set.

### Where a parameter lands — the rule

Each parameter the description declares produces **one of three** outcomes, and the third one catches
people out:

| What the description declares | What you get |
|---|---|
| **required**, no fixed value | a **positional** parameter, no default |
| **optional** | a **keyword-only** parameter defaulting to `None` |
| a **default value** | a **keyword-only** parameter defaulting to *that value* — even if the parameter is required |
| a **constant** value | **no parameter at all** — the value is baked into the request and you cannot change it |

Two consequences worth stating on the contract sheet:

- **"Required" does not mean "path".** Positional parameters are ordered **path → query → header →
  body**, so a required *query* or *header* parameter is positional too, sitting between the path
  parameters and the body. Take the boundary from the sheet; never infer it from the URL.
- **A parameter with a declared default is keyword-only whatever its optionality**, and the SDK sends
  that default on every call you don't override.

### Non-`None` defaults silently narrow what comes back

This is the single most common wasted afternoon on a generated SDK. A parameter carrying a
spec-declared default is *always sent*, so the response you get is the one that default asked for —
not the full resource. Typical shapes:

- a representation/verbosity switch defaulting to the minimal form, so a create returns little more
  than an id, a status and some links;
- a field-selector defaulting to one section, so whole branches of the response are simply absent.

Read the sheet's default column **before** concluding the API dropped data. It was never requested.

## Passing a body

How the body appears depends on the media type the operation declares. The operation's map block
settles both: its **Params** bullet labels the body parameter with its media type (`body — JSON
body`), and its **Type sources** table names the module declaring the request model and its `…Dict`
companion.

**JSON** — one parameter, typed as a union of the model and its `TypedDict` companion, so both
spellings type-check:

```python
from {root_package}.models import {Model}

client.{group}.{operation}({Model}(field=...))    # model
client.{group}.{operation}({"field": ...})        # dict — companions nest too
```

Prefer models in application code: better inference, better errors, and required members are enforced
at construction. The dict form suits payloads assembled from external data. See `python-models`.

**Form and multipart** — there is **no single body parameter**. Each field (and each file) becomes its
own parameter, following the same three-way split rule above. Do not go looking for a `body=`; read the
signature.

**No payload** — no body parameter at all.

**An optional-looking body is not permission to omit it.** A body typed `... | None = None` reflects
what the *description* marked optional, not what the endpoint needs. A create whose body is optional in
the spec will type-check with no arguments and then fail at the provider. Where a call obviously needs
a payload, pass one.

Serialization happens while the request is built, **before** anything is sent — so a body the SDK
cannot dump raises out of the call with no request made. See `python-models`.

## Making the call and reading the response

Operations come in two forms, and choosing between them is a real design decision.

**Parsed (the default).** Returns the decoded payload directly — no envelope to unwrap. On a non-2xx it
raises `ApiError`:

```python
value = client.{group}.{operation}(...)
```

**Non-raising — `with_raw_response`.** Returns a result you branch on. Use it when you need the
**status code or response headers** (the parsed form exposes neither on success), or when a non-2xx is
an expected outcome rather than an exception:

```python
from {root_package}.core import Success, Failure

match client.{group}.with_raw_response.{operation}(...):
    case Success(payload=value, response=resp):
        print(resp.status_code, value)
    case Failure(error=err, response=resp):
        print(resp.status_code, err)
```

Both are frozen dataclasses, so `match` needs no boilerplate and `isinstance` narrowing is equivalent.
`.unwrap()` collapses either back to the payload — which is literally how the parsed form is built:
every parsed method is its raw peer plus `.unwrap()`.

**`with_raw_response` removes one exception path, not the need for a `try`.** Two failures still raise
in both modes: a failed token fetch (it unwraps internally), and any decode failure. See
`python-error-handling`.

### Return types

Three shapes, and the sheet names which one each operation has — the map block states it directly as
**Returns (parsed)** and **Returns (raw)**:

- **A decoded model** — the JSON case, and the common one.
- **Text** — a `str` or other scalar, for an operation declaring a text response.
- **`None`** — the operation declares no response body.

**`-> None` means the call succeeded.** Do not bind it and do not test it — success is "no exception
raised", exactly as for the others. Two follow-ons: if you need the resulting state, re-read it with a
separate call; and if you need the status code (`200` vs `204`), the raw peer is `ApiResult[None, ...]`
and `Success(payload=None, response=resp)` is the only place it appears.

Writing `value = client.{group}.{operation}(...)` on a `-> None` operation type-checks under a loose
annotation and then fails later with an `AttributeError` on `None`.

## Per-call overrides — `request_options`

Every operation's last parameter is `request_options`, the SDK's single per-call override channel,
accepted typed or dict-shaped:

```python
client.{group}.{operation}(..., request_options={"timeout": 5.0})
```

The keys are exactly `timeout` (seconds, must be > 0) and `extra_headers`. It is validated with
`extra="forbid"`, so `{"timeuot": 5}` raises `ValidationError` rather than being ignored — and because
the dict form is a closed `TypedDict`, a type checker catches it at the call site first.

`extra_headers` wins over both the API's and the endpoint's own headers, which makes it the deliberate
way to override a header the SDK sets — including blanking an auth header for a call meant to go out
anonymous. That precedence is a footgun as much as a feature: setting `authorization` here overrides
the managed token.

Two mechanics:

- **Header names are lowercased on the way out**, at every layer including yours, so the merge is
  genuinely case-insensitive and the request reaching the transport is keyed in lowercase. Look
  request headers up that way (`python-testing`).
- **`Cookie` folds instead of replacing.** Every other field takes the later layer and discards the
  earlier; a cookie you add joins the jar alongside whatever the endpoint or a credential put there
  (RFC 6265 permits one `Cookie` field). So a cookie-carried credential cannot be blanked with
  `extra_headers` the way a header-carried one can.

## Async

The async client's operations are identical in name and parameters — you await them. There is no
`_async` suffix and no separate method list; the client class you hold decides the flavour:

```python
value = await client.{group}.{operation}(...)

match await client.{group}.with_raw_response.{operation}(...):
    case Success(payload=value): ...
```

Do not mix the two clients in one call path (`python-client-initialization`).

To run independent calls concurrently — the main reason to choose the async client at all — gather
them, but bound the concurrency: `gather` over a long list opens as many simultaneous requests as the
list is long, against a provider that rate-limits.

```python
sem = asyncio.Semaphore(10)

async def one(arg):
    async with sem:
        return await client.{group}.{operation}(arg)

results = await asyncio.gather(*(one(a) for a in args))
```

## Timeouts and cancellation

There is no cancellation-token parameter. Python's own mechanisms apply:

- **Per call** — `request_options={"timeout": ...}`, the direct way to bound one request.
- **Around a block** — `asyncio.timeout(...)` (3.11+) or `asyncio.wait_for`, to bound a whole operation
  including your own surrounding work. Cancellation raises `CancelledError`/`TimeoutError` through the
  await, which an `except ApiError` clause will **not** catch.
- **Sync code has no external cancellation.** The timeout *is* the mechanism, so set one.

## Next

- Models, enums, `UNSET` → **python-models**
- Exceptions and error unions → **python-error-handling**
- Timeouts, base URLs, proxies, and **verifying a new call on the wire** →
  **python-configuration-resilience**
