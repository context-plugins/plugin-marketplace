# Context Plugins Marketplace

**SDK-native API context, delivered directly into your AI coding agent.**

[![Product Page](https://img.shields.io/badge/Product-Context%20Plugins-blue)](https://www.apimatic.io/product/context-plugins)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-supported-purple?logo=anthropic&logoColor=white)](#install-a-plugin)
[![Cursor](https://img.shields.io/badge/Cursor-supported-orange?logo=cursor&logoColor=white)](#install-a-plugin)
[![VS Code](https://img.shields.io/badge/VS%20Code-supported-007ACC?logo=visualstudiocode&logoColor=white)](#install-a-plugin)

---

## What this is

Coding agents hallucinate APIs. They are trained on public code and documentation — much of it
outdated — and have no awareness of the API version you are actually on, the current SDK, or the
integration workflow the SDK author recommends.

This repository is the **`context-plugins` marketplace**: a collection of **26 plugins**, one per
API, that give your agent authoritative, version-aware, SDK-native context at the moment it's
needed. Every plugin is generated from the API's definition and its APIMatic-generated SDKs, so the
agent is grounded in the real SDK contract instead of guessing from memory.

Each plugin works in **Claude Code**, **Cursor**, and **VS Code (Copilot)**.

## Install a plugin

The plugins here are installed with the [`context-plugins`](https://github.com/apimatic/context-plugins-installer)
CLI, which installs into every AI coding assistant on your machine with one command:

```bash
npx context-plugins install paypal
```

To see everything this marketplace offers:

```bash
npx context-plugins list
```

Node.js 18+ is all you need — the CLI is not installed globally, `npx` runs it from a cache.
See the [installer README](https://github.com/apimatic/context-plugins-installer#readme) for
options, uninstalling, and troubleshooting.

<details>
<summary><strong>Adding the marketplace to Claude Code directly</strong></summary>

The CLI does this for you, but if you would rather drive Claude Code yourself:

```bash
claude plugin marketplace add context-plugins/plugin-marketplace
claude plugin install paypal@context-plugins --scope user
```

Then run `/reload-plugins`, or start a new `claude` session.

</details>

## Available plugins

26 plugins, listed in [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json).
The **Languages** column is the set of SDK languages that plugin ships skills for.

| Plugin | API | Languages |
| --- | --- | --- |
| [`adyen`](plugins/adyen/) | Adyen | .NET, TS, Java, PHP, Python, Go |
| [`cellpoint`](plugins/cellpoint/) | CellPoint | .NET, TS, Java, PHP, Python, Go |
| [`docker`](plugins/docker/) | Docker SDK | TS, Python, Ruby |
| [`klarna`](plugins/klarna/) | klarna SDK | .NET, Java, PHP, Python, Ruby, Go |
| [`notion`](plugins/notion/) | Notion SDK | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`nytimes`](plugins/nytimes/) | nytimes SDK | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`paypal`](plugins/paypal/) | PayPal | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`paze-checkout`](plugins/paze-checkout/) | Paze Checkout | .NET, TS, Java, PHP, Python, Go |
| [`pq-api-v2`](plugins/pq-api-v2/) | PQ API v2 SDK | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`shell`](plugins/shell/) | Shell | TS, Java, PHP, Python, Ruby, Go |
| [`shutterstock-api-explorer`](plugins/shutterstock-api-explorer/) | Shutterstock API Explorer SDK | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`slack-web`](plugins/slack-web/) | Slack Web | TS, Java, PHP, Python, Ruby, Go |
| [`splitit-web`](plugins/splitit-web/) | Splitit Web | TS, Java, PHP, Python, Ruby, Go |
| [`sportsdata`](plugins/sportsdata/) | sportsdata SDK | .NET, TS, PHP, Python, Ruby, Go |
| [`spotify-web-api`](plugins/spotify-web-api/) | Spotify Web API SDK | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`square-connect`](plugins/square-connect/) | Square Connect | .NET, TS, Java, PHP, Python, Go |
| [`stax-fattmerchant-api`](plugins/stax-fattmerchant-api/) | Stax (FattMerchant) API SDK | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`telegram-bot`](plugins/telegram-bot/) | Telegram Bot | TS, Java, PHP, Python, Go |
| [`tesla`](plugins/tesla/) | Tesla | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`tesser`](plugins/tesser/) | Tesser | TS, Java, PHP, Python, Ruby |
| [`the-plaid-api`](plugins/the-plaid-api/) | The Plaid API SDK | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`twilio-apis`](plugins/twilio-apis/) | Twilio APIs SDK | TS, Java, PHP, Python, Go |
| [`verizon`](plugins/verizon/) | Verizon | .NET, TS, Java, PHP, Python, Go |
| [`vimeo`](plugins/vimeo/) | Vimeo | .NET, TS, Java, PHP, Python, Ruby, Go |
| [`x-api-v2`](plugins/x-api-v2/) | X API v2 SDK | PHP, Python, Ruby, Go |
| [`xero`](plugins/xero/) | Xero | .NET, Go |

