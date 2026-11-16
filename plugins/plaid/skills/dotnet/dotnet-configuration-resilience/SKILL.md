---
name: dotnet-configuration-resilience
description: Load before registering or tuning an APIMatic .NET SDK client in C# — retries and backoff, timeouts and cancellation, base-URL/server selection, list pagination, SSE streaming, request/response logging and hooks. Load it even when the option names look obvious; they don't show which calls retry or what a timeout bounds.
---

# Configuration & resilience for an APIMatic .NET SDK

> **One skill, every shape.** This file covers every configuration surface the SDK can have. Which
> ones YOUR SDK uses — the pagination strategy of each operation, any idempotency-key parameters, the
> server variables — is in the contract sheet or the map: **apply only the guidance that matches**.

Most types below live under `{RootNamespace}.Core.Configuration` and `{RootNamespace}.Servers`; the
exception family (`SdkException` and its leaves — see **dotnet-error-handling**) sits under
`.Core.Exceptions` and the per-call `RequestOptions` under `.Core`. Each section names its own namespace.

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
| `HttpMethodsToRetry` | `GET, HEAD, PUT, OPTIONS` — gates every transient retry trigger, not the OAuth2 `401` re-send (Notes) |
| `MaxRetries` | `3` |
| `Delay` | `1s` |
| `BackOffFactor` | `2` |
| `UseExponentialBackoff` | `true` |
| `MaxJitter` | `500ms` |
| `Timeout` | `100s` (**per attempt**) — **too long for any interactive path; set it explicitly** |
| `OnRetry` | `null` |

**Worst case on the defaults:** up to 4 attempts × `100s` + `1s + 2s + 4s` of backoff ≈ **407s** on a
retryable verb (`GET`/`HEAD`/`PUT`/`OPTIONS`) — whether the provider hangs (the per-attempt timeout is itself
retried) or fails retryably — and up to ≈ **9.7 minutes** (`4 × 100s + 3 × 60s`) if every attempt returns a
large `Retry-After`. Any other verb gets one attempt, ≤ **100s** — two when an OAuth2 `401` is re-sent
(Notes). The request, a pooled connection and your caller are held open for that whole window, so choose
every value in this table deliberately; `Timeout` has no safe default for a request-path call.

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
- **`HttpMethodsToRetry` gates every transient trigger** — status, transport fault and timeout alike. With
  the defaults a `POST`/`PATCH`/`DELETE` is **never** resent on any of them: not on a `503`, not on a
  connection reset, not on a timeout — which keeps a non-idempotent write from executing twice. The one
  exception is the OAuth2 `401` re-send in the next note, which this list does not gate. Adding a verb removes
  that protection for **every** operation using it — read *Making a write safe under retries* below first.
- **An OAuth2 `401` is re-sent once, on any verb.** A call authenticated by an OAuth2 scheme (alone or in an
  AND/OR group) that gets a `401` drops the cached token, fetches a new one and is re-sent once — whatever
  `HttpMethodsToRetry`, `MaxRetries` or `RetryOptions.Disabled()` say. A request whose body cannot be
  replayed (a binary body, a multipart form with a binary part) is not re-sent: its `401` reaches you, and
  the next call fetches a fresh token. A static credential's `401` is never re-sent.
- **On an eligible verb three things trigger a retry:** an `HttpRequestException` (connection reset, DNS
  failure, dropped socket), the SDK's **own per-attempt `Timeout` firing**, and a status in
  `StatusCodesToRetry`. A `TaskCanceledException` — from your own `CancellationToken`, or from
  `HttpClient.Timeout` — is **not** retried and ends the call where it fires.
- **What reaches your `catch`:** an exhausted per-attempt `Timeout` as `SdkTimeoutException` (`Timeout` is
  the window that elapsed), a connection reset, DNS failure or dropped socket as `SdkConnectionException`;
  the raw exception is the `InnerException`, never what you catch. Your own cancellation surfaces unwrapped,
  as `OperationCanceledException` / `TaskCanceledException`. See **dotnet-error-handling** for the family
  and its messages.
