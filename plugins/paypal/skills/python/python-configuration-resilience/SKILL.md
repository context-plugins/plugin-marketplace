---
name: python-configuration-resilience
description: Client configuration and resilience for an APIMatic-generated Python SDK — server and base-URL selection, the retry policy (on by default, off with `max_retries=0`) and what it will and will not repeat, what a timeout actually bounds, proxies and TLS, and request/response logging through the transport seam. Load before you configure or tune the client — the keyword names alone do not reveal what is handled for you and what is not.
---

# Configuration & resilience for an APIMatic Python SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Api}Client`,
> `{group}`, `{root_package}`) — replace it with the concrete identifier from the source.

Configuration is not an options object here. Everything is either a **constructor keyword** on the
client (`python-client-initialization`), a field on a **config model** — the server config or
`RetryOptions` — or a **per-call `request_options`**. There is no third place to look.

## What this SDK does not do for you

Read this before designing around a capability you assume exists. The generator emits **none** of the
following, so each is yours to build or deliberately do without:

| Capability | Status | What to do instead |
|---|---|---|
| **Streaming — file responses** | a `FileResponse` arrives with its body unread and holds its connection until you consume it | `save_to` / `read` / `iter_bytes` (see `python-file-handling`) |
| **Streaming — SSE** | an `EventStream` arrives with its body unread; iterating yields each event's decoded data, and `timeout` bounds the gap between events | a `for` loop, or `with` for an early exit (see `python-event-streams`) |
| **Request/response logging** | none — no hook, no event | Wrap the transport; see below |
| **Circuit breaking, rate limiting** | none | Your own, around the call |
| **A mock/offline mode** | none | Point `base_url` at a mock server, or supply a fake transport (`python-testing`) |

**Retries are on by default.** A client built without `retry_options` retries idempotent calls up to
three times; set `max_retries` to `0` to turn that off — see *Retries* below.

What the SDK *does* own: the request pipeline, auth application and token caching, response decoding,
error mapping, connection pooling, one timeout, and — once you turn it on — the retry loop.

## Server and base-URL configuration

Server selection is **not** an environment enum. What the constructor accepts depends on what the
description declares, in one of four shapes — take yours from the contract sheet, grounded in the SDK
map's *Servers & auth* section, which names the environments and servers this SDK declares and so
settles which arm it is:

| The API declares | Constructor keywords |
|---|---|
| one server, one environment | `base_url: str \| None = None` |
| one server, several environments | `environment` (a string literal alias with a default), then `base_url` |
| several servers, one environment | `server_config: {Server}ConfigOrDict \| None = None` |
| several servers, several environments | `environment`, then `timeout`, then `server_config` |

```python
client = {Api}Client(base_url="https://api.example.com", {scheme}=...)   # base-url arms
client = {Api}Client(server_config={"{server}": {"base_url": "..."}}, {scheme}=...)   # several servers, ONE environment
client = {Api}Client(environment="production", server_config={"{server}": {"production": {"base_url": "..."}}}, {scheme}=...)   # several servers, SEVERAL environments
```

**The two `server_config` arms nest differently, and every config model is `extra="forbid"`, so the
wrong nesting raises `ValidationError` rather than being ignored.** With one environment each server's
field holds `base_url` directly. With several, each server's field holds **one field per environment**
and the `base_url` sits inside the environment's variant — passing `{"{server}": {"base_url": ...}}`
there fails with `Extra inputs are not permitted`. Take the nesting from the SDK map's *Servers & auth*
section rather than from this shape.

Either way `server_config` is a pydantic model with a dict companion, coerced through `.coerce()`,
holding **one field per server the API declares**. Template variables sit beside `base_url` at
whichever level carries it.

**Omitting the server keyword takes the description's own default, and that default is whatever the
spec listed first — for many providers a sandbox.** Nothing announces it. A deployment that believes it
configured production and did not gets sandbox behaviour with production credentials, which fails auth
in a way that looks like a credentials problem, not an environment one. Pass the server explicitly in
every environment, production included.

**Server template variables are only reachable in the `server_config` arms.** They are fields on the
config class, so where the constructor takes a `server_config` you set them there. Where it takes a
`base_url`, the client builds the config itself — there is no path to a variable, and your only lever
is replacing the whole URL with `base_url`. Variables always carry a declared default (a constant or an
enum member), so a call still works untouched; it just goes wherever the default points.

