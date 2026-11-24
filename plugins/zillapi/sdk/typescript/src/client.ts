import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { Buildings } from "./resources/buildings.js";
import { Jobs } from "./resources/jobs.js";
import { Listings } from "./resources/listings.js";
import { Properties } from "./resources/properties.js";
import { Search } from "./resources/search.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Real estate data API. Look up properties by URL, address, or zpid; search listings; extract
 * multi-unit buildings; run async batches; receive results via signed webhooks.
 */
export class ZillapiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #buildings?: Buildings;
  #jobs?: Jobs;
  #listings?: Listings;
  #properties?: Properties;
  #search?: Search;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ZILLAPI_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ZillapiClient/1.0.0 TypeScript", schema: s.string() },
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

  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  get buildings(): Buildings {
    return (this.#buildings ??= new Buildings(this.#rawClient, this.#servers, this.#auth));
  }

  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }

  get listings(): Listings {
    return (this.#listings ??= new Listings(this.#rawClient, this.#servers, this.#auth));
  }

  get properties(): Properties {
    return (this.#properties ??= new Properties(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