- **`Retry-After` overrides the computed backoff.** If the failing response carries a `Retry-After` header
  (delta-seconds or an HTTP date) that value is used as the delay instead of
  `Delay × BackOffFactor^n + jitter`. Both paths are then clamped to a hard **60s** ceiling that is not
  configurable — a provider asking for a 10-minute pause gets 60s, and a large `BackOffFactor` cannot push a
  single delay past a minute.
- **Some requests never retry:** one whose binary body is present, or a multipart form with a binary part.
  They still get the per-attempt `Timeout`. JSON, form-url-encoded, other multipart and empty-body requests
  follow the verb rule.
- `Timeout` is nullable: `null` disables the per-attempt timeout. To cap a whole call, use a
  `CancellationToken` (*Bounding a call* below).
- `OnRetry`'s `RetryAttempt` also carries `Reason` — `RetryReason.Status(HttpStatusCode)` or
  `RetryReason.Failure(Exception)` — log it to record *why* each retry fired. The per-attempt `Timeout`
  firing arrives as `RetryReason.Failure(TimeoutRejectedException)` and a dropped connection as
  `RetryReason.Failure(HttpRequestException)`, so switch on the exception type to tell them apart.

### Making a write safe under retries

**Start from what the defaults already give you:** the SDK never resends a `POST`, `PATCH` or `DELETE` on a
transient failure (see Notes). Three gaps remain:

- **An OAuth2 `401` is re-sent on every verb.** That write reaches the provider twice. A `401` usually means
  the provider did nothing, but a guard or a test that counts sends sees two.
- **`PUT` *is* in the default list.** Your provider's `PUT` may still carry a per-call side effect — an audit
  row, an outbound webhook, a metered charge — that a resend duplicates.
- **"The SDK did not resend it" is not "the write did not happen."** A transport failure on a write leaves
  the outcome *unknown*: the bytes may have reached the provider before the socket died. No retry setting
  solves that — see *A write whose outcome is unknown*.

**Retries can be turned off per client.** `RetryOptions.Disabled()` is `Default() with { MaxRetries = 0 }`;
it keeps the per-attempt `Timeout`. The pipeline is built in the client constructor, so this is a
per-**client** choice, not a per-call one.

**Decide which requirement you are meeting before you pick a remedy — they are not interchangeable:**

- *"A duplicate must be harmless"* → options 1–2. **The provider still receives more than one write.** If
  anything counts sends — a side effect the provider records per call, an audit trail, a test asserting
  exactly one upstream write — these do not satisfy it, and nothing about the code will look wrong.
- *"At most one write may reach the provider"* → option 4. It is the only one that holds the count at one
  **regardless of configuration**. Two others hold it at one *today* for transient failures, each with its
  own way of quietly stopping: the default `HttpMethodsToRetry` holds until someone widens the list, and
  option 3 holds until someone re-enables retries on that client. Neither failure announces itself, and
  neither stops the OAuth2 `401` re-send.

The four, **weakest guarantee first** — so do not read the numbering as a recommendation order:

1. **Make the write idempotent at the provider** — a client-supplied unique reference or idempotency key,
   where the API offers one. Makes a resend *harmless* rather than rarer; the send count stays above one.

   Check **every member of the operation's `{Operation}Request` record**, not just its body model — ask the
   contract sheet for the full record. The key can be a **header member** (a `string?` the method sends as
   `new HeaderParam("...", request.X)`), a **form field** (a member passed to `new Param("...", request.X)`
   in the form body — `required` on one operation and `string?` on the next, so match on the `Param`, not
   on nullability), or a field of the **`Body` model**. Whether the provider actually rejects a duplicate
   value is not visible in the SDK — such a field is typically just a nullable string; verify it against
   live traffic before relying on it.

   ⚠ **Every non-GET call sends an `Idempotency-Key` header.** Unless the method fills it from the record
   (`new HeaderParam("Idempotency-Key", request.X)`), its value is `Guid.NewGuid()`: stable across the SDK's
   own retries, new on every call you make — so it cannot deduplicate a caller-level retry — and inert
   unless the provider documents that header. It can sit beside a real `IdempotencyKey` form field under a
   near-identical name; only the record member counts. Seeing the header on the wire or in a log is not
   evidence that idempotency is handled: treat it as absent until the provider documents that header name
   and a record member feeds it.
