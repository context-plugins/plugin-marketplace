---
name: dotnet-configuration-resilience
description: Client configuration and resilience for an APIMatic-generated .NET SDK in C# — retries and backoff, timeouts and cancellation, base-URL/server selection, list pagination, SSE streaming, and request/response logging. Load before you register or tune the client — the option names alone do not reveal which calls retry, what a timeout actually bounds, or what you must still set yourself.
---

# Configuration & resilience for an APIMatic .NET SDK

All types below live under `{RootNamespace}.Core.Configuration` / `.Servers` and are generic across
APIMatic .NET SDKs.

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
(the SDK helper agent grounds them from the SDK map/source). See **dotnet-client-initialization** for selecting the environment.

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
| `HttpMethodsToRetry` | `GET, HEAD, PUT, OPTIONS` (idempotent only — **status trigger only**, see notes) |
| `MaxRetries` | `3` |
| `Delay` | `1s` |
| `BackOffFactor` | `2` |
| `UseExponentialBackoff` | `true` |
| `MaxJitter` | `500ms` |
| `Timeout` | `100s` (**per attempt**) — **too long for any interactive path; set it explicitly** |
| `OnRetry` | `null` |

**Do the arithmetic on those defaults before you accept them.** `MaxRetries = 3` means up to 4 attempts, each
bounded at `100s`, with `1s + 2s + 4s` of backoff between them. What that actually costs depends on *how* each
attempt fails, and the two cases are far apart:

| Provider behaviour | Cost with defaults |
| --- | --- |
| **Hangs** (no response at all) | ≈ **100s** — the per-attempt timeout fires, and a timeout rejection is **not** retried (see Notes), so the call ends on the first attempt |
| **Stalls, then fails retryably** (slow reset, or a slow `503` on a retryable verb) | up to **4 × 100s + 7s ≈ 407s** — each attempt burns nearly the full timeout and is then retried |

Either way, a hung or stalling provider pins a request-handling thread, a pooled connection and the caller's
browser for a window measured in minutes. Treat every default in this table as a value you have chosen only
once you have written it down; `Timeout` in particular has no defensible default for a request-path call.

Customize:

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
- **`HttpMethodsToRetry` gates the status trigger only — transport failures are retried on every verb.**
  The pipeline's `ShouldHandle` is a bare `.Handle<HttpRequestException>()` *or* a `.HandleResult(...)`
  that ANDs the status check with the method check. So `POST`/`PATCH`/`DELETE` are correctly excluded
  from *status* retries — a `503` on a `POST` is not resent — but an `HttpRequestException` (connection
  reset, DNS failure, dropped socket) resends the request on **any** verb, up to `MaxRetries` extra
  times. A reset thrown *after* the bytes reached the server is indistinguishable from one thrown
  before, so a non-idempotent write can be executed more than once. Add a verb to `HttpMethodsToRetry`
  only if the operation is idempotent — and note that leaving it out does **not** protect a write from
  the transport path. See *Making a write safe under transport retries* below.
- Only `HttpRequestException` (and types derived from it) triggers the exception path. A
  `TaskCanceledException` from your own `CancellationToken`, and the SDK's own per-attempt
  timeout rejection, are **not** retried.
- **Multipart is not blanket-excluded.** Retry eligibility is decided per request type *before* the
  pipeline runs: a binary-body request never retries; a multipart/form-data request retries **unless it
  carries a binary part**; JSON, form-url-encoded and empty-body requests always retry. When a request
  is ineligible the whole pipeline is swapped for an empty one — which also removes the per-attempt
  `Timeout`, so binary uploads are bounded only by `HttpClient.Timeout`.
- `Timeout` is **per attempt**, not total — to cap a whole call, use a `CancellationToken` (below). It is
  nullable: set `Timeout = null` to disable the per-attempt timeout entirely.
- `OnRetry`'s `RetryAttempt` also carries `Reason` — `RetryReason.Status(HttpStatusCode)` or
  `RetryReason.Failure(Exception)` — log it to record *why* each retry fired.

### Making a write safe under transport retries

