---
name: dotnet-configuration-resilience
description: Client configuration and resilience for an APIMatic-generated .NET SDK in C# — retries and backoff, timeouts and cancellation, base-URL/server selection, list pagination, SSE streaming, and request/response logging. Load before you register or tune the client — the option names alone do not reveal which calls retry, what a timeout actually bounds, or what you must still set yourself.
---

# Configuration & resilience for an APIMatic .NET SDK

> **One skill, every shape.** This file covers every configuration surface the 4.0.0 generator
> emits. Which parts YOUR SDK exercises — which pagination strategy an operation gets, whether any
> operation declares an idempotency-key parameter, which server variables exist — are facts of the
> API definition, not of this skill: take them from the contract sheet or the map, and **apply
> only the guidance that matches**.

Most types below live under `{RootNamespace}.Core.Configuration` and `{RootNamespace}.Servers`; the SSE
exceptions sit under `.Core.Exceptions` and the per-call `RequestOptions` under `.Core`. Each section names
its own namespace. All of them are generic across APIMatic .NET SDKs built by this generator.

## ServerOptions configuration for each Environment

`options.Server` (a `ServerOptions`) holds the server configuration **per environment**. It exposes one
`{ServerName}Options` per server the API defines, and each of those carries a nested options object for
**every environment** the API declares (matching the `ServerEnvironment` constants). You configure the
server on the environment you select via `options.Environment` — only that environment's options are read.

Each environment's options expose what the SDK substitutes into that server's URL: any **templated
parameters** the API declares (a region/subdomain/port — names vary, and some APIs have none) plus the
**`BaseUrl`** template itself (always present and settable). Set whichever you need:

```csharp
using {RootNamespace}.Servers;

options.Environment = ServerEnvironment.{Environment};

// Set a templated parameter the API declares (names vary per API — region, subdomain, port, ...):
options.Server.{ServerName}.{Environment}.{ServerParam} = "...";

// Or override the BaseUrl outright — e.g. a mock server, proxy, or self-hosted gateway.
// A literal URL with no {placeholders} is used as-is:
options.Server.{ServerName}.{Environment}.BaseUrl = "https://my-host.example.com";
```

The real server names, per-environment options, and template parameters come from the contract sheet
(grounded from the SDK map/source). See **dotnet-client-initialization** for selecting the environment.

**`Environment` and `Server` are not read at the same time, which makes one of them look inert.** The client
captures `options.Environment` **once, when it is constructed**, but keeps a live reference to the
`ServerOptions` object and re-resolves the URL on **every request**. So editing
`options.Server.{ServerName}.{Environment}.BaseUrl` after construction does take effect, while assigning
`options.Environment` — or replacing the whole `options.Server` object — silently does not. Two consequences
worth internalising: the environment you select at construction decides which per-environment options are
ever read (set `BaseUrl` on the wrong one and your value is ignored in favour of that environment's
default), and mutating server options on a live client is an unsynchronised race against in-flight calls,
not a supported "switch hosts" operation. Configure the server before you construct, and construct a new
client to change environment.

## Retries

`RetryOptions` (built on Polly) is set on the options class via `options.Retry`. Defaults:

| Setting | Default |
| --- | --- |
| `StatusCodesToRetry` | `408, 429, 500, 502, 503, 504` |
| `HttpMethodsToRetry` | `GET, HEAD, PUT, OPTIONS` (idempotent only — gates **every** retry trigger, see notes) |
| `MaxRetries` | `3` |
| `Delay` | `1s` |
| `BackOffFactor` | `2` |
| `UseExponentialBackoff` | `true` |
| `MaxJitter` | `500ms` |
| `Timeout` | `100s` (**per attempt**) — **too long for any interactive path; set it explicitly** |
| `OnRetry` | `null` |

**Do the arithmetic on those defaults before you accept them.** `MaxRetries = 3` means up to 4 attempts, each
bounded at `100s`, with `1s + 2s + 4s` of backoff between them. What that costs depends on the **verb**, because
`HttpMethodsToRetry` gates *every* retry trigger — including the per-attempt timeout firing (see Notes):

| Provider behaviour | On a retryable verb (`GET`/`HEAD`/`PUT`/`OPTIONS`) | On any other verb |
| --- | --- | --- |
| **Hangs** (no response at all) | up to **4 × 100s + 7s ≈ 407s** — the per-attempt timeout fires and the rejection **is** retried | ≤ **100s** — one attempt, then the call ends |
| **Fails retryably** (a `503`, a connection reset) | up to **≈ 407s** — each attempt can burn nearly the full timeout | ≤ **100s** — one attempt at the provider's own latency; never resent |

So the worst case on a `GET` is ≈**7 minutes** on the defaults — almost all of it per-attempt `Timeout`,
not backoff — and up to ≈**9.7 minutes**
(`4 × 100s + 3 × 60s`) against a provider that answers every attempt with a large `Retry-After`, since that
header replaces the backoff and clamps at 60s (see Notes). Either way it is nowhere near the ≈100s the
`Timeout` value suggests. The SDK's send path is fully async, so no thread is blocked — but the request, a
pooled connection and the caller's browser are all held open for that whole window. Treat every default in
this table as a value you have chosen only once you have written it down; `Timeout` in particular has no
defensible default for a request-path call.