2. **Reconcile after a failure** — on a transport failure on a write, re-read provider state to establish
   what actually happened instead of assuming nothing did. (Same reflex as an unreadable write response —
   see `dotnet-error-handling`.) Detects a duplicate; does not prevent one. How: see *A write whose outcome
   is unknown* below.
3. **A separate client for writes**, built with `Retry = RetryOptions.Disabled()`. Removes the transient
   resends while keeping the per-attempt `Timeout`; the OAuth2 `401` re-send stays (Notes). Worth doing when you have widened `HttpMethodsToRetry`
   for the read path and need the write path held at one send regardless.
4. **A `DelegatingHandler` that refuses a re-send it did not authorise** — the only option that holds the
   count at one no matter how the client is configured, because a blocked attempt never reaches the
   network. Reach for this whenever a
   duplicate would be externally visible or costly to undo, and combine it with option 2 to settle the
   outcome of the one send you allowed.

   Two details decide whether it works:

   - **Keep the "already sent" count in state that outlives the request** — e.g. an `AsyncLocal` scope the
     caller opens around the write; retries run inside the caller's async context, so the scope reaches the
     handler on every attempt. Each attempt builds a fresh `HttpRequestMessage`, so a marker set via
     `HttpRequestOptionsKey` is gone by the retry and the guard never fires.
   - **Refuse by throwing a private type derived from `Exception`**, not `HttpRequestException`, and don't
     let the refusal time out — both are retry triggers. The private type propagates unwrapped; your
     integration boundary translates it.

   Count the send *before* it goes out. A request that failed on the way out may still have been received,
   so surface it as an **unknown outcome** settled by re-reading provider state (option 2), not as a
   definite failure.

**All four bound the call YOU make to the provider. None of them is a reason to change the contract
your own callers see.** Taking an idempotency key from your callers can be a deliberate API design;
retrofitting one so the guard above has something to key on is not. Key the guard on what you already
hold — a reference you derive deterministically from what the caller already sent. A caller that sent
a well-formed request and got a `4xx` because your guard wanted something extra is a defect you
introduced, not a duplicate you prevented.

**A guard needs a release.** A claim, lease or "already sent" marker with no expiry and no recovery
path turns one transient failure into a permanent refusal: every later attempt meets the stale claim
and is turned away. Clear it once the outcome is settled, and expire it when it never is.

### ⚠⚠ A write whose outcome is unknown

A transport failure on a write (`SdkConnectionException`, including `SdkTimeoutException`) means the write may
still have landed. ⚠⚠ **A `catch` that reports a failure without first re-reading provider state is the
defect.** Settle the outcome in code:

1. **Re-read here**: look the write up by the reference you sent, or re-send it with the same idempotency key
   where the operation declares one as a parameter (not the injected `Idempotency-Key` header).
2. **Record and sweep**: set a local state that means *unknown*, not failed, and write the sweep that re-reads
   the provider and settles those rows.

With no reference to look up by, match on what the write carried (recipient, amount or content, within a time
window). If the re-read finds nothing or fails too, the outcome is still unknown: record it for the sweep. If
the provider offers no way to find the write at all, stop and raise that with the user. ⚠⚠ A log line is
neither route.

```csharp
catch (SdkConnectionException)   // the write may still have landed
{
    var found = await client.{ApiGroup}.{LookupOperation}(new() { /* the reference you sent */ }, cancellationToken: ct);
    // settle from what the provider holds for that reference
}
```

### ⚠⚠ The same operation arriving twice

Everything above stops one call being *sent* twice. It does not stop one operation being *requested*
twice — a double-submit, a caller retry, a redelivered message, two instances racing. That needs a claim
that outlives the request and the process, taken atomically:

```csharp
var reference = Deterministic(request);        // from what the request is for — never Guid.NewGuid()
if (!await TryClaim(reference, ct))            // insert-or-fail: the store rejects the second claim, you catch it
    return await LoadExisting(reference, ct);  // may still be in progress — do not report it done
var result = await client.{ApiGroup}.{Operation}(/* `reference` as its idempotency key, if it has one */, cancellationToken: ct);
await Complete(reference, result, ct);
```

