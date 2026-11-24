import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Attachments } from "./resources/attachments.js";
import { Authentication } from "./resources/authentication.js";
import { BillApprovals } from "./resources/bill-approvals.js";
import { Bills } from "./resources/bills.js";
import { Budgets } from "./resources/budgets.js";
import { Cards } from "./resources/cards.js";
import { ClassificationsApi } from "./resources/classifications-api.js";
import { CreditMemos } from "./resources/credit-memos.js";
import { CustomFields } from "./resources/custom-fields.js";
import { Customers } from "./resources/customers.js";
import { Documents } from "./resources/documents.js";
import { Events } from "./resources/events.js";
import { Exports } from "./resources/exports.js";
import { FundingAccounts } from "./resources/funding-accounts.js";
import { Health } from "./resources/health.js";
import { Invoices } from "./resources/invoices.js";
import { Mfa } from "./resources/mfa.js";
import { NetworkApi } from "./resources/network-api.js";
import { OrganizationUsers } from "./resources/organization-users.js";
import { Organizations } from "./resources/organizations.js";
import { Partner } from "./resources/partner.js";
import { PaymentTerms } from "./resources/payment-terms.js";
import { Payments } from "./resources/payments.js";
import { ReceivablePayments } from "./resources/receivable-payments.js";
import { RecurringInvoices } from "./resources/recurring-invoices.js";
import { Recurringbills } from "./resources/recurringbills.js";
import { Reimbursements } from "./resources/reimbursements.js";
import { Reports } from "./resources/reports.js";
import { RiskVerifications } from "./resources/risk-verifications.js";
import { Roles } from "./resources/roles.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { Transactions } from "./resources/transactions.js";
import { Users } from "./resources/users.js";
import { VendorCredits } from "./resources/vendor-credits.js";
import { Vendors } from "./resources/vendors.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * BILL is a cloud-based financial operations platform for an organization's accounts payable (AP),
 * accounts receivable (AR), and spend & expense (S&E) automation., RESTful API for working with
 * BILL webhooks, BILL is a cloud-based financial operations platform for an organization's accounts
 * payable (AP), accounts receivable (AR), and spend & expense (S&E) automation., BILL is a
 * cloud-based financial operations platform for an organization's accounts payable (AP), accounts
 * receivable (AR), and spend & expense (S&E) automation., BILL is a cloud-based financial
 * operations platform for an organization's accounts payable (AP), accounts receivable (AR), and
 * spend & expense (S&E) automation., BILL is a cloud-based financial operations platform for an
 * organization's accounts payable (AP), accounts receivable (AR), and spend & expense (S&E)
 * automation., BILL is a cloud-based financial operations platform for an organization's accounts
 * payable (AP), accounts receivable (AR), and spend & expense (S&E) automation., BILL is a
 * cloud-based financial operations platform for an organization's accounts payable (AP), accounts
 * receivable (AR), and spend & expense (S&E) automation., BILL is a cloud-based financial
 * operations platform for an organization's accounts payable (AP), accounts receivable (AR), and
 * spend & expense (S&E) automation., BILL is a cloud-based financial operations platform for an
 * organization's accounts payable (AP), accounts receivable (AR), and spend & expense (S&E)
 * automation., BILL is a cloud-based financial operations platform for an organization's accounts
 * payable (AP), accounts receivable (AR), and spend & expense (S&E) automation., BILL is a
 * cloud-based financial operations platform for an organization's accounts payable (AP), accounts
 * receivable (AR), and spend & expense (S&E) automation., BILL is a cloud-based financial
 * operations platform for an organization's accounts payable (AP), accounts receivable (AR), and
 * spend & expense (S&E) automation., BILL is a cloud-based financial operations platform for an
 * organization's accounts payable (AP), accounts receivable (AR), and spend & expense (S&E)
 * automation., BILL is a cloud-based financial operations platform for an organization's accounts
 * payable (AP), accounts receivable (AR), and spend & expense (S&E) automation., BILL is a
 * cloud-based financial operations platform for an organization's accounts payable (AP), accounts
 * receivable (AR), and spend & expense (S&E) automation., BILL is a cloud-based financial
 * operations platform for an organization's accounts payable (AP), accounts receivable (AR), and
 * spend & expense (S&E) automation., BILL is a cloud-based financial operations platform for an
 * organization's accounts payable (AP), accounts receivable (AR), and spend & expense (S&E)
 * automation., BILL is a cloud-based financial operations platform for an organization's accounts
 * payable (AP), accounts receivable (AR), and spend & expense (S&E) automation., BILL is a
 * cloud-based financial operations platform for an organization's accounts payable (AP), accounts
 * receivable (AR), and spend & expense (S&E) automation., RESTful API for working with BILL
 * webhooks, BILL is a cloud-based financial operations platform for an organization's accounts
 * payable (AP), accounts receivable (AR), and spend & expense (S&E) automation., BILL is a
 * cloud-based financial operations platform for an organization's accounts payable (AP), accounts
 * receivable (AR), and spend & expense (S&E) automation., BILL is a cloud-based financial
 * operations platform for an organization's accounts payable (AP), accounts receivable (AR), and
 * spend & expense (S&E) automation., BILL is a cloud-based financial operations platform for an
 * organization's accounts payable (AP), accounts receivable (AR), and spend & expense (S&E)
 * automation.
 */
