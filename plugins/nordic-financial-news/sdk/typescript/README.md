# Nordic Financial News

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The Nordic Financial News SDK for TypeScript provides typed access to the Nordic Financial News REST APIs from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

REST API for Nordic financial news. Each article is summarized in English (headline, short summary, and key points) with the original-language article linked via `article_url`. The full article body stays at the source. ## Authentication
All endpoints require Bearer token authentication using an API key. Include the API key in the Authorization header:
```
Authorization: Bearer YOUR_API_KEY
```

## Rate Limiting
Rate limits apply per account, shared across every API key on that account — not per
individual key:
- **Free**: 100 requests/hour
- **Plus**: 100 requests/hour
- **Pro**: 5,000 requests/hour

On Free and Plus, MCP tool calls have their own hourly and monthly allowance and do not
count toward these REST limits. On Pro, REST requests and MCP tool calls share one allowance. Rate limit information is included in response headers:
- `X-RateLimit-Limit`: Maximum requests per hour
- `X-RateLimit-Remaining`: Requests remaining
- `X-RateLimit-Reset`: Seconds until limit resets
- `X-RateLimit-Policy`: Human-readable rate limit policy (e.g. `5000 per hour; fixed window`)

A single client IP is additionally capped at 300 requests per 5-minute window, so
reaching your account's full hourly allowance requires spreading requests across more
than one source IP. The `/health` endpoint is exempt from rate limiting and does not return rate limit headers. ## Monthly Usage Limits
Free and Plus accounts have a fixed monthly allowance that resets at the start of each
calendar month, shared across every API key on the account:
- **Free**: 100 requests/month
- **Plus**: 100 requests/month

Responses on these plans include:
- `X-Monthly-Limit`: Maximum requests for the current month
- `X-Monthly-Remaining`: Requests remaining this month
- `X-Monthly-Reset`: ISO 8601 timestamp when the allowance resets

When the allowance is exceeded, the API returns `429 Too Many Requests` with a `Retry-After` header. Pro has no hard limit. It includes 25,000 requests per billing cycle, with usage-based
pricing beyond that, so requests are never blocked. Responses on Pro include:
- `X-Monthly-Usage`: Requests used in the current billing cycle
- `X-Monthly-Reset`: ISO 8601 timestamp when the current billing cycle ends

A Pro billing cycle follows your subscription's billing period, which begins on the
date you subscribed and is not necessarily a calendar month. Usage is counted by day,
so the first day of a billing cycle is counted in full. ## Caching
Every list and single-resource endpoint returns an `ETag`. Most also return
`Last-Modified` (on lists, when the page is not empty); `GET /stories/{id}` and the
Events endpoints do not. Send the ETag back as `If-None-Match`, or the date as
`If-Modified-Since`, to receive `304 Not Modified` when nothing has changed. A 304
has no body and does not count against the monthly request allowance. `GET /events`, `GET /events/{id}` and `GET /companies/{identifier}/events` return an
`ETag` but no `Last-Modified`, so revalidate those routes with `If-None-Match`. An
event's visible company and story membership, and its live article count, all change
without moving its `updated_at`, so a date-based validator would report "not
modified" across a change the `ETag` catches. Some requests are never cached and return `Cache-Control: no-cache, no-store` with
no `ETag`: full-text search (`q`), `updated_after` sync requests, and `GET /search`. The `ETag` reflects the response as served, not only record timestamps. On articles
and stories, including the company-scoped routes, and on `GET /calendar_events`, it
changes when a plan limit alters the visible set, and on stories when a story's
visible article set changes. A changed `ETag` does not necessarily mean a record was
updated. On the Events endpoints the `ETag` additionally covers each event's visible
company and story ids and its live article count, none of which move the event's
`updated_at`. ## Pagination
List endpoints support cursor-based pagination.

---

## Installation

The SDK compiles to `dist/` before it can be referenced — run its `build` script once in the SDK folder, then add it to your project by path:

```bash
npm install <path-to-sdk>
```

---

## Quick Start

Create one client and reuse it. Configure its behaviour through [ClientOptions](src/client-options.ts).

```ts
import { NordicFinancialNewsClient } from "nordic-financial-news";

const client = new NordicFinancialNewsClient({
  bearerAuth: "YOUR_BEARER_TOKEN",
});
```

Nothing in `ClientOptions` is required — `new NordicFinancialNewsClient()` compiles — and each option left out falls back to its default. This API declares one environment, so there is no environment to select and no host to state at the construction site.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("nordic-financial-news");

const client = new sdk.NordicFinancialNewsClient({
  bearerAuth: "YOUR_BEARER_TOKEN",
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/articles-api.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/articles-api.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/articles-api.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **30 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a code sample for each of the two call forms (awaiting it, and the non-throwing `.asApiResult()`), per-parameter descriptions, and the success and error types it resolves or rejects with. |

---

## License

This SDK is distributed under the [MIT License](LICENSE).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at hello@nordicfinancialnews.com.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
