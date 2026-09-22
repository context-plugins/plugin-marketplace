---
name: python-configuration-resilience
description: Client configuration and resilience for an APIMatic-generated Python SDK — server and base-URL selection, the fact that the SDK performs NO retries and what that leaves you to build, what a timeout actually bounds, proxies and TLS, and request/response logging through the transport seam. Load before you configure or tune the client — the keyword names alone do not reveal what is handled for you and what is not.
---

# Configuration & resilience for an APIMatic Python SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Api}Client`,
> `{group}`, `{root_package}`) — replace it with the concrete identifier from the source.

Configuration is not an options object here. Everything is either a **constructor keyword** on the
client (`python-client-initialization`), a field on a **server config model**, or a **per-call
`request_options`**. There is no third place to look.

## What this SDK does not do for you

Read this before designing around a capability you assume exists. The generator emits **none** of the
following, so each is yours to build or deliberately do without:

| Capability | Status | What to do instead |
|---|---|---|
| **Retries / backoff** | none — ruled out by design | Wrap your own call; see below |
| **Streaming / SSE** | none — responses are fully buffered `bytes` | Not available through this SDK |
| **Request/response logging** | none — no hook, no event | Wrap the transport; see below |
| **Circuit breaking, rate limiting** | none | Your own, around the call |
| **A mock/offline mode** | none | Point `base_url` at a mock server, or supply a fake transport (`python-testing`) |

What the SDK *does* own: the request pipeline, auth application and token caching, response decoding,
error mapping, connection pooling, and one timeout.

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

## Retries — there are none

**This is the headline fact, and it is the opposite of what most SDK generators do.** There is no retry
policy, no backoff, no pipeline to configure. An architectural decision record rules retries out of the
request path deliberately. Concretely:

- A `429` or `503` raises on the first attempt. Nothing is resent.
- A connection reset raises. Nothing is resent.
- Even the one place that looks automatic — a `401` — is not a retry. The cached credential is
  invalidated so the *next* call re-authenticates; the failing request is not resent. You see one
  `401`, then recovery.

Two implications, and the second is easy to give away by accident:

1. **Whatever retrying your integration needs, you write**, outside the SDK call. There is no knob.
2. **You inherit no accidental duplicate writes.** A failed write was attempted exactly once at the SDK
   layer. That is a genuinely valuable property — do not discard it carelessly when you add retries.

### Adding retries yourself

Use `tenacity`, `backoff`, or a plain loop; wrap **your** call, and decide per operation:

```python
import httpx
from tenacity import retry, retry_if_exception, stop_after_attempt, wait_exponential_jitter
from {root_package}.core import ApiError

def _is_transient(e: BaseException) -> bool:
    if isinstance(e, httpx.TimeoutException | httpx.ConnectError):
        return True
    return isinstance(e, ApiError) and e.status_code in {429, 500, 502, 503, 504}

@retry(
    retry=retry_if_exception(_is_transient),
    stop=stop_after_attempt(3),
    wait=wait_exponential_jitter(initial=1, max=10),
    reraise=True,
)
def fetch(resource_id: str):
    return client.{group}.{operation}(resource_id)      # a read: safe to retry
```

Rules to hold to:

- **Retry idempotent reads freely; treat every write as a separate decision.** A write that timed out
  may have succeeded — a reset after the bytes reached the server is indistinguishable from one before.
- **Never retry a `ValidationError`, or a 4xx other than `429`.** They cannot succeed on a second try.
  A decode failure in particular is not transient (`python-error-handling`).
- **Respect `Retry-After`** when present: `e.response.headers.get("retry-after")` — header keys are
  lowercased, so look it up that way.
- **Cap the worst case.** `attempts × timeout + backoff` must sit below whatever deadline your own
  caller works to, or you are burning provider capacity for a response nobody is waiting for.

### Making a write safe when you retry

Some write operations declare an **idempotency-key parameter** — a header the provider uses to collapse
a duplicate submission. Whether a given operation has one is per-operation and visible only in its
signature, so **check before you assume**; in practice a description declares them on some writes and
not others.

Where one exists, generate the key **once per logical action** and reuse it across every attempt:

```python
request_id = str(uuid.uuid4())                       # once per logical action, not per attempt
client.{group}.{operation}(body, {idempotency_key}=request_id)
```

Two things the signature will not tell you, both of which need the provider's own documentation:

- **Whether the provider actually enforces it.** The parameter existing is not a guarantee that a
  resend is deduplicated.
- **The retention window.** Keys expire, and windows differ per API — so a resend after a long backoff
  may no longer be collapsed.

**Where an operation has no idempotency parameter, retrying it is a real duplication risk.** The safe
recovery is to re-read state and decide, not to resend. Some such operations are naturally idempotent
(cancelling an already-cancelled resource is usually harmless), but that is a per-operation judgement —
make it deliberately rather than retrying the whole class.

### ⚠ What this section does NOT cover: the same operation arriving twice

