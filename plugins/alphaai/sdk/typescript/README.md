# AlphaAI

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The AlphaAI SDK for TypeScript provides typed access to the AlphaAI REST APIs from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

Public REST API for AlphAI's relevance-scored, ticker-linked financial news. All endpoints accept `Authorization: Bearer ak_live_…` (issued from your
`/account/api-keys`). Authenticated traffic is metered per account with two
layers — a per-minute burst cap and a per-day volume cap (Free 20/min +
100/day, Basic 60/min + 10,000/day, Pro 150/min + 100,000/day); a request
passes only if both are under budget. The Free tier is for evaluation /
personal non-commercial use; Basic is licensed for internal commercial use;
Pro adds redistribution of the enriched feed. Send all API traffic to
`api.alphai.io`; a key is required on every request. The API is server-side only. It sends no CORS headers, so a cross-origin
call from a browser page fails at the preflight: the `OPTIONS` request is
answered with `403` at the edge and never reaches the API. Keep the key on
your server and expose your own route to the browser; a key embedded in
page code is readable by every visitor and spends your quota. Every keyed response carries `X-RateLimit-Limit`, `X-RateLimit-Remaining`
and `X-RateLimit-Reset`; these report the per-day volume layer (Reset =
epoch seconds of the next 00:00 UTC reset) so you can watch your daily budget
without provoking a 429. A per-minute burst surfaces only as a 429 with a
short `Retry-After`. A 429 body also names your tier, its caps and an
`upgrade` block. A request rejected with 429 does not itself spend quota. The headers reflect origin processing, so a response served from a shared
cache may omit them. On the MCP server (`mcp.alphai.io`) the same two layers meter **tool calls
only** — the connect handshake (`initialize`, `tools/list`, notifications,
keepalives, the SSE stream) is protocol traffic and does not consume your
quota. It carries a separate, far larger ceiling that exists only to stop a
client reconnecting in a loop; hitting it returns a 429 whose body reports
`"window": "transport"`, which means your client is reconnecting too often,
not that you are out of quota. MCP news tools accept `detail="compact"` for headline triage and polling:
`alphai_news_search`, `alphai_ticker_news`, `alphai_insider_news`,
`alphai_trending`, `alphai_actionable_now`, `alphai_macro` and
`alphai_pair_analysis`. Compact items keep identity, source, publication
and ingest times, tickers, category, relevance_score, top-level
actionability and information_novelty, story fields, ownership_form and
search_match. Summary, analysis, images and SEC detail blocks are omitted;
fetch `alphai_article(uid)` for those details. `detail="full"` is the
default and preserves the existing format, including the condensed recent
lists on pair_analysis. Selection, order, cursors, query interpretation
and macro releases are unchanged, so detail can change between pages. This parameter belongs to MCP tools only; REST parameters are unchanged. Interactive MCP clients use a separate OAuth approval flow. Check the
callback host or app scheme and full callback address before approving;
app names are self-declared, not verified by AlphAI. MCP access includes
news, market data and the saved watchlist, plus creating, changing and
disabling the user's own alerts on Basic or Pro (including after an
upgrade). The OAuth scope `tools.read` is not a read-only restriction. Registered callbacks can be reviewed in Account → MCP connections. That account management surface requires website login, not an API key. Disconnect blocks all existing MCP OAuth access and refresh tokens for that
app connection, including its other sessions; work already in progress may
finish. Other connections and API keys are unaffected. Revoking either token
type through the separate MCP host's `/oauth/revoke` has the same effect. Serialize refresh requests and save each replacement token: reuse ends the
connection.

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
import { AlphaAiClient } from "alpha-ai";

const client = new AlphaAiClient({
  apiKey: "YOUR_BEARER_TOKEN",
});
```

Nothing in `ClientOptions` is required — `new AlphaAiClient()` compiles — and each option left out falls back to its default. This API declares one environment, so there is no environment to select and no host to state at the construction site.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("alpha-ai");

const client = new sdk.AlphaAiClient({
  apiKey: "YOUR_BEARER_TOKEN",
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/calendar.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/calendar.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/calendar.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **26 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a code sample for each of the two call forms (awaiting it, and the non-throwing `.asApiResult()`), per-parameter descriptions, and the success and error types it resolves or rejects with. |

---

## License

This SDK is distributed under the [MIT License](LICENSE).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at support@alphai.io.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
