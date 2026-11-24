import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { AgentRail } from "./resources/agent-rail.js";
import { ApiKeys } from "./resources/api-keys.js";
import { Charts } from "./resources/charts.js";
import { DataExport } from "./resources/data-export.js";
import { Episodes } from "./resources/episodes.js";
import { Items } from "./resources/items.js";
import { KnowledgeGraph } from "./resources/knowledge-graph.js";
import { Libraries } from "./resources/libraries.js";
import { Persons } from "./resources/persons.js";
import { Podcasts } from "./resources/podcasts.js";
import { Search } from "./resources/search.js";
import { System } from "./resources/system.js";
import { Workspaces } from "./resources/workspaces.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Account across 2 of this provider's published API definitions:
 * audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged Agent rail across 2 of this provider's
 * published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path
 * carries the servers of the definition it was published in., Operations tagged API Keys across 2
 * of this provider's published API definitions: audioscrape-com-openapi.json,
 * audioscrape-com-openapi.json. Each path carries the servers of the definition it was published
 * in., Operations tagged Charts across 2 of this provider's published API definitions:
 * audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged Data Export across 2 of this provider's
 * published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path
 * carries the servers of the definition it was published in., Operations tagged Episodes across 2
 * of this provider's published API definitions: audioscrape-com-openapi.json,
 * audioscrape-com-openapi.json. Each path carries the servers of the definition it was published
 * in., Operations tagged Items across 2 of this provider's published API definitions:
 * audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged Knowledge Graph across 2 of this provider's
 * published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path
 * carries the servers of the definition it was published in., Operations tagged Libraries across 2
 * of this provider's published API definitions: audioscrape-com-openapi.json,
 * audioscrape-com-openapi.json. Each path carries the servers of the definition it was published
 * in., Operations tagged Persons across 2 of this provider's published API definitions:
 * audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the
 * definition it was published in., Operations tagged Podcasts across 2 of this provider's published
 * API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries
 * the servers of the definition it was published in., Operations tagged Search across 2 of this
 * provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json.
 * Each path carries the servers of the definition it was published in., Operations tagged System
 * across 2 of this provider's published API definitions: audioscrape-com-openapi.json,
 * audioscrape-com-openapi.json. Each path carries the servers of the definition it was published
 * in., Operations tagged Workspaces across 2 of this provider's published API definitions:
 * audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the
 * definition it was published in.
 */
export class AudioscrapeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #agentRail?: AgentRail;
  #apiKeys?: ApiKeys;
  #charts?: Charts;
  #dataExport?: DataExport;
  #episodes?: Episodes;
  #items?: Items;
  #knowledgeGraph?: KnowledgeGraph;
  #libraries?: Libraries;
  #persons?: Persons;
  #podcasts?: Podcasts;
  #search?: Search;
  #system?: System;
  #workspaces?: Workspaces;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AUDIOSCRAPE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AudioscrapeClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Current-user introspection: plan, limits, usage
   */
  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Pay-as-you-go answers for AI agents over HTTP 402: a pay-as-you-go workspace balance topped up
   * by card or Link through the Machine Payments Protocol (Stripe), and x402 (USDC per call) where
   * the 402 offers it. A first top-up opens the workspace and returns its API key and a claim link.
   * Subscribers' keys are served within the plan. Price list: GET /api/agent/v1
   */
  get agentRail(): AgentRail {
    return (this.#agentRail ??= new AgentRail(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create and manage API keys for programmatic access
   */
  get apiKeys(): ApiKeys {
    return (this.#apiKeys ??= new ApiKeys(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Apple Podcasts and Spotify chart rankings
   */
  get charts(): Charts {
    return (this.#charts ??= new Charts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Customer-initiated bulk export of workspace data (audio, transcripts, items, metadata) into a
   * downloadable archive
   */
  get dataExport(): DataExport {
    return (this.#dataExport ??= new DataExport(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Convenience alias for podcast-episode items. For multi-format integrations, prefer
   * `/api/items`.
   */
  get episodes(): Episodes {
    return (this.#episodes ??= new Episodes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Universal audio items — podcast episodes, uploads, conference talks, anything with a
   * transcript. The `source_type` field distinguishes formats.
   */
  get items(): Items {
    return (this.#items ??= new Items(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Named-entity search and trending topics
   */
  get knowledgeGraph(): KnowledgeGraph {
    return (this.#knowledgeGraph ??= new KnowledgeGraph(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Published content catalogs — public workspaces and published datasets. The organizational
   * hierarchy: Library → Dataset → Item. Use these endpoints to browse content shared with
   * everyone; for your own tenant, use Workspaces.
   */
  get libraries(): Libraries {
    return (this.#libraries ??= new Libraries(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Look up speakers and their appearances
   */
  get persons(): Persons {
    return (this.#persons ??= new Persons(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Convenience alias for items where `source_type = 'podcast_episode'`. For multi-format
   * integrations, prefer `/api/items`.
   */
  get podcasts(): Podcasts {
    return (this.#podcasts ??= new Podcasts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Hybrid, text, and semantic search across all audio content, regardless of source type
   */
  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Service health and version
   */
  get system(): System {
    return (this.#system ??= new System(this.#rawClient, this.#servers));
  }

  /**
   * The canonical tenant surface: your workspace and its datasets, private included. Members-only —
   * workspaces you don't belong to are 404s here; browse other people's published content via
   * Libraries.
   */
  get workspaces(): Workspaces {
    return (this.#workspaces ??= new Workspaces(this.#rawClient, this.#servers, this.#auth));
  }
}
