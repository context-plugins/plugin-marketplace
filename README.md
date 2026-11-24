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

This repository is the **`context-plugins` marketplace**: a collection of **<!-- BEGIN:PLUGIN_COUNT -->77<!-- END:PLUGIN_COUNT --> plugins**, one per
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

### From skills.sh

The skills here are also installable with the [`skills`](https://github.com/vercel-labs/skills)
CLI, which covers Claude Code, Cursor, Copilot, Codex, Windsurf, Zed and
[70+ other agents](https://skills.sh). Install one API for one language:

```bash
npx skills add https://github.com/context-plugins/plugin-marketplace/tree/main/plugins/paypal/skills/python
```

That installs the whole language pack — the `python-integrate-paypal` entry skill, the SDK map it
reads, and the shared SDK-pattern skills. Swap `python` for `dotnet` or `typescript`, and `paypal`
for any plugin id in [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json).

To see what a pack contains without installing it, add `--list`.

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

<!-- BEGIN:PLUGIN_COUNT -->77<!-- END:PLUGIN_COUNT --> plugins, listed in [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json).
The **Languages** column is the set of SDK languages that plugin ships skills for.

<!-- This table is generated from plugins/ by .github/scripts/sync_marketplace.py. Do not edit by
     hand — edits between the markers are overwritten on the next sync. To change a row, change
     the plugin's own .claude-plugin/plugin.json (displayName) or its skills/ directories. -->
<!-- BEGIN:PLUGIN_TABLE -->
| Plugin | API | Languages |
| --- | --- | --- |
| [`adyen`](plugins/adyen/) | Adyen | .NET, TS, Python |
| [`airtable`](plugins/airtable/) | Airtable | .NET, TS, Python |
| [`airwallex`](plugins/airwallex/) | Airwallex | .NET, TS, Python |
| [`alpaca`](plugins/alpaca/) | Alpaca | .NET, TS, Python |
| [`alphaai`](plugins/alphaai/) | AlphaAI | .NET, TS, Python |
| [`amazon-appsync`](plugins/amazon-appsync/) | Amazon AppSync | .NET, TS, Python |
| [`apibara`](plugins/apibara/) | Apibara | .NET, TS, Python |
| [`applike`](plugins/applike/) | Applike | .NET, TS, Python |
| [`appstorespy`](plugins/appstorespy/) | AppstoreSpy | .NET, TS, Python |
| [`asana`](plugins/asana/) | Asana | .NET, TS |
| [`audioscrape`](plugins/audioscrape/) | Audioscrape | .NET, TS, Python |
| [`authlete`](plugins/authlete/) | Authlete | TS |
| [`basiq`](plugins/basiq/) | Basiq | .NET, TS, Python |
| [`binance`](plugins/binance/) | Binance | .NET, TS, Python |
| [`bitbucket`](plugins/bitbucket/) | Bitbucket | .NET, Python |
| [`bitly`](plugins/bitly/) | Bitly | .NET, TS, Python |
| [`boomi`](plugins/boomi/) | Boomi | .NET, TS, Python |
| [`browser-use`](plugins/browser-use/) | Browser Use | .NET, TS, Python |
| [`browserstack`](plugins/browserstack/) | BrowserStack | .NET, TS, Python |
| [`buildkite`](plugins/buildkite/) | Buildkite | .NET, TS, Python |
| [`bundle-social`](plugins/bundle-social/) | Bundle.social | .NET, TS, Python |
| [`callnode`](plugins/callnode/) | CallNode | .NET, TS, Python |
| [`carsxe`](plugins/carsxe/) | CarsXE | .NET, TS, Python |
| [`celestia`](plugins/celestia/) | Celestia | .NET, TS, Python |
| [`cloro`](plugins/cloro/) | Cloro | .NET, TS, Python |
| [`cloudinary-analysis`](plugins/cloudinary-analysis/) | Cloudinary Analysis | TS |
| [`cloudinary-asset-management`](plugins/cloudinary-asset-management/) | Cloudinary Asset Management | TS |
| [`codeqr`](plugins/codeqr/) | CodeQR | .NET, TS, Python |
| [`coingecko`](plugins/coingecko/) | Coin Gecko | .NET, TS, Python |
| [`common-elements`](plugins/common-elements/) | Common Elements | .NET, TS, Python |
| [`compabase`](plugins/compabase/) | Compabase | .NET, TS, Python |
| [`cosmic`](plugins/cosmic/) | Cosmic | .NET, TS, Python |
| [`cribl-cloud-management`](plugins/cribl-cloud-management/) | Cribl Cloud Management | TS |
| [`cribl-control-plane`](plugins/cribl-control-plane/) | Cribl Control Plane | TS |
| [`deepgram`](plugins/deepgram/) | Deepgram | .NET, TS, Python |
| [`discourse`](plugins/discourse/) | Discourse | .NET, TS, Python |
| [`dwolla`](plugins/dwolla/) | Dwolla | TS |
| [`financial-modeling-prep`](plugins/financial-modeling-prep/) | Financial Modeling Prep | .NET, TS, Python |
| [`finnhub`](plugins/finnhub/) | Finnhub API | .NET, TS, Python |
| [`firecrawl`](plugins/firecrawl/) | Firecrawl API | .NET, TS, Python |
| [`frankfurter`](plugins/frankfurter/) | Frankfurter API | .NET, TS, Python |
| [`friendliai`](plugins/friendliai/) | FriendliAI | TS |
| [`gbg-go`](plugins/gbg-go/) | GBG GO | TS |
| [`glean-client`](plugins/glean-client/) | Glean Client | TS |
| [`glean-indexing`](plugins/glean-indexing/) | Glean Indexing | TS |
| [`glean-platform`](plugins/glean-platform/) | Glean Platform | TS |
| [`google-analytics`](plugins/google-analytics/) | Google Analytics | .NET, TS, Python |
| [`google-maps`](plugins/google-maps/) | Google Maps Platform | .NET, TS, Python |
| [`google-search-console`](plugins/google-search-console/) | Google Search Console | .NET, TS, Python |
| [`gr4vy`](plugins/gr4vy/) | Gr4vy | TS |
| [`launchdarkly`](plugins/launchdarkly/) | LaunchDarkly | TS |
| [`lucid-agent-oracle`](plugins/lucid-agent-oracle/) | Lucid Agent Oracle | TS |
| [`mailboxlayer`](plugins/mailboxlayer/) | Mailboxlayer | .NET, TS, Python |
| [`maxio`](plugins/maxio/) | Maxio | .NET, TS, Python |
| [`mollie`](plugins/mollie/) | Mollie | TS |
| [`notion`](plugins/notion/) | Notion API | .NET, TS, Python |
| [`nytimes`](plugins/nytimes/) | The New York Times APIs | .NET, TS, Python |
| [`oddsrelay`](plugins/oddsrelay/) | OddsRelay | .NET, TS, Python |
| [`paypal`](plugins/paypal/) | PayPal | .NET, TS, Python |
| [`pipeshub`](plugins/pipeshub/) | PipesHub | TS |
| [`plaid`](plugins/plaid/) | The Plaid API | .NET, TS, Python |
| [`sapling`](plugins/sapling/) | Sapling | .NET, TS, Python |
| [`serpapi`](plugins/serpapi/) | SerpApi | .NET, TS, Python |
| [`shortcut`](plugins/shortcut/) | Shortcut | .NET, TS, Python |
| [`shutterstock`](plugins/shutterstock/) | Shutterstock API Explorer | .NET, TS, Python |
| [`skylight`](plugins/skylight/) | Skylight | TS |
| [`slack`](plugins/slack/) | Slack Web API | .NET, TS, Python |
| [`sportsdata`](plugins/sportsdata/) | SportsDataIO | .NET, TS, Python |
| [`spotify`](plugins/spotify/) | Spotify Web API | .NET, TS, Python |
| [`square`](plugins/square/) | Square | .NET, TS, Python |
| [`stayingapi`](plugins/stayingapi/) | StayingAPI | .NET, TS, Python |
| [`syllable-plugin`](plugins/syllable-plugin/) | Syllable | TS |
| [`tesla`](plugins/tesla/) | Tesla Fleet Management API | .NET, TS, Python |
| [`trilogy-oneroster`](plugins/trilogy-oneroster/) | Trilogy OneRoster | TS |
| [`twilio`](plugins/twilio/) | Twilio | .NET, TS, Python |
| [`verizon`](plugins/verizon/) | Verizon | .NET, TS, Python |
| [`vimeo`](plugins/vimeo/) | Vimeo API | .NET, TS, Python |
<!-- END:PLUGIN_TABLE -->

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

Across the marketplace that's **<!-- BEGIN:LANGUAGE_PACK_COUNT -->191<!-- END:LANGUAGE_PACK_COUNT --> language packs and <!-- BEGIN:SKILL_COUNT -->1,889<!-- END:SKILL_COUNT --> skills**. See
[`plugins/paypal/README.md`](plugins/paypal/README.md) for a worked example.

## Repository structure

```
.claude-plugin/marketplace.json    the registry Claude Code reads
.cursor-plugin/marketplace.json    the same registry, Cursor format
skills.sh.json                     groups the skills by API on the skills.sh repo page
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