Build `TryClaim` on whatever this codebase already uses to enforce uniqueness, and add no new store or
dependency for it. If it has nothing that can hold such a claim, stop and raise that with the user.

⚠⚠ An in-process lock (`SemaphoreSlim`, `AsyncLocal`, a static dictionary), a single-host assumption or an
exists-then-insert read is no guard here: it lets both callers through — and documenting it as a known
limitation does not change that.

## Bounding a call — the three layers, and which one is a total

There are three places a bound can live, and **two of the three are per-attempt**: the two knobs named
"Timeout" are neither of them a call budget — though one comes closer than it looks (below):

| Layer | Scope | Default | Bounds a whole call? |
| --- | --- | --- | --- |
| `options.Retry.Timeout` | one attempt | `100s` | **No** — and on a retryable verb its own expiry is retried |
| `HttpClient.Timeout` | one attempt | `100s` | **No** — same; see below |
| `CancellationToken` you pass to the call | the whole call | none | **Yes** — the only one |

Both per-attempt timeouts stop when the response headers arrive; reading the body after that is bounded
only by your `CancellationToken` (on an event stream, also by `StreamReadTimeout`, below).

**`HttpClient.Timeout` also applies per attempt** — every retry gets a fresh full window.

**On a retryable verb only one of the two per-attempt timeouts ends the call.** `options.Retry.Timeout`
firing is retried (the ≈407s case); `HttpClient.Timeout` firing is not — it ends the call the first time, on
any verb — so a `10s` value bounds the wait for the response headers at ≈10s, though a provider failing
*retryably* just under it on every attempt still costs ≈ `4 × 10s + 7s ≈ 47s`. Both surface as
`SdkTimeoutException`, whose `Timeout` says which fired. With `options.Retry.Timeout = null` it is the only
per-attempt bound left. An *infinite* `HttpClient.Timeout` never fires, and a `TaskCanceledException` under one
passes through unwrapped. A good backstop and the cheapest fix for a hang before the headers; still not a call
budget.

Set all three — they catch different failures. The per-attempt bounds cap one attempt's wait for the headers; the token
caps the sum, which is the only thing your caller experiences:

```csharp
using {RootNamespace}.Core.Configuration;

options.Retry = RetryOptions.Default() with { Timeout = TimeSpan.FromSeconds(10) };  // per attempt
// httpClient.Timeout = TimeSpan.FromSeconds(10);   // per attempt, backstop — see dotnet-client-initialization

using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));  // the whole call — the mechanism;
var response = await client.{ApiGroup}.{Operation}(request, cancellationToken: cts.Token);  // for WHERE it belongs, see below
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

**The check:** `calls in the handler × (attempts × per-attempt timeout + backoff)` must sit below the
deadline your own caller is working to — count loop iterations, not lines of code. A handler that makes
several SDK calls (a loop over recipients or invoices, a fan-out, a send-then-schedule pair) adds up their
bounds, and faster when each failure is caught so the work continues; pass one `Bounded` deadline token to
every call in it. Cancelling that token is not retried, so it cuts the call cleanly.

## The clock — `TimeProvider`

Every place the SDK reads time goes through **one** option, `options.TimeProvider` (a
`System.TimeProvider`, default `TimeProvider.System`): the retry backoff and the `Retry-After` arithmetic,
the per-attempt `Timeout`, the SSE idle window (`StreamReadTimeout`, below), OAuth2 token expiry, webhook
replay tolerance (its own `WebhookOptions.TimeProvider`) and the elapsed-milliseconds figure in the response
log line.

```csharp
options.TimeProvider = TimeProvider.System;          // the default; set it only to substitute a clock
```

Under `services.Add{Api}Client(...)`, a `TimeProvider` registered in your container — in any order relative
to the SDK registration — is used unless your `configure` callback sets one: explicit option > container
registration > `TimeProvider.System`. The SDK **never registers** a `TimeProvider` itself. The same applies to
`Add{Api}WebhookSignatureVerifier`.

To fake it in tests, see **dotnet-testing** § *Fake the clock*.

## Pagination

Paginated operations return **`Pageable<{PageResponse}, {Item}>`**, and the shape catches
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
    client.{ApiGroup}.{Operation}(new {Operation}Request { /* Offset = 0, Limit = 100, ... */ }, cancellationToken: ct).AsPages(ct))
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
await foreach ({PageResponse} page in client.{ApiGroup}.{Operation}(request, cancellationToken: ct).AsPages(ct))
{
    // page carries its items plus whatever paging metadata the response declares
}
```

