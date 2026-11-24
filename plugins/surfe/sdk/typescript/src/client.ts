import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { Companies } from "./resources/companies.js";
import { People } from "./resources/people.js";
import { Recommendations } from "./resources/recommendations.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Surfe API (formerly Leadjet) provides B2B people and company search plus enrichment. It
 * returns verified professional emails and mobile phone numbers, company firmographics, and
 * lookalike account recommendations. Bulk enrichment is asynchronous: start a job with POST and
 * either poll the GET job endpoint or receive a webhook callback. All requests are authenticated
 * with a Bearer API key managed from the Surfe dashboard.
 */
export class SurfeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #companies?: Companies;
  #people?: People;
  #recommendations?: Recommendations;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SURFE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SurfeClient/2.0.0 TypeScript", schema: s.string() },
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
   * Credit balance and account utilities.
   */
  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search and enrich organizations.
   */
  get companies(): Companies {
    return (this.#companies ??= new Companies(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search and enrich individual contacts.
   */
  get people(): People {
    return (this.#people ??= new People(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * ICP definition and lookalike account recommendations.
   */
  get recommendations(): Recommendations {
    return (this.#recommendations ??= new Recommendations(this.#rawClient, this.#servers, this.#auth));
  }
}