Customize — always by `with` on `Default()`: every `RetryOptions` member is `required`, so a partial
`new RetryOptions { MaxRetries = 5 }` does not compile:

```csharp
using {RootNamespace}.Core.Configuration;

options.Retry = RetryOptions.Default() with
{
    MaxRetries = 5,
    Timeout = TimeSpan.FromSeconds(30),
    OnRetry = attempt => Console.WriteLine(
        $"retry #{attempt.AttemptNumber} after {attempt.Delay}")
};
```

Notes:
- The *n*th retry waits `Delay * BackOffFactor^(n-1) + random(0, MaxJitter)` — so the 1st retry waits
  `Delay` (1s), the 2nd `Delay * BackOffFactor` (2s), and so on. Set `UseExponentialBackoff = false` for a
  constant `Delay` between attempts.
- **`HttpMethodsToRetry` gates every trigger, not just the status one.** `ShouldHandle` reads
  `method is in HttpMethodsToRetry && (transport fault || status is in StatusCodesToRetry)` — the method check
  is a top-level `&&` sitting above *both* arms. So with the defaults a `POST`/`PATCH`/`DELETE` is **never**
  resent by the SDK: not on a `503`, not on a connection reset, not on a timeout. This is the control that
  keeps a non-idempotent write from executing twice, and it is on by default. Adding a verb to
  `HttpMethodsToRetry` removes that protection for **every** operation that uses the verb, not just the one
  you had in mind — read *Making a write safe under retries* below before you do.
- **Three things trigger a retry on an eligible verb**, and one of them is easy to miss:
  `HttpRequestException` (connection reset, DNS failure, dropped socket); `TimeoutRejectedException` — the
  SDK's **own per-attempt `Timeout` firing**; and a response whose status is in `StatusCodesToRetry`. Because
  the per-attempt timeout is itself a retry trigger, a hung provider on a `GET` costs the *whole* budget
  (4 × `Timeout` + backoff), not one `Timeout`. A `TaskCanceledException` — from your own
  `CancellationToken`, or from `HttpClient.Timeout` — is **not** in the set and ends the call where it fires.
- **You never catch `TimeoutRejectedException`.** Once the retries are exhausted the SDK translates it, and
  what reaches your `catch` is a `TaskCanceledException` — message *"The request was canceled due to the
  configured RetryOptions.Timeout elapsing."* — whose `InnerException` is a `TimeoutException`. So the SDK's
  own timeout and your own cancellation surface as the **same exception type**; tell them apart by the inner
  exception, or by checking `ct.IsCancellationRequested`, not by the type you caught.
- **`Retry-After` overrides the computed backoff.** If the failing response carries a `Retry-After` header
  (delta-seconds or an HTTP date) that value is used as the delay instead of
  `Delay × BackOffFactor^n + jitter`. Both paths are then clamped to a hard **60s** ceiling that is not
  configurable — a provider asking for a 10-minute pause gets 60s, and a large `BackOffFactor` cannot push a
  single delay past a minute.
- **Multipart is not blanket-excluded.** Retry eligibility is decided per request type *before* the
  pipeline runs: a binary-body request with its payload **present** never retries (with the optional
  payload absent it is an empty send and stays eligible); a multipart/form-data request retries
  **unless it carries a binary part**; JSON, form-url-encoded and empty-body requests are eligible.
  An ineligible request is **not** left unprotected — it runs on a *timeout-only* pipeline built
  from the same `RetryOptions`, so it keeps the per-attempt `Timeout` and loses only the retry
  strategy.
- `Timeout` is **per attempt**, not total — to cap a whole call, use a `CancellationToken` (below). It is
  nullable: set `Timeout = null` to disable the per-attempt timeout entirely.
- `OnRetry`'s `RetryAttempt` also carries `Reason` — `RetryReason.Status(HttpStatusCode)` or
  `RetryReason.Failure(Exception)` — log it to record *why* each retry fired.

⚠▶▶ **A per-attempt timeout does not bound a REQUEST.** If one handler makes more than one SDK call —
a loop over recipients or invoices, a fan-out, a send-then-schedule pair — the per-call timeouts **add up**, and
they add up *faster* when each failure is caught so the work can continue: every swallowed timeout
costs its full bound and the next call still runs. Two calls at 30s is a 60s request; three is 90s.
Put one deadline on the whole handler and pass its token to every call inside it:

```csharp
using var cts = CancellationTokenSource.CreateLinkedTokenSource(ct);
cts.CancelAfter(TimeSpan.FromSeconds(20));    // the REQUEST's budget, not one call's
var deadline = cts.Token;
// pass `deadline` — not `ct` — to every SDK call in this handler
```