Resolve the environment from configuration with an explicit map and **fail on an unknown value** rather
than falling through to a default:

```python
BASE_URLS = {"sandbox": "https://sandbox.example.com", "live": "https://api.example.com"}
base_url = BASE_URLS[settings.environment]     # KeyError beats a silently wrong environment
```

Where the SDK manages OAuth, **the token endpoint is derived from the same server**, so environment and
auth can never drift apart. Pointing `base_url` at a mock server or recording proxy therefore redirects
the token fetch too.

## Retries — on by default

A client built without `retry_options` uses the **default policy** in the table below: a `GET`, `HEAD`,
`PUT` or `OPTIONS` call that meets a `408`, `429`, `500`, `502`, `503`, `504` or a dropped connection is
retried up to three times.
Retrying is configured by one options class, `RetryOptions` (from `{root_package}.core`), passed to the
client in any of four spellings:

```python
from {root_package}.core import RetryOptions

client = {Api}Client(retry_options=3, {scheme}=...)                  # a count: max_retries=3, every other field at its default
client = {Api}Client(retry_options={}, {scheme}=...)                 # every field at its default, as omitting it does
client = {Api}Client(retry_options={"max_retries": 5}, {scheme}=...)  # a dict: the fields you name, the rest at their defaults
client = {Api}Client(
    retry_options=RetryOptions(max_retries=5, http_methods_to_retry={"GET"}),
    {scheme}=...,
)                                                                    # the model itself
```

**Turning retries off** is `max_retries` set to `0`, in whichever spelling: `retry_options=0`,
`{"max_retries": 0}` or `RetryOptions(max_retries=0)`. Leaving `retry_options` out, or passing `None`,
`{}` or `RetryOptions()`, all give the **default policy** — none of them turns retrying off.

`RetryOptions` is a frozen pydantic model and its dict companion is a closed `TypedDict`, so a misspelt
key or an out-of-range value (a negative count, a `backoff_factor` below `1`) raises `ValidationError`
at construction rather than being ignored.

| Field | Default | Meaning |
|---|---|---|
| `max_retries` | `3` | Retries *after* the first attempt; `0` disables |
| `initial_delay` | `1.0` | Seconds before the first retry |
| `backoff_factor` | `2.0` | Multiplier per retry; `1` keeps the delay constant |
| `max_delay` | `60.0` | Ceiling on any one wait, a `Retry-After` included |
| `max_jitter` | `0.5` | Widest random addition to a wait, in seconds; `0` removes it |
| `status_codes_to_retry` | `{408, 429, 500, 502, 503, 504}` | Statuses that qualify |
| `http_methods_to_retry` | `{"GET", "HEAD", "PUT", "OPTIONS"}` | Methods that may be repeated at all |

The wait before retry *n* (from 0) is `min(initial_delay × backoff_factor ** n + jitter, max_delay)`,
or the server's `Retry-After` — seconds or an HTTP date — capped at `max_delay` when it sends one.

A call is repeated only when **all** of these hold:

- its method is in `http_methods_to_retry` — this gates dropped connections and timeouts as well as
  statuses, so the default never repeats a `POST`, `PATCH` or `DELETE`;
- it failed with a status in `status_codes_to_retry`, or with no response at all;
- its body can be sent again — `bytes`, a `Path`, JSON, form and text bodies can; a binary body or a
  multipart file read from an open stream cannot;
- retries remain.

A `401` is never in the default set; it invalidates the cached credential for the next call instead
(`python-authentication`). Whatever you add to `status_codes_to_retry` is retried, so leave out
statuses that cannot succeed a second time. When the last attempt fails, you see what a single attempt
would give you: the `ApiError`, the raw response's `Failure`, or the HTTP library's own exception.

A **custom transport** must raise `TransportError` (`from {root_package}.core import TransportError`)
for a failed send to be retried; the shipped `Httpx2Client` does. Anything else it raises reaches you on
the first attempt.

### Per-call overrides

`request_options` overrides two fields for one call; the rest stay the client's:

```python
client.{group}.{operation}(arg, request_options={"max_retries": 0})                     # this call: no retries
client.{group}.{operation}(arg, request_options={"status_codes_to_retry": {429, 503}})  # this call: a narrower set
```

