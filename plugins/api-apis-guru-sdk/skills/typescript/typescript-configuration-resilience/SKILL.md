---
name: typescript-configuration-resilience
description: Tune an APIMatic-generated TypeScript/Node.js SDK client — retry options (retries cover idempotent GET/HEAD/PUT/OPTIONS only by default, and timeout is per-attempt, not total), per-request timeout/cancellation via AbortSignal, auto-paginate list operations via async iterables, override the base URL/environment, and add request/response logging via a custom fetch wrapper (there's no built-in logging hook). Use whenever adjusting retry policy, timeouts, the base URL, paging through results, or adding logging to any APIMatic TypeScript SDK — load it even after reading the options in the source, since the fields don't reveal that POST/DELETE aren't retried, timeout is per-attempt, or that only marked operations auto-paginate.
---

# Configuration & resilience for an APIMatic TypeScript SDK

All config below is passed at construction time via the `ApiApisGuruClientConfig` object.

## Base URL / environment override

```typescript
import { ApiApisGuruClient, Environment } from 'flight-most-booked-destinationslib';

const client = new ApiApisGuruClient({
  environment: Environment.Production,
  // Override the base URL entirely (mock server, proxy, self-hosted gateway):
  baseUrl: 'https://my-host.example.com',
});
```

Inspect `src/environments.ts` for available `Environment` constants.

## Retries

Pass a `retryConfig` object on the client config. Defaults:

| Setting | Default |
| --- | --- |
| `statusCodesToRetry` | `408, 429, 500, 502, 503, 504` |
| `httpMethodsToRetry` | `GET, HEAD, PUT, OPTIONS` (idempotent only) |
| `maxNumberOfRetries` | `3` |
| `retryInterval` | `1` (seconds) |
| `backoffFactor` | `2` |
| `maximumRetryWaitTime` | `0` (no cap) |
| `useExponentialBackoff` | `true` |
| `retryOnTimeout` | `true` |

Customize:

```typescript
const client = new ApiApisGuruClient({
  retryConfig: {
    maxNumberOfRetries: 5,
    retryInterval: 1,
    backoffFactor: 2,
    useExponentialBackoff: true,
  },
  timeout: 30_000,  // per-attempt timeout in ms
});
```

Notes:
- `POST`/`DELETE` are **not** retried by default; add them to `httpMethodsToRetry` only if the operation is idempotent.
- `timeout` is **per attempt**, not total — to cap a whole call, use an `AbortSignal` (below).

## Per-request timeout / cancellation

Pass an `AbortSignal` via `requestOptions` to bound an individual call:

```typescript
const controller = new AbortController();
setTimeout(() => controller.abort(), 10_000);

const response = await client.{apiGroup}.{operation}(
  { /* params */ },
  { signal: controller.signal }
);
```

## Pagination

Operations the API marks as paginated are generated as methods that **return an async iterable** — the SDK fetches each page and advances the paging state for you. Seed the first page with paging arguments, then `for await` the pages:

```typescript
// The paging args (e.g. page/perPage, cursor) seed the FIRST page;
// the SDK advances them and stops when the API signals the end.
for await (const pageItems of client.{apiGroup}.{operation}({ page: 1, perPage: 100 })) {
  for (const item of pageItems) {
    process(item);
  }
}
```

Each iteration yields **one page** (an array of items). A failed page fetch throws `ApiError` mid-iteration (see **typescript-error-handling**).

> Not every list endpoint is paginated. An operation with no pagination metadata is a plain list call — to page one of those, drive its own `page`/`perPage` params yourself and stop when a page returns fewer items than requested.

## Logging

There is **no built-in logging hook**. Add logging by wrapping the client's underlying fetch:

```typescript
import { ApiApisGuruClient } from 'flight-most-booked-destinationslib';

const client = new ApiApisGuruClient({
  customFetch: async (url, options) => {
    console.log(`--> ${options?.method ?? 'GET'} ${url}`);
    const response = await fetch(url, options);
    console.log(`<-- ${response.status}`);
    return response;
  },
});
```

Not all SDK versions expose `customFetch` — check the config interface. If unavailable, wrap the client methods in your own service layer for logging.

### Verify on the wire (first run of any new integration)

Run the logging wrapper on the first execution of any new call and inspect the output. A wrong base URL, a leftover `{placeholder}`, or a mis-serialized path segment **compiles cleanly** and produces no in-band signal; the only symptom is a runtime `404`/`422`.

Checklist for the first printed request:
1. the **verb** matches the operation;
2. the **path** has no literal `{placeholder}` left unsubstituted;
3. each **path-param segment** is the value the API expects;
4. the query params you set actually appear in the query string.

Remove or gate the wrapper behind a debug flag once verified.
