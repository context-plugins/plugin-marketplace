import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Bills } from "./resources/bills.js";
import { Customers } from "./resources/customers.js";
import { Disputes } from "./resources/disputes.js";
import { Documents } from "./resources/documents.js";
import { InstantSettlements } from "./resources/instant-settlements.js";
import { Invoices } from "./resources/invoices.js";
import { Items } from "./resources/items.js";
import { LinkedAccounts } from "./resources/linked-accounts.js";
import { Orders } from "./resources/orders.js";
import { PartnerAccounts } from "./resources/partner-accounts.js";
import { PartnerDocuments } from "./resources/partner-documents.js";
import { PartnerStakeholders } from "./resources/partner-stakeholders.js";
import { PartnerWebhooks } from "./resources/partner-webhooks.js";
import { PaymentDowntimes } from "./resources/payment-downtimes.js";
import { PaymentLinks } from "./resources/payment-links.js";
import { Payments } from "./resources/payments.js";
import { Plans } from "./resources/plans.js";
import { QrCodes } from "./resources/qr-codes.js";
import { Refunds } from "./resources/refunds.js";
import { SettlementsApi } from "./resources/settlements-api.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { Transfers } from "./resources/transfers.js";
import { VirtualAccounts } from "./resources/virtual-accounts.js";
import { XAccountValidation } from "./resources/xaccount-validation.js";
import { XBankingBalances } from "./resources/xbanking-balances.js";
import { XContacts } from "./resources/xcontacts.js";
import { XFundAccounts } from "./resources/xfund-accounts.js";
import { XPayoutLinks } from "./resources/xpayout-links.js";
import { XPayouts } from "./resources/xpayouts.js";
import { XTransactions } from "./resources/xtransactions.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Razorpay payment gateway APIs for accepting payments, managing orders, processing refunds,
 * payouts, and subscriptions. All amounts are in the smallest currency sub-unit (e.g. paise for
 * INR). Supports 180+ payment methods including UPI, cards, netbanking, wallets, and EMI.
 */