**Retries cannot be turned off.** The exception predicate consults no `RetryOptions` member, so no setting
disables the transport trigger while keeping status retries — and `MaxRetries = 0` does not work either:
Polly validates `MaxRetryAttempts` as **≥ 1** and throws at client construction. The floor is therefore
`MaxRetries = 1`, still two attempts. The pipeline is built once in the client constructor, so it cannot be
varied per call.

**Decide which requirement you are meeting before you pick a remedy — they are not interchangeable:**

- *"A duplicate must be harmless"* → options 1–2. **The provider still receives more than one write.** If
  anything counts sends — a side effect the provider records per call, an audit trail, a test asserting
  exactly one upstream write — these do not satisfy it, and nothing about the code will look wrong.
- *"At most one write may reach the provider"* → option 4. It is the only one that holds the count at one.

Option 3 is a mitigation, not an answer. The four, **weakest guarantee first** — so do not read the numbering
as a recommendation order:

1. **Make the write idempotent at the provider** — a client-supplied unique reference or idempotency key,
   where the API offers one. Makes a resend *harmless* rather than rarer; the send count stays above one.
   Check the write's request model for a client-supplied unique field (the contract sheet lists the fields) —
   but note that **whether the provider actually rejects a duplicate value is not visible in the model**. Such
   a field is typically just a nullable string, equally consistent with a uniqueness-enforced key and with a
   free-text label. Verify against live traffic before relying on it; if it is not enforced, this gives you
   nothing.
2. **Reconcile after a failure** — on a transport failure on a write, re-read provider state to establish
   what actually happened instead of assuming nothing did. (Same reflex as an unreadable write response —
   see `dotnet-error-handling`.) Detects a duplicate; does not prevent one.
3. **A separate client for writes**, built with `Retry = RetryOptions.Default() with { MaxRetries = 1 }`.
   Halves the exposure; does not remove it.
4. **A `DelegatingHandler` that refuses a re-send it did not authorise** — the only option that actually
   holds the count at one, because a blocked attempt never reaches the network. Reach for this whenever a
   duplicate would be externally visible or costly to undo, and combine it with option 2 to settle the
   outcome of the one send you allowed.

   Two details decide whether it works, and both are easy to get wrong:

   - **Do not keep the "already sent" marker on the `HttpRequestMessage`.** A fresh request object is built
     for each attempt, so a marker set via `HttpRequestOptionsKey` is gone by the retry and the guard never
     fires — measured: 4 sends, i.e. no protection at all. Keep the count in state that outlives the
     request, such as an `AsyncLocal` scope the caller opens around the write; retries run inside the
     caller's async context, so the scope flows into the handler on every attempt (measured: 1 send).
   - **Do not throw an `HttpRequestException` to refuse.** That is the very type the pipeline retries, so
     the refusal itself becomes retryable. Throw a private sentinel type that derives from `Exception`; it
     propagates out unwrapped, and your integration boundary translates it.

   Count the send *before* it goes out. A request that failed on the way out may still have been received,
   so "this may already have taken effect" is the only safe reading — surface it as an **unknown outcome**
   to be settled by re-reading provider state (option 2), not as a definite failure.

Do not reach for `HttpMethodsToRetry` here — it does not gate this path.

## Bounding a call — the three layers, and which one is a total

There are three places a bound can live, and **two of the three are per-attempt**: the two knobs named
"Timeout" are neither of them a call budget — though one comes closer than it looks (below):

| Layer | Scope | Default | Bounds a whole call? |
| --- | --- | --- | --- |
| `options.Retry.Timeout` | one attempt | `100s` | **No** — a retryable failure just under it repeats the cost |
| `HttpClient.Timeout` | one attempt | `100s` | **No** — same; see below |
| `CancellationToken` you pass to the call | the whole call | none | **Yes** — the only one |

**`HttpClient.Timeout` is applied per attempt here, which is not obvious.** It is enforced by a CTS created
inside each `SendAsync`, and the retry pipeline sits *above* `SendAsync` — so every retry gets a fresh full
`Timeout`.