Everything above is about **one call being sent more than once**. It does nothing about **one
operation being requested more than once** — a shopper double-clicking, or a client retry overlapping
the original. That is a different defect with a different fix, and no retry or idempotency-key
setting reaches it.

A read-then-create sequence is a **check-then-act race**: both callers pass the existence check
before either write lands, and both writes reach the provider. An in-process guard cannot close it —
a `threading.Lock` or a module-level dict is **per process**, so a second worker or a second
container shares nothing.

**The uniqueness claim has to outlive the request and the process**, and it has to be written
*before* the provider call, not after. A provider effect created before anything local points at it
is stranded — you cannot find it, reuse it, or clean it up, and the next attempt creates a second
one. One durable record, keyed by a deterministic reference you generate and send, settles all three
problems:

```python
ref = deterministic_ref(customer_id, plan_handle)   # derived from what the caller already sent

# 1. CLAIM FIRST — the unique constraint decides the winner; there is no check-then-act gap
try:
    session.add(Subscription(ref=ref, customer_id=customer_id,
                             plan_handle=plan_handle, status="pending"))
    session.commit()                                 # UNIQUE (customer_id, plan_handle)
except IntegrityError:
    session.rollback()
    return load_existing(ref)                        # someone else won; return their outcome

# 2. only then call the provider, sending the same reference
try:
    created = client.subscriptions.create(body, idempotency_key=ref)
except TransportError:
    # 3. THE RECONCILING READ LIVES HERE, in the same block as the guard — not as prose elsewhere
    created = client.subscriptions.find_by_reference(ref)

# 4. VERIFY BEFORE YOU KEEP IT - the provider is authoritative for what happened,
#    not for what you asked. Check the echo against your own intent first.
if (created.amount, created.currency) != (body.amount, body.currency):
    row.status = "needs_review"                  # durable, inspectable, and not "active"
    session.commit()
    raise AmountMismatch(ref, created.amount, created.currency)

row.provider_id, row.status = created.id, "active"
session.commit()
```

**The verification belongs before the write, not after it.** A mismatch caught after the commit is a
bad row someone now has to find; caught before, it is a rejected response. And do not "fix" it by
rolling back to nothing — the provider effect is real and already exists, so the durable outcome of a
mismatch is a row in a state you can act on, never the absence of a row.

Let the constraint violation be the signal: catch it and return the existing outcome rather than
checking first and hoping. This is application persistence, not SDK configuration, so it is outside
what this skill can specify — but it is inside what the integration must do, and no amount of retry
configuration substitutes for it.

### A no-op operation must not fire its side effects

A state transition that finds the record already in the target state is correctly a no-op — the code
around it usually is not. Cancel an already-cancelled order and the transition does nothing while the
notification, the webhook and the outbound message all fire again.

**Have the transition report whether it changed anything, and gate every side effect on that answer:**

```python
if not order.try_cancel():        # False when it was already cancelled
    return order                  # no notification, no webhook, no message

notifier.order_cancelled(order)
```

Returning the existing outcome is the idempotent answer. Re-sending is not.

### Reconciliation: a provider's event time and your created-at are different clocks

When you compare provider-side records against your own over a date window, filter **both sides on
the same semantic clock**. The provider's event timestamp says when the provider acted; your row's
creation timestamp says when you inserted it. For anything scheduled, deferred or retried the two
disagree, and the same window then selects different records on each side — **inventing
discrepancies in one direction and hiding real ones in the other.**

Record the provider's own timestamp on your row and filter on that, rather than on `created_at`.
Where you cannot, widen the local window by the maximum deferral your domain allows and classify
rows outside the provider window as **out of window**, which is not the same finding as a
discrepancy.

### A window widened for the filter's granularity must be narrowed back in code

Where the provider's filter accepts only whole calendar days, the query you send is necessarily wider
than the window you were asked about. Widening it is correct, and it is **half the job**: the rows
that come back include ones outside the caller's actual instants. Filter them out yourself before you
report, or the report contains records from outside the window it claims to cover — and it will look
right, because every record in it is genuine. Widening is a property of the request; the caller's
window is a property of the answer.

### One local order legitimately maps to several provider transactions

An authorization, its capture and each refund are separate provider records against the same order. A
matcher that takes the first hit and then drops the order from the pool reports every remaining
transaction as provider-only. **Match against the set, not the first element**: keep the order in the
pool until its transactions are exhausted, and call what is left over a discrepancy only then.

## Bounding a call — what the timeout actually bounds

One knob, in two places:

```python
client = {Api}Client(timeout=10.0, {scheme}=...)                    # every request
client.{group}.{operation}(arg, request_options={"timeout": 3.0})   # this one request
```

- The value is **seconds, as a float**; the per-call option overrides the client's.
- It must be **> 0**. The constructor raises `ValueError` otherwise — and rejects NaN too, since the
  guard is written `not timeout > 0`.