A failed page fetch throws `ApiException<TError>` mid-enumeration (see **dotnet-error-handling**).

### ⚠⚠ Never leave a page loop unbounded

**"The SDK stops when the API signals the end" is a description of the happy path, not a guarantee.** The
enumeration terminates only when the provider stops handing out a next page. Treat "the provider will tell
me when to stop" as the *only* stop condition and you have written an unbounded loop: a provider that keeps
returning a next-page link, a cursor that fails to advance, or a filter the provider quietly ignores will
each spin until something else kills the request.

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

**A bound that silently truncates is a different defect from one that hangs.** When you hit the cap the
result is partial, and **that fact belongs in the result** — the caller never reads your logs, so a partial
set that looks complete is a *wrong* answer. Return it in whatever form this codebase already uses to
express a partial or continuable result:

```csharp
// Shape, not a prescribed type — match the repository's existing result convention.
return Partial(results, nextPage: page);   // the caller has to handle the partial case
```

If there is no such convention and the return type genuinely cannot change, throw rather than return
silently. ⚠⚠ **A `LogWarning` at the cap followed by `return results;` is the defect.** Log it as well,
never instead.

**No-throw variant.** Where it exists, a sibling `{Operation}Result` returns
`Pageable<ApiResult<{PageResponse}, TError>, {Item}>` — the same streaming, but its **`.AsPages(ct)`** hands
you an `ApiResult` per page that you inspect instead of it throwing:

```csharp
await foreach (var result in client.{ApiGroup}.{Operation}Result(request, cancellationToken: ct).AsPages(ct))
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
> `page`/`perPage` query params yourself, stop when a page returns fewer than `perPage` items, and carry
> the same page cap (see *Never leave a page loop unbounded* above).

## Streaming (Server-Sent Events)

A streaming (`text/event-stream`) operation **returns `Task<IAsyncEnumerable<{Item}>>`** — `await` the
call once to open the stream, then `await foreach` the
frames as the server emits them. `{Item}` is `string` for a plain-text stream, or a typed model for a JSON
event stream.

```csharp
using {RootNamespace}.Core.Exceptions;   // SdkTimeoutException, ResponseDeserializationException, SdkConnectionException

// await once to open the stream (an opening error surfaces here — see "Errors" below):
IAsyncEnumerable<{Item}> stream = await client.{ApiGroup}.{Operation}(cancellationToken: ct);

