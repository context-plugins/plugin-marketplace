import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Authentication } from "./resources/authentication.js";
import { Balances } from "./resources/balances.js";
import { Beneficiaries } from "./resources/beneficiaries.js";
import { Customers } from "./resources/customers.js";
import { PaymentIntents } from "./resources/payment-intents.js";
import { Payouts } from "./resources/payouts.js";
import { Refunds } from "./resources/refunds.js";
import { Transfers } from "./resources/transfers.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Best-effort OpenAPI 3.1 representation of the Airwallex REST API derived from
 * https://www.airwallex.com/docs/api. Airwallex is a global payments and financial infrastructure
 * platform. Coverage in this best-effort spec focuses on the Payment Acceptance and related core
 * resources: payment intents, customers, refunds, payouts, transfers, balances, beneficiaries and
 * account authentication. Endpoints accept and return JSON.
 */
export class AirwallexClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #authentication?: Authentication;
  #balances?: Balances;
  #beneficiaries?: Beneficiaries;
  #customers?: Customers;
  #paymentIntents?: PaymentIntents;
  #payouts?: Payouts;
  #refunds?: Refunds;
  #transfers?: Transfers;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AIRWALLEX_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AirwallexClient/1.0.0 TypeScript", schema: s.string() },
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

  get authentication(): Authentication {
    return (this.#authentication ??= new Authentication(this.#rawClient, this.#servers, this.#auth));
  }

  get balances(): Balances {
    return (this.#balances ??= new Balances(this.#rawClient, this.#servers, this.#auth));
  }

  get beneficiaries(): Beneficiaries {
    return (this.#beneficiaries ??= new Beneficiaries(this.#rawClient, this.#servers, this.#auth));
  }

  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  get paymentIntents(): PaymentIntents {
    return (this.#paymentIntents ??= new PaymentIntents(this.#rawClient, this.#servers, this.#auth));
  }

  get payouts(): Payouts {
    return (this.#payouts ??= new Payouts(this.#rawClient, this.#servers, this.#auth));
  }

  get refunds(): Refunds {
    return (this.#refunds ??= new Refunds(this.#rawClient, this.#servers, this.#auth));
  }

  get transfers(): Transfers {
    return (this.#transfers ??= new Transfers(this.#rawClient, this.#servers, this.#auth));
  }
}