**Do not wrap the call in a second retry layer** (`tenacity`, a loop of your own): attempts multiply,
and each of your attempts is a new call with a new idempotency key (below). If you need behaviour the
options cannot express, turn the SDK's off for that call and own it.

**Only a write that was sent may have landed.** A write that timed out *after it was sent* may have
succeeded — a reset after the bytes reached the server is indistinguishable from one before. A write
that was never sent did not happen; `python-error-handling` names the four exceptions that mean so.

**The retry arithmetic is not a ceiling.** `(max_retries + 1) × timeout` plus the waits between them
can be exceeded, because one attempt can outlast its timeout; see *Bounding a call*.

### Making a write safe when you retry

**Every operation other than a `GET` sends an `Idempotency-Key` header** — a UUID minted once per call,
unless the description declares its own header of that name, in which case that one is a keyword you
set. Within the SDK's retry loop every attempt carries the *same* key, which is what makes adding `POST`
to `http_methods_to_retry` safe **where the provider deduplicates on it**. A retry you write yourself is
a new call and mints a new key — the provider sees two submissions.

Where the operation declares the parameter itself, derive the key from what the request is for, and
reuse it on every attempt and every repeat:

```python
request_id = derive_ref(request)                     # the same on every attempt and every repeat — never uuid4()
client.{group}.{operation}(body, {idempotency_key}=request_id)
```

Two things the signature will not tell you, both of which need the provider's own documentation:

- **Whether the provider actually enforces it.** The header being sent is not a guarantee that a
  resend is deduplicated.
- **The retention window.** Keys expire, and windows differ per API — so a resend after a long backoff
  may no longer be collapsed.

**Where the provider ignores the key, retrying a write is a real duplication risk.** Keep `POST` out
of the gate; the safe recovery is to re-read state and decide, not to resend. Some such operations are
naturally idempotent (cancelling an already-cancelled resource is usually harmless), but that is a
per-operation judgement — make it deliberately rather than retrying the whole class.

### ⚠⚠ The same operation arriving twice

Everything above stops one call being *sent* twice. It does not stop one operation being *requested*
twice — a double-submit, a caller retry, a redelivered message, two workers racing. The SDK's own
`Idempotency-Key` does not help here: it is new on every call. Stopping it needs a claim that outlives
the request and the process, taken atomically:

```python
ref = derive_ref(request)                  # from what the request is for — never uuid4()
if not try_claim(ref):                     # insert-or-fail: the store rejects the second claim, you catch it
    return load_existing(ref)              # may still be in progress — do not report it done
result = client.{group}.{operation}(...)   # `ref` as its idempotency key, if the operation declares one
complete(ref, result)
```

Build `try_claim` on whatever this codebase already uses to enforce uniqueness, and add no new store or
dependency for it. If it has nothing that can hold such a claim, stop and raise that with the user.

⚠⚠ An in-process lock (`threading.Lock`, `asyncio.Lock`, a module-level dict), a single-process or
single-host assumption or an exists-then-create read is no guard here: it lets both callers through —
and documenting it as a known limitation does not change that.

## Bounding a call — what the timeout actually bounds

One knob, in two places — and, for async code, a limit on the whole call:

```python
client = {Api}Client(timeout=10.0, {scheme}=...)                    # each wait, every request
client.{group}.{operation}(arg, request_options={"timeout": 3.0})   # each wait, this one request
await asyncio.wait_for(async_client.{group}.{operation}(arg), budget)   # the whole call (Async{Api}Client)
```

- The value is **seconds, as a float**; the per-call option overrides the client's.
- It must be **> 0**. The constructor raises `ValueError` otherwise — and rejects NaN too, since the
  guard is written `not timeout > 0`.
- The default is **30 seconds** per wait.
- Under the default transport, one float sets connect, read, write and pool timeouts alike. To separate
  them (a short connect, a longer read), build your own transport with an
  `httpx2.Timeout(connect=..., read=...)` and pass it as `custom_http_client`.

**The timeout limits each wait, not the whole call.** Connecting, sending and receiving each have their
own clock, and the receiving clock starts again every time a piece of the reply arrives. So a reply that
keeps arriving slowly is never cut off, and each attempt — up to `max_retries + 1` of them — can take far
longer than the number you set. This timeout firing is a transport failure and retries on the curve
like any other; a `408` is the server's request timeout and sits in the default status set.

