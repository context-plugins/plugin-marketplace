import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Accounts } from "./resources/accounts.js";
import { BeneficialOwnersApi } from "./resources/beneficial-owners-api.js";
import { ClientTokens } from "./resources/client-tokens.js";
import { CustomersApi } from "./resources/customers-api.js";
import { DocumentsApi } from "./resources/documents-api.js";
import { EventsApi } from "./resources/events-api.js";
import { ExchangeSessions } from "./resources/exchange-sessions.js";
import { ExchangesApi } from "./resources/exchanges-api.js";
import { FundingSourcesApi } from "./resources/funding-sources-api.js";
import { Kba } from "./resources/kba.js";
import { LabelsApi } from "./resources/labels-api.js";
import { MassPaymentsApi } from "./resources/mass-payments-api.js";
import { RootApi } from "./resources/root-api.js";
import { SandboxSimulations } from "./resources/sandbox-simulations.js";
import { Tokens } from "./resources/tokens.js";
import { TransfersApi } from "./resources/transfers-api.js";
import { WebhookSubscriptions } from "./resources/webhook-subscriptions.js";
import { WebhooksApi } from "./resources/webhooks-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Dwolla API Documentation
 */
export class DwollaApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #tokens?: Tokens;
  #rootApi?: RootApi;
  #accounts?: Accounts;
  #customersApi?: CustomersApi;
  #kba?: Kba;
  #beneficialOwnersApi?: BeneficialOwnersApi;
  #documentsApi?: DocumentsApi;
  #exchangesApi?: ExchangesApi;
  #exchangeSessions?: ExchangeSessions;
  #fundingSourcesApi?: FundingSourcesApi;
  #transfersApi?: TransfersApi;
  #labelsApi?: LabelsApi;
  #massPaymentsApi?: MassPaymentsApi;
  #eventsApi?: EventsApi;
  #webhookSubscriptions?: WebhookSubscriptions;
  #webhooksApi?: WebhooksApi;
  #clientTokens?: ClientTokens;
  #sandboxSimulations?: SandboxSimulations;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DWOLLA_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DwollaApiClient/2.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Operations related to Application Access Tokens
   */
  get tokens(): Tokens {
    return (this.#tokens ??= new Tokens(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Root API operations
   */
  get rootApi(): RootApi {
    return (this.#rootApi ??= new RootApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Accounts
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Customers
   */
  get customersApi(): CustomersApi {
    return (this.#customersApi ??= new CustomersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Knowledge-Based Authentication
   */
  get kba(): Kba {
    return (this.#kba ??= new Kba(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Beneficial Owners
   */
  get beneficialOwnersApi(): BeneficialOwnersApi {
    return (this.#beneficialOwnersApi ??= new BeneficialOwnersApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Operations related to Documents
   */
  get documentsApi(): DocumentsApi {
    return (this.#documentsApi ??= new DocumentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Exchanges
   */
  get exchangesApi(): ExchangesApi {
    return (this.#exchangesApi ??= new ExchangesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Exchange Sessions
   */
  get exchangeSessions(): ExchangeSessions {
    return (this.#exchangeSessions ??= new ExchangeSessions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Funding Sources
   */
  get fundingSourcesApi(): FundingSourcesApi {
    return (this.#fundingSourcesApi ??= new FundingSourcesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Transfers
   */
  get transfersApi(): TransfersApi {
    return (this.#transfersApi ??= new TransfersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Labels
   */
  get labelsApi(): LabelsApi {
    return (this.#labelsApi ??= new LabelsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Mass Payments
   */
  get massPaymentsApi(): MassPaymentsApi {
    return (this.#massPaymentsApi ??= new MassPaymentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Events
   */
  get eventsApi(): EventsApi {
    return (this.#eventsApi ??= new EventsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Webhook Subscriptions
   */
  get webhookSubscriptions(): WebhookSubscriptions {
    return (this.#webhookSubscriptions ??= new WebhookSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Operations related to Webhooks
   */
  get webhooksApi(): WebhooksApi {
    return (this.#webhooksApi ??= new WebhooksApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to Client Tokens
   */
  get clientTokens(): ClientTokens {
    return (this.#clientTokens ??= new ClientTokens(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sandbox-only operations for simulating processing of bank transfers
   */
  get sandboxSimulations(): SandboxSimulations {
    return (this.#sandboxSimulations ??= new SandboxSimulations(this.#rawClient, this.#servers, this.#auth));
  }
}