**The check, and it is arithmetic, not judgement:** `calls in this handler × per-call timeout` must
sit under the budget you are willing to make a caller wait. If it does not, the per-call timeout is
not a bound on anything the caller can perceive. Count the calls in the loop, not the calls in the
snippet — a handler that processes every record on file makes as many calls as there are
records.

### Making a write safe under retries

**Start from what the defaults already give you.** `HttpMethodsToRetry` gates every trigger (see Notes), so
out of the box the SDK never resends a `POST`, `PATCH` or `DELETE` — on any trigger. Two gaps remain:

- **`PUT` *is* in the default list.** HTTP calls `PUT` idempotent; your provider's `PUT` may still carry a
  per-call side effect — an audit row, an outbound webhook, a metered charge — that a resend duplicates.
- **"The SDK did not resend it" is not "the write did not happen."** A transport failure on a `POST` leaves
  the outcome *unknown*: the bytes may have reached the provider before the socket died. That is a
  reconciliation problem, and no retry setting solves it.

**Retries can be turned off.** `RetryOptions.Disabled()` is `Default() with { MaxRetries = 0 }`, and the
factory skips the retry strategy outright when `MaxRetries <= 0` rather than handing `0` to Polly — so there
is no `MaxRetryAttempts >= 1` validation error and no `MaxRetries = 1` floor. `Disabled()` keeps the
per-attempt `Timeout`; only the retries go. The pipeline is built once in the client constructor, so this is a
per-**client** choice, not a per-call one.

**Decide which requirement you are meeting before you pick a remedy — they are not interchangeable:**

- *"A duplicate must be harmless"* → options 1–2. **The provider still receives more than one write.** If
  anything counts sends — a side effect the provider records per call, an audit trail, a test asserting
  exactly one upstream write — these do not satisfy it, and nothing about the code will look wrong.
- *"At most one write may reach the provider"* → option 4. It is the only one that holds the count at one
  **regardless of configuration**. Two others hold it at one *today*, each with its own way of quietly
  stopping: the default `HttpMethodsToRetry` holds until someone widens the list, and option 3 holds until
  someone re-enables retries on that client. Neither failure announces itself.

The four, **weakest guarantee first** — so do not read the numbering as a recommendation order:

1. **Make the write idempotent at the provider** — a client-supplied unique reference or idempotency key,
   where the API offers one. Makes a resend *harmless* rather than rarer; the send count stays above one.

   Look at the operation's **own parameters**, not just the request model. The generator can put a
   provider's idempotency key in any of three places, and only one of them is the body:

   - a **header parameter** — a bare `string?` in the signature;
   - a **form field** — routed into `FormUrlEncodedRequest.Create([...])`.
     Do not search for a nullable type here: the same key can be declared **non-nullable** on one
     operation and `string?` on the next. Match on the parameter reaching a
     `new Param("...", x)` in the form body, not on its nullability;
   - a field on the **request model**.

   A model-only search finds nothing on the first two and concludes wrongly that the API offers no key. Ask
   the contract sheet for the operation's full parameter list, not just its body shape.

   Note that **whether the provider actually rejects a duplicate value is not visible in the model**. Such a
   field is typically just a nullable string, equally consistent with a uniqueness-enforced key and with a
   free-text label. Verify against live traffic before relying on it; if it is not enforced, this gives you
   nothing.

   ⚠ **An `Idempotency-Key` header on the wire is usually not the provider's key.** The generator puts
   one on **every** non-GET operation and on no GET. Its value is almost always `Guid.NewGuid()`, injected
   by the generator: not a spec parameter, no doc comment, nothing the caller can reach. The exception is
   an operation whose own spec declares `Idempotency-Key` as a parameter, where the generator defers to
   the caller's value.

   So the header's *presence* tells you nothing — only the **source of its value** does, and that is visible
   in the signature: if no parameter feeds it, it is injected. Three consequences, all of which cut against
   the reading you would naturally take:

   - **An injected key makes nothing safe unless your provider consumes that exact header name.** Most APIs
     do not document `Idempotency-Key` as their mechanism, and on those it is inert.
   - **The value is fresh per call.** `Guid.NewGuid()` is evaluated at the call site, before the resilience
     pipeline runs — so it is stable across the SDK's *internal* retry attempts, and different on every
     *caller-level* retry. The resend that a job re-running after a timeout produces is exactly the one it
     cannot deduplicate.
   - **It can sit alongside the real key, under a near-identical name.** One request can carry both the
     injected `Idempotency-Key` *header* and a spec-declared `IdempotencyKey` *form field*; only the second
     one means anything. Matching on the name alone picks the wrong one.

   The trap is not that an injected key is useless; it is that it is *visible*. Seeing `Idempotency-Key` go
   out on the wire, or in a log, reads as evidence that idempotency is handled. Treat it as absent until you
   have confirmed both that the provider consumes that header name and that a parameter feeds it — and note
   the default `HttpMethodsToRetry` includes `PUT`, so a `PUT` is resent by the SDK itself under a header
   that probably means nothing to the provider.
