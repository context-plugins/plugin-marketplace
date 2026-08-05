---
name: java-configuration-resilience
description: Tune an APIMatic-generated Java SDK client — retry defaults (numberOfRetries=0, off by default; only GET and PUT retried even when enabled; status codes 408/413/429/500/502/503/504/521/522/524), timeouts (timeout(long) in seconds on HttpClientConfiguration.Builder), injecting a custom OkHttpClient, base URL via Environment enum, pagination (manual — no auto-pagination), and request/response logging via the HttpCallback interface (onBeforeRequest / onAfterResponse). Load it even after reading the options in the source, since the builder fields don't reveal that retries are off by default, that timeout is per-attempt not total, or that HttpCallback is the official hook for logging.
---

# Java SDK — Configuration and Resilience

All global configuration is set on the client builder at construction time via the `httpClientConfig`
lambda. There is no separate configuration object you pass around — the client is immutable after `build()`.

> All details below are confirmed from the generated source in `MultiAuth-Sample` and
> `calculator.json` under `src/main/java/.../http/client/HttpClientConfiguration.java`.

## HttpClientConfiguration — the tuning surface

All HTTP and retry tuning goes through the `httpClientConfig` lambda on the client builder:

```java
SlackClient client = new SlackClient.Builder()
    .httpClientConfig(configBuilder -> configBuilder
        .timeout(30)             // read/socket timeout in seconds; 0 = no timeout
        .numberOfRetries(3)      // retries to make after the initial attempt
        .backOffFactor(2)        // multiplier for wait between retries
        .retryInterval(1L)       // initial wait in seconds before first retry
        .maximumRetryWaitTime(60L) // cap on cumulative retry wait time in seconds
        .shouldRetryOnTimeout(true))
    .build();
```

`configBuilder` is `HttpClientConfiguration.Builder` — all methods return `Builder` for chaining.

## Retry defaults — retries are OFF by default

**`numberOfRetries` defaults to `0`** — no retries occur unless you set this explicitly. Even when retries
are enabled, not all requests are retried:

| Setting | Default | Notes |
|---|---|---|
| `numberOfRetries` | `0` | Must be set > 0 to enable retries |
| `backOffFactor` | (set by Builder) | Exponential backoff multiplier |
| `retryInterval` | (set by Builder) | Initial wait before first retry, seconds |
| `maximumRetryWaitTime` | (set by Builder) | Cap on total retry wait, seconds |
| `shouldRetryOnTimeout()` | `false` | Whether to retry on socket timeout |
| Methods retried | `GET`, `PUT` | Confirmed from Builder default in source |
| Status codes retried | `408`, `413`, `429`, `500`, `502`, `503`, `504`, `521`, `522`, `524` | Set in Builder constructor |

Confirmed from `HttpClientConfiguration.Builder()` constructor:

```java
// Default status codes (confirmed in source):
configurationBuilder.httpStatusCodesToRetry(Stream.of(
    408, 413, 429, 500, 502, 503, 504, 521, 522, 524
).collect(Collectors.toSet()));

// Default methods (confirmed in source):
configurationBuilder.httpMethodsToRetry(Stream.of(Method.GET, Method.PUT).collect(Collectors.toSet()));
```

`POST`, `DELETE`, `PATCH` are **not** retried by default. To override the method or status-code sets:

```java
.httpClientConfig(configBuilder -> configBuilder
    .httpStatusCodesToRetry(new HashSet<>(Arrays.asList(429, 503)))
    .httpMethodsToRetry(new HashSet<>(Arrays.asList(HttpMethod.GET, HttpMethod.PUT, HttpMethod.POST))))
```

### Timeout is per-attempt, not total

`timeout(long)` sets the **per-attempt** read/socket timeout in seconds. With `numberOfRetries(3)` and
`timeout(30)`, the worst-case wall clock time is approximately `4 × 30 s + backoff delays`. To bound total
time, use `CompletableFuture.orTimeout(...)` on the async variant.

Setting `timeout(0)` disables the read timeout — the thread may block indefinitely. This is useful in tests
or when the server is known to be slow.

## Injecting a custom OkHttpClient

Inject a pre-configured `OkHttpClient` instance when you need interceptors, custom connection pools, or
mutual TLS:

```java
import okhttp3.OkHttpClient;

OkHttpClient customClient = new OkHttpClient.Builder()
    .addInterceptor(chain -> {
        okhttp3.Request req = chain.request().newBuilder()
            .addHeader("X-Trace-Id", UUID.randomUUID().toString())
            .build();
        return chain.proceed(req);
    })
    .build();

SlackClient client = new SlackClient.Builder()
    .httpClientConfig(configBuilder -> configBuilder
        .httpClientInstance(customClient, true))  // true = allow SDK to override timeouts/retries
    .build();
```

