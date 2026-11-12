---
name: python-client-initialization
description: Load before constructing an APIMatic-generated Python SDK client or wiring it into an application — a script, an ASGI app (FastAPI, Starlette), a WSGI app or a forking worker (Gunicorn, Celery). Covers the keyword-only constructor, choosing the sync or async class, transport ownership and the close/aclose obligation, and how long the client lives.
---

# Initializing an APIMatic Python SDK client

This applies to **any** APIMatic-generated Python SDK. Replace placeholders with the real names from
the SDK you are using:

- `{root_package}` — the import root, used in `import` statements. This differs from the distribution
  name you install: you install the hyphenated name but import the underscored one.
- `{Api}Client` / `Async{Api}Client` — the two client classes.
- `{scheme}` — an auth scheme's keyword, one per scheme the API declares (see `python-authentication`).
- `{group}` — an API group accessor on the client.

## Shape of the client

APIMatic Python SDKs expose **two client classes**, sync and async, built from a keyword-only
constructor:

```python
{Api}Client(
    *,
    # server selection — one of four shapes, see "Choosing the server / base URL"
    timeout: float = 30.0,             # seconds
    retry_options=None,                # None: the default policy; 0 disables; a count, RetryOptions or dict tunes it
    logging_options=None,              # what the built-in HTTP logging records — see python-configuration-resilience
    custom_http_client=None,           # your own transport
    {scheme}=None,                     # one credentials keyword per declared scheme
    {scheme}_token_source=None,        # managed-OAuth schemes only
)
```

Every parameter sits after `*` — there are **no positional arguments**, so a positional call is an
immediate `TypeError`. There is no options object, no builder, and no separate configuration type to
populate: everything is a constructor keyword.

Operations hang off **group accessors** — `client.{group}.{operation}(...)`, or `client.{operation}(...)`
for an ungrouped one. Accessors are `cached_property` attributes, not methods: no parentheses, and the
same object each time. Take them from the contract sheet, grounded in the SDK map's controller table
(`sdk-map.md`), not from a runtime `dir()` (`python-calling-endpoints`).

Both classes are also exported under the fixed aliases `Client` and `AsyncClient`. **Prefer the full
names** — a bare `Client` collides in any application that talks to more than one API.

The async class is a peer, not a variant: same accessors, same operation names, same parameters. Four
names differ:

| | Sync | Async |
|---|---|---|
| Transport keyword | `custom_http_client=` | `custom_async_http_client=` |
| Transport protocol | `HttpClient` | `AsyncHttpClient` |
| Shutdown | `client.close()` | `await client.aclose()` |
| Scope form | `with` | `async with` |

## Choosing sync or async

**Pick one from the host application, not from preference, and pick it before the first call.** There
is no bridge between the two, and they fail asymmetrically:

- An **async client used from sync code** returns a coroutine nobody awaits — a `RuntimeWarning` and a
  silently skipped call.
- A **sync client called from `async def`** blocks the event loop. It returns the right answer, tests
  pass, and every other coroutine starves for the duration. This one surfaces only under production
  concurrency, as unexplained latency elsewhere.

FastAPI / Starlette / Litestar / aiohttp → async. Flask, Django under WSGI, Celery, a CLI, a script →
sync. If both layers issue calls, construct one of each rather than bridging with `asyncio.run` inside
a request handler.

## Direct instantiation

```python
from {root_package} import {Api}Client

client = {Api}Client(
    timeout=10.0,
    {scheme}=...,          # see python-authentication
)
```

Construction validates `timeout` (`ValueError`) and dict-form credentials (`ValidationError`), but a
clean construction does not mean a working client: **`base_url` is taken unchecked** — a typo or the
wrong environment surfaces as a connection error or a `401` at the first call — and **credentials are
never exercised**: a managed-OAuth token is fetched on the first call, and an omitted credentials
keyword means no auth (`python-authentication`).

### Transport ownership and the close obligation

Unless you supply one, the client builds a **pooled** HTTP transport and owns it. Leaking that pool
raises nothing — only `ResourceWarning`s in test output and sockets accumulating in a long-running
process.

Use the context manager when the client's life matches a scope:

```python
with {Api}Client(...) as client:              # sync: __exit__ calls close()
    ...

async with Async{Api}Client(...) as client:   # async: __aexit__ calls aclose()
    ...
```

