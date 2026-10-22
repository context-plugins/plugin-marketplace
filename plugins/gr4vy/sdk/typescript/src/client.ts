import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountUpdaterApi } from "./resources/account-updater-api.js";
import { ApiKeyPairs } from "./resources/api-key-pairs.js";
import { AuditLogs } from "./resources/audit-logs.js";
import { BuyersApi } from "./resources/buyers-api.js";
import { BuyersGiftCards } from "./resources/buyers-gift-cards.js";
import { BuyersPaymentMethods } from "./resources/buyers-payment-methods.js";
import { BuyersShippingDetails } from "./resources/buyers-shipping-details.js";
import { CardDetails } from "./resources/card-details.js";
import { CardSchemeDefinitionsApi } from "./resources/card-scheme-definitions-api.js";
import { CheckoutSessions } from "./resources/checkout-sessions.js";
import { DigitalWalletsSessions } from "./resources/digital-wallets-sessions.js";
import { DigitalWalletsSetup } from "./resources/digital-wallets-setup.js";
import { DsScenarios3 } from "./resources/ds-scenarios3.js";
import { GiftCardsApi } from "./resources/gift-cards-api.js";
import { InsightsPresets } from "./resources/insights-presets.js";
import { Insights } from "./resources/insights.js";
import { MerchantAccountsApi } from "./resources/merchant-accounts-api.js";
import { MerchantAccounts3DsConfiguration } from "./resources/merchant-accounts3-ds-configuration.js";
import { Monitoring } from "./resources/monitoring.js";
import { PaymentLinksApi } from "./resources/payment-links-api.js";
import { PaymentMethodsApi } from "./resources/payment-methods-api.js";
import { PaymentMethodsDefinitions } from "./resources/payment-methods-definitions.js";
import { PaymentMethodsNetworkTokens } from "./resources/payment-methods-network-tokens.js";
import { PaymentMethodsPaymentServiceTokens } from "./resources/payment-methods-payment-service-tokens.js";
import { PaymentOptionsApi } from "./resources/payment-options-api.js";
import { PaymentServiceDefinitionsApi } from "./resources/payment-service-definitions-api.js";
import { PaymentServicesApi } from "./resources/payment-services-api.js";
import { Payouts } from "./resources/payouts.js";
import { RefundsApi } from "./resources/refunds-api.js";
import { ReportsApi } from "./resources/reports-api.js";
import { ReportsExecutions } from "./resources/reports-executions.js";
import { Roles } from "./resources/roles.js";
import { TransactionsActions } from "./resources/transactions-actions.js";
import { TransactionsCaptures } from "./resources/transactions-captures.js";
import { TransactionsChargebackReversals } from "./resources/transactions-chargeback-reversals.js";
import { TransactionsChargebacks } from "./resources/transactions-chargebacks.js";
import { TransactionsRefundSettlements } from "./resources/transactions-refund-settlements.js";
import { TransactionsSessions } from "./resources/transactions-sessions.js";
import { TransactionsSettlements } from "./resources/transactions-settlements.js";
import { Transactions } from "./resources/transactions.js";
import { WebhookSubscriptionsApi } from "./resources/webhook-subscriptions-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Gr4vy API.
 */