try
{
    await foreach (var frame in stream.WithCancellation(ct))   // each frame as the server emits it
        Process(frame);
}
catch (SdkTimeoutException ex)                  // no frame arrived within StreamReadTimeout
{
    // ex.Timeout — the idle window that elapsed
}
catch (ResponseDeserializationException ex)     // a frame didn't match {Item} (JSON / parsed streams)
{
    // ex.TargetType — {Item}; ex.InnerException — the JsonException / FormatException
}
catch (SdkConnectionException ex)               // the connection dropped mid-stream
{
    // ex.InnerException — the IOException / HttpRequestException
}
```

**Idle timeout.** `StreamReadTimeout` on `{Api}ClientOptions` (a `TimeSpan?`, default **60 s**, `null` to
wait indefinitely) bounds the wait **between frames**, never your own processing inside the loop. When it
elapses the SDK tears the stream down and the enumeration throws `SdkTimeoutException` with `Timeout` set to
the window — the same leaf as a per-attempt timeout, so one `catch (SdkTimeoutException)` covers both.

**Errors:** the opening `await` throws `ApiException<TError>` — Case A or B, as for any operation (see
**dotnet-error-handling**). While enumerating there is no SSE-specific type; the three leaves in the sample
apply. The raw frame text is **not** on `ResponseDeserializationException` or in its message, and a
plain-`string` stream cannot raise it. Retries do **not** apply once the stream is open; cancel with
`stream.WithCancellation(ct)` to stop early.

## Logging

**The SDK has a built-in request/response logger — you do not need a `DelegatingHandler` for this.** Set
`options.Logging` (a `LoggingOptions` under `{RootNamespace}.Core.Configuration`) and give it an
`ILoggerFactory`. **What happens when you leave `LoggerFactory` null depends on how the client was built**,
and one of the three cases is almost certainly your production path:

| how the client is built | `LoggerFactory` null means |
| --- | --- |
| `services.Add{Api}Client(...)` | the extension fills it from the container's `ILoggerFactory` — **logging is already on**, at your host's minimum level, and the request line goes to your normal log sinks |
| `new {Api}Client(httpClient, options)` by hand | `NullLoggerFactory` — nothing is written, *unless* `{API}_LOG` is set (see below) |
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

What it emits, and at which level — each row is also filtered by your `ILoggerFactory`'s minimum level, so a
`Warning` minimum emits no request line at all:

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

⚠ **An environment variable turns all of this on without a code change.** When
`options.Logging.LoggerFactory` is *still* `null` at construction — in practice a client you constructed
yourself, since `Add{Api}Client` always fills it — the SDK reads `{API}_LOG`, the SDK name in upper snake
case plus `_LOG`. It accepts `info`, `debug` or `trace`, and writes to **stderr** through a
built-in console logger. `debug` also forces request *and* response headers on; **`trace` also forces
`LogRequestBody` on** — unredacted JSON bodies to stderr on a host you may not control. Assigning
`LoggerFactory` yourself — even `NullLoggerFactory.Instance` — disables the variable, so set it explicitly in
production.

**Per-call override.** `new RequestOptions { LogLevel = LogLevel.Debug }`, passed as the `requestOptions`
argument every operation takes (see **dotnet-calling-endpoints**), **sets** the verbosity for that one call
without touching the client's configuration. It replaces the per-switch defaults in *both* directions: `Trace`
turns the body and headers on even when `LogRequestBody` is `false`, and a level above `Information` —
`Warning`, say — turns the request line and the success response line **off** for that call. It cannot get
past your `ILoggerFactory`'s minimum level: a per-call `Trace` against an `Information` minimum logs nothing
extra.

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
- **A hook is an observation seam, not a veto point.** An exception thrown from a hook is not retried — it
  fails the call, and a throwing `OnResponse` fails a call that succeeded on the wire. To refuse a re-send,
  use the write-guard `DelegatingHandler` (option 4 under *Making a write safe under retries*): a blocked
  attempt never reaches the network, which no hook can guarantee.

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

Under `Add{Api}Client`, attach it to the **default (unnamed)** `HttpClient` the extension resolves
(`services.AddHttpClient(Options.DefaultName).AddHttpMessageHandler<LoggingHandler>()`, with the handler
registered as transient) — which also affects every other unnamed consumer in the app — or register the
client over a **named** `HttpClient`; see **dotnet-client-initialization**.

### Verify on the wire (first run of any new integration)

**Run the built-in logger on the first execution of any new call and inspect the output** — the default
`Information` request line is enough, so this costs one `LoggerFactory` assignment. Path/template params are
not type-checked against the route (an enum contributes its wire value, not its C# member name), and a
**successful** call returns only the deserialized body — never the request URL or status. So a wrong verb, a
leftover `{placeholder}`, or a mis-serialized path segment **compiles cleanly** and shows only as a runtime
`404`/`422`.

Checklist for the first printed request:
1. the **verb** matches the operation (a `404` on a path you believe exists often means the wrong method);
2. the **path** is fully formed — a null or empty path parameter collapses to **nothing**, leaving a
   doubled slash (`/orders//authorize`), not a leftover marker. Only a `{placeholder}` in a hand-set
   `BaseUrl` survives, and it prints percent-encoded (`%7Bid%7D`);
3. each **path-param segment** is the value the API expects — for an enum that is the **wire value**
   (frequently ALL-CAPS), not the C# member name; check `IsKnownValue()` before echoing a server-sent value
   back (see **dotnet-models**);
4. the query params you set actually appear in the query string — a value is masked unless its key is on
   the known-safe list (see *Logging*), so for any other key you are checking that it is present, not what
   it carries.

Drop the level back once verified.
