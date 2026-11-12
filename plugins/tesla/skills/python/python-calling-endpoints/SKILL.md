---
name: python-calling-endpoints
description: Load before writing the first call to an operation on an APIMatic-generated Python SDK, or when an operation's parameters or return type are unclear. Covers finding the group that owns an operation, the positional/keyword-only split, parameters absent from the signature, bodies as models or dicts, the parsed and with_raw_response modes, return types, iterating a paginator, per-call request_options and async calls.
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

| Declared as | What you get |
|---|---|
| **required**, no fixed value | a **positional** parameter, no default |
| **optional** | a **keyword-only** parameter defaulting to `None` |
| a **default value** | a **keyword-only** parameter defaulting to *that value* — even if the parameter is required |
| a **constant** value | **no parameter at all** — the value is baked into the request and you cannot change it |

**"Required" does not mean "path".** Positional parameters are ordered **path → query → header →
body**, so a required *query* or *header* parameter is positional too, sitting between the path
parameters and the body. Take the boundary from the sheet; never infer it from the URL.

### Non-`None` defaults silently narrow what comes back

A parameter's non-`None` default is **sent on every call** you don't override, so the response you
get is the one that default asked for — not the full resource. Typical shapes:

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
own parameter, following the same rule above. Do not go looking for a `body=`; read the
signature. An optional part is omitted by leaving its parameter at its default: a part passed `None`
is dropped from the body rather than sent empty.

**Raw binary** — one parameter typed `FileInput` (`AsyncFileInput` on the async client), sent as the
whole body with no wrapper around it.

**A text body** — the parameter takes the schema's own type: a `str` for a text schema, and the upload
alias above for a binary one. It is sent as the body as it stands and handed back the same way, and
nothing is encoded or decoded for you — where an endpoint asks for base64, pass content that already is
base64 and decode a base64 response yourself. Arbitrary binary belongs in a raw-binary or multipart
position.

**No payload** — no body parameter at all.

**An optional-looking body is not permission to omit it.** A body typed `... | None = None` does not
mean the endpoint works without one: a create with an optional body type-checks with no arguments and
then fails at the provider. Where a call obviously needs a payload, pass one.

Serialization happens while the request is built, **before** anything is sent — so a body the SDK
cannot dump raises out of the call with no request made. See `python-models`.

### File and binary parameters

A multipart file part and a raw binary body take the same alias — `FileInput` on the sync client,
`AsyncFileInput` on the async one, `list[…]` of either for an array part — imported from
`{root_package}.core`. There is **no `str` arm** at either position — wrap a path in `Path`:

```python
from pathlib import Path

client.{group}.{operation}(Path("invoice.pdf"))    # the default: streams, sized, names itself
```

**Load `python-file-handling`** before passing anything other than a `Path` — what each arm costs,
the part-vs-raw-body differences, and overriding the filename or media type are there.


## Making the call and reading the response

Operations come in two forms, and choosing between them is a real design decision.

**Parsed (the default).** Returns the decoded payload directly — no envelope to unwrap. On a non-2xx it
raises `ApiError`:

```python
value = client.{group}.{operation}(...)
```

**Non-raising — `with_raw_response`.** Returns a result you branch on — **2xx is `Success`,
everything else is `Failure`**, both carrying `.status_code` and `.headers`. Use it when you need the
**status code or response headers** (the parsed form exposes neither on success, except for a file
response, which carries its own `headers`), or when a non-2xx is an expected outcome rather than an
exception:

```python
from {root_package}.core import Success, Failure

match client.{group}.with_raw_response.{operation}(...):
    case Success(payload=value, status_code=status):
        print(status, value)
    case Failure(error=err, status_code=status):
        print(status, err)
```

Both are frozen dataclasses, so `match` needs no boilerplate and `isinstance` narrowing is equivalent.
`unwrap(result)` (from `{root_package}.core`) collapses either back to the payload, raising on a
`Failure` exactly as the parsed form does.

**`with_raw_response` removes one exception path, not the need for a `try`.** Two failures still raise
in both modes: a failed token fetch and any decode failure. See `python-error-handling`.

### Return types

Six shapes, and the sheet names which one each operation has — the map block states it directly as
**Returns (parsed)** and **Returns (raw)**:

- **A decoded model** — the JSON case, and the common one.
- **Text** — a `str` or other scalar, for an operation declaring a text response.
- **A file** — `FileResponse` (`AsyncFileResponse` on the async client), for an operation declaring a
  binary response. Unlike the others it arrives **unread** and holds a connection; see below.
- **An event stream** — `EventStream[T]` (`AsyncEventStream[T]` on the async client), for an operation
  declaring a `text/event-stream` response. It arrives **unread**, holds a connection, and iterating
  it yields `T`; see below.