**If you supply `custom_http_client`, the client's `timeout=` no longer reaches the wire.** That value
only builds the SDK's *own* default transport. Set the timeout on the transport you pass, and honour
`request.timeout` inside it (`python-client-initialization`).

To limit a whole call, retries included, async code wraps it in `asyncio.wait_for(...)`
(`asyncio.timeout(...)` needs 3.11, and this SDK supports 3.10); map its `asyncio.TimeoutError` as
`python-error-handling` shows. Sync code has no whole-call limit through this SDK. A file or
event-stream call returns at the head, so put the limit around the consuming code too.

## Proxies and TLS

The default transport takes these directly, and you pass it in yourself to set them:

```python
from {root_package}.core import Httpx2Client

transport = Httpx2Client(timeout=10.0, proxy_url="http://proxy:3128", verify=True)
client = {Api}Client(custom_http_client=transport, {scheme}=...)
```

- `verify` accepts a bool **or an `ssl.SSLContext`**. A private CA bundle or a client certificate is
  configured by building a context (`ssl.create_default_context(cafile=...)`) — that is the supported
  spelling for either.
- **Standard environment variables are honoured by default**: `HTTP_PROXY` / `HTTPS_PROXY` /
  `ALL_PROXY` / `NO_PROXY` (consulted only when `proxy_url` is unset), and `SSL_CERT_FILE` /
  `SSL_CERT_DIR` for the trust store. This is request behaviour your deployment can change without
  touching code — worth knowing when a container behaves differently from a laptop. A caller who needs
  it off supplies their own transport.
- **`verify=False` disables certificate verification.** It is not a debugging convenience for anything
  carrying credentials; fix the trust store instead.

## Logging — wrap the transport

There is no logging hook and no event to subscribe to. The transport protocol is the seam: implement
it, delegate to the real one, and log around the call.

```python
import logging, time
from {root_package}.core import Httpx2Client

log = logging.getLogger(__name__)

class LoggingTransport:
    def __init__(self, inner): self._inner = inner

    def send(self, request):
        started = time.monotonic()
        # The head only -- do not read the body here; the caller owns it.
        response = self._inner.send(request)
        log.info(
            "%s %s -> %s (%.0f ms)",
            request.method, request.url, response.status_code,
            (time.monotonic() - started) * 1000,
        )
        return response

    def close(self): self._inner.close()

client = {Api}Client(
    custom_http_client=LoggingTransport(Httpx2Client(timeout=10.0)), {scheme}=...
)
```

The async version is the same shape with `async def send` and `async def aclose`. Both members are
required, and they are the only two: one request seam serves every operation, a download included,
so there is no second method to forget.

**The elapsed time above bounds the head, not the call.** `send` returns once the response head has
arrived, so a body still on the wire is not in that measurement — for a download it is barely in it
at all. Timing the whole exchange means timing where the body is consumed, which is the caller's
code, not this wrapper.

**Log the method, URL and status — not headers or bodies.** The auth header carries a live credential
and bodies carry whatever the API moves; neither belongs in your logs or your traces. If you must
capture a body to debug, gate it behind a flag that is off by default and redact before writing.

This same wrapper is where OpenTelemetry spans, metrics and request-id propagation belong.

### Verify on the wire (first run of any new call)

On success the SDK returns the decoded body and nothing else — never the URL or status. So a wrong path
parameter, a header you thought you set, or a query parameter that silently did not serialize produces
**no in-band signal**; the only symptom is a `404`/`422` that looks like a provider problem.

Run the logging transport the first time you execute any new call, and check:

1. the **method** matches the operation;
2. the **path** has no unsubstituted `{placeholder}`;
3. path segments carry **wire values** — an enum's string, not a Python member name;
4. the **query parameters** you set actually appear.

Then gate the wrapper behind a debug flag.

## Connection pooling

The client holds one pooled transport. Reuse the client and close it on shutdown; a client per call
pays a fresh TCP and TLS handshake every time, and under managed auth a fresh token fetch as well.
Under forking servers (Gunicorn, uWSGI, Celery prefork), construct it **after** the fork — a pool
inherited across `fork()` is shared by processes that each believe they own it, which surfaces as
intermittent, unexplainable connection errors. See `python-client-initialization`.

## Next

- Where the client should live → **python-client-initialization**
- Which exceptions reach your boundary → **python-error-handling**
- Faking the transport in tests → **python-testing**
