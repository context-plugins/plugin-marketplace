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

This repository is the **`context-plugins` marketplace**: a collection of **<!-- BEGIN:PLUGIN_COUNT -->176<!-- END:PLUGIN_COUNT --> plugins**, one per
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

<!-- BEGIN:PLUGIN_COUNT -->176<!-- END:PLUGIN_COUNT --> plugins, listed in [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json).
The **Languages** column is the set of SDK languages that plugin ships skills for.

<!-- This table is generated from plugins/ by .github/scripts/sync_marketplace.py. Do not edit by
     hand — edits between the markers are overwritten on the next sync. To change a row, change
     the plugin's own .claude-plugin/plugin.json (displayName) or its skills/ directories. -->
<!-- BEGIN:PLUGIN_TABLE -->
| Plugin | API | Languages |
| --- | --- | --- |
| [`adyen`](plugins/adyen/) | Adyen | .NET, TS, Python |
| [`agent-ready`](plugins/agent-ready/) | Agent Ready | .NET, TS, Python |
| [`airtable`](plugins/airtable/) | Airtable | .NET, TS, Python |
| [`airwallex`](plugins/airwallex/) | Airwallex | .NET, TS, Python |
| [`alpaca`](plugins/alpaca/) | Alpaca | .NET, TS, Python |
| [`alphai`](plugins/alphai/) | AlphAI | .NET, TS, Python |
| [`amazon-appsync`](plugins/amazon-appsync/) | Amazon AppSync | .NET, TS, Python |
| [`amazon-certificate-manager`](plugins/amazon-certificate-manager/) | AWS Certificate Manager | .NET, TS, Python |
| [`amazon-comprehend`](plugins/amazon-comprehend/) | Amazon Comprehend | .NET, TS, Python |
| [`amazon-devops-guru`](plugins/amazon-devops-guru/) | Amazon DevOps Guru | .NET, TS, Python |
| [`amazon-direct-connect`](plugins/amazon-direct-connect/) | AWS Direct Connect | .NET, TS, Python |
| [`amazon-ebs`](plugins/amazon-ebs/) | Amazon EBS | .NET, TS, Python |
| [`amazon-forecast`](plugins/amazon-forecast/) | Amazon Forecast | .NET, TS, Python |
| [`amazon-freertos`](plugins/amazon-freertos/) | Amazon FreeRTOS | .NET, TS, Python |
| [`amazon-lex`](plugins/amazon-lex/) | Amazon Lex | .NET, TS, Python |
| [`amazon-rekognition`](plugins/amazon-rekognition/) | Amazon Rekognition | .NET, TS, Python |
| [`amazon-sqs`](plugins/amazon-sqs/) | Amazon SQS | .NET, TS, Python |
| [`amazon-storage-gateway`](plugins/amazon-storage-gateway/) | AWS Storage Gateway | .NET, TS, Python |
| [`amazon-swf`](plugins/amazon-swf/) | Amazon SWF | .NET, TS, Python |
| [`amazon-transcribe`](plugins/amazon-transcribe/) | Amazon Transcribe | .NET, TS, Python |
| [`amazon-vpc`](plugins/amazon-vpc/) | Amazon VPC | .NET, TS, Python |
| [`amazon-xray`](plugins/amazon-xray/) | AWS X-Ray | .NET, TS, Python |
| [`apibara`](plugins/apibara/) | Apibara | .NET, TS, Python |
| [`apigee`](plugins/apigee/) | Apigee | .NET, TS, Python |
| [`apiverve`](plugins/apiverve/) | APIVerve | .NET, TS, Python |
| [`appstorespy`](plugins/appstorespy/) | AppstoreSpy | .NET, TS, Python |
| [`archbee`](plugins/archbee/) | Archbee | .NET, TS, Python |
| [`asana`](plugins/asana/) | Asana | .NET, TS |
| [`atlassian-compass`](plugins/atlassian-compass/) | Atlassian Compass | .NET, TS, Python |
| [`audioscrape`](plugins/audioscrape/) | Audioscrape | .NET, TS, Python |
| [`authlete`](plugins/authlete/) | Authlete | TS |
| [`aws-codebuild`](plugins/aws-codebuild/) | AWS CodeBuild | .NET, TS, Python |
| [`aws-step-functions`](plugins/aws-step-functions/) | AWS Step Functions | .NET, TS, Python |
| [`basiq`](plugins/basiq/) | Basiq | .NET, TS, Python |
| [`beehiiv`](plugins/beehiiv/) | Beehiiv | .NET, TS, Python |
| [`betterstack`](plugins/betterstack/) | Better Stack | .NET, TS, Python |
| [`bill`](plugins/bill/) | BILL | .NET, TS, Python |
| [`binance`](plugins/binance/) | Binance | .NET, TS, Python |
| [`bitbucket`](plugins/bitbucket/) | Bitbucket | .NET, Python |
| [`bitly`](plugins/bitly/) | Bitly | .NET, TS, Python |
| [`boomi`](plugins/boomi/) | Boomi | .NET, TS, Python |
| [`browser-use`](plugins/browser-use/) | Browser Use | .NET, TS, Python |
| [`browserstack`](plugins/browserstack/) | BrowserStack | .NET, TS, Python |
| [`buildkite`](plugins/buildkite/) | Buildkite | .NET, TS, Python |
| [`bundle-social`](plugins/bundle-social/) | Bundle.social | .NET, TS, Python |
| [`business-central`](plugins/business-central/) | Dynamics 365 Business Central | .NET, TS, Python |
| [`callnode`](plugins/callnode/) | CallNode | .NET, TS, Python |
| [`carsxe`](plugins/carsxe/) | CarsXE | .NET, TS, Python |
| [`celestia`](plugins/celestia/) | Celestia | .NET, TS, Python |
| [`circleci`](plugins/circleci/) | CircleCI | .NET, TS, Python |
| [`clix`](plugins/clix/) | Clix | .NET, TS, Python |
| [`cloro`](plugins/cloro/) | Cloro | .NET, TS, Python |
| [`cloudinary-analysis`](plugins/cloudinary-analysis/) | Cloudinary Analysis | TS |
| [`cloudinary-asset-management`](plugins/cloudinary-asset-management/) | Cloudinary Asset Management | TS |
| [`cloudkit`](plugins/cloudkit/) | CloudKit | .NET, TS, Python |
| [`codeqr`](plugins/codeqr/) | CodeQR | .NET, TS, Python |
| [`coingecko`](plugins/coingecko/) | Coin Gecko | .NET, TS, Python |
| [`common-elements`](plugins/common-elements/) | Common Elements | .NET, TS, Python |
| [`compabase`](plugins/compabase/) | Compabase | .NET, TS, Python |
| [`compsniper`](plugins/compsniper/) | CompSniper | .NET, TS, Python |
| [`contentstack`](plugins/contentstack/) | Contentstack | .NET, TS, Python |
| [`coresignal`](plugins/coresignal/) | Coresignal | .NET, TS, Python |
| [`cosmic`](plugins/cosmic/) | Cosmic | .NET, TS, Python |
| [`crawl4ai`](plugins/crawl4ai/) | Crawl4AI | .NET, TS, Python |
| [`cribl-cloud-management`](plugins/cribl-cloud-management/) | Cribl Cloud Management | TS |
| [`cribl-control-plane`](plugins/cribl-control-plane/) | Cribl Control Plane | TS |
| [`cubic`](plugins/cubic/) | Cubic | .NET, TS, Python |
| [`curlec`](plugins/curlec/) | Curlec | .NET, TS, Python |
| [`deepgram`](plugins/deepgram/) | Deepgram | .NET, TS, Python |
| [`deliverd`](plugins/deliverd/) | Deliverd | .NET, TS, Python |
| [`devcycle`](plugins/devcycle/) | DevCycle | .NET, TS, Python |
| [`didlogic`](plugins/didlogic/) | DIDLogic | .NET, TS, Python |
| [`discourse`](plugins/discourse/) | Discourse | .NET, TS, Python |
| [`doit`](plugins/doit/) | DoiT | .NET, TS, Python |
| [`dopesecurity`](plugins/dopesecurity/) | Dope.security | .NET, TS, Python |
| [`dwolla`](plugins/dwolla/) | Dwolla | TS |
| [`dynamicfeed`](plugins/dynamicfeed/) | DynamicFeed | .NET, TS, Python |
| [`einstein-bots`](plugins/einstein-bots/) | Einstein Bots | .NET, TS, Python |
| [`facebook-business-manager`](plugins/facebook-business-manager/) | Facebook Business Manager | .NET, TS, Python |
| [`fellow`](plugins/fellow/) | Fellow | .NET, TS, Python |
| [`fillo`](plugins/fillo/) | Fillo | .NET, TS, Python |
| [`financial-modeling-prep`](plugins/financial-modeling-prep/) | Financial Modeling Prep | .NET, TS, Python |
| [`finnhub`](plugins/finnhub/) | Finnhub API | .NET, TS, Python |
| [`firecrawl`](plugins/firecrawl/) | Firecrawl API | .NET, TS, Python |
| [`fireflies`](plugins/fireflies/) | Fireflies.ai | .NET, TS, Python |
| [`flowaccount`](plugins/flowaccount/) | FlowAccount | .NET, TS, Python |
| [`forcedream`](plugins/forcedream/) | ForceDream | .NET, TS, Python |
| [`frankfurter`](plugins/frankfurter/) | Frankfurter API | .NET, TS, Python |
| [`friendliai`](plugins/friendliai/) | FriendliAI | TS |
| [`gbg-go`](plugins/gbg-go/) | GBG GO | TS |
| [`givebutter`](plugins/givebutter/) | Givebutter | .NET, TS, Python |
| [`glean-client`](plugins/glean-client/) | Glean Client | TS |
| [`glean-indexing`](plugins/glean-indexing/) | Glean Indexing | TS |
| [`glean-platform`](plugins/glean-platform/) | Glean Platform | TS |
| [`google-analytics`](plugins/google-analytics/) | Google Analytics | .NET, TS, Python |
| [`google-cloud-api-gateway`](plugins/google-cloud-api-gateway/) | Google Cloud API Gateway | .NET, TS, Python |
| [`google-cloud-build`](plugins/google-cloud-build/) | Google Cloud Build | .NET, TS, Python |
| [`google-cloud-dataproc`](plugins/google-cloud-dataproc/) | Google Cloud Dataproc | .NET, TS, Python |
| [`google-cloud-datastream`](plugins/google-cloud-datastream/) | Google Cloud Datastream | .NET, TS, Python |
| [`google-cloud-eventarc`](plugins/google-cloud-eventarc/) | Google Cloud Eventarc | .NET, TS, Python |
| [`google-cloud-speech-to-text`](plugins/google-cloud-speech-to-text/) | Google Cloud Speech-to-Text | .NET, TS, Python |
| [`google-cloud-talent-solution`](plugins/google-cloud-talent-solution/) | Google Cloud Talent Solution | .NET, TS, Python |
| [`google-cloud-tasks`](plugins/google-cloud-tasks/) | Google Cloud Tasks | .NET, TS, Python |
| [`google-cloud-transfer-service`](plugins/google-cloud-transfer-service/) | Google Cloud Storage Transfer Service | .NET, TS, Python |
| [`google-maps`](plugins/google-maps/) | Google Maps Platform | .NET, TS, Python |
| [`google-search-console`](plugins/google-search-console/) | Google Search Console | .NET, TS, Python |
| [`google-translate`](plugins/google-translate/) | Google Translate | .NET, TS, Python |
| [`gr4vy`](plugins/gr4vy/) | Gr4vy | TS |
| [`health-gorilla`](plugins/health-gorilla/) | Health Gorilla | .NET, TS, Python |
| [`hightouch`](plugins/hightouch/) | Hightouch | .NET, TS, Python |
| [`hud`](plugins/hud/) | HUD | .NET, TS, Python |
| [`instacart`](plugins/instacart/) | Instacart | .NET, TS, Python |
| [`instagram`](plugins/instagram/) | Instagram | .NET, TS, Python |
| [`jid`](plugins/jid/) | JID | .NET, TS, Python |
| [`jurisign`](plugins/jurisign/) | JuriSign | .NET, TS, Python |
| [`justtrack`](plugins/justtrack/) | Justtrack | .NET, TS, Python |
| [`lastdatabase`](plugins/lastdatabase/) | LastDatabase | .NET, TS, Python |
| [`launchdarkly`](plugins/launchdarkly/) | LaunchDarkly | TS |
| [`leadspace`](plugins/leadspace/) | Leadspace | .NET, TS, Python |
| [`lili`](plugins/lili/) | Lili | .NET, TS, Python |
| [`lucid-agent-oracle`](plugins/lucid-agent-oracle/) | Lucid Agent Oracle | TS |
| [`lusha`](plugins/lusha/) | Lusha | .NET, TS, Python |
| [`mailboxlayer`](plugins/mailboxlayer/) | Mailboxlayer | .NET, TS, Python |
| [`mailerlite`](plugins/mailerlite/) | MailerLite | .NET, TS, Python |
| [`maxio`](plugins/maxio/) | Maxio | .NET, TS, Python |
| [`mollie`](plugins/mollie/) | Mollie | TS |
| [`mrscraper`](plugins/mrscraper/) | MrScraper | .NET, TS, Python |
| [`nordic-financial-news`](plugins/nordic-financial-news/) | Nordic Financial News | .NET, TS, Python |
| [`notion`](plugins/notion/) | Notion API | .NET, TS, Python |
| [`nytimes`](plugins/nytimes/) | The New York Times APIs | .NET, TS, Python |
| [`oddsrelay`](plugins/oddsrelay/) | OddsRelay | .NET, TS, Python |
| [`ortto`](plugins/ortto/) | Ortto | .NET, TS, Python |
| [`paid`](plugins/paid/) | Paid | .NET, TS, Python |
| [`parallel`](plugins/parallel/) | Parallel | .NET, TS, Python |
| [`paypal`](plugins/paypal/) | PayPal | .NET, TS, Python |
| [`perigon`](plugins/perigon/) | Perigon | .NET, TS, Python |
| [`pipeshub`](plugins/pipeshub/) | PipesHub | TS |
| [`plaid`](plugins/plaid/) | The Plaid API | .NET, TS, Python |
| [`plinth-us-grants-data`](plugins/plinth-us-grants-data/) | Plinth US Grants Data | .NET, TS, Python |
| [`postscript`](plugins/postscript/) | Postscript | .NET, TS, Python |
| [`prismareviews`](plugins/prismareviews/) | PrismaReviews | .NET, TS, Python |
| [`readme`](plugins/readme/) | ReadMe | .NET, TS, Python |
| [`relmcrm`](plugins/relmcrm/) | RelmCRM | .NET, TS, Python |
| [`rendex`](plugins/rendex/) | Rendex | .NET, TS, Python |
| [`rocketreach`](plugins/rocketreach/) | RocketReach | .NET, TS, Python |
| [`sapling`](plugins/sapling/) | Sapling | .NET, TS, Python |
| [`search1api`](plugins/search1api/) | Search1API | .NET, TS, Python |
| [`semrush`](plugins/semrush/) | Semrush | .NET, TS, Python |
| [`serpapi`](plugins/serpapi/) | SerpApi | .NET, TS, Python |
| [`shortcut`](plugins/shortcut/) | Shortcut | .NET, TS, Python |
| [`shutterstock`](plugins/shutterstock/) | Shutterstock API Explorer | .NET, TS, Python |
| [`skribble`](plugins/skribble/) | Skribble | .NET, TS, Python |
| [`skylight`](plugins/skylight/) | Skylight | TS |
| [`slack`](plugins/slack/) | Slack Web API | .NET, TS, Python |
| [`soda`](plugins/soda/) | Soda | .NET, TS, Python |
| [`sportsdata`](plugins/sportsdata/) | SportsDataIO | .NET, TS, Python |
| [`spotify`](plugins/spotify/) | Spotify Web API | .NET, TS, Python |
| [`square`](plugins/square/) | Square | .NET, TS, Python |
| [`statable`](plugins/statable/) | Statable | .NET, TS, Python |
| [`stayingapi`](plugins/stayingapi/) | StayingAPI | .NET, TS, Python |
| [`stoplight`](plugins/stoplight/) | Stoplight | .NET, TS, Python |
| [`surfe`](plugins/surfe/) | Surfe | .NET, TS, Python |
| [`syllable-plugin`](plugins/syllable-plugin/) | Syllable | TS |
| [`tabby`](plugins/tabby/) | Tabby | .NET, TS, Python |
| [`tesla`](plugins/tesla/) | Tesla Fleet Management API | .NET, TS, Python |
| [`transcriptfetch`](plugins/transcriptfetch/) | TranscriptFetch | .NET, TS, Python |
| [`trilogy-oneroster`](plugins/trilogy-oneroster/) | Trilogy OneRoster | TS |
| [`twilio`](plugins/twilio/) | Twilio | .NET, TS, Python |
| [`uipath`](plugins/uipath/) | UiPath | .NET, TS, Python |
| [`unbounce`](plugins/unbounce/) | Unbounce | .NET, TS, Python |
| [`upstox`](plugins/upstox/) | Upstox | .NET, TS, Python |
| [`verizon`](plugins/verizon/) | Verizon | .NET, TS, Python |
| [`vimeo`](plugins/vimeo/) | Vimeo API | .NET, TS, Python |
| [`whoisfreaks`](plugins/whoisfreaks/) | WhoisFreaks | .NET, TS, Python |
| [`zerobounce`](plugins/zerobounce/) | ZeroBounce | .NET, TS, Python |
| [`zillapi`](plugins/zillapi/) | Zillapi | .NET, TS, Python |
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

Across the marketplace that's **<!-- BEGIN:LANGUAGE_PACK_COUNT -->488<!-- END:LANGUAGE_PACK_COUNT --> language packs and <!-- BEGIN:SKILL_COUNT -->4,859<!-- END:SKILL_COUNT --> skills**. See
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
