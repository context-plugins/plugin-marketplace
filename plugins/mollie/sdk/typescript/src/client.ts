import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountsApi } from "./resources/accounts-api.js";
import { BalanceTransfersApi } from "./resources/balance-transfers-api.js";
import { BalancesApi } from "./resources/balances-api.js";
import { CapabilitiesApi } from "./resources/capabilities-api.js";
import { CapturesApi } from "./resources/captures-api.js";
import { ChargebacksApi } from "./resources/chargebacks-api.js";
import { CheckoutSessionsApi } from "./resources/checkout-sessions-api.js";
import { ClientLinksApi } from "./resources/client-links-api.js";
import { ClientsApi } from "./resources/clients-api.js";
import { CustomersApi } from "./resources/customers-api.js";
import { DelayedRoutingApi } from "./resources/delayed-routing-api.js";
import { DraftTransfersApi } from "./resources/draft-transfers-api.js";
import { InvoicesApi } from "./resources/invoices-api.js";
import { MandatesApi } from "./resources/mandates-api.js";
import { MethodsApi } from "./resources/methods-api.js";
import { OAuthApi } from "./resources/oauth-api.js";
import { OnboardingApi } from "./resources/onboarding-api.js";
import { OrganizationsApi } from "./resources/organizations-api.js";
import { PaymentLinksApi } from "./resources/payment-links-api.js";
import { PaymentsApi } from "./resources/payments-api.js";
import { PayoutsApi } from "./resources/payouts-api.js";
import { PermissionsApi } from "./resources/permissions-api.js";
import { ProfilesApi } from "./resources/profiles-api.js";
import { RefundsApi } from "./resources/refunds-api.js";
import { SalesInvoicesApi } from "./resources/sales-invoices-api.js";
import { SettlementsApi } from "./resources/settlements-api.js";
import { SubscriptionsApi } from "./resources/subscriptions-api.js";
import { TerminalsApi } from "./resources/terminals-api.js";
import { TransfersApi } from "./resources/transfers-api.js";
import { UnmatchedCreditTransfersApi } from "./resources/unmatched-credit-transfers-api.js";
import { VerifyPayeeApi } from "./resources/verify-payee-api.js";
import { WalletsApi } from "./resources/wallets-api.js";
import { WebhookEventsApi } from "./resources/webhook-events-api.js";
import { WebhooksApi } from "./resources/webhooks-api.js";
import { buildServers, type Servers } from "./servers.js";

