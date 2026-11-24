import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountApi } from "./resources/account-api.js";
import { Discovery } from "./resources/discovery.js";
import { Odds } from "./resources/odds.js";
import { Service } from "./resources/service.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The OddsRelay odds API: matched boards, the raw board, discovery, coverage and status, as served
 * at `https://api.oddsrelay.io`.
 */
export class OddsRelayClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accountApi?: AccountApi;
  #discovery?: Discovery;
  #odds?: Odds;
  #service?: Service;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ODDS_RELAY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "OddsRelayClient/0.1.0 TypeScript", schema: s.string() },
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
   * Usage and prices. Free.
   */
  get accountApi(): AccountApi {
    return (this.#accountApi ??= new AccountApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sports, events, venues, regions. Free.
   */
  get discovery(): Discovery {
    return (this.#discovery ??= new Discovery(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Matched boards, raw, one event.
   */
  get odds(): Odds {
    return (this.#odds ??= new Odds(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Coverage, status, health, liveness and this document.
   */
  get service(): Service {
    return (this.#service ??= new Service(this.#rawClient, this.#servers, this.#auth));
  }
}
