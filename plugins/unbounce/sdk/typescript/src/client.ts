import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Accounts } from "./resources/accounts.js";
import { Domains } from "./resources/domains.js";
import { Leads } from "./resources/leads.js";
import { Meta } from "./resources/meta.js";
import { PageGroups } from "./resources/page-groups.js";
import { Pages } from "./resources/pages.js";
import { Users } from "./resources/users.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Unbounce REST API provides programmatic access to accounts, sub-accounts, domains, pages,
 * page groups, and leads. Authentication uses an API key (available to all Unbounce pricing plans)
 * or OAuth 2.0 Authorization Code flow (granted case-by-case). Clients send a custom Accept header
 * indicating the API version.
 *
 * Endpoint surface and authentication confirmed against
 * https://developer.unbounce.com/api_reference/.
 */
export class UnbounceClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accounts?: Accounts;
  #domains?: Domains;
  #leads?: Leads;
  #meta?: Meta;
  #pageGroups?: PageGroups;
  #pages?: Pages;
  #users?: Users;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "UNBOUNCE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "UnbounceClient/0.4.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.4.0", schema: s.string() },
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

  /**
   * Account and sub-account resources
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Domains attached to sub-accounts
   */
  get domains(): Domains {
    return (this.#domains ??= new Domains(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Lead submissions captured by pages
   */
  get leads(): Leads {
    return (this.#leads ??= new Leads(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API meta-information
   */
  get meta(): Meta {
    return (this.#meta ??= new Meta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Logical page groupings
   */
  get pageGroups(): PageGroups {
    return (this.#pageGroups ??= new PageGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Landing pages and form fields
   */
  get pages(): Pages {
    return (this.#pages ??= new Pages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Users in the account
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }
}
