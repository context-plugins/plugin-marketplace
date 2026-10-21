import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AgentsApi } from "./resources/agents-api.js";
import { Feeds } from "./resources/feeds.js";
import { ProtocolsApi } from "./resources/protocols-api.js";
import { Reports } from "./resources/reports.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Economic intelligence for the agent economy.
 */
export class LucidAgentOracleApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #agentsApi?: AgentsApi;
  #protocolsApi?: ProtocolsApi;
  #feeds?: Feeds;
  #reports?: Reports;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "LUCID_AGENT_ORACLE_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "LucidAgentOracleApiClient/1.0.0 TypeScript", schema: s.string() },
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
   * Agent identity, metrics, and activity
   */
  get agentsApi(): AgentsApi {
    return (this.#agentsApi ??= new AgentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Protocol registry and metrics
   */
  get protocolsApi(): ProtocolsApi {
    return (this.#protocolsApi ??= new ProtocolsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Oracle economic feeds
   */
  get feeds(): Feeds {
    return (this.#feeds ??= new Feeds(this.#rawClient, this.#servers));
  }

  /**
   * Signed attestation reports
   */
  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers));
  }
}