`httpClientInstance(okhttp3.OkHttpClient instance)` — SDK uses the instance as-is, applying its own
retry/timeout settings on top.

`httpClientInstance(okhttp3.OkHttpClient instance, boolean overrideHttpClientConfigurations)` — when
`overrideHttpClientConfigurations` is `true`, the SDK may override the OkHttpClient's timeout and retry
settings with its own configuration; when `false`, the OkHttpClient's own settings take precedence.

## Proxy configuration

```java
import localhost3000.http.client.HttpProxyConfiguration;

SlackClient client = new SlackClient.Builder()
    .httpClientConfig(configBuilder -> configBuilder
        .proxyConfig(new HttpProxyConfiguration.Builder("http://proxy.example.com", 8080)
            .auth("username", "password")))  // optional auth
    .build();
```

Confirmed from `doc/http-proxy-configuration-builder.md` in MultiAuth-Sample.

## Base URL and environment

The client uses an `Environment` enum to select the base URL. The default environment is set per-API —
check `Environment.java` in the root package of the SDK:

```java
import localhost3000.Environment;

SlackClient client = new SlackClient.Builder()
    .environment(Environment.{Member})   // read Environment.java for the real member names
    .port("80")                         // additional base-URL parameters if the SDK supports them
    .build();
```

`Environment` constants and default — confirm from `Environment.java` in the cloned source.

There is no `baseUrl(String)` override method on this SDK — select the environment constant instead, or
check if the SDK's Configuration interface exposes a `getBaseUri()` for inspection.

## HttpCallback — request/response logging hook

The SDK provides a formal callback interface for observing outgoing requests and incoming responses without
intercepting the OkHttp layer. Confirmed from `HttpCallback.java` in the generated source:

```java
// HttpCallback extends io.apimatic.coreinterfaces.http.Callback
// Methods (from Callback interface):
//   void onBeforeRequest(Request request)
//   void onAfterResponse(Context context)

import localhost3000.http.client.HttpCallback;
import localhost3000.http.request.HttpRequest;
import localhost3000.http.response.HttpResponse;
import io.apimatic.coreinterfaces.http.request.Request;
import io.apimatic.coreinterfaces.http.Context;

SlackClient client = new SlackClient.Builder()
    .httpCallback(new HttpCallback() {
        @Override
        public void onBeforeRequest(Request request) {
            System.out.println(">> " + request.getHttpMethod() + " " + request.getQueryUrl());
        }
        @Override
        public void onAfterResponse(Context context) {
            HttpResponse response = (HttpResponse) context.getResponse();
            System.out.println("<< " + response.getStatusCode());
        }
    })
    .build();
```

The generated `HttpCallbackCatcher` in the test source demonstrates this pattern — it captures request and
response for assertion in tests (see **java-testing**).

## Inspecting the current configuration

The built client exposes a read-only view of its HTTP config:

```java
// Read the accessor off SlackClient in the generated source.
ReadonlyHttpClientConfiguration cfg = client.getHttpClientConfig();
long timeout       = cfg.getTimeout();
int  retries       = cfg.getNumberOfRetries();
boolean onTimeout  = cfg.shouldRetryOnTimeout();
```

`ReadonlyHttpClientConfiguration` mirrors `HttpClientConfiguration` but is read-only — useful for
logging or asserting configuration in tests.

## Pagination

APIMatic-generated Java SDKs do **not** auto-paginate. Pagination parameters (page number, cursor, limit)
are explicit arguments on list operations. Implement pagination in your own loop:

```java
// Page / offset pattern:
int page = 1;
final int pageSize = 100;
while (true) {
    List<{Item}> items = ctrl.list{Items}(page, pageSize);
    processItems(items);
    if (items.size() < pageSize) break;
    page++;
}

// Cursor pattern:
String cursor = null;
do {
    {PageResponse} resp = ctrl.list{Items}(cursor, 100);
    processItems(resp.getItems());
    cursor = resp.getNextCursor();
} while (cursor != null);
```

Check the operation's `{Op}Input` model in `doc/models/` for the pagination parameter names.

## Shut down

Call `shutdown()` on the client when done to release OkHttp's connection pool and thread pool:

```java
client.shutdown();
```

Confirm `SlackClient.shutdown()` in the generated source.