export class CurlecClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #bills?: Bills;
  #customers?: Customers;
  #disputes?: Disputes;
  #documents?: Documents;
  #instantSettlements?: InstantSettlements;
  #invoices?: Invoices;
  #items?: Items;
  #linkedAccounts?: LinkedAccounts;
  #orders?: Orders;
  #partnerAccounts?: PartnerAccounts;
  #partnerDocuments?: PartnerDocuments;
  #partnerStakeholders?: PartnerStakeholders;
  #partnerWebhooks?: PartnerWebhooks;
  #paymentDowntimes?: PaymentDowntimes;
  #paymentLinks?: PaymentLinks;
  #payments?: Payments;
  #plans?: Plans;
  #qrCodes?: QrCodes;
  #refunds?: Refunds;
  #settlementsApi?: SettlementsApi;
  #subscriptions?: Subscriptions;
  #transfers?: Transfers;
  #virtualAccounts?: VirtualAccounts;
  #xAccountValidation?: XAccountValidation;
  #xBankingBalances?: XBankingBalances;
  #xContacts?: XContacts;
  #xFundAccounts?: XFundAccounts;
  #xPayoutLinks?: XPayoutLinks;
  #xPayouts?: XPayouts;
  #xTransactions?: XTransactions;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CURLEC_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CurlecClient/1.0.0 TypeScript", schema: s.string() },
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
   * Razorpay Billme digital receipts and bills for retail, food & beverage, events, and ecommerce.
   */
  get bills(): Bills {
    return (this.#bills ??= new Bills(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Customer profiles store contact information for recurring billing, saved cards, and
   * personalised checkout. Each email+contact combination must be unique.
   */
  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Disputes (chargebacks) are raised by customers via their bank. You can accept (lose) or contest
   * (challenge with evidence) each dispute. Monitor respond_by timestamp — missing the deadline
   * forfeits the dispute.
   */
  get disputes(): Disputes {
    return (this.#disputes ??= new Disputes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Document uploads for dispute evidence. Upload JPEG, PNG, or PDF files and receive a document ID
   * to reference in dispute contest submissions.
   */
  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * On-demand settlements let you transfer your available Razorpay balance to your bank account
   * immediately, outside the normal settlement cycle. Fees apply. Requires Instant Settlements to
   * be enabled on your account.
   */
  get instantSettlements(): InstantSettlements {
    return (this.#instantSettlements ??= new InstantSettlements(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Invoices and payment pages for one-time or partial-payment collection. Create in draft, issue
   * to the customer, and track payment status. Cannot be used for GST invoices (use the Dashboard
   * for those). Maximum 50 line items per invoice.
   */
  get invoices(): Invoices {
    return (this.#invoices ??= new Invoices(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Reusable catalog items that can be referenced in invoice line items. Defining items once avoids
   * repeating price and description on each invoice.
   */
  get items(): Items {
    return (this.#items ??= new Items(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sub-merchant accounts (Linked Accounts) created under a Route marketplace. Includes account
   * creation, stakeholder KYC, and Route product activation. Uses /v2/ API base path. Only one
   * stakeholder is allowed per Linked Account. email and business_type cannot be changed after
   * creation.
   */
  get linkedAccounts(): LinkedAccounts {
    return (this.#linkedAccounts ??= new LinkedAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Orders are the starting point for accepting a payment. Create an order with the amount and
   * currency, pass the order_id to Razorpay Checkout, then verify the payment signature after
   * success.
   */
  get orders(): Orders {
    return (this.#orders ??= new Orders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sub-merchant account lifecycle management via Partners API (Aggregator/Platform model). Uses
   * OAuth access_token authentication.
   */
  get partnerAccounts(): PartnerAccounts {
    return (this.#partnerAccounts ??= new PartnerAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Upload and fetch KYC documents for sub-merchant accounts and their stakeholders.
   */
  get partnerDocuments(): PartnerDocuments {
    return (this.#partnerDocuments ??= new PartnerDocuments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage stakeholders (directors/executives) for sub-merchant accounts. Multiple stakeholders
   * allowed per account.
   */
  get partnerStakeholders(): PartnerStakeholders {
    return (this.#partnerStakeholders ??= new PartnerStakeholders(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Configure webhooks for sub-merchant accounts to receive payment events. Maximum 30 per account.
   */
  get partnerWebhooks(): PartnerWebhooks {
    return (this.#partnerWebhooks ??= new PartnerWebhooks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Scheduled and live downtime information for card, netbanking, and UPI. Poll or subscribe to
   * payment.downtime webhooks to detect degraded methods and adjust your checkout UI.
   */
  get paymentDowntimes(): PaymentDowntimes {
    return (this.#paymentDowntimes ??= new PaymentDowntimes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payment Links are shareable URLs to collect payments without a website. Share via SMS, email,
   * or any channel. Supports partial payments, expiry, reminders, UPI-only mode, offers, and
   * transfers to linked accounts.
   */
  get paymentLinks(): PaymentLinks {
    return (this.#paymentLinks ??= new PaymentLinks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A payment is created when a customer completes checkout. Payments can be auto-captured or
   * manually captured. Fetch payment details to reconcile and diagnose failures.
   */
  get payments(): Payments {
    return (this.#payments ??= new Payments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Billing plan definitions for recurring subscriptions. A plan sets the billing period, interval,
   * and per-cycle charge. Plans are reusable across multiple subscriptions and cannot be modified
   * after creation.
   */
  get plans(): Plans {
    return (this.#plans ??= new Plans(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * QR Codes enable offline and digital payment collection. Customers scan with any UPI or card
   * app. Supports fixed-amount and variable-amount codes, single-use and multiple-use modes.
   */
  get qrCodes(): QrCodes {
    return (this.#qrCodes ??= new QrCodes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Refunds return captured payment amounts to customers. Normal refunds take 5-7 business days.
   * Instant (optimum) refunds settle immediately but may fall back to normal. Use
   * X-Refund-Idempotency header to safely retry without duplicates.
   */
  get refunds(): Refunds {
    return (this.#refunds ??= new Refunds(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Settlements represent batch transfers of collected payment funds to your bank account. Use the
   * recon endpoint for transaction-level reconciliation reports mapping each payment, refund, and
   * adjustment to its settlement.
   */
  get settlementsApi(): SettlementsApi {
    return (this.#settlementsApi ??= new SettlementsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Recurring billing subscriptions. Customers must authorize a payment mandate (UPI Autopay, NACH,
   * or card-on-file) via the short_url before charges begin. Supports pause/resume, plan changes,
   * add-ons, and indefinite billing cycles.
   */
  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Fund transfers from a merchant, payment, or order to a Linked Account (Route). Supports
   * payment-based splits, direct on-demand transfers, settlement hold controls, and full/partial
   * reversals. INR only, minimum ₹100. Direct transfers support idempotency via
   * X-Transfer-Idempotency header.
   */
  get transfers(): Transfers {
    return (this.#transfers ??= new Transfers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Virtual bank accounts and UPI VPAs that accept NEFT/RTGS/IMPS/UPI payments (Smart Collect).
   * Each incoming payment creates a BankTransfer entity. Supports Third Party Validation (TPV) to
   * restrict payers, and VPA receivers (Smart Collect 2.0). Auto-closes after 90 days of
   * inactivity.
   */
  get virtualAccounts(): VirtualAccounts {
    return (this.#virtualAccounts ??= new VirtualAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Penny drop and reverse penny drop bank/VPA validation
   */
  get xAccountValidation(): XAccountValidation {
    return (this.#xAccountValidation ??= new XAccountValidation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Fetch RazorpayX account balances
   */
  get xBankingBalances(): XBankingBalances {
    return (this.#xBankingBalances ??= new XBankingBalances(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * RazorpayX payout recipients — create, fetch, update contacts
   */
  get xContacts(): XContacts {
    return (this.#xContacts ??= new XContacts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payout destination accounts (bank, VPA, card) linked to contacts
   */
  get xFundAccounts(): XFundAccounts {
    return (this.#xFundAccounts ??= new XFundAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payout links for recipients without saved fund accounts
   */
  get xPayoutLinks(): XPayoutLinks {
    return (this.#xPayoutLinks ??= new XPayoutLinks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Disbursements via NEFT, RTGS, IMPS, UPI, card — includes composite and approval flows
   */
  get xPayouts(): XPayouts {
    return (this.#xPayouts ??= new XPayouts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Fetch RazorpayX transaction records — credits (bank_transfer inflows) and debits (payout
   * outflows)
   */
  get xTransactions(): XTransactions {
    return (this.#xTransactions ??= new XTransactions(this.#rawClient, this.#servers, this.#auth));
  }
}
