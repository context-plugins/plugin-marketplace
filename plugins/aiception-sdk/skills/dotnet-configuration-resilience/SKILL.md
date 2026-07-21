---
name: dotnet-configuration-resilience
description: Tune an APIMatic-generated C#/.NET SDK client (APIMATIC v3.0) — retry configuration (off by default with NumberOfRetries=0; when enabled, only GET and PUT are retried; defaults include BackoffFactor=2, RetryInterval=1s, StatusCodesToRetry covers 408/413/429/500-504/521-524), timeout (TimeSpan, default 100s), custom HttpClient injection and proxy configuration, base URL environment selection, pagination by manually driving page/cursor parameters, and request/response logging via HttpCallback. Use whenever adjusting retries, timeouts, transport, the base URL, or adding a logging hook — load it even after reading the HttpClientConfiguration in the source, since the fields don't reveal that retries are off by default, which HTTP methods are covered, or how to wire an HttpCallback for observability.
---

# Configuration & resilience for an APIMatic C#/.NET SDK

All configuration goes through `.HttpClientConfig(Action<HttpClientConfiguration.Builder>)` on the
client `Builder`. The `HttpClientConfiguration.Builder` exposes retry settings, timeout, a custom
`HttpClient`, and proxy configuration.

> Throughout, `{...}` tokens are placeholders for names from your SDK.

## Retry configuration — off by default

Retries are **disabled out of the box** (`NumberOfRetries` defaults to `0`). Raise it to enable
retries. All retry settings are chained on `HttpClientConfiguration.Builder`:

```csharp
AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .HttpClientConfig(config => config
        .NumberOfRetries(3)
        .BackoffFactor(2)
        .RetryInterval(1.5)
        .MaximumRetryWaitTime(TimeSpan.FromSeconds(30))
        .StatusCodesToRetry(new List<int> { 408, 429, 500, 503 })
        .RequestMethodsToRetry(new List<HttpMethod>
        {
            HttpMethod.Get,
            HttpMethod.Put,
        }))
    .Build();
```

Default values (when `NumberOfRetries` is raised above 0):

| Setting | Default | Notes |
| --- | --- | --- |
| `NumberOfRetries` | `0` | **0 disables retries** — set > 0 to enable |
| `BackoffFactor` | `2` | exponential multiplier between retry attempts |
| `RetryInterval` | `1.0` s | base interval between retries |
| `MaximumRetryWaitTime` | `0` (no cap) | total cap across all retry waits |
| `StatusCodesToRetry` | `408, 413, 429, 500, 502, 503, 504, 521, 522, 524` | confirm in SDK source |
| `RequestMethodsToRetry` | `GET`, `PUT` | **only idempotent methods** — `POST`/`DELETE` not retried by default |

Add `POST`/`DELETE` to `RequestMethodsToRetry` only when the operation is truly idempotent.

## Timeout

```csharp
.HttpClientConfig(config => config
    .Timeout(TimeSpan.FromSeconds(30)))   // default: TimeSpan.FromSeconds(100)
```

This sets the `HttpClient` timeout for the underlying request. Per-call cancellation uses
`CancellationToken` passed to the `…Async` overload.

## Custom HttpClient / proxy

Supply your own pre-configured `HttpClient` (e.g. for a proxy, custom `DelegatingHandler`, or
shared connection pool):

```csharp
.HttpClientConfig(config => config
    .HttpClientInstance(myHttpClient))
```

When `overrideHttpClientConfiguration` is `true` (the default), the SDK applies its own timeout
and retry settings on top of your `HttpClient`. Pass `overrideHttpClientConfiguration: false` to
leave your `HttpClient`'s own settings untouched:

```csharp
.HttpClientConfig(config => config
    .HttpClientInstance(myHttpClient, overrideHttpClientConfiguration: false))
```

### Proxy

Use the generated `ProxyConfigurationBuilder`:

```csharp
using AIceptionInteractive.Standard.Http.Client.Proxy;

.HttpClientConfig(config => config
    .Proxy(new ProxyConfigurationBuilder("http://my.proxy.host")
        .Port(8080)
        .Auth("user", "pass")
        .Tunnel(false)))
```

## Base URL / environment selection

Environments are values of the generated `Environment` C# enum in the root namespace. Set the
desired environment on the client builder:

```csharp
AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .Environment(AIceptionInteractive.Standard.Environment.Production)
    .Build();
```

`client.GetBaseUri()` returns the resolved base URL for the current environment. To avoid namespace
collision with `System.Environment`, alias it:

```csharp
using Env = AIceptionInteractive.Standard.Environment;
.Environment(Env.Production)
```

There is no free-form `BaseUrl` setter — to point the SDK at a mock or proxy, inject a custom
`HttpClient` backed by an `HttpMessageHandler` that intercepts and rewrites requests. See
**dotnet-testing** for the test seam pattern.

## Request/response logging — HttpCallback

The generated SDK includes an `HttpCallback` hook for observing requests and responses. Extend
`HttpCallback` and override `OnBeforeRequest` / `OnAfterResponse`:

```csharp
using AIceptionInteractive.Standard.Http.Client;
using AIceptionInteractive.Standard.Http.Request;
using AIceptionInteractive.Standard.Http.Response;

public class LoggingCallback : HttpCallback
{
    public override void OnBeforeRequest(HttpRequest request)
    {
        Console.WriteLine($"--> {request.HttpMethod} {request.QueryUrl}");
    }

    public override void OnAfterResponse(HttpResponse response)
    {
        Console.WriteLine($"<-- {response.StatusCode}");
    }
}
```

Register it on the client builder via `.HttpCallback(...)`:

```csharp
AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .HttpCallback(new LoggingCallback())
    .Build();
```

The `HttpCallback` is also useful for integration tests — the generated test base
(`ControllerTestBase`) registers an `HttpCallback` instance so tests can assert
`HttpCallBack.Response.StatusCode` after a call without needing `ApiResponse<T>`.

## Pagination

The generic APIMATIC v3.0 .NET generator does **not** emit automatic pagination iterators. Drive
pagination yourself using the operation's `page`/`cursor` parameters until the page is empty or the
API signals the last page:

```csharp
int page = 1;
while (true)
{
    var items = await ctrl.{List}Async(/* ... page param ... */);
    if (items == null || items.Count == 0) break;
    foreach (var item in items) Process(item);
    page++;
}
```

The exact parameter name and the next-page/cursor field are per-operation — read the controller
method and the response model in the source.

## Verify on the wire (first run of a new integration)

On the **first execution** of any new call, register a logging `HttpCallback` and inspect the
output:

1. The **verb** matches the operation.
2. The **path** has no leftover `{placeholder}` segments.
3. Each **path-param segment** has the expected wire value (e.g. the `[EnumMember]` wire string for
   a string enum, not the C# member name).
4. The **query params** you set appear in the URL.

A wrong value or unsubstituted placeholder produces a `404`/`422` with no compile-time signal;
checking on the wire catches it early.