- The default is **30 seconds**, which is far too long for anything on a user-facing request path. Set
  it deliberately.
- Under the default transport, one float sets connect, read, write and pool timeouts alike. To separate
  them (a short connect, a longer read), build your own transport with an
  `httpx.Timeout(connect=..., read=...)` and pass it as `custom_http_client`.

**Because there are no retries, the timeout genuinely bounds the call.** Worst case is one timeout, not
attempts × timeout. That simplification is what the no-retry design buys you — and the moment you add
retries, the arithmetic above becomes yours.

**If you supply `custom_http_client`, the client's `timeout=` no longer reaches the wire.** That value
only builds the SDK's *own* default transport. Set the timeout on the transport you pass, and honour
`request.timeout` inside it (`python-client-initialization`).

For async callers, a deadline over a whole operation — the SDK call plus your own surrounding work — is
`asyncio.timeout(...)`. It raises `TimeoutError` through the await, which no `except ApiError` clause
will catch.

## Pagination — drive it yourself

**Nothing is paginated and nothing is iterable.** When an operation returns a page, the SDK hands you
that page and stops. Advancing is yours, and so is knowing that advancing is needed — read the page
and cursor field names off the operation's signature and its response model, since they are
spec-specific.

```python
# offset/page style — bounded, and the bound is visible in the result
PER_PAGE, MAX_PAGES = 100, 100
items, page, truncated = [], 1, False
for _ in range(MAX_PAGES):
    result = client.{group}.{operation}(page=page, per_page=PER_PAGE)
    items.extend(result.{items})
    if len(result.{items}) < PER_PAGE:      # short page — usually the last
        break
    page += 1
else:
    truncated = True                        # the cap stopped us, NOT the provider

# cursor style — same shape
cursor, items, truncated = None, [], False
for _ in range(MAX_PAGES):
    result = client.{group}.{operation}(**({"cursor": cursor} if cursor else {}))
    items.extend(result.{items})
    cursor = result.{next_cursor}
    if not cursor:
        break
else:
    truncated = True

return Page(items=items, truncated=truncated, next_cursor=cursor)
```

The bound and the `truncated` flag are in this block deliberately: an unbounded `while True` that
`process()`es as it goes is the shape that produces both defects below - it cannot stop, and when
something else stops it the caller is never told. `for ... else` sets the flag on exactly the path
where the cap, rather than the provider, ended the walk.

Prefer the API's explicit end signal — a null next-cursor, a `has_more` flag — over inferring from a
short page where one exists. And **narrow the query before you page it**: a provider-side date range,
status filter or page size that matches what the caller needs turns "walk everything" into a handful
of pages.

### ⚠⚠ Never leave a page loop unbounded

"The API stops when there are no more pages" is a description of the happy path, not a guarantee. A
provider that keeps returning a next-page link, a cursor that fails to advance, or a filter the
provider quietly ignores will each spin until something else kills the request — tens of thousands
of billed calls and a caller left holding a dead request. **Every page loop needs at least one bound
that does not depend on the provider's cooperation.**

| bound | use when | shape |
|---|---|---|
| **page cap** | always — the backstop | `if pages >= MAX_PAGES: break` |
| **item cap** | the caller wants "the first N" | `if len(results) >= max_items: break` |
| **deadline** | the call sits behind a request timeout | `asyncio.timeout(...)`, or a monotonic check |
| **no-progress guard** | cursor/offset paging | stop if the cursor or offset did not change between pages |

### A bound that truncates must say so in the result

Hitting the cap is a different defect from hanging, and it is not fixed by logging. **The partiality
of a result is a property of the result**, so it belongs in the return value where the caller cannot
fail to encounter it — a `truncated` flag, a continuation cursor, or a distinct return type:

```python
@dataclass
class Page:
    items: list
    truncated: bool
    next_cursor: str | None = None
```

A log line is not enough: the caller rendering the page, writing the reconciliation report, or
comparing two totals never reads your logs, and a partial set that reads like a complete one is a
wrong answer rather than a missing one. **Log it as well, never instead.**

## Proxies and TLS

The default transport takes these directly, and you pass it in yourself to set them:

```python
from {root_package}.core import HttpxClient

transport = HttpxClient(timeout=10.0, proxy_url="http://proxy:3128", verify=True)
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
from {root_package}.core import HttpxClient

log = logging.getLogger(__name__)

class LoggingTransport:
    def __init__(self, inner): self._inner = inner

    def send(self, request):
        started = time.monotonic()
        response = self._inner.send(request)
        log.info(
            "%s %s -> %s (%.0f ms)",
            request.method, request.url, response.status_code,
            (time.monotonic() - started) * 1000,
        )
        return response

    def close(self): self._inner.close()

client = {Api}Client(
    custom_http_client=LoggingTransport(HttpxClient(timeout=10.0)), {scheme}=...
)
```

The async version is the same shape with `async def send` and `async def aclose`.

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