> Plugin ids change occasionally. `npx context-plugins list` is always the live source of truth.

## What's inside a plugin

Every plugin is a set of **skills** — Markdown files your agent loads on demand, by description.
Each supported language ships the same eight:

| Skill | Covers |
| --- | --- |
| `{lang}-getting-started` | SDK identity, install, and how to navigate the generated source |
| `{lang}-client-initialization` | Constructing and configuring the client |
| `{lang}-authentication` | Every auth scheme the API supports |
| `{lang}-calling-endpoints` | Method signatures, request models, reading responses |
| `{lang}-models` | Unions, enums, collections, dates, unknown fields |
| `{lang}-error-handling` | Which exception is thrown, and what it carries |
| `{lang}-configuration-resilience` | Retries, timeouts, pagination, logging |
| `{lang}-testing` | The test seam, and how to stub it |

The `getting-started` skill is the entry point: it directs the agent to clone and grep the real SDK
source, so every fact is grounded in the actual contract rather than model knowledge.

Across the marketplace that's **171 language packs and 1,368 skills**. See
[`plugins/paypal/README.md`](plugins/paypal/README.md) for a worked example.

## Repository structure

```
.claude-plugin/marketplace.json    the registry Claude Code reads
.cursor-plugin/marketplace.json    the same registry, Cursor format
plugins/<plugin-id>/
  plugin.json                      manifest (VS Code / Copilot format)
  .claude-plugin/plugin.json       Claude Code manifest
  .cursor-plugin/plugin.json       Cursor manifest
  README.md                        what this plugin covers
  assets/logo.svg
  skills/<language>/<skill>/SKILL.md
docs/cross-platform-agents.md      authoring agents that work across all three IDEs
```

Each plugin carries one manifest per IDE so the same folder installs cleanly into Claude Code,
Cursor, and VS Code.

## Contributing

To add a plugin:

1. Create `plugins/<plugin-id>/` following the structure above. Use a kebab-case id — it's what
   users type after `install`, and it must match the `name` in every manifest.
2. Add all three manifests, plus a `README.md` describing the API and the languages covered.
3. Register it in **both** `.claude-plugin/marketplace.json` and `.cursor-plugin/marketplace.json`.
4. Verify with `npx context-plugins list` and a real install.

Writing agents that work across all three assistants is covered in
[`docs/cross-platform-agents.md`](docs/cross-platform-agents.md).

Renaming a plugin breaks the id users have already installed, so treat ids as a public contract.

## Learn more

- [APIMatic Context Plugins](https://www.apimatic.io/product/context-plugins) — the product
- [`context-plugins` CLI](https://github.com/apimatic/context-plugins-installer) — the installer

## License

MIT — see [LICENSE.txt](LICENSE.txt).
