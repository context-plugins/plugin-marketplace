import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Bot } from "./resources/bot.js";
import { Health } from "./resources/health.js";
import { Versions } from "./resources/versions.js";
import { buildServers, type Servers } from "./servers.js";

export class SalesforceServiceCloudClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #bot?: Bot;
  #health?: Health;
  #versions?: Versions;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SALESFORCE_SERVICE_CLOUD_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SalesforceServiceCloudClient/5.3.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "5.3.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get bot(): Bot {
    return (this.#bot ??= new Bot(this.#rawClient, this.#servers, this.#auth));
  }

  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers));
  }

  get versions(): Versions {
    return (this.#versions ??= new Versions(this.#rawClient, this.#servers));
  }
}
