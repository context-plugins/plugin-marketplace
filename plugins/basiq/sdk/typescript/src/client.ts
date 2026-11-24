import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountsApi } from "./resources/accounts-api.js";
import { Analytics } from "./resources/analytics.js";
import { AuthLinks } from "./resources/auth-links.js";
import { Authentication } from "./resources/authentication.js";
import { Connections } from "./resources/connections.js";
import { Connectors } from "./resources/connectors.js";
import { Consents } from "./resources/consents.js";
import { EnrichApi } from "./resources/enrich-api.js";
import { Events } from "./resources/events.js";
import { Expenses } from "./resources/expenses.js";
import { Identities } from "./resources/identities.js";
import { IncomeApi } from "./resources/income-api.js";
import { Insights } from "./resources/insights.js";
import { Jobs } from "./resources/jobs.js";
import { Payees } from "./resources/payees.js";
import { Reports } from "./resources/reports.js";
import { Statements } from "./resources/statements.js";
import { Transactions } from "./resources/transactions.js";
import { Users } from "./resources/users.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * All included utility endpoints for Basiq partners, Webhooks
 */
export class BasiqClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accountsApi?: AccountsApi;
  #analytics?: Analytics;
  #authentication?: Authentication;
  #authLinks?: AuthLinks;
  #connections?: Connections;
  #connectors?: Connectors;
  #consents?: Consents;
  #enrichApi?: EnrichApi;
  #events?: Events;
  #expenses?: Expenses;
  #identities?: Identities;
  #incomeApi?: IncomeApi;
  #insights?: Insights;
  #jobs?: Jobs;
  #payees?: Payees;
  #reports?: Reports;
  #statements?: Statements;
  #transactions?: Transactions;
  #users?: Users;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BASIQ_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BasiqClient/3.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.0.0", schema: s.string() },
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

  get accountsApi(): AccountsApi {
    return (this.#accountsApi ??= new AccountsApi(this.#rawClient, this.#servers, this.#auth));
  }

  get analytics(): Analytics {
    return (this.#analytics ??= new Analytics(this.#rawClient, this.#servers, this.#auth));
  }

  get authentication(): Authentication {
    return (this.#authentication ??= new Authentication(this.#rawClient, this.#servers, this.#auth));
  }

  get authLinks(): AuthLinks {
    return (this.#authLinks ??= new AuthLinks(this.#rawClient, this.#servers, this.#auth));
  }

  get connections(): Connections {
    return (this.#connections ??= new Connections(this.#rawClient, this.#servers, this.#auth));
  }

  get connectors(): Connectors {
    return (this.#connectors ??= new Connectors(this.#rawClient, this.#servers, this.#auth));
  }

  get consents(): Consents {
    return (this.#consents ??= new Consents(this.#rawClient, this.#servers, this.#auth));
  }

  get enrichApi(): EnrichApi {
    return (this.#enrichApi ??= new EnrichApi(this.#rawClient, this.#servers, this.#auth));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get expenses(): Expenses {
    return (this.#expenses ??= new Expenses(this.#rawClient, this.#servers, this.#auth));
  }

  get identities(): Identities {
    return (this.#identities ??= new Identities(this.#rawClient, this.#servers, this.#auth));
  }

  get incomeApi(): IncomeApi {
    return (this.#incomeApi ??= new IncomeApi(this.#rawClient, this.#servers, this.#auth));
  }

  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }

  get payees(): Payees {
    return (this.#payees ??= new Payees(this.#rawClient, this.#servers, this.#auth));
  }

  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  get statements(): Statements {
    return (this.#statements ??= new Statements(this.#rawClient, this.#servers, this.#auth));
  }

  get transactions(): Transactions {
    return (this.#transactions ??= new Transactions(this.#rawClient, this.#servers, this.#auth));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Basiq Webhooks
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