2. **Reconcile after a failure** — on a transport failure on a write, re-read provider state to establish
   what actually happened instead of assuming nothing did. (Same reflex as an unreadable write response —
   see `dotnet-error-handling`.) Detects a duplicate; does not prevent one.
3. **A separate client for writes**, built with `Retry = RetryOptions.Disabled()`. Removes SDK-side resends
   entirely while keeping the per-attempt `Timeout`. Worth doing when you have widened `HttpMethodsToRetry`
   for the read path and need the write path held at one send regardless.
4. **A `DelegatingHandler` that refuses a re-send it did not authorise** — the only option that holds the
   count at one no matter how the client is configured, because a blocked attempt never reaches the
   network. Reach for this whenever a
   duplicate would be externally visible or costly to undo, and combine it with option 2 to settle the
   outcome of the one send you allowed.

   Two details decide whether it works, and both are easy to get wrong:

   - **Do not keep the "already sent" marker on the `HttpRequestMessage`.** A fresh request object is built
     for each attempt, so a marker set via `HttpRequestOptionsKey` is gone by the retry and the guard never
     fires — measured: 4 sends, i.e. no protection at all. Keep the count in state that outlives the
     request, such as an `AsyncLocal` scope the caller opens around the write; retries run inside the
     caller's async context, so the scope flows into the handler on every attempt (measured: 1 send).
   - **Do not throw an `HttpRequestException` to refuse**, and do not let the refusal path time out — both
     are retry triggers, so the refusal itself becomes retryable. Throw a private sentinel type that derives
     from `Exception`; it propagates out unwrapped, and your integration boundary translates it.

   Count the send *before* it goes out. A request that failed on the way out may still have been received,
   so "this may already have taken effect" is the only safe reading — surface it as an **unknown outcome**
   to be settled by re-reading provider state (option 2), not as a definite failure.

`HttpMethodsToRetry` **is** the primary control here — it gates every trigger, and keeping non-idempotent
verbs out of it is most of the job. The options above cover what it cannot: a `PUT` with side effects, a list
you have widened, and the unknown outcome a transport failure leaves behind.

**All four bound the call YOU make to the provider. None of them is a reason to change the contract
your own callers see.** Taking an idempotency key from your callers can be a deliberate API design;
retrofitting one so the guard above has something to key on is not. Key the guard on what you already
hold — a reference you derive deterministically from what the caller already sent. A caller that sent
a well-formed request and got a `4xx` because your guard wanted something extra is a defect you
introduced, not a duplicate you prevented.

**A guard needs a release.** A claim, lease or "already sent" marker with no expiry and no recovery
path turns one transient failure into a permanent refusal: every later attempt meets the stale claim
and is turned away. Clear it once the outcome is settled, and expire it when it never is.

## Bounding a call — the three layers, and which one is a total

There are three places a bound can live, and **two of the three are per-attempt**: the two knobs named
"Timeout" are neither of them a call budget — though one comes closer than it looks (below):

| Layer | Scope | Default | Bounds a whole call? |
| --- | --- | --- | --- |
| `options.Retry.Timeout` | one attempt | `100s` | **No** — and on a retryable verb its own expiry is retried |
| `HttpClient.Timeout` | one attempt | `100s` | **No** — same; see below |
| `CancellationToken` you pass to the call | the whole call | none | **Yes** — the only one |

**`HttpClient.Timeout` is applied per attempt here, which is not obvious.** It is enforced by a CTS created
inside each `SendAsync`, and the retry pipeline sits *above* `SendAsync` — so every retry gets a fresh full
`Timeout`.

**Two per-attempt timeouts, and on a retryable verb only one of them ends the call.**
`options.Retry.Timeout` expiring raises `TimeoutRejectedException` *inside* the pipeline, which *is* in the retry set — on an eligible verb the
attempt is retried and the cost multiplies (that is the ≈407s row above); only once the retries run out does
the SDK convert it to the `TaskCanceledException` you catch. `HttpClient.Timeout` expiring raises
`TaskCanceledException` directly, which is *not* in the set — so it ends the call the first time it fires,
on any verb. (On a non-retryable verb the distinction collapses: neither is retried and both end the call on
the first fire.) That asymmetry makes `HttpClient.Timeout` the cheapest hard bound on a hang: a `10s`
value bounds a hang at ≈10s whatever the verb. What it does not bound is a provider that fails *retryably* just under the limit on every attempt — that still costs
≈ `4 × 10s + 7s ≈ 47s`. It is also the only bound left standing if you set `options.Retry.Timeout = null`. A
good backstop and the cheapest fix for a hang; still not a call budget.

Set all three — they catch different failures. The per-attempt bounds cap a single stalled socket; the token
caps the sum, which is the only thing your caller experiences:

```csharp
using {RootNamespace}.Core.Configuration;

options.Retry = RetryOptions.Default() with { Timeout = TimeSpan.FromSeconds(10) };  // per attempt
// httpClient.Timeout = TimeSpan.FromSeconds(10);   // per attempt, backstop — see dotnet-client-initialization

using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));  // the whole call — the mechanism;
var response = await client.{ApiGroup}.{Operation}(/* ... */, ct: cts.Token);  // for WHERE it belongs, see below
```

