import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Agents } from "./resources/agents.js";
import { AnalyticsExperimental } from "./resources/analytics-experimental.js";
import { Checkouts } from "./resources/checkouts.js";
import { Contacts } from "./resources/contacts.js";
import { Costs } from "./resources/costs.js";
import { Credits } from "./resources/credits.js";
import { CustomViewsExperimental } from "./resources/custom-views-experimental.js";
import { CustomerGroups } from "./resources/customer-groups.js";
import { CustomerPortals } from "./resources/customer-portals.js";
import { Customers } from "./resources/customers.js";
import { Invoices } from "./resources/invoices.js";
import { OrdersLines } from "./resources/orders-lines.js";
import { Orders } from "./resources/orders.js";
import { Plans } from "./resources/plans.js";
import { PricingApi } from "./resources/pricing-api.js";
import { Products } from "./resources/products.js";
import { Signals } from "./resources/signals.js";
import { Traces } from "./resources/traces.js";
import { Usage } from "./resources/usage.js";
import { ValueModels } from "./resources/value-models.js";
import { ValueReceipts } from "./resources/value-receipts.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged contacts across 2 of this provider's published API definitions: paid-v1.json,
 * paid-v2.json. Each path carries the servers of the definition it was published in., Operations
 * tagged customers across 2 of this provider's published API definitions: paid-v1.json,
 * paid-v2.json. Each path carries the servers of the definition it was published in., Operations
 * tagged orders across 2 of this provider's published API definitions: paid-v1.json, paid-v2.json.
 * Each path carries the servers of the definition it was published in., Operations tagged plans
 * across 2 of this provider's published API definitions: paid-v1.json, paid-v2.json. Each path
 * carries the servers of the definition it was published in., Operations tagged products across 2
 * of this provider's published API definitions: paid-v1.json, paid-v2.json. Each path carries the
 * servers of the definition it was published in.
 */
export class PaidClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #agents?: Agents;
  #analyticsExperimental?: AnalyticsExperimental;
  #checkouts?: Checkouts;
  #contacts?: Contacts;
  #costs?: Costs;
  #credits?: Credits;
  #customerGroups?: CustomerGroups;
  #customerPortals?: CustomerPortals;
  #customers?: Customers;
  #customViewsExperimental?: CustomViewsExperimental;
  #invoices?: Invoices;
  #orders?: Orders;
  #ordersLines?: OrdersLines;
  #plans?: Plans;
  #pricingApi?: PricingApi;
  #products?: Products;
  #signals?: Signals;
  #traces?: Traces;
  #usage?: Usage;
  #valueModels?: ValueModels;
  #valueReceipts?: ValueReceipts;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "PAID_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "PaidClient/1.0.0 TypeScript", schema: s.string() },
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
  }

  get agents(): Agents {
    return (this.#agents ??= new Agents(this.#rawClient, this.#servers));
  }

  get analyticsExperimental(): AnalyticsExperimental {
    return (this.#analyticsExperimental ??= new AnalyticsExperimental(this.#rawClient, this.#servers));
  }

  get checkouts(): Checkouts {
    return (this.#checkouts ??= new Checkouts(this.#rawClient, this.#servers));
  }

  get contacts(): Contacts {
    return (this.#contacts ??= new Contacts(this.#rawClient, this.#servers));
  }

  get costs(): Costs {
    return (this.#costs ??= new Costs(this.#rawClient, this.#servers));
  }

  get credits(): Credits {
    return (this.#credits ??= new Credits(this.#rawClient, this.#servers));
  }

  get customerGroups(): CustomerGroups {
    return (this.#customerGroups ??= new CustomerGroups(this.#rawClient, this.#servers));
  }

  get customerPortals(): CustomerPortals {
    return (this.#customerPortals ??= new CustomerPortals(this.#rawClient, this.#servers));
  }

  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers));
  }

  get customViewsExperimental(): CustomViewsExperimental {
    return (this.#customViewsExperimental ??= new CustomViewsExperimental(this.#rawClient, this.#servers));
  }

  get invoices(): Invoices {
    return (this.#invoices ??= new Invoices(this.#rawClient, this.#servers));
  }

  get orders(): Orders {
    return (this.#orders ??= new Orders(this.#rawClient, this.#servers));
  }

  get ordersLines(): OrdersLines {
    return (this.#ordersLines ??= new OrdersLines(this.#rawClient, this.#servers));
  }

  get plans(): Plans {
    return (this.#plans ??= new Plans(this.#rawClient, this.#servers));
  }

  get pricingApi(): PricingApi {
    return (this.#pricingApi ??= new PricingApi(this.#rawClient, this.#servers));
  }

  get products(): Products {
    return (this.#products ??= new Products(this.#rawClient, this.#servers));
  }

  get signals(): Signals {
    return (this.#signals ??= new Signals(this.#rawClient, this.#servers));
  }

  get traces(): Traces {
    return (this.#traces ??= new Traces(this.#rawClient, this.#servers));
  }

  get usage(): Usage {
    return (this.#usage ??= new Usage(this.#rawClient, this.#servers));
  }

  get valueModels(): ValueModels {
    return (this.#valueModels ??= new ValueModels(this.#rawClient, this.#servers));
  }

  get valueReceipts(): ValueReceipts {
    return (this.#valueReceipts ??= new ValueReceipts(this.#rawClient, this.#servers));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers));
  }
}
