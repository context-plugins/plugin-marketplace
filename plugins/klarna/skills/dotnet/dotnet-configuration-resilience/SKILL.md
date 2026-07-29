---
name: dotnet-configuration-resilience
description: Tune an APIMatic-generated C#/.NET SDK client — RetryOptions retries/backoff (retries cover idempotent GET/HEAD/PUT/OPTIONS only by default, and Timeout is per-attempt, not total), per-request timeout/cancellation, auto-paginate list operations via IAsyncEnumerable, consume Server-Sent Events (SSE) streams with a StreamReadTimeout, override the base URL/server, and add request/response logging by attaching a DelegatingHandler (there's no built-in logging hook). Use whenever adjusting retry policy, timeouts, the base URL, paging through results, streaming/SSE, or adding logging to any APIMatic .NET SDK — load it even after reading the options in the source, since the fields don't reveal that POST/DELETE aren't retried, Timeout is per-attempt, or that only marked operations auto-paginate.
---

# Configuration & resilience for an APIMatic .NET SDK

All types below live under `Klarna.Core.Configuration` / `.Servers` and are generic across
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
using Klarna.Servers;

options.Environment = ServerEnvironment.{Environment};

// Set a templated parameter the API declares (names vary per API — region, subdomain, port, ...):
options.Server.{ServerName}.{Environment}.{ServerParam} = "...";

// Or override the BaseUrl outright — e.g. a mock server, proxy, or self-hosted gateway.
// A literal URL with no {placeholders} is used as-is:
options.Server.{ServerName}.{Environment}.BaseUrl = "https://my-host.example.com";
```

Open `Servers/{ServerName}Options.cs` for the real server names, per-environment options, and template
parameters. See **dotnet-client-initialization** for selecting the environment.

## Retries

`RetryOptions` (built on Polly) is set on the options class via `options.Retry`. Defaults:

| Setting | Default |
| --- | --- |
| `StatusCodesToRetry` | `408, 429, 500, 502, 503, 504` |
| `HttpMethodsToRetry` | `GET, HEAD, PUT, OPTIONS` (idempotent only) |
| `MaxRetries` | `3` |
| `Delay` | `1s` |
| `BackOffFactor` | `2` |
| `UseExponentialBackoff` | `true` |
| `MaxJitter` | `500ms` |
| `Timeout` | `100s` (**per attempt**) |
| `OnRetry` | `null` |

Customize:

```csharp
using Klarna.Core.Configuration;

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
- `POST`/`DELETE` are **not** retried by default (not in `HttpMethodsToRetry`); add them only if the
  operation is idempotent.
- Multipart/form-data requests are never retried.
- `Timeout` is **per attempt**, not total — to cap a whole call, use a `CancellationToken` (below). It is
  nullable: set `Timeout = null` to disable the per-attempt timeout entirely.
- `OnRetry`'s `RetryAttempt` also carries `Reason` — `RetryReason.Status(HttpStatusCode)` or
  `RetryReason.Failure(Exception)` — log it to record *why* each retry fired.

## Per-request timeout / cancellation

Pass a `CancellationToken` to bound an individual call regardless of retry policy:

```csharp
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(10));
var response = await client.{ApiGroup}.{Operation}(/* ... */, ct: cts.Token);
```

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
using Klarna.Core.Exceptions;   // SseException, SseTimeoutException, SseDeserializationException

// await once to open the stream (an opening error surfaces here — see "Errors" below):
IAsyncEnumerable<{Item}> stream = await client.{ApiGroup}.{Operation}(ct);

try
{
    await foreach (var frame in stream.WithCancellation(ct))   // each frame as the server emits it
        Process(frame);
}
catch (SseTimeoutException ex)              // no frame arrived within StreamReadTimeout
{
    // ex.IdleTimeout — the window that elapsed
}
catch (SseDeserializationException ex)      // a JSON frame didn't match {Item}
{
    // ex.RawFrame (offending payload) + ex.InnerException (the JsonException)
}
```

**Config:** `StreamReadTimeout` — a `TimeSpan?` on the options class (default **60s**) — bounds the wait
**between frames** (a stalled stream throws rather than hanging). Set it (or `null` to disable) when building
the client:
```csharp
var options = new KlarnaClientOptions { StreamReadTimeout = TimeSpan.FromSeconds(30) };
```

**Errors** (all under `Klarna.Core.Exceptions`):
- **Before the stream opens** — the opening `await` throws `SdkException<TError>`, with `TError` the same
  two-case shape as any operation: a typed `{Operation}Error` (Case A) or `RawError` (Case B), per what the
  operation declares (see **dotnet-error-handling**).
- **While enumerating** — both of the following derive from a common `SseException` base (catch `SseException`
  to handle either):
  - `SseTimeoutException` — no frame arrived within `StreamReadTimeout`; carries `IdleTimeout`.
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
var client = new KlarnaClient(httpClient, options);
```

With DI, the SDK's `AddKlarnaClient` resolves the **default (unnamed)** `IHttpClientFactory` client, so attach
the handler to that one — register it and configure the default client *before* (or alongside) the SDK
registration:

```csharp
services.AddTransient<LoggingHandler>();
services.AddHttpClient(Options.DefaultName).AddHttpMessageHandler<LoggingHandler>();
services.AddKlarnaClient(options => { /* ... */ });   // resolves CreateClient() → the default client
```

The handler then runs on every SDK call. The `OnRetry` callback above is also a convenient place to observe
retry activity.

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
