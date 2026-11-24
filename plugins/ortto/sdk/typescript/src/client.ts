import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Accounts } from "./resources/accounts.js";
import { Activities } from "./resources/activities.js";
import { Campaigns } from "./resources/campaigns.js";
import { People } from "./resources/people.js";
import { Tags } from "./resources/tags.js";
import { Transactional } from "./resources/transactional.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * REST API for Ortto (formerly Autopilot), a marketing automation, customer data platform (CDP),
 * and analytics product.
 */
export class OrttoClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accounts?: Accounts;
  #activities?: Activities;
  #campaigns?: Campaigns;
  #people?: People;
  #tags?: Tags;
  #transactional?: Transactional;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ORTTO_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "OrttoClient/1.0.0 TypeScript", schema: s.string() },
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
   * Create, update, retrieve, and manage accounts (organizations).
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Send custom activity events and manage activity definitions.
   */
  get activities(): Activities {
    return (this.#activities ??= new Activities(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve campaigns, reports, and assets.
   */
  get campaigns(): Campaigns {
    return (this.#campaigns ??= new Campaigns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, update, retrieve, and manage people (contacts).
   */
  get people(): People {
    return (this.#people ??= new People(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve account tags.
   */
  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Send transactional email and SMS.
   */
  get transactional(): Transactional {
    return (this.#transactional ??= new Transactional(this.#rawClient, this.#servers, this.#auth));
  }
}
