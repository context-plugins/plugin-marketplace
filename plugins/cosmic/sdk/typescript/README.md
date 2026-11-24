# Cosmic

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The Cosmic SDK for TypeScript provides typed access to the [Cosmic REST APIs](https://www.cosmicjs.com/docs/api) from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

The Cosmic v3 REST API for content operations against a single Bucket.

## When to use this API

Reach for this API to model content (Object types and Metafields), create and query content (Objects), read version history (Revisions), and manage media metadata. A Bucket is the unit of isolation: every path below is scoped to one Bucket slug, and the access keys are per-Bucket.

## Authentication

Reads use the Bucket read key as a `read_key` query parameter. Writes use the Bucket write key as an `Authorization: Bearer` header. Both keys are found under Bucket > Settings > API Access in the dashboard. There is no account-level credential: a key grants access to exactly one Bucket.

## Scope of this document

This document describes only the endpoints served by `https://api.cosmicjs.com/v3`. Other documented parts of the Cosmic surface live on different hosts and are not yet specified here:

- Agent signup, agent status, and user endpoints (`/v3/agents/*`, `/v3/users/*`) are served by `https://dapi.cosmicjs.com`. An agent with no prior Cosmic account should start at `POST https://dapi.cosmicjs.com/v3/agents/sign-up`.
- Media upload (`POST /v3/buckets/{slug}/media`) is served by `https://workers.cosmicjs.com`. Media read, update, and delete are on this host and are specified below.
- AI generation endpoints (`/v3/ai/*`) are served by `https://dapi.cosmicjs.com`.

Be aware of one quirk when probing this host: an unrecognized path under `/v3` currently answers `200` with a body of `{"message":"Route not found", ...}` rather than a `404`. Treat that body, not the status line, as the signal that a path does not exist. The response names the host that serves the path you probably wanted.

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
import { CosmicClient } from "cosmic";

const client = new CosmicClient({
  readKey: "YOUR_API_KEY",
  writeKey: "YOUR_BEARER_TOKEN",
});
```

Nothing in `ClientOptions` is required — `new CosmicClient()` compiles — and each option left out falls back to its default. This API declares one environment, so there is no environment to select and no host to state at the construction site.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("cosmic");

const client = new sdk.CosmicClient({
  readKey: "YOUR_API_KEY",
  writeKey: "YOUR_BEARER_TOKEN",
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/blocks.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/blocks.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/blocks.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **21 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a code sample for each of the two call forms (awaiting it, and the non-throwing `.asApiResult()`), per-parameter descriptions, and the success and error types it resolves or rejects with. |

---

## License

This SDK is distributed under the [MIT License](LICENSE).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at support@cosmicjs.com.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
