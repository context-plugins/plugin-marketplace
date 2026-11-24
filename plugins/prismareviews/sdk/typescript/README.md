# PrismaReviews

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The PrismaReviews SDK for TypeScript provides typed access to the [PrismaReviews REST APIs](https://prismareviews.com/docs/api-reference) from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

Read the reviews of the businesses and apps you own or manage on the App Store, Google Play, Judge.me, eBay, Trusted Shops, eKomi, Yelp, Tripadvisor, Booking.com, G2 and 50+ more platforms, all in one normalized JSON shape, and reply through each platform's official API where it has one (read-only platforms return the link where a review is answered). Google Business Profile, Trustpilot, Allegro, Etsy, Angi and Mercado Libre are coming soon: `GET /v1/platforms` says which platforms are ready (`live_ready`).

- **Auth:** `Authorization: Bearer `. Live keys (`pk_live_…`) work with real accounts; test keys (`pk_test_…`) connect any platform with sample locations and reviews and never publish replies. Test and live data never mix.
- **Format:** JSON in and out; timestamps are ISO 8601 in UTC; IDs are prefixed (`rev_`, `loc_`, `con_`, `we_`, `evt_`, `req_`).
- **Pagination:** `GET /v1/reviews` is cursor paginated (`data` + `next_cursor`).
- **Rate limits:** per key and per minute, set by the plan (Spark 60, Beam 120, Spectrum 600, Aurora 1,200), reported in `X-RateLimit-Limit` and `X-RateLimit-Remaining`.
- **Errors:** one shape, `{ "error": { "type", "code", "message", "retryable", "request_id", "docs_url" } }`; codes on https://prismareviews.com/docs/errors.
- **Webhooks:** signed `POST`s for new and updated reviews, published or failed replies and connection changes.

Get a free API key at https://app.prismareviews.com/signup.

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
import { PrismaReviewsClient } from "prisma-reviews";

const client = new PrismaReviewsClient({
  apiKey: "YOUR_BEARER_TOKEN",
});
```

Nothing in `ClientOptions` is required — `new PrismaReviewsClient()` compiles — and each option left out falls back to its default. This API declares one environment, so there is no environment to select and no host to state at the construction site.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("prisma-reviews");

const client = new sdk.PrismaReviewsClient({
  apiKey: "YOUR_BEARER_TOKEN",
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

For webhook events, see [Webhook Reference](webhook-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/connections.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/connections.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/connections.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **19 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a code sample for each of the two call forms (awaiting it, and the non-throwing `.asApiResult()`), per-parameter descriptions, and the success and error types it resolves or rejects with. |

---

## License

This SDK is distributed under the [MIT License](LICENSE).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at hello@prismareviews.com.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
