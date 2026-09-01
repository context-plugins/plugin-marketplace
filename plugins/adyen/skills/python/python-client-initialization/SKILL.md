---
name: python-client-initialization
description: Creating and holding an APIMatic-generated Python SDK client in Python — construction, the keyword-only constructor shape, choosing the sync or async class, transport ownership and the close/aclose obligation, and where the client lives in a script, an ASGI app, or a forking worker. Load before wiring the client into an application or writing the factory that builds it.
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
    timeout: float = 30.0,             # seconds; the generator's default
    custom_http_client=None,           # your own transport
    {scheme}=None,                     # one credentials keyword per declared scheme
    {scheme}_token_source=None,        # managed-OAuth schemes only
)
```

Every parameter sits after `*` — there are **no positional arguments**, so a positional call is an
immediate `TypeError`. There is no options object, no builder, and no separate configuration type to
populate: everything is a constructor keyword.

Operations are exposed on the client. Most are grouped under **group accessors** (one per API resource
group) and called `client.{group}.{operation}(...)` — for example, a `widgets` group's `list_widgets`
operation is `client.widgets.list_widgets(...)`. An operation that belongs to no group sits **directly
on the client**, called `client.{operation}(...)`. Accessors are `cached_property`, so they are
attributes without parentheses and return the same object each time. The available accessors (and any
direct operations) come from the contract sheet, grounded in the SDK map's controller table
(`sdk-map.md`) — not from a runtime `dir()` or a REPL poke. See
`python-calling-endpoints`.

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

`timeout` is validated at construction: non-positive (or NaN) raises `ValueError` immediately.
Credentials passed in dict form are validated by pydantic with `extra="forbid"`, so a misspelled key
raises `ValidationError` there and then.

Two things are **not** validated, so a clean construction does not mean a working client:

- **`base_url` is taken unchecked.** A typo or the wrong environment surfaces as a connection error or
  a `401` at the first call.
- **Credentials are never exercised.** Managed-OAuth schemes fetch the token lazily on the first API
  call, so wrong credentials construct happily and fail later, pointing at whichever operation ran
  first. Every credentials keyword also defaults to `None`, and omitting it configures the client for
  **no auth** — requests go out unauthenticated and the server answers `401`.

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

Server selection is **not** an environment enum. What the constructor accepts depends on what the spec
declares, in one of four shapes:

| The API declares | Constructor keywords |
|---|---|
| one server, one environment | `base_url: str \| None = None` |
| one server, several environments | `environment` (a string literal alias, with a default), then `base_url` |
| several servers, one environment | `server_config: {Server}ConfigOrDict \| None = None` |
| several servers, several environments | `environment`, then `timeout`, then `server_config` |

Omitting the server keyword falls through to the config's own default rather than writing `None` over
it — and **that default is whatever the spec listed first, which for many providers is a sandbox.**
Nothing announces it. Confirm the default from the contract sheet — the SDK map's *Servers & auth*
section names the base URL each arm resolves to — and pass the server explicitly in
every environment, production included. Server template variables live on the config class, so how you
reach them follows the arm above. **python-configuration-resilience** owns server / base-URL
configuration in full.

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

This is the seam for **logging, tracing, metrics and tests** — the SDK ships no logging or middleware of
its own. Wrap the SDK's own transport rather than reimplementing HTTP:

```python
class LoggingTransport:
    def __init__(self, inner): self._inner = inner

    def send(self, request):
        response = self._inner.send(request)
        log.info("%s %s -> %s", request.method, request.url, response.status_code)
        return response

    def close(self): self._inner.close()
```

Three obligations the protocol places on anything you supply, all silent when broken: **do not mutate
the incoming request** (it is frozen); **honour `request.timeout`** when set, falling back to your own
when it is `None`; and **lowercase the response header names**, because callers look them up that way.

Two consequences. First, **the `timeout=` you passed to the client no longer reaches the wire** — that
value only builds the client's *own default* transport, so set the timeout on the one you pass or you
have silently reverted to the underlying library's default. The per-call
`request_options={"timeout": ...}` is the exception: it travels on the request object and reaches any
transport honouring the obligation above. Second, **the client still closes it** — don't close it
yourself while the client is alive, and don't share one transport between two clients.

## Next

- Configure authentication → **python-authentication**
- Make your first call → **python-calling-endpoints**
- Tune timeouts, base URLs, proxies → **python-configuration-resilience**