The client itself is meant to be **long-lived** — construct it once and reuse it for the app's
lifetime. Don't build one per request: that is a connection pool per request, and under managed OAuth
it also **re-fetches the access token** every time, because the token cache lives on the client. When
the client outlives any scope, close it explicitly at shutdown. Note the asymmetry: the async method
is `aclose`, and calling `close()` on an async client is an `AttributeError`.

## Choosing the server / base URL

The server keyword takes one of four shapes, and **omitting it silently selects the API's
first-listed environment — often a sandbox.** Pass it explicitly in every environment, production
included; **python-configuration-resilience** owns the shapes, their nesting and server template
variables.

## Where the client lives

### ASGI (FastAPI / Starlette / Litestar)

Build it in the lifespan handler and hand it out by dependency injection or `app.state`:

```python
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app):
    app.state.api_client = Async{Api}Client({scheme}=..., timeout=10.0)
    try:
        yield
    finally:
        await app.state.api_client.aclose()

app = FastAPI(lifespan=lifespan)

async def get_client(request: Request) -> Async{Api}Client:
    return request.app.state.api_client          # inject with Depends(get_client)
```

Do not build it inside a route, and do not build it in a startup hook with no matching shutdown.

### WSGI (Django / Flask)

A module-level client, or a lazily-initialised module global, is the pragmatic placement. Close it from
an `atexit` hook if the deployment recycles workers rather than killing them.

### Forking workers (Gunicorn, uWSGI, Celery prefork)

**Construct the client after the fork.** A pool inherited across `fork()` is shared by processes that
each think they own it, and the corruption looks like random protocol errors, not a lifetime bug.
Building it lazily on first use inside the worker is the simplest guarantee; a post-fork hook is the
explicit alternative.

### Threads and event loops

The sync client is safe to share across threads — the token cache is lock-guarded and the pool is
thread-safe. The async client may be built outside a running loop, but from its first use it belongs to
**one** event loop, and so does its pool. Build one per loop.

## Supplying your own transport

The transport is a `Protocol` — a structural interface, not a base class. The sync one requires
`send(request) -> HttpResponse` and `close()`; the async one `send` and `aclose()`:

```python
client = {Api}Client(custom_http_client=MyTransport(), {scheme}=...)
```

This is the seam for **tracing, metrics and tests** — the SDK ships no middleware of its own, and its
HTTP logging is built in (`python-configuration-resilience`), so wrap the transport for what the log
records do not carry rather than to see requests. Wrap the SDK's own transport rather than
reimplementing HTTP:

```python
class LoggingTransport:
    def __init__(self, inner): self._inner = inner

    def send(self, request):
        # The head only: the body is still on the socket, and the caller closes it.
        response = self._inner.send(request)
        log.info("%s %s -> %s", request.method, request.url, response.status_code)
        return response

    def close(self): self._inner.close()
```

`send` returns an `HttpResponse` — `method`, `url`, `status_code`, lowercased `headers`,
`iter_bytes(chunk_size)`, `read()` and `close()` — whose body has **not** been read. That is true of
every response, not just a download, so a wrapper must hand each one back unread; logging its size
means consuming it, which leaves the caller nothing to read. `iter_bytes(None)` must yield each chunk
as the network delivered it, holding nothing back — an event stream reads it that way, and a wrapper
that re-chunks to a fixed size delays every small event.

Five obligations the protocol places on anything you supply, all silent when broken: **do not mutate
the incoming request** (it is frozen); **honour `request.timeout`** when set, falling back to your own
when it is `None`; **lowercase the response header names**, because callers look them up that way;
**return once the head has arrived**, leaving the body for whoever reads it; and **raise
`SdkConnectionError`** (`SdkTimeoutError` for a timeout) from `send` and from the response's reads when
no usable response arrives, chained `from` your library's exception (`python-configuration-resilience`).

Two consequences. First, **the client's `timeout=` does not reach the wire** — set the timeout on your
transport, or you get the underlying library's default; a per-call `request_options` timeout still
arrives on the request (`python-configuration-resilience`). Second, **the client still closes it** —
don't close it yourself while the client is alive, and don't share one transport between two clients.

## Next

- Configure authentication → **python-authentication**
- Make your first call → **python-calling-endpoints**
- Tune timeouts, retries, base URLs, proxies → **python-configuration-resilience**
