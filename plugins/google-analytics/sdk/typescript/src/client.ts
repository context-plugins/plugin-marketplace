import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountSummaries } from "./resources/account-summaries.js";
import { Accounts } from "./resources/accounts.js";
import { Properties } from "./resources/properties.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Google Analytics Admin API
 * (analyticsadmin v1beta, revision 20261110). 8 operation(s)., Generated from Google's published
 * Discovery document for Google Analytics Admin API (analyticsadmin v1beta, revision 20261110). 1
 * operation(s)., Operations tagged Properties across 2 of this provider's published API
 * definitions: google-analytics-analyticsadmin-properties-api-openapi.yml,
 * google-analytics-analyticsdata-properties-api-openapi.yml. Each path carries the servers of the
 * definition it was published in.
 */
export class GoogleAnalyticsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accounts?: Accounts;
  #accountSummaries?: AccountSummaries;
  #properties?: Properties;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_ANALYTICS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleAnalyticsClient/0.1.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  get accountSummaries(): AccountSummaries {
    return (this.#accountSummaries ??= new AccountSummaries(this.#rawClient, this.#servers, this.#auth));
  }

  get properties(): Properties {
    return (this.#properties ??= new Properties(this.#rawClient, this.#servers, this.#auth));
  }
}
