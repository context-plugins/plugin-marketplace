# Todoist API

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The Todoist API SDK for TypeScript provides typed access to the Todoist API REST APIs from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

# Developing with Todoist

Thanks for your interest in developing apps with Todoist. In this section
we will provide an overview of the API we offer and cover some common topics for
application development using them.

You can use our API for free, but depending on your Todoist account plan (or that of the authenticated user), some
features may be restricted.

Please consider subscribing to the [Todoist API mailing
list](https://groups.google.com/a/doist.com/g/todoist-api) to get important updates.

## Our API

Our API uses an approach that should be familiar to anyone with experience
calling [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) APIs.

We also have a special endpoint called `/sync`, which is used by our
first-party clients to keep the data updated locally without having to make many
separate requests to the API. Anyone can use it, and some actions will only be
available via `/sync`. The format is unconventional compared to current API standards,
but it is our main driver for first-party apps.

## Our SDKs

Our Python and JavaScript SDKs streamline working with the Todoist API, and
can be installed from the main package registries for each ecosystem.

For instructions, examples, and reference documentation, visit their pages:

- [Todoist Python SDK](https://todoist.github.io/todoist-api-python/)
- [Todoist TypeScript SDK](https://todoist.github.io/todoist-sdk-typescript/)

## Resource IDs and optimistic updates

Our first-party clients use optimistic updates so newly-created resources
(tasks, projects, etc.) are usable in the UI before the server has confirmed
them. During that window, the resource is referenced by a **client-side
placeholder ID** with a `tmp-` prefix — for example
`tmp-UUID-XXXX-UnixMillis`. Once the sync with Todoist completes, the client
replaces the placeholder with the real server-assigned ID.

**Placeholder IDs are not valid server-side resource identifiers.** If you
pass a `tmp-`-prefixed ID to a REST endpoint, the request will fail with a
validation error (for example `Non-base32 digit found`) because the API only
accepts base32-encoded or numeric IDs (depending on the resource).

If your integration receives a resource ID from a client context (e.g. a UI
extension payload or a browser event fired right after task creation), you
should:

1. **Detect placeholder IDs early** — any ID starting with `tmp-` has not
   yet synced.
2. **Wait for sync to complete before calling the REST API.** First-party
   clients expose the real ID once the next `/sync` round-trip returns
   (see the [`temp_id_mapping`](#tag/Sync/Overview/Temporary-resource-ID)
   field in the Sync API response).
3. **Retry your API call with the confirmed ID** once available. If you
   cannot wait, surface the delay to the end user rather than calling the
   REST API with the placeholder.

Note that this client-side `tmp-`-prefixed placeholder is distinct from the
`temp_id` used in Sync API commands — the latter is a developer-supplied
UUID that the server resolves inside a single `/sync` request. See the
[Sync API's Temporary resource ID documentation](#tag/Sync/Overview/Temporary-resource-ID)
for details on `temp_id` and `temp_id_mapping`.

## Integrations

Integrations can be created and updated [here](https://app.todoist.com/app/settings/integrations/app-management).

Once done, they can also be submitted for evaluation and inclusion in [our
official integrations list](https://www.todoist.com/integrations). This not
only serves as an opportunity to market your integration to our audience, but
will also serve as a way to help users get set up and familiar with your app quickly.

For more information on how to submit your integration for evaluation, refer to our [Marketing your integration page](https://www.todoist.com/help/articles/marketing-your-todoist-integration-B6C5sCKkn).

## Brand usage

When creating with the Todoist platform, you may reference Todoist to describe
what your app does, but you must keep it clearly distinct from Todoist's official
products.

- **Naming:** "Todoist" cannot be the primary name of your app. Use a format
  that signals independence, such as "x for Todoist" or "x with Todoist".
- **Disclaimer:** Your application description must state that it is "not
  created by, affiliated with, or supported by Todoist."
- **Logo and branding:** Any use of Todoist's marks must comply with our
  [brand guidelines](https://www.todoist.com/brand-assets/todoist-logo.zip), which are
  available for download.
- **Legal compliance:** By using Todoist branding you agree to follow our brand
  guidelines and [Terms of Service](https://www.todoist.com/terms-of-service).

For detailed questions about using the Todoist marks, contact
[press@doist.com](mailto:press@doist.com).

Lost? [Reach out to us](https://www.todoist.com/contact/login?returnTo=%2Fcontact) anytime.


---

## Installation

To add the SDK to your project from npm:

```bash
npm install todoist-sdk
```

To install from the SDK source instead, compile it to `dist/` — run its `build` script once in the SDK folder — then add it to your project by path:

```bash
npm install <path-to-sdk>
```

---

## Quick Start

Create one client and reuse it. Configure its behaviour through [ClientOptions](src/client-options.ts).

```ts
import { TodoistApiClient } from "todoist-sdk";

const client = new TodoistApiClient({
  bearerAuth: "YOUR_BEARER_TOKEN",
  clientBasic: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
});
```

Nothing in `ClientOptions` is required — `new TodoistApiClient()` compiles — and each option left out falls back to its default. This API declares one environment, so there is no environment to select and no host to state at the construction site.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("todoist-sdk");

const client = new sdk.TodoistApiClient({
  bearerAuth: "YOUR_BEARER_TOKEN",
  clientBasic: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/authorization.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/authorization.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/authorization.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **124 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
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
