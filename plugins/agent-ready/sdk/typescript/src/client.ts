import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Mcp } from "./resources/mcp.js";
import { NlWeb } from "./resources/nl-web.js";
import { Scans } from "./resources/scans.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Programmatic access to agent-ready.dev scans.
 */
export class AgentReadyClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #mcp?: Mcp;
  #nlWeb?: NlWeb;
  #scans?: Scans;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AGENT_READY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AgentReadyClient/1.0.0 TypeScript", schema: s.string() },
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

  get mcp(): Mcp {
    return (this.#mcp ??= new Mcp(this.#rawClient, this.#servers));
  }

  get nlWeb(): NlWeb {
    return (this.#nlWeb ??= new NlWeb(this.#rawClient, this.#servers));
  }

  get scans(): Scans {
    return (this.#scans ??= new Scans(this.#rawClient, this.#servers, this.#auth));
  }
}
