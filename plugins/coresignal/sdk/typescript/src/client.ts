import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Collect } from "./resources/collect.js";
import { Search } from "./resources/search.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Multi-source Company API returns enriched company records combining public web data sources,
 * deduplicated and standardized with 500+ fields. Search uses Elasticsearch DSL queries; Collect
 * returns full records by ID. Authentication uses the apikey HTTP header.
 */
export class CoresignalClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #collect?: Collect;
  #search?: Search;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CORESIGNAL_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CoresignalClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
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
   * Retrieve full company records by ID.
   */
  get collect(): Collect {
    return (this.#collect ??= new Collect(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search and filter company records.
   */
  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }
}