export class DivvyClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #attachments?: Attachments;
  #authentication?: Authentication;
  #billApprovals?: BillApprovals;
  #bills?: Bills;
  #budgets?: Budgets;
  #cards?: Cards;
  #classificationsApi?: ClassificationsApi;
  #creditMemos?: CreditMemos;
  #customFields?: CustomFields;
  #customers?: Customers;
  #documents?: Documents;
  #events?: Events;
  #exports?: Exports;
  #fundingAccounts?: FundingAccounts;
  #health?: Health;
  #invoices?: Invoices;
  #mfa?: Mfa;
  #networkApi?: NetworkApi;
  #organizationUsers?: OrganizationUsers;
  #organizations?: Organizations;
  #partner?: Partner;
  #paymentTerms?: PaymentTerms;
  #payments?: Payments;
  #receivablePayments?: ReceivablePayments;
  #recurringInvoices?: RecurringInvoices;
  #recurringbills?: Recurringbills;
  #reimbursements?: Reimbursements;
  #reports?: Reports;
  #riskVerifications?: RiskVerifications;
  #roles?: Roles;
  #subscriptions?: Subscriptions;
  #transactions?: Transactions;
  #users?: Users;
  #vendorCredits?: VendorCredits;
  #vendors?: Vendors;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DIVVY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DivvyClient/1.0.0 TypeScript", schema: s.string() },
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

  get attachments(): Attachments {
    return (this.#attachments ??= new Attachments(this.#rawClient, this.#servers));
  }

  get authentication(): Authentication {
    return (this.#authentication ??= new Authentication(this.#rawClient, this.#servers));
  }

  get billApprovals(): BillApprovals {
    return (this.#billApprovals ??= new BillApprovals(this.#rawClient, this.#servers));
  }

  get bills(): Bills {
    return (this.#bills ??= new Bills(this.#rawClient, this.#servers));
  }

  get budgets(): Budgets {
    return (this.#budgets ??= new Budgets(this.#rawClient, this.#servers));
  }

  get cards(): Cards {
    return (this.#cards ??= new Cards(this.#rawClient, this.#servers));
  }

  get classificationsApi(): ClassificationsApi {
    return (this.#classificationsApi ??= new ClassificationsApi(this.#rawClient, this.#servers));
  }

  get creditMemos(): CreditMemos {
    return (this.#creditMemos ??= new CreditMemos(this.#rawClient, this.#servers));
  }

  get customFields(): CustomFields {
    return (this.#customFields ??= new CustomFields(this.#rawClient, this.#servers));
  }

  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers));
  }

  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers));
  }

  get exports(): Exports {
    return (this.#exports ??= new Exports(this.#rawClient, this.#servers));
  }

  get fundingAccounts(): FundingAccounts {
    return (this.#fundingAccounts ??= new FundingAccounts(this.#rawClient, this.#servers));
  }

  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers));
  }

  get invoices(): Invoices {
    return (this.#invoices ??= new Invoices(this.#rawClient, this.#servers));
  }

  get mfa(): Mfa {
    return (this.#mfa ??= new Mfa(this.#rawClient, this.#servers));
  }

  get networkApi(): NetworkApi {
    return (this.#networkApi ??= new NetworkApi(this.#rawClient, this.#servers));
  }

  get organizationUsers(): OrganizationUsers {
    return (this.#organizationUsers ??= new OrganizationUsers(this.#rawClient, this.#servers));
  }

  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers));
  }

  get partner(): Partner {
    return (this.#partner ??= new Partner(this.#rawClient, this.#servers));
  }

  get paymentTerms(): PaymentTerms {
    return (this.#paymentTerms ??= new PaymentTerms(this.#rawClient, this.#servers));
  }

  get payments(): Payments {
    return (this.#payments ??= new Payments(this.#rawClient, this.#servers));
  }

  get receivablePayments(): ReceivablePayments {
    return (this.#receivablePayments ??= new ReceivablePayments(this.#rawClient, this.#servers));
  }

  get recurringInvoices(): RecurringInvoices {
    return (this.#recurringInvoices ??= new RecurringInvoices(this.#rawClient, this.#servers));
  }

  get recurringbills(): Recurringbills {
    return (this.#recurringbills ??= new Recurringbills(this.#rawClient, this.#servers));
  }

  get reimbursements(): Reimbursements {
    return (this.#reimbursements ??= new Reimbursements(this.#rawClient, this.#servers));
  }

  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers));
  }

  get riskVerifications(): RiskVerifications {
    return (this.#riskVerifications ??= new RiskVerifications(this.#rawClient, this.#servers));
  }

  get roles(): Roles {
    return (this.#roles ??= new Roles(this.#rawClient, this.#servers));
  }

  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers));
  }

  get transactions(): Transactions {
    return (this.#transactions ??= new Transactions(this.#rawClient, this.#servers));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers));
  }

  get vendorCredits(): VendorCredits {
    return (this.#vendorCredits ??= new VendorCredits(this.#rawClient, this.#servers));
  }

  get vendors(): Vendors {
    return (this.#vendors ??= new Vendors(this.#rawClient, this.#servers));
  }
}