export class MollieApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accountsApi?: AccountsApi;
  #balanceTransfersApi?: BalanceTransfersApi;
  #balancesApi?: BalancesApi;
  #capabilitiesApi?: CapabilitiesApi;
  #capturesApi?: CapturesApi;
  #chargebacksApi?: ChargebacksApi;
  #checkoutSessionsApi?: CheckoutSessionsApi;
  #clientLinksApi?: ClientLinksApi;
  #clientsApi?: ClientsApi;
  #customersApi?: CustomersApi;
  #delayedRoutingApi?: DelayedRoutingApi;
  #draftTransfersApi?: DraftTransfersApi;
  #invoicesApi?: InvoicesApi;
  #mandatesApi?: MandatesApi;
  #methodsApi?: MethodsApi;
  #oAuthApi?: OAuthApi;
  #onboardingApi?: OnboardingApi;
  #organizationsApi?: OrganizationsApi;
  #paymentLinksApi?: PaymentLinksApi;
  #paymentsApi?: PaymentsApi;
  #payoutsApi?: PayoutsApi;
  #permissionsApi?: PermissionsApi;
  #profilesApi?: ProfilesApi;
  #refundsApi?: RefundsApi;
  #salesInvoicesApi?: SalesInvoicesApi;
  #settlementsApi?: SettlementsApi;
  #subscriptionsApi?: SubscriptionsApi;
  #terminalsApi?: TerminalsApi;
  #transfersApi?: TransfersApi;
  #unmatchedCreditTransfersApi?: UnmatchedCreditTransfersApi;
  #verifyPayeeApi?: VerifyPayeeApi;
  #walletsApi?: WalletsApi;
  #webhookEventsApi?: WebhookEventsApi;
  #webhooksApi?: WebhooksApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "MOLLIE_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "MollieApiClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Operations related to the Accounts API
   */
  get accountsApi(): AccountsApi {
    return (this.#accountsApi ??= new AccountsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Balance Transfers API
   */
  get balanceTransfersApi(): BalanceTransfersApi {
    return (this.#balanceTransfersApi ??= new BalanceTransfersApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Operations related to the Balances API
   */
  get balancesApi(): BalancesApi {
    return (this.#balancesApi ??= new BalancesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Capabilities API
   */
  get capabilitiesApi(): CapabilitiesApi {
    return (this.#capabilitiesApi ??= new CapabilitiesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Captures API
   */
  get capturesApi(): CapturesApi {
    return (this.#capturesApi ??= new CapturesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Chargebacks API
   */
  get chargebacksApi(): ChargebacksApi {
    return (this.#chargebacksApi ??= new ChargebacksApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Checkout Sessions API
   */
  get checkoutSessionsApi(): CheckoutSessionsApi {
    return (this.#checkoutSessionsApi ??= new CheckoutSessionsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Operations related to the Client Links API
   */
  get clientLinksApi(): ClientLinksApi {
    return (this.#clientLinksApi ??= new ClientLinksApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Clients API
   */
  get clientsApi(): ClientsApi {
    return (this.#clientsApi ??= new ClientsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Customers API
   */
  get customersApi(): CustomersApi {
    return (this.#customersApi ??= new CustomersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Delayed Routing API
   */
  get delayedRoutingApi(): DelayedRoutingApi {
    return (this.#delayedRoutingApi ??= new DelayedRoutingApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Draft Transfers API
   */
  get draftTransfersApi(): DraftTransfersApi {
    return (this.#draftTransfersApi ??= new DraftTransfersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Invoices API
   */
  get invoicesApi(): InvoicesApi {
    return (this.#invoicesApi ??= new InvoicesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Mandates API
   */
  get mandatesApi(): MandatesApi {
    return (this.#mandatesApi ??= new MandatesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Methods API
   */
  get methodsApi(): MethodsApi {
    return (this.#methodsApi ??= new MethodsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the OAuth API
   */
  get oAuthApi(): OAuthApi {
    return (this.#oAuthApi ??= new OAuthApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Onboarding API
   */
  get onboardingApi(): OnboardingApi {
    return (this.#onboardingApi ??= new OnboardingApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Organizations API
   */
  get organizationsApi(): OrganizationsApi {
    return (this.#organizationsApi ??= new OrganizationsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Payment Links API
   */
  get paymentLinksApi(): PaymentLinksApi {
    return (this.#paymentLinksApi ??= new PaymentLinksApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Payments API
   */
  get paymentsApi(): PaymentsApi {
    return (this.#paymentsApi ??= new PaymentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Payouts API
   */
  get payoutsApi(): PayoutsApi {
    return (this.#payoutsApi ??= new PayoutsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Permissions API
   */
  get permissionsApi(): PermissionsApi {
    return (this.#permissionsApi ??= new PermissionsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Profiles API
   */
  get profilesApi(): ProfilesApi {
    return (this.#profilesApi ??= new ProfilesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Refunds API
   */
  get refundsApi(): RefundsApi {
    return (this.#refundsApi ??= new RefundsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Sales Invoices API
   */
  get salesInvoicesApi(): SalesInvoicesApi {
    return (this.#salesInvoicesApi ??= new SalesInvoicesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Settlements API
   */
  get settlementsApi(): SettlementsApi {
    return (this.#settlementsApi ??= new SettlementsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Subscriptions API
   */
  get subscriptionsApi(): SubscriptionsApi {
    return (this.#subscriptionsApi ??= new SubscriptionsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Terminals API
   */
  get terminalsApi(): TerminalsApi {
    return (this.#terminalsApi ??= new TerminalsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Transfers API
   */
  get transfersApi(): TransfersApi {
    return (this.#transfersApi ??= new TransfersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Unmatched Credit Transfers API
   */
  get unmatchedCreditTransfersApi(): UnmatchedCreditTransfersApi {
    return (this.#unmatchedCreditTransfersApi ??= new UnmatchedCreditTransfersApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Operations related to the Verify Payee API
   */
  get verifyPayeeApi(): VerifyPayeeApi {
    return (this.#verifyPayeeApi ??= new VerifyPayeeApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Wallets API
   */
  get walletsApi(): WalletsApi {
    return (this.#walletsApi ??= new WalletsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Webhook Events API
   */
  get webhookEventsApi(): WebhookEventsApi {
    return (this.#webhookEventsApi ??= new WebhookEventsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations related to the Webhooks API
   */
  get webhooksApi(): WebhooksApi {
    return (this.#webhooksApi ??= new WebhooksApi(this.#rawClient, this.#servers, this.#auth));
  }
}
