import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { CompanyDataApi } from "./resources/company-data-api.js";
import { PeopleDataApi } from "./resources/people-data-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The RocketReach API lets you search and retrieve contact info for 700M+ professionals and 35M
 * companies.
 */
export class RocketReachClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #companyDataApi?: CompanyDataApi;
  #peopleDataApi?: PeopleDataApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ROCKET_REACH_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "RocketReachClient/1.0.0 TypeScript", schema: s.string() },
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

  get companyDataApi(): CompanyDataApi {
    return (this.#companyDataApi ??= new CompanyDataApi(this.#rawClient, this.#servers, this.#auth));
  }

  get peopleDataApi(): PeopleDataApi {
    return (this.#peopleDataApi ??= new PeopleDataApi(this.#rawClient, this.#servers, this.#auth));
  }
}