**Give the total bound one home, not one per call site.** A `CancellationTokenSource` written out at each
call is the layer that gets skipped — it is per-call-site work, so any operation added later silently has no
ceiling. Put it at your integration boundary instead, where it applies to every operation by construction.
In ASP.NET Core, link the request's own cancellation so a disconnected client also stops the outbound work:

```csharp
// In the one service class that fronts the SDK:
async Task<T> Bounded<T>(Func<CancellationToken, Task<T>> call, CancellationToken ct)
{
    using var cts = CancellationTokenSource.CreateLinkedTokenSource(ct);   // ct = HttpContext.RequestAborted
    cts.CancelAfter(_budget);                                             // e.g. 30s, from config
    return await call(cts.Token);
}
```

Then every operation goes through `Bounded(...)`, and the budget is one value in one place.

**The invariant to check:** your worst case — `attempts × per-attempt timeout + total backoff` — must sit
below the deadline your own caller is working to. If it does not, the caller times out first and your retries
are burning provider capacity for a response nobody is still waiting for. A `TaskCanceledException` from your
own token is **not** retried (see Notes above), so the token cuts the call cleanly.

## Pagination

Operations the API marks as paginated return **`Pageable<{PageResponse}, {Item}>`**, and the shape catches
people out: `Pageable<TPage, TItem>` implements `IAsyncEnumerable<`**`TItem`**`>`, so a plain `await foreach`
walks **individual items**, not pages. The SDK fetches each page and advances the paging state for you —
one of five strategies (offset, cursor, keyset, `Link`-header, or page-number), chosen per operation.

The sample below walks **pages**, via `.AsPages(ct)`, because bounding the enumeration is the point it is
making and a page cap is the cheapest bound. For the item-at-a-time form, drop `.AsPages(ct)` and
`await foreach` the operation directly.

```csharp
// The paging args (e.g. offset/limit, cursor/limit, or page/size) seed the FIRST page;
// the SDK advances them and stops when the API signals the end.
// Pages, not items: a bare `await foreach` over a Pageable walks items. Bound it either way —
// see "Never leave a page loop unbounded" below.
const int MaxPages = 100;
int pages = 0;

await foreach ({PageResponse} page in
    client.{ApiGroup}.{Operation}(/* offset: 0, limit: 100, ... */, ct: ct).AsPages(ct))
{
    foreach (var item in page.{Items})
        Process(item);

    if (++pages >= MaxPages)
        break;          // or log + throw: silently truncating a result set is its own defect
}
```

**`.AsPages(ct)` is also where any cursor, link or
total-count metadata on the page response lives** — the sample above uses it to bound; use it
equally when you need that metadata:

```csharp
await foreach ({PageResponse} page in client.{ApiGroup}.{Operation}(/* ... */, ct: ct).AsPages(ct))
{
    // page carries its items plus whatever paging metadata the response declares
}
```

A failed page fetch throws `SdkException<TError>` mid-enumeration (see **dotnet-error-handling**).

### ⚠⚠ Never leave a page loop unbounded

**"The SDK stops when the API signals the end" is a description of the happy path, not a guarantee.** The
enumeration terminates only when the provider stops handing out a next page. Treat "the provider will tell
me when to stop" as the *only* stop condition and you have written an unbounded loop: a provider that keeps
returning a next-page link, a cursor that fails to advance, or a filter the provider quietly ignores will
each spin until something else kills the request.

What that failure looks like in production — the request does not return slowly, it **does not return at
all**:

```
status=0  upstream=55909
CLIENT_ERROR:TaskCanceledException:The request was canceled due to the configured
HttpClient.Timeout of 75 seconds elapsing.
```

Tens of thousands of provider calls billed, the caller left holding a dead request, and no error the
provider can be blamed for. The bug is entirely on the consuming side.

**Every page loop needs at least one bound that does not depend on the provider's cooperation.** Pick the
one that matches the use case; a page cap is the cheapest and is never wrong:

| bound | use when | shape |
|---|---|---|
| **page cap** | always — the backstop | `if (++pages >= MaxPages) break;` |
| **item cap** | the caller wants "the first N" | `if (results.Count >= max) break;` |
| **deadline** | the call sits behind a request timeout | `cts.CancelAfter(TimeSpan.FromSeconds(20))` and pass its token |
| **no-progress guard** | cursor/offset paging | stop if the cursor or offset did not change between pages |

Prefer to **narrow the query before you page it**: a provider-side date range, status filter, or
`pageSize` that matches what the caller needs turns "walk everything" into a handful of pages. Paging the
whole collection and filtering client-side is the slow path even when it terminates.

**A bound that silently truncates is a different defect from one that hangs.** When you hit the cap, either
surface it to the caller or log it — never return a partial page set that reads like a complete one.