export class Gr4VyClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #dsScenarios3?: DsScenarios3;
  #accountUpdaterApi?: AccountUpdaterApi;
  #apiKeyPairs?: ApiKeyPairs;
  #auditLogs?: AuditLogs;
  #buyersApi?: BuyersApi;
  #buyersGiftCards?: BuyersGiftCards;
  #buyersPaymentMethods?: BuyersPaymentMethods;
  #buyersShippingDetails?: BuyersShippingDetails;
  #cardDetails?: CardDetails;
  #cardSchemeDefinitionsApi?: CardSchemeDefinitionsApi;
  #checkoutSessions?: CheckoutSessions;
  #digitalWalletsSessions?: DigitalWalletsSessions;
  #digitalWalletsSetup?: DigitalWalletsSetup;
  #giftCardsApi?: GiftCardsApi;
  #insights?: Insights;
  #insightsPresets?: InsightsPresets;
  #merchantAccountsApi?: MerchantAccountsApi;
  #merchantAccounts3DsConfiguration?: MerchantAccounts3DsConfiguration;
  #monitoring?: Monitoring;
  #paymentLinksApi?: PaymentLinksApi;
  #paymentMethodsApi?: PaymentMethodsApi;
  #paymentMethodsDefinitions?: PaymentMethodsDefinitions;
  #paymentMethodsNetworkTokens?: PaymentMethodsNetworkTokens;
  #paymentMethodsPaymentServiceTokens?: PaymentMethodsPaymentServiceTokens;
  #paymentOptionsApi?: PaymentOptionsApi;
  #paymentServiceDefinitionsApi?: PaymentServiceDefinitionsApi;
  #paymentServicesApi?: PaymentServicesApi;
  #payouts?: Payouts;
  #refundsApi?: RefundsApi;
  #reportsApi?: ReportsApi;
  #reportsExecutions?: ReportsExecutions;
  #roles?: Roles;
  #transactions?: Transactions;
  #transactionsActions?: TransactionsActions;
  #transactionsCaptures?: TransactionsCaptures;
  #transactionsChargebacks?: TransactionsChargebacks;
  #transactionsChargebackReversals?: TransactionsChargebackReversals;
  #transactionsSettlements?: TransactionsSettlements;
  #transactionsRefundSettlements?: TransactionsRefundSettlements;
  #transactionsSessions?: TransactionsSessions;
  #webhookSubscriptionsApi?: WebhookSubscriptionsApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GR4_VY_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "Gr4VyClient/1.0.0 TypeScript", schema: s.string() },
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
   * Manage and create 3DS scenarios in sandbox.
   */
  get dsScenarios3(): DsScenarios3 {
    return (this.#dsScenarios3 ??= new DsScenarios3(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Schedule stored cards for an account update.
   */
  get accountUpdaterApi(): AccountUpdaterApi {
    return (this.#accountUpdaterApi ??= new AccountUpdaterApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage API key pairs.
   */
  get apiKeyPairs(): ApiKeyPairs {
    return (this.#apiKeyPairs ??= new ApiKeyPairs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Query user activity.
   */
  get auditLogs(): AuditLogs {
    return (this.#auditLogs ??= new AuditLogs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage buyers.
   */
  get buyersApi(): BuyersApi {
    return (this.#buyersApi ??= new BuyersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Query gift cards for buyers.
   */
  get buyersGiftCards(): BuyersGiftCards {
    return (this.#buyersGiftCards ??= new BuyersGiftCards(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Query payment methods for buyers.
   */
  get buyersPaymentMethods(): BuyersPaymentMethods {
    return (this.#buyersPaymentMethods ??= new BuyersPaymentMethods(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage shipping details for buyers.
   */
  get buyersShippingDetails(): BuyersShippingDetails {
    return (this.#buyersShippingDetails ??= new BuyersShippingDetails(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Returns information about a card.
   */
  get cardDetails(): CardDetails {
    return (this.#cardDetails ??= new CardDetails(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * List definitions for card schemes.
   */
  get cardSchemeDefinitionsApi(): CardSchemeDefinitionsApi {
    return (this.#cardSchemeDefinitionsApi ??= new CardSchemeDefinitionsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage checkout sessions.
   */
  get checkoutSessions(): CheckoutSessions {
    return (this.#checkoutSessions ??= new CheckoutSessions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create sessions for digital wallets like Apple Pay and Google Pay.
   */
  get digitalWalletsSessions(): DigitalWalletsSessions {
    return (this.#digitalWalletsSessions ??= new DigitalWalletsSessions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage digital wallets like Apple Pay and Google Pay.
   */
  get digitalWalletsSetup(): DigitalWalletsSetup {
    return (this.#digitalWalletsSetup ??= new DigitalWalletsSetup(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage stored gift cards.
   */
  get giftCardsApi(): GiftCardsApi {
    return (this.#giftCardsApi ??= new GiftCardsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve Insights data.
   */
  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage presets for Insights.
   */
  get insightsPresets(): InsightsPresets {
    return (this.#insightsPresets ??= new InsightsPresets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage merchant accounts in an instance.
   */
  get merchantAccountsApi(): MerchantAccountsApi {
    return (this.#merchantAccountsApi ??= new MerchantAccountsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage 3DS profiles for merchant accounts.
   */
  get merchantAccounts3DsConfiguration(): MerchantAccounts3DsConfiguration {
    return (this.#merchantAccounts3DsConfiguration ??= new MerchantAccounts3DsConfiguration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage monitoring and alerting.
   */
  get monitoring(): Monitoring {
    return (this.#monitoring ??= new Monitoring(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage payment links.
   */
  get paymentLinksApi(): PaymentLinksApi {
    return (this.#paymentLinksApi ??= new PaymentLinksApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage stored payment methods.
   */
  get paymentMethodsApi(): PaymentMethodsApi {
    return (this.#paymentMethodsApi ??= new PaymentMethodsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage payment method definitions.
   */
  get paymentMethodsDefinitions(): PaymentMethodsDefinitions {
    return (this.#paymentMethodsDefinitions ??= new PaymentMethodsDefinitions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage network tokens for stored payment methods.
   */
  get paymentMethodsNetworkTokens(): PaymentMethodsNetworkTokens {
    return (this.#paymentMethodsNetworkTokens ??= new PaymentMethodsNetworkTokens(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage payment service tokens for stored payment methods.
   */
  get paymentMethodsPaymentServiceTokens(): PaymentMethodsPaymentServiceTokens {
    return (this.#paymentMethodsPaymentServiceTokens ??= new PaymentMethodsPaymentServiceTokens(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Fetch a list of payment options to display at checkout.
   */
  get paymentOptionsApi(): PaymentOptionsApi {
    return (this.#paymentOptionsApi ??= new PaymentOptionsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Fetch info about the definition of each payment service.
   */
  get paymentServiceDefinitionsApi(): PaymentServiceDefinitionsApi {
    return (this.#paymentServiceDefinitionsApi ??= new PaymentServiceDefinitionsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage configured payment services.
   */
  get paymentServicesApi(): PaymentServicesApi {
    return (this.#paymentServicesApi ??= new PaymentServicesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payout API.
   */
  get payouts(): Payouts {
    return (this.#payouts ??= new Payouts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage transaction refunds.
   */
  get refundsApi(): RefundsApi {
    return (this.#refundsApi ??= new RefundsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage one-off and scheduled reports.
   */
  get reportsApi(): ReportsApi {
    return (this.#reportsApi ??= new ReportsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage executions of reports.
   */
  get reportsExecutions(): ReportsExecutions {
    return (this.#reportsExecutions ??= new ReportsExecutions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * List the roles that can be assigned to users and API key pairs.
   */
  get roles(): Roles {
    return (this.#roles ??= new Roles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage transaction.
   */
  get transactions(): Transactions {
    return (this.#transactions ??= new Transactions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Read Flow actions triggered for a transaction.
   */
  get transactionsActions(): TransactionsActions {
    return (this.#transactionsActions ??= new TransactionsActions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Read transaction capture data.
   */
  get transactionsCaptures(): TransactionsCaptures {
    return (this.#transactionsCaptures ??= new TransactionsCaptures(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Read transaction chargeback data.
   */
  get transactionsChargebacks(): TransactionsChargebacks {
    return (this.#transactionsChargebacks ??= new TransactionsChargebacks(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Read transaction chargeback reversal data.
   */
  get transactionsChargebackReversals(): TransactionsChargebackReversals {
    return (this.#transactionsChargebackReversals ??= new TransactionsChargebackReversals(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Read transaction settlement data.
   */
  get transactionsSettlements(): TransactionsSettlements {
    return (this.#transactionsSettlements ??= new TransactionsSettlements(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Read transaction refund settlement data.
   */
  get transactionsRefundSettlements(): TransactionsRefundSettlements {
    return (this.#transactionsRefundSettlements ??= new TransactionsRefundSettlements(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage transaction session data.
   */
  get transactionsSessions(): TransactionsSessions {
    return (this.#transactionsSessions ??= new TransactionsSessions(this.#rawClient, this.#servers));
  }

  /**
   * Manage webhook subscriptions.
   */
  get webhookSubscriptionsApi(): WebhookSubscriptionsApi {
    return (this.#webhookSubscriptionsApi ??= new WebhookSubscriptionsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}
