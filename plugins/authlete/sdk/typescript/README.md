# Authlete API

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The Authlete API SDK for TypeScript provides typed access to the Authlete API REST APIs from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

Welcome to the **Authlete API documentation**. Authlete is an **API-first service** where every aspect of the platform is configurable via API. This documentation will help you authenticate and integrate with Authlete to build powerful OAuth 2.0 and OpenID Connect servers.

At a high level, the Authlete API is grouped into two categories:

- **Management APIs**: Enable you to manage services and clients.
- **Runtime APIs**: Allow you to build your own Authorization Servers or Verifiable Credential (VC) issuers.

## 🌐 API Servers

Authlete is a global service with clusters available in multiple regions across the world:

- 🇺🇸 **US**: `https://us.authlete.com`
- 🇯🇵 **Japan**: `https://jp.authlete.com`
- 🇪🇺 **Europe**: `https://eu.authlete.com`
- 🇧🇷 **Brazil**: `https://br.authlete.com`

Our customers can host their data in the region that best meets their requirements.

## 🔑 Authentication

All API endpoints are secured using **Bearer token authentication**. You must include an access token in every request:

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Getting Your Access Token

Authlete supports two types of access tokens:

**Service Access Token** - Scoped to a single service (authorization server instance)

1. Log in to [Authlete Console](https://console.authlete.com)
2. Navigate to your service → **Settings** → **Access Tokens**
3. Click **Create Token** and select permissions (e.g., `service.read`, `client.write`)
4. Copy the generated token

**Organization Token** - Scoped to your entire organization

1. Log in to [Authlete Console](https://console.authlete.com)
2. Navigate to **Organization Settings** → **Access Tokens**
3. Click **Create Token** and select org-level permissions
4. Copy the generated token

> ⚠️ **Important Note**: Tokens inherit the permissions of the account that creates them. Service tokens can only access their specific service, while organization tokens can access all services within your org.

### Token Security Best Practices

- **Never commit tokens to version control** - Store in environment variables or secure secret managers
- **Rotate regularly** - Generate new tokens periodically and revoke old ones
- **Scope appropriately** - Request only the permissions your application needs
- **Revoke unused tokens** - Delete tokens you're no longer using from the console

### Quick Test

Verify your token works with a simple API call:

```bash
curl -X GET https://us.authlete.com/api/service/get/list \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 🎓 Tutorials

If you're new to Authlete or want to see sample implementations, these resources will help you get started:

- [Getting Started with Authlete](https://www.authlete.com/developers/getting_started/)
- [From Sign-Up to the First API Request](https://www.authlete.com/developers/tutorial/signup/)

## 🛠 Contact Us

If you have any questions or need assistance, our team is here to help:

- [Contact Page](https://www.authlete.com/contact/)


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
import { AuthleteApiClient, ServerEnvironment } from "authlete-api";

const client = new AuthleteApiClient({
  serverEnvironment: ServerEnvironment.Production,
  bearer: "YOUR_BEARER_TOKEN",
});
```

Nothing in `ClientOptions` is required — `new AuthleteApiClient()` compiles — and each option left out falls back to its default. `serverEnvironment` is spelled out above so the environment a call reaches is visible where the client is built rather than inherited silently.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("authlete-api");

const client = new sdk.AuthleteApiClient({
  serverEnvironment: sdk.ServerEnvironment.Production,
  bearer: "YOUR_BEARER_TOKEN",
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/service-management.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/service-management.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/service-management.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **93 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
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
