import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Async } from "./resources/async.js";
import { Countries } from "./resources/countries.js";
import { Credits } from "./resources/credits.js";
import { Monitor } from "./resources/monitor.js";
import { States } from "./resources/states.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Async across 3 of this provider's published API definitions:
 * cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Countries across 3 of this
 * provider's published API definitions: cloro-dev-openapi.json, cloro-dev-openapi_2.json,
 * cloro-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Credits across 3 of this provider's published API definitions:
 * cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Monitor across 3 of this
 * provider's published API definitions: cloro-dev-openapi.json, cloro-dev-openapi_2.json,
 * cloro-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged States across 3 of this provider's published API definitions:
 * cloro-dev-openapi.json, cloro-dev-openapi_2.json, cloro-dev-openapi.yml. Each path carries the
 * servers of the definition it was published in.
 */
export class CloroClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #async?: Async;
  #countries?: Countries;
  #credits?: Credits;
  #monitor?: Monitor;
  #states?: States;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CLORO_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CloroClient/1.0.0 TypeScript", schema: s.string() },
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

  get async(): Async {
    return (this.#async ??= new Async(this.#rawClient, this.#servers, this.#auth));
  }

  get countries(): Countries {
    return (this.#countries ??= new Countries(this.#rawClient, this.#servers, this.#auth));
  }

  get credits(): Credits {
    return (this.#credits ??= new Credits(this.#rawClient, this.#servers, this.#auth));
  }

  get monitor(): Monitor {
    return (this.#monitor ??= new Monitor(this.#rawClient, this.#servers, this.#auth));
  }

  get states(): States {
    return (this.#states ??= new States(this.#rawClient, this.#servers, this.#auth));
  }
}