**No-throw variant.** Where generated, a sibling `{Operation}Result` returns
`Pageable<ApiResult<{PageResponse}, TError>, {Item}>` — the same streaming, but its **`.AsPages(ct)`** hands
you an `ApiResult` per page that you inspect instead of it throwing:

```csharp
await foreach (var result in client.{ApiGroup}.{Operation}Result(/* ... */, ct: ct).AsPages(ct))
{
    if (result.TryGetResponse(out var pageResponse))   // the page (items + any cursor/link metadata)
    {
        // process pageResponse
    }
    else if (result.TryGetError(out var error))
    {
        // handle the failed page — a failure is always the LAST element the SDK yields
    }
}
```

> Not every list endpoint is paginated. An operation with no pagination metadata is a plain list call
> (returns a list or a wrapper — see **dotnet-calling-endpoints**); to page one of those, drive its own
> `page`/`perPage` query params yourself and stop when a page returns fewer than `perPage` items.
> **A hand-driven loop needs the same bound as an auto-paginated one** — "fewer than `perPage`" and
> "no next-page link" are both provider-supplied stop conditions, and neither is a bound. Carry a page
> cap alongside it (see *Never leave a page loop unbounded* above).

## Streaming (Server-Sent Events)

Operations the API marks as streaming (`text/event-stream`) are generated to **return
`Task<IAsyncEnumerable<{Item}>>`** — `await` the call once to open the stream, then `await foreach` the
frames as the server emits them. `{Item}` is `string` for a plain-text stream, or a typed model for a JSON
event stream.

```csharp
using {RootNamespace}.Core.Exceptions;   // SseException, SseTimeoutException, SseDeserializationException

// await once to open the stream (an opening error surfaces here — see "Errors" below):
IAsyncEnumerable<{Item}> stream = await client.{ApiGroup}.{Operation}(ct: ct);

try
{
    await foreach (var frame in stream.WithCancellation(ct))   // each frame as the server emits it
        Process(frame);
}
catch (SseTimeoutException ex)              // no frame arrived within the idle-timeout window
{
    // ex.IdleTimeout — the window that elapsed
}
catch (SseDeserializationException ex)      // a JSON frame didn't match {Item}
{
    // ex.RawFrame (offending payload) + ex.InnerException (the JsonException)
}
```

**Idle timeout.** A stalled stream is bounded by an **idle timeout** — the maximum wait **between frames** —
which throws `SseTimeoutException` (rather than hanging) when it elapses. This is **not** a client-options
property (there is no `StreamReadTimeout`); the idle window is a `TimeSpan?` carried on the SSE response
itself, defaulting to **none** — a null window disables the check. When it does fire,
`SseTimeoutException.IdleTimeout` reports the window that elapsed.

**Errors** (all under `{RootNamespace}.Core.Exceptions`):
- **Before the stream opens** — the opening `await` throws `SdkException<TError>`, with `TError` the same
  two-case shape as any operation: a typed `{Operation}Error` (Case A) or `RawError` (Case B), per what the
  operation declares (see **dotnet-error-handling**).
- **While enumerating** — both of the following derive from a common `SseException` base (catch `SseException`
  to handle either):
  - `SseTimeoutException` — no frame arrived within the idle-timeout window; carries `IdleTimeout`.
  - `SseDeserializationException` — a frame couldn't be deserialized to `{Item}` (JSON streams); carries the
    `RawFrame` text and the underlying `JsonException` as `InnerException`.
- Retries do **not** apply once the stream is open; cancel via the `CancellationToken`
  (`stream.WithCancellation(ct)`) to stop early.

## Logging

**The SDK has a built-in request/response logger — you do not need a `DelegatingHandler` for this.** Set
`options.Logging` (a `LoggingOptions` under `{RootNamespace}.Core.Configuration`) and give it an
`ILoggerFactory`. **What happens when you leave `LoggerFactory` null depends on how the client was built**,
and one of the three cases is almost certainly your production path:

| how the client is built | `LoggerFactory` null means |
| --- | --- |
| `services.Add{Api}Client(...)` | the extension fills it from the container's `ILoggerFactory` — **logging is already on**, at your host's minimum level, and the request line goes to your normal log sinks |
| `new {Api}Client(httpClient, options)` by hand | `NullLoggerFactory` — nothing is written, *unless* `{APICLIENTTYPENAME}_LOG` is set (see below) |
| you assign it yourself | your factory is used and the environment variable is ignored outright |

The first row is the one that surprises people: in any ASP.NET Core or generic-host app the SDK is logging
every request URL from the moment you register it. (In a bare `ServiceCollection` with no logging providers
the factory exists but emits nothing — which is why the environment variable below never fires there
either.) That is usually what you want — just know it is on, and
that the redaction rules below are the only thing standing between your logs and the query string.

```csharp
using {RootNamespace}.Core.Configuration;
using Microsoft.Extensions.Logging;

options.Logging = new LoggingOptions
{
    LoggerFactory      = loggerFactory,   // null => the DI factory if there is one, else the env var below
    LogRequestHeaders  = false,           // default
    LogResponseHeaders = false,           // default
    LogRequestBody     = false,           // default — read the warning below before enabling
};
```