It is still the highest-value single knob, for a reason worth understanding: its expiry throws
`TaskCanceledException`, which the pipeline does **not** retry (see Notes), so **the first time it fires the
call ends**. A `10s` value therefore does bound a *hang* at ≈10s. What it does not bound is a provider that
fails *retryably* just under the limit on every attempt — that still costs ≈ `4 × 10s + 7s ≈ 47s`. It also
covers requests the pipeline declares retry-ineligible, which run with no per-attempt timeout at all. A good
backstop and the cheapest fix for a hang; still not a call budget.

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

Operations the API marks as paginated are generated as methods that **return
`IAsyncEnumerable<IReadOnlyList<{Item}>>` and auto-paginate** — the SDK fetches each page and advances the
paging state for you (offset, cursor, `Link`-header, or page-number, depending on the operation). Seed the
first page with the paging arguments, then `await foreach` the pages:

```csharp
// The paging args (e.g. offset/limit, cursor/limit, or page/size) seed the FIRST page;
// the SDK advances them and stops when the API signals the end.
await foreach (IReadOnlyList<{Item}> pageItems in
    client.{ApiGroup}.{Operation}(/* offset: 0, limit: 100, ... */, ct))
{
    foreach (var item in pageItems)
        Process(item);
}
```

Each step yields **one page** (a list of items) — nest a loop to walk items, or flatten as you prefer. A
failed page fetch throws `SdkException<TError>` mid-enumeration (see **dotnet-error-handling**).

**No-throw variant.** Where generated, a sibling `{Operation}Result` returns
`IAsyncEnumerable<ApiResult<{PageResponse}, TError>>` — the same streaming, but each page is an `ApiResult`
you inspect instead of it throwing:

```csharp
await foreach (var result in client.{ApiGroup}.{Operation}Result(/* ... */, ct))
{
    if (result.TryGetResponse(out var pageResponse))   // the page (items + any cursor/link metadata)
    {
        // process pageResponse
    }
    else if (result.TryGetError(out var error))
    {
        // handle the failed page; break to stop early
    }
}
```

> Not every list endpoint is paginated. An operation with no pagination metadata is a plain list call
> (returns a list or a wrapper — see **dotnet-calling-endpoints**); to page one of those, drive its own
> `page`/`perPage` query params yourself and stop when a page returns fewer than `perPage` items.

## Streaming (Server-Sent Events)

Operations the API marks as streaming (`text/event-stream`) are generated to **return
`Task<IAsyncEnumerable<{Item}>>`** — `await` the call once to open the stream, then `await foreach` the
frames as the server emits them. `{Item}` is `string` for a plain-text stream, or a typed model for a JSON
event stream.

```csharp
using {RootNamespace}.Core.Exceptions;   // SseException, SseTimeoutException, SseDeserializationException

// await once to open the stream (an opening error surfaces here — see "Errors" below):
IAsyncEnumerable<{Item}> stream = await client.{ApiGroup}.{Operation}(ct);

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

There is **no built-in logging hook**. Add logging by attaching a custom `DelegatingHandler` to the
`HttpClient` you pass to the client:

```csharp
public sealed class LoggingHandler : DelegatingHandler
{
    protected override async Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request, CancellationToken ct)
    {
        Console.WriteLine($"--> {request.Method} {request.RequestUri}");
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

The handler above is not just for production logging — **run it on the first execution of any new call and
inspect the output.** Path/template params are not type-checked against the route (internally the value is
`object?` and the URL is built by `value?.ToString()` substitution), and on a **successful** response the
SDK returns only the deserialized body — it never surfaces the request URL or status (see
**dotnet-error-handling**). So a wrong verb, a leftover `{placeholder}`, or a mis-serialized path segment
**compiles cleanly** and produces no in-band signal; the only symptom is a runtime `404`/`422`.

Checklist for the first printed request:
1. the **verb** matches the operation (a `404` on a path you believe exists often means the wrong method);
2. the **path** has no literal `{placeholder}` left unsubstituted;
3. each **path-param segment** is the value the API expects (e.g. the lowercase enum **wire value**, not a
   C# member name or a mis-cased `FromValue("...")` input);
4. the query params you set actually appear in the query string.

Gate the handler behind a debug flag once verified.
