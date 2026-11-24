import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AiAdvancedSearch } from "./resources/ai-advanced-search.js";
import { ContactPoints } from "./resources/contact-points.js";
import { Monitors } from "./resources/monitors.js";
import { NewsStories } from "./resources/news-stories.js";
import { SourceGroups } from "./resources/source-groups.js";
import { SupplementalEndpoints } from "./resources/supplemental-endpoints.js";
import { Utilities } from "./resources/utilities.js";
import { Watchlists } from "./resources/watchlists.js";
import { Wikipedia } from "./resources/wikipedia.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Perigon API provides access to comprehensive news and web content data. To use the API,
 * simply sign up for a Perigon Business Solutions account to obtain your API key. Your available
 * features may vary based on your plan. See the Authentication section for details on how to use
 * your API key.
 */
export class PerigonClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #aiAdvancedSearch?: AiAdvancedSearch;
  #contactPoints?: ContactPoints;
  #monitors?: Monitors;
  #newsStories?: NewsStories;
  #sourceGroups?: SourceGroups;
  #supplementalEndpoints?: SupplementalEndpoints;
  #utilities?: Utilities;
  #watchlists?: Watchlists;
  #wikipedia?: Wikipedia;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "PERIGON_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "PerigonClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
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
   * These endpoints enable semantic search beyond traditional keyword matching, content
   * summarization, and advanced information retrieval across articles
   */
  get aiAdvancedSearch(): AiAdvancedSearch {
    return (this.#aiAdvancedSearch ??= new AiAdvancedSearch(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage contact points used to deliver monitor notifications. Contact points define where and
   * how monitor events are delivered (e.g. webhooks). Only WEBHOOK contact points can be created
   * and managed via the API.
   */
  get contactPoints(): ContactPoints {
    return (this.#contactPoints ??= new ContactPoints(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage AI Monitors — configurable monitors that continuously scan news content for topics,
   * entities, and events of interest. Monitors run asynchronously and emit structured events and
   * AI-generated summaries that can be delivered to contact points.
   */
  get monitors(): Monitors {
    return (this.#monitors ??= new Monitors(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for accessing news articles and stories
   */
  get newsStories(): NewsStories {
    return (this.#newsStories ??= new NewsStories(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage custom source groups for organizing and filtering news sources. Source groups allow
   * grouping domains together for use in search queries and monitors.
   */
  get sourceGroups(): SourceGroups {
    return (this.#sourceGroups ??= new SourceGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Additional endpoints for metadata and related information
   */
  get supplementalEndpoints(): SupplementalEndpoints {
    return (this.#supplementalEndpoints ??= new SupplementalEndpoints(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get utilities(): Utilities {
    return (this.#utilities ??= new Utilities(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage watchlists of people and companies for use with monitors. Watchlists can contain up to
   * 100 combined entities and are used to track mentions across news content.
   */
  get watchlists(): Watchlists {
    return (this.#watchlists ??= new Watchlists(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for searching ingested Wikipedia content. Provides keyword and filtered search
   * capabilities along with vector-based semantic search across Wikipedia pages.
   */
  get wikipedia(): Wikipedia {
    return (this.#wikipedia ??= new Wikipedia(this.#rawClient, this.#servers, this.#auth));
  }
}