What it emits, and at which level — every row is additionally gated by `_logger.IsEnabled(level)`, so a
factory whose minimum level is `Warning` emits no request line at all; the SDK's switches are a *second*
gate, not the only one:

| Event | Level | On by default |
| --- | --- | --- |
| request line — `HTTP {Method} {Url}` | `Information` | yes |
| response line — `… → {Status} ({ms} ms)` | `Information` on success, `Warning` on failure | yes |
| retry notice — delay, attempt *n*/*max*, and the reason | `Warning` | yes |
| terminal failure, with the exception | `Error` | yes |
| request / response headers | `Debug` | no — `LogRequestHeaders` / `LogResponseHeaders` |
| request body | `Trace` | no — `LogRequestBody` |

**The URL and the headers are redacted by allow-list, which is the safe direction.** A query parameter is
masked unless its key is on a short known-safe list (`cursor`, `dates`, `datetime`, `limit`, `offset`,
`page`, `since`, `size`, `strings`); a header is masked unless it is on a known-safe list of ordinary
transport headers — `Authorization` is *not* on that list, so it is masked. `RedactedKeys` (default: `sig`,
`signature`, `access_token`, `apikey`, `api_key`, `client_secret`, `password`, `refresh_token`, `code`,
`assertion`, `client_assertion`) adds to the masked set, `RedactedHeaders` forces a header in, and
`UnmaskHeaders` opts one out; the replacement is `RedactionPlaceholder` (`"***"`). The URL **path** is not
masked — an id or reference in the route is logged as-is.

⚠▶▶ **`LogRequestBody = true` does not redact a JSON body**, and only half-redacts a form body. A JSON body
is logged **verbatim** — truncated at `BodySizeLimit` (32 KB), and only when its content type is in
`LoggableContentTypes` (`application/json`, `application/x-www-form-urlencoded`). A form body gets key
masking, but by **deny-list**, not by the allow-list the URL uses: only keys in `RedactedKeys` are masked, so
`card_number` or `cvv` in a form body prints in the clear even though the same key in a query string would
not. On any endpoint that carries card data, bank details, personal data or a credential in the body,
switching this on writes that data to your logs. Leave it off in production; turn it on for one endpoint at
a time behind a flag you can prove is off.

⚠▶▶ **An environment variable turns all of this on without a code change.** When
`options.Logging.LoggerFactory` is *still* `null` at construction — which in practice means a client you
constructed yourself, since `Add{Api}Client` always fills it (it calls `AddHttpClient()`, which registers an
`ILoggerFactory`) — the SDK reads
`{APICLIENTTYPENAME}_LOG`, the client type name upper-cased plus `_LOG`. It accepts `info`, `debug` or
`trace`, and writes to **stderr** through a built-in console logger. `debug` additionally forces request *and* response headers on; **`trace` additionally forces
`LogRequestBody` on**, i.e. unredacted JSON bodies to stderr on a host you may not control. Assigning
`LoggerFactory` yourself disables the variable outright — which is the reason to set it explicitly in
production even when you point it at `NullLoggerFactory.Instance`.

**Per-call override.** Every generated operation takes a `RequestOptions? requestOptions = null` argument
with two properties: `LogLevel?` — the logging override this section covers — and `Hooks`, the per-call
hook list (see *Hooks* below). Passing `new RequestOptions { LogLevel = LogLevel.Debug }` **sets** the
verbosity for that one call without touching the client's configuration — useful for tracing one failing
endpoint. Two things about it are easy to get wrong:

- It **replaces** the per-switch defaults in *both* directions, rather than only raising them. `Trace` turns
  the body and headers on even when `LogRequestBody` is `false`; a value *above* `Information` — `Warning`,
  say — switches the request line and the success response line **off** for that call.
- It cannot lift a level your `ILoggerFactory` has filtered out. `_logger.IsEnabled(level)` is still ANDed in
  front, so a per-call `Trace` against a factory whose minimum is `Information` logs nothing extra.

### Hooks — the SDK's own request/response seam

`options.Hooks` (client-wide) and `requestOptions.Hooks` (per call, **appended after** the client-wide
list — it does not replace it) take `SdkHook` instances (`{RootNamespace}.Core.Hooks`). Subclass
`SdkHook`, or build one from a delegate — sync shown; `Func<…, CancellationToken, ValueTask>` overloads
exist for async work:

```csharp
options.Hooks =
[
    SdkHook.OnRequest((req, ctx) => { /* HttpRequestMessage; ctx.Method, ctx.Uri */ }),
    SdkHook.OnResponse((res, ctx) => { /* HttpResponseMessage — status AND headers */ }),
];
```

The facts that decide how you use them:

- **They run inside the retry pipeline, once per attempt.** `OnRequest` fires after auth is applied — so
  it sees what actually goes out — and `OnResponse` sees every attempt's raw response; "the" observed
  value is therefore the last attempt's.
- **This is the only supported place the success path exposes status and headers** (`Retry-After`,
  rate-limit budgets, a request-id echo) — the operation's return value carries only the body. A
  per-call hook can close over a local, which puts the observed value in scope in the same method's
  `catch`; a client-wide hook needs `AsyncLocal` or a scoped service to reach it.
- **A hook is an observation seam, not a veto point.** An exception thrown from a hook is not retried
  (the transport arm retries only `HttpRequestException` and the timeout rejection) — it just fails the
  call, and a throwing `OnResponse` fails a call that succeeded on the wire. To refuse a re-send, use
  the write-guard `DelegatingHandler` under *Make the write idempotent* — a blocked attempt must never
  reach the network, which no observation hook can guarantee.

### When you still want a `DelegatingHandler`

For a correlation id, metrics, a custom sink, or a header the SDK does not set, the lighter tool is a
hook (above) — it travels with the client options and needs no handler chain. Reach for a
`DelegatingHandler` only when you must sit below the SDK on the raw `HttpClient` pipeline: the
write-guard that refuses a re-send, or instrumentation shared with the same `HttpClient`'s non-SDK
consumers. Be aware that the obvious hand-rolled version logs `request.RequestUri`
**unredacted**, which the built-in path would have masked, so redact it yourself if you go this way:

```csharp
public sealed class LoggingHandler : DelegatingHandler
{
    protected override async Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request, CancellationToken ct)
    {
        // request.RequestUri is NOT redacted here — strip or mask the query before printing it.
        Console.WriteLine($"--> {request.Method} {request.RequestUri?.GetLeftPart(UriPartial.Path)}");
        var response = await base.SendAsync(request, ct);
        Console.WriteLine($"<-- {(int)response.StatusCode}");
        return response;
    }
}

