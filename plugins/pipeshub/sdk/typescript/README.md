# PipesHub API

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The PipesHub API SDK for TypeScript provides typed access to the PipesHub API REST APIs from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

Unified API documentation for PipesHub services.

PipesHub is an enterprise-grade platform providing:
- User authentication and management
- Document storage and version control
- Knowledge base management
- Enterprise search and conversational AI
- Third-party integrations via connectors
- System configuration management
- Crawling job scheduling
- Email services

## Authentication
Most endpoints require JWT Bearer token authentication. Some internal endpoints use scoped tokens for service-to-service communication.

**OAuth 2.0 Bearer tokens** from `POST /oauth2/token` use the same `Authorization: Bearer` header. For **`client_credentials`**, machine tokens may encode `userId === client_id` in the JWT; the **Node API gateway** resolves the OAuth **app creator** and sets the authenticated user accordingly. See the **OAuth Provider** tag for full behavior.

## Base URLs
All endpoints use the `/api/v1` prefix unless otherwise noted.

## Query parameter names
On every `/api/v1` and `/mcp` endpoint, a query parameter whose name starts with `$` or contains `.` (including a nested name such as `filter[$ne]` or `a.b`) is refused with `400` and error code `VALIDATION_ERROR`. Only names are checked: values may contain dots, such as file names.


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
import { PipesHubApiClient, PkceMethod, ServerEnvironment } from "pipes-hub-api";

const client = new PipesHubApiClient({
  serverEnvironment: ServerEnvironment.Production,
  bearerAuth: "YOUR_BEARER_TOKEN",
  scopedToken: "YOUR_BEARER_TOKEN",
  oauth2AuthorizationCode: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
  oauth2ClientCredentials: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

Nothing in `ClientOptions` is required — `new PipesHubApiClient()` compiles — and each option left out falls back to its default. `serverEnvironment` is spelled out above so the environment a call reaches is visible where the client is built rather than inherited silently.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("pipes-hub-api");

const client = new sdk.PipesHubApiClient({
  serverEnvironment: sdk.ServerEnvironment.Production,
  bearerAuth: "YOUR_BEARER_TOKEN",
  scopedToken: "YOUR_BEARER_TOKEN",
  oauth2AuthorizationCode: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: sdk.PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
  oauth2ClientCredentials: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/user-account.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/user-account.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/user-account.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **135 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a code sample for each of the two call forms (awaiting it, and the non-throwing `.asApiResult()`), per-parameter descriptions, and the success and error types it resolves or rejects with. |

---

## License

This SDK is distributed under the [MIT License](LICENSE).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

For further assistance, please contact support at support@pipeshub.com.

---

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://www.apimatic.io/hubfs/Built-with-APIMatic-badge.svg
