---
name: go-configuration-resilience
description: Tune an APIMatic-generated Go SDK client — RetryConfiguration (disabled by default, maxRetryAttempts 0; only GET/PUT retried even when enabled; configurable status codes, interval, backoff, retryOnTimeout) and HttpConfiguration (timeout in seconds, custom http.RoundTripper transport) set via WithHttpConfiguration; per-request cancellation/deadline via context; environment/base-URL selection; and request/response logging by wrapping the transport (no built-in logging hook). Use whenever adjusting retries, timeouts, transport, the base URL, or logging on any APIMatic Go SDK — load it even after reading the options in the source, since the fields don't reveal that retries are off by default or that POST/DELETE aren't retried.
---

# Configuration & resilience for an APIMatic Go SDK

Retries, timeout, and transport are configured through an `HttpConfiguration` passed to the client's
`Configuration` via `WithHttpConfiguration`. Build each piece with its `Create...` + `With...` helpers.

```go
client := vimeo.NewClient(
    vimeo.CreateConfiguration(
        vimeo.WithHttpConfiguration(
            vimeo.CreateHttpConfiguration(
                vimeo.WithTimeout(30),
                vimeo.WithRetryConfiguration(
                    vimeo.CreateRetryConfiguration(
                        vimeo.WithMaxRetryAttempts(3),
                        vimeo.WithBackoffFactor(2),
                    ),
                ),
            ),
        ),
    ),
)
```

## HttpConfiguration

| Option | Type | Default | Purpose |
| --- | --- | --- | --- |
| `WithTimeout(seconds)` | `float64` | `0` (no timeout) | per-request timeout in **seconds** |
| `WithTransport(rt)` | `http.RoundTripper` | `http.DefaultTransport` | custom transport (proxy, TLS, logging) |
| `WithRetryConfiguration(rc)` | `RetryConfiguration` | `DefaultRetryConfiguration()` | retry policy (below) |

## Retry configuration — off by default

Retries are **disabled out of the box** (`maxRetryAttempts` defaults to `0`). You must raise it to enable
retries. Defaults (from `CreateRetryConfiguration`):

| Option | Default | Notes |
| --- | --- | --- |
| `WithMaxRetryAttempts(n)` | `0` | **0 disables retries** — set > 0 to enable |
| `WithRetryOnTimeout(bool)` | `true` | retry when the request times out |
| `WithRetryInterval(seconds)` | `1` | base interval between retries |
| `WithMaximumRetryWaitTime(d)` | `0` | overall cap on retry wait (0 = no cap) |
| `WithBackoffFactor(n)` | `2` | exponential backoff multiplier |
| `WithHttpStatusCodesToRetry([]int64)` | `408, 413, 429, 500, 502, 503, 504, 521, 522, 524` | which statuses retry |
| `WithHttpMethodsToRetry([]string)` | `{"GET", "PUT"}` | **only idempotent methods**; `POST`/`DELETE` are *not* retried unless you add them |

```go
rc := vimeo.CreateRetryConfiguration(
    vimeo.WithMaxRetryAttempts(5),
    vimeo.WithRetryInterval(1),
    vimeo.WithBackoffFactor(2),
    vimeo.WithHttpStatusCodesToRetry([]int64{429, 500, 503}),
    vimeo.WithHttpMethodsToRetry([]string{"GET", "PUT"}),
)
```

Add `POST`/`DELETE` to `WithHttpMethodsToRetry` only when the operation is genuinely idempotent.

## Per-request timeout and cancellation — use context

`context.Context` is the per-call cancellation/deadline mechanism (the `WithTimeout` above is the
transport-level default applied to each attempt):

```go
ctx, cancel := context.WithTimeout(ctx, 30*time.Second)
defer cancel()

apiResponse, err := client.{Resource}Api().{Operation}(ctx, ...)
```

A cancelled context aborts the in-flight request and stops further retries; you'll get
`context.DeadlineExceeded`/`context.Canceled` (see **go-error-handling**).

## Base URL / environment

The base URL is derived from the selected `Environment` (and any server parameters like a port), not a
free-form URL option:

```go
client := vimeo.NewClient(
    vimeo.CreateConfiguration(vimeo.WithEnvironment(vimeo.PRODUCTION)),
)
```

There is generally no `WithBaseURL`; to target a mock/proxy, either pick the environment whose host you
control or inject a `WithTransport` that rewrites/serves requests (see **go-testing**). Check
`configuration.go` for the exact `Environment` constants and server parameters.

## Pagination

The generic Go generator does **not** emit automatic pagination iterators — drive it yourself with the
operation's page/cursor parameters until a page is empty or the API signals the last page. The exact
parameter and the next-page/cursor field are per-operation — read the controller method and response
model. Example shape:

```go
page := 1
for {
    resp, err := client.{Resource}Api().List{Resource}s(ctx, /* page param */ &page)
    if err != nil { return err }
    items := resp.Data
    for _, it := range items { process(it) }
    if len(items) == 0 { break }
    page++
}
```

## Logging — wrap the transport

There is **no built-in logging hook**. Add logging by wrapping a `http.RoundTripper` and passing it via
`WithTransport`:

```go
type loggingTransport struct{ inner http.RoundTripper }

func (t *loggingTransport) RoundTrip(req *http.Request) (*http.Response, error) {
    fmt.Printf("--> %s %s\n", req.Method, req.URL)
    resp, err := t.inner.RoundTrip(req)
    if err != nil { fmt.Printf("<-- error: %v\n", err); return nil, err }
    fmt.Printf("<-- %d\n", resp.StatusCode)
    return resp, nil
}

client := vimeo.NewClient(
    vimeo.CreateConfiguration(
        vimeo.WithHttpConfiguration(
            vimeo.CreateHttpConfiguration(
                vimeo.WithTransport(&loggingTransport{inner: http.DefaultTransport}),
            ),
        ),
    ),
)
```

### Verify on the wire (first run of any new integration)

Run the logging transport on the **first execution** of any new call and inspect the output — path params
are interpolated as strings and a wrong value (a mis-cased enum wire value, an unsubstituted placeholder)
produces a `404`/`422` with no compile-time signal. Check that: the verb matches; the path has no leftover
`{placeholder}`; each path segment holds the expected value; the query params you set appear. Gate the
transport behind an env flag once verified.
