import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Checkout } from "./resources/checkout.js";
import { DisputesApi } from "./resources/disputes-api.js";
import { PaymentsApi } from "./resources/payments-api.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Tabby Documentation: **docs.tabby.ai**
 */
export class TabbyClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #checkout?: Checkout;
  #disputesApi?: DisputesApi;
  #paymentsApi?: PaymentsApi;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "TABBY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "TabbyClient/1.0.0 TypeScript", schema: s.string() },
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
   * Checkout is a whole process of customer data collection and payment authorization.
   */
  get checkout(): Checkout {
    return (this.#checkout ??= new Checkout(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The Disputes API is designed to simplify the process of handling disputes and help merchants
   * resolve issues with customer orders more efficiently. Merchants can use this API to retrieve a
   * list of disputes, view details about a specific dispute, and approve or challenge a bunch of
   * disputes. It mirrors the functionality available in Tabby Merchant Dashboard and operates
   * exclusively with live payments using live credentials. A secret key is required for using the
   * Disputes API.
   */
  get disputesApi(): DisputesApi {
    return (this.#disputesApi ??= new DisputesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The core of tabby is a payments flow enabling you to handle payments at your webstore.
   */
  get paymentsApi(): PaymentsApi {
    return (this.#paymentsApi ??= new PaymentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage webhook endpoints.
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
