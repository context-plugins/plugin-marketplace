# SyllableSDK

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The SyllableSDK SDK for TypeScript provides typed access to the SyllableSDK REST APIs from Node.js and the browser.

> [!TIP]
> **Looking for a specific signature, request field, model, enum or error type?** This SDK ships a generated, machine-readable **[SDK map](sdk-map.md)** — a lookup index of the whole TypeScript surface. Consult it **before** grepping or scanning the source tree; it answers most contract questions directly and, where a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).


# Syllable Platform SDK

Syllable SDK gives you the power of awesome AI agentry. 🚀

## Overview

The Syllable SDK provides a comprehensive set of tools and APIs to integrate powerful AI
capabilities into your communication applications. Whether you're building phone agents, chatbots,
virtual assistants, or any other AI-driven solutions, Syllable SDK has got you covered.

## Features

- **Agent Configuration**: Create and manage agents that can interact with users across various 
channels.
- **Channel Management**: Configure channels like SMS, web chat, and more to connect agents with 
users.
- **Custom Messages**: Set up custom messages that agents can deliver as greetings or responses.
- **Conversations**: Track and manage conversations between users and agents, including session 
management.
- **Tools and Workflows**: Leverage tools and workflows to enhance agent capabilities, such as data 
processing and API calls.
- **Data Sources**: Integrate data sources to provide agents with additional context and 
information.
- **Insights and Analytics**: Analyze conversations and sessions to gain insights into user 
interactions.
- **Permissions and Security**: Manage permissions to control access to various features and 
functionalities.
- **Language Support**: Define language groups to enable multilingual support for agents.
- **Outbound Campaigns**: Create and manage outbound communication campaigns to reach users 
effectively.
- **Session Labels**: Label sessions with evaluations of quality and descriptions of issues 
encountered.
- **Incident Management**: Track and manage incidents related to agent interactions.

## Seed deprecation

Seed is deprecated by Syllable. Leave it unset for new Prompt and Insight Tool configurations.
Configured values, including zero, remain stored and produce a nonblocking `llm-seed-deprecated`
warning in `validation_issues` on successful saves and configuration reads, including Prompt
history. Unset/null values do not produce this warning. Match the issue identifier and field
path, rather than the human-readable message. Existing support restrictions still apply;
`llm-seed-unsupported` reports known Anthropic sampling restrictions separately.

OpenAI and Azure OpenAI Chat Completions offer best-effort seed support where the model supports
it; Responses does not support seed. Anthropic does not support seed as a sampling parameter.
Google support depends on the model and API. Saved configuration and current warnings do not
establish the endpoint or seed handling of a past request. Sending seed does not prove it was
honored, and no sampling setting guarantees identical responses.

For more consistent outputs, pin a model snapshot where available and keep inputs, tools and
supported settings constant. Use temperature zero only where supported. Model and backend
changes can still affect output; reuse a saved response when identical text is required.


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
import { SyllableSdkClient } from "syllable-sdk";

const client = new SyllableSdkClient({
  apiKeyHeader: "YOUR_API_KEY",
});
```

Nothing in `ClientOptions` is required — `new SyllableSdkClient()` compiles — and each option left out falls back to its default. This API declares one environment, so there is no environment to select and no host to state at the construction site.

### From CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a TypeScript CommonJS file use the `import ... = require(...)` form — a plain destructuring `require` runs fine but gives you `any`.

```ts
import sdk = require("syllable-sdk");

const client = new sdk.SyllableSdkClient({
  apiKeyHeader: "YOUR_API_KEY",
});
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

---

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the pages under [`map/operations/`](map/operations/agents.md) — a deterministic, lookup-oriented table of contents of the TypeScript surface, generated alongside the SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, the one error family, the non-throwing `.asApiResult()` form, servers, environments and auth, the model locator, the runtime facts, and the SDK-wide defaults every operation relies on.
- **[`map/operations/`](map/operations/agents.md)** — one page per resource: the exact signature and return type, the verb and route, the request body and its media type, a **Fields** table giving every request field its channel, and a **Type sources** table naming the file and schema value of every type the operation mentions.

Model shapes — object properties with their wire names, enum member names and wire values, union variants — are **not** duplicated in the map, and not in the API reference either. Both name the type and the file to read; take the pair from the operation's **Type sources** table and read the declaring file. That file is the single source of truth and cannot go stale against the code.

**Each operation block states only what is specific to it.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — the call shape, the base `ApiError`, the default server group — and a block departs from one only by saying so, so a block silent on a point is telling you the default applies. Take it and move on rather than opening the source to confirm.

### Which one to reach for

The map and the [API reference](api-reference.md) answer different questions, and both are generated from this SDK so they stay in lockstep with the code.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/operations/`](map/operations/agents.md)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **197 operations**), its exact signature, which credential it sends, which channel every request field travels on, which error type it rejects with and how to read it, and the file behind any type. This is the index to consume the SDK from, and the one to reach for first. |
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
