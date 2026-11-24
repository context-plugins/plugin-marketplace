# Boomi

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The Boomi SDK for TypeScript provides typed access to the [Boomi REST APIs](https://developer.boomi.com/docs/APIs/PlatformAPI/Introduction/Platform_API) from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

The Boomi Platform REST API provides programmatic access to the Boomi Enterprise Platform. It allows control of objects associated with your account including account administration, cloud management, component management, deployment, environment management, execution statistics, integration packs, process execution, and runtime management. The API follows an object/verb hierarchy and uses Basic Authentication with the account ID embedded in the URL path., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi Event Streams REST API enables HTTP-based applications to produce messages to event topics. It supports two operational modes: multiple messages in a predefined JSON format, and single messages in their original format without transformation. The API accommodates messages up to 5 MB and enforces a rate limit of 60,000 requests per IP per 5-minute window. Each topic has a unique REST API URL available in the Event Streams UI. Authentication uses an Environment Token as a Bearer token., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi Platform REST API provides programmatic access to the Boomi Enterprise Platform. It allows control of objects associated with your account including account administration, cloud management, component management, deployment, environment management, execution statistics, integration packs, process execution, and runtime management. The API follows an object/verb hierarchy and uses Basic Authentication with the account ID embedded in the URL path., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours).

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
import { BoomiClient } from "boomi";

const client = new BoomiClient({
  basicAuth: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
  bearerAuth: "YOUR_BEARER_TOKEN",
});
```

Nothing in `ClientOptions` is required — `new BoomiClient()` compiles — and each option left out falls back to its default. This API declares one environment, so there is no environment to select and no host to state at the construction site.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("boomi");

const client = new sdk.BoomiClient({
  basicAuth: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
  bearerAuth: "YOUR_BEARER_TOKEN",
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/atoms.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/atoms.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/atoms.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **37 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a code sample for each of the two call forms (awaiting it, and the non-throwing `.asApiResult()`), per-parameter descriptions, and the success and error types it resolves or rejects with. |

---

## License

This SDK is distributed under the [MIT License](LICENSE).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