- **A paginator** — `Paginator[Page, Item]` (`AsyncPaginator[Page, Item]` on the async client), for
  a paginated operation, whose map block also carries a **Paging** bullet. It sends nothing until you
  iterate it, and iterating it yields `Item`s from every page; see below.
- **`None`** — the operation declares no response body.

**`-> None` means the call succeeded.** Do not bind it and do not test it — success is "no exception
raised", exactly as for the others. Two follow-ons: if you need the resulting state, re-read it with a
separate call; and if you need the status code (`200` vs `204`), the raw peer is `ApiResult[None, ...]`
and `Success(payload=None, status_code=...)` is the only place it appears.

### Consuming a file response

A `FileResponse` arrives **unread** and holds its connection until `save_to(...)`, `read()` or a
drained `iter_bytes()` under `with` closes it; the async twin mostly `a`-prefixes them. A mistake
leaks a connection rather than raising, so **load `python-file-handling`** before writing the
consuming code.

### Consuming an event stream

An `EventStream[T]` is iterated, not read: a drained `for` releases its connection, and any early exit
needs `with`. **Load `python-event-streams`** before writing the loop — it carries the lifecycle, the
union narrowing, and the failures that are silent.

### Iterating a paginator

A `Paginator` is a lazy walk over the whole collection, not a page. Calling the method sends nothing;
the first request goes out when you start iterating, and each new iteration starts again from the
first page. Iterate it for items, or call `iter_pages()` for the pages:

```python
for item in client.{group}.{operation}(...):
    ...

for page in client.{group}.{operation}(...).iter_pages():
    ...
```

- **The arguments set the first request only.** The SDK moves the offset, page, cursor or link forward
  from each response and stops on the API's own signals — the map block's **Paging** bullet says
  which. There is no next-page method; to resume from a known point, pass it as the first-page
  argument.
- **Cap a walk with `break` or `itertools.islice`.** There is no page-cap argument, and either stops
  the walk with no further request. A `list(...)` over an uncapped paginator fetches every page.
- **Errors raise from the loop, not the call** — so a `try` around the call alone catches nothing.
  `python-error-handling` has the detail.
- **The raw peer's pages are results.** `client.{group}.with_raw_response.{operation}(...)` returns
  `Paginator[ApiResult[Page, E], Item]` and never raises for an API error: iterating it for items
  yields the items of every successful page and ends at a failed one, and `iter_pages()` yields one
  `Success` or `Failure` per page, the `Failure` last.


## Per-call overrides — `request_options`

Every operation's last parameter is `request_options`, the SDK's single per-call override channel,
accepted typed or dict-shaped:

```python
client.{group}.{operation}(..., request_options={"timeout": 5.0})
```

The keys are exactly `timeout` (seconds, must be > 0), `extra_headers`, and the two retry overrides
`max_retries` and `status_codes_to_retry` (`python-configuration-resilience`). It is validated with
`extra="forbid"`, so `{"timeuot": 5}` raises `ValidationError` rather than being ignored — and because
the dict form is a closed `TypedDict`, a type checker catches it at the call site first.

`extra_headers` wins over the API's, the endpoint's and the auth scheme's headers (precedence
API-wide → endpoint → auth → `extra_headers`), which makes it the deliberate way to override a header
the SDK sets — including blanking an auth header for a call meant to go out anonymous — and the way to
break auth by accident: setting `authorization` here overrides the managed token.

Two mechanics:

- **Header names are lowercased on the way out**, at every layer including yours, so the merge is
  case-insensitive and the request reaching the transport is keyed in lowercase. Look request headers
  up that way (`python-testing`).
- **`Cookie` folds instead of replacing.** Every other field takes the later layer; a cookie you add
  joins whatever the endpoint or a credential put there, so a cookie-carried credential cannot be
  blanked with `extra_headers` the way a header-carried one can.

## Async

The async client's operations are identical in name and parameters — you await them. There is no
`_async` suffix and no separate method list; the client class you hold decides the flavour. The one
exception is a paginated operation: it is a **plain call** returning `AsyncPaginator`, so you
`async for` over it with no `await` on the call.

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

There is no cancellation-token parameter. `request_options={"timeout": ...}` limits each wait of one
request; `asyncio.wait_for(...)` around the call limits the whole call in async code
(`python-configuration-resilience`). Sync code has no whole-call limit — set the timeout anyway.

## Next

- Models, enums, `UNSET` → **python-models**
- Exceptions and error unions → **python-error-handling**
- Timeouts, base URLs, proxies, and **verifying a new call on the wire** →
  **python-configuration-resilience**