var httpClient = new HttpClient(new LoggingHandler { InnerHandler = new HttpClientHandler() });
var client = new {Api}Client(httpClient, options);
```

With DI, the SDK's `Add{Api}Client` resolves the **default (unnamed)** `IHttpClientFactory` client, so attach
the handler to that one — register it and configure the default client *before* (or alongside) the SDK
registration:

```csharp
services.AddTransient<LoggingHandler>();
services.AddHttpClient(Options.DefaultName).AddHttpMessageHandler<LoggingHandler>();
services.Add{Api}Client(options => { /* ... */ });   // resolves CreateClient() → the default client
```

The handler then runs on every SDK call — but so does everything else you configure on the default client,
for **every other unnamed `CreateClient()` consumer in the app**. If that blast radius is unwelcome, skip the
extension and register the client over a **named** `HttpClient` instead
(`services.AddHttpClient("my-api").AddHttpMessageHandler<LoggingHandler>()`, then construct
`new {Api}Client(factory.CreateClient("my-api"), options)`), which keeps the handler, timeout and primary
handler scoped to this SDK. See **dotnet-client-initialization**.

The `OnRetry` callback above is also a convenient place to observe retry activity.

### Verify on the wire (first run of any new integration)

**Run the built-in logger on the first execution of any new call and inspect the output** — the default
`Information` request line is enough, so this costs one `LoggerFactory` assignment. Path/template params are
not type-checked against the route (internally the value is
`object?`; it is normalised *through* JSON — which is why an enum contributes its wire value and not its C#
member name — then substituted as the resulting scalar's plain text, URL-escaped, by a plain string
replace), and on a **successful** response the
SDK returns only the deserialized body — it never surfaces the request URL or status (see
**dotnet-error-handling**). So a wrong verb, a leftover `{placeholder}`, or a mis-serialized path segment
**compiles cleanly** and produces no in-band signal; the only symptom is a runtime `404`/`422`.

Checklist for the first printed request:
1. the **verb** matches the operation (a `404` on a path you believe exists often means the wrong method);
2. the **path** is fully formed. The failure to watch for is silent and unobvious: a path parameter whose
   value is null or empty collapses to **nothing**, leaving a doubled slash (`/orders//authorize`) — not a
   leftover marker. (An unbound `{placeholder}` would survive, but the generator supplies every declared
   path param, so that is only reachable through a hand-set `BaseUrl`; and it prints percent-encoded,
   `%7Bid%7D`, not as `{id}`.)
3. each **path-param segment** is the value the API expects — for an enum that is the **wire value**
   (frequently ALL-CAPS), not the C# member name; the generated constants carry it. `FromValue("...")` is
   the risk, but not in the way you would guess: a string that matches a declared constant
   *case-insensitively* is normalised to the declared casing, so only a value matching **no** constant at
   all reaches the URL verbatim — a typo, not a casing slip;
4. the query params you set actually appear in the query string — remembering that a value is masked
   unless its key is on the known-safe list (`cursor`, `dates`, `datetime`, `limit`, `offset`, `page`,
   `since`, `size`, `strings`), so for anything else you are checking that the key is present, not what it
   carries.

Drop the level back once verified.
