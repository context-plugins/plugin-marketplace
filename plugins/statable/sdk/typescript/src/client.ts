import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Bootstrap } from "./resources/bootstrap.js";
import { Keys } from "./resources/keys.js";
import { Sites } from "./resources/sites.js";
import { Stats } from "./resources/stats.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Read-only public analytics API for Statable.
 */
export class StatableClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #bootstrap?: Bootstrap;
  #keys?: Keys;
  #sites?: Sites;
  #stats?: Stats;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "STATABLE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "StatableClient/1.0.0 TypeScript", schema: s.string() },
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
   * Register an account and obtain its first API key without a browser. The only operations in this
   * spec that take NO bearer token. Behind the server-side `API_BOOTSTRAP_ENABLED` flag; while it
   * is off both routes answer 404 `write_disabled`. See docs/api-v1-write-surface.md §2.
   */
  get bootstrap(): Bootstrap {
    return (this.#bootstrap ??= new Bootstrap(this.#rawClient, this.#servers));
  }

  /**
   * Manage API keys (write surface). Requires the `keys:manage` scope and the server-side
   * `API_WRITE_ENABLED` flag; while the flag is off every route here answers 404 `write_disabled`.
   * See docs/api-v1-write-surface.md.
   */
  get keys(): Keys {
    return (this.#keys ??= new Keys(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, change and delete sites (write surface). Requires the `sites:write` scope and the
   * server-side `API_WRITE_ENABLED` flag; the snippet route needs only `read`. See
   * docs/api-v1-write-surface.md §5.
   */
  get sites(): Sites {
    return (this.#sites ??= new Sites(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Read analytics data.
   */
  get stats(): Stats {
    return (this.#stats ??= new Stats(this.#rawClient, this.#servers, this.#auth));
  }
}
