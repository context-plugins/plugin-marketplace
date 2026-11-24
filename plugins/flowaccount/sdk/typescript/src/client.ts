import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { BatchImport } from "./resources/batch-import.js";
import { BillingNote } from "./resources/billing-note.js";
import { CashInvoice } from "./resources/cash-invoice.js";
import { CompanyCurrency } from "./resources/company-currency.js";
import { ContactApi } from "./resources/contact-api.js";
import { CreditNote } from "./resources/credit-note.js";
import { DebitNote } from "./resources/debit-note.js";
import { EmployeeApi } from "./resources/employee-api.js";
import { Expense } from "./resources/expense.js";
import { ProductCategoryApi } from "./resources/product-category-api.js";
import { ProductInventory } from "./resources/product-inventory.js";
import { ProductUnitApi } from "./resources/product-unit-api.js";
import { Products } from "./resources/products.js";
import { PurchaseOrder } from "./resources/purchase-order.js";
import { Purchase } from "./resources/purchase.js";
import { Quotation } from "./resources/quotation.js";
import { Receipt } from "./resources/receipt.js";
import { ReceivableInvoiceApi } from "./resources/receivable-invoice-api.js";
import { TaxInvoice } from "./resources/tax-invoice.js";
import { buildServers, type Servers } from "./servers.js";

export class FlowAccountClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #batchImport?: BatchImport;
  #billingNote?: BillingNote;
  #cashInvoice?: CashInvoice;
  #companyCurrency?: CompanyCurrency;
  #contactApi?: ContactApi;
  #creditNote?: CreditNote;
  #debitNote?: DebitNote;
  #employeeApi?: EmployeeApi;
  #expense?: Expense;
  #productCategoryApi?: ProductCategoryApi;
  #productInventory?: ProductInventory;
  #products?: Products;
  #productUnitApi?: ProductUnitApi;
  #purchase?: Purchase;
  #purchaseOrder?: PurchaseOrder;
  #quotation?: Quotation;
  #receipt?: Receipt;
  #receivableInvoiceApi?: ReceivableInvoiceApi;
  #taxInvoice?: TaxInvoice;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FLOW_ACCOUNT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FlowAccountClient/1.0.0 TypeScript", schema: s.string() },
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

  get batchImport(): BatchImport {
    return (this.#batchImport ??= new BatchImport(this.#rawClient, this.#servers, this.#auth));
  }

  get billingNote(): BillingNote {
    return (this.#billingNote ??= new BillingNote(this.#rawClient, this.#servers, this.#auth));
  }

  get cashInvoice(): CashInvoice {
    return (this.#cashInvoice ??= new CashInvoice(this.#rawClient, this.#servers, this.#auth));
  }

  get companyCurrency(): CompanyCurrency {
    return (this.#companyCurrency ??= new CompanyCurrency(this.#rawClient, this.#servers, this.#auth));
  }

  get contactApi(): ContactApi {
    return (this.#contactApi ??= new ContactApi(this.#rawClient, this.#servers, this.#auth));
  }

  get creditNote(): CreditNote {
    return (this.#creditNote ??= new CreditNote(this.#rawClient, this.#servers, this.#auth));
  }

  get debitNote(): DebitNote {
    return (this.#debitNote ??= new DebitNote(this.#rawClient, this.#servers, this.#auth));
  }

  get employeeApi(): EmployeeApi {
    return (this.#employeeApi ??= new EmployeeApi(this.#rawClient, this.#servers, this.#auth));
  }

  get expense(): Expense {
    return (this.#expense ??= new Expense(this.#rawClient, this.#servers, this.#auth));
  }

  get productCategoryApi(): ProductCategoryApi {
    return (this.#productCategoryApi ??= new ProductCategoryApi(this.#rawClient, this.#servers, this.#auth));
  }

  get productInventory(): ProductInventory {
    return (this.#productInventory ??= new ProductInventory(this.#rawClient, this.#servers, this.#auth));
  }

  get products(): Products {
    return (this.#products ??= new Products(this.#rawClient, this.#servers, this.#auth));
  }

  get productUnitApi(): ProductUnitApi {
    return (this.#productUnitApi ??= new ProductUnitApi(this.#rawClient, this.#servers, this.#auth));
  }

  get purchase(): Purchase {
    return (this.#purchase ??= new Purchase(this.#rawClient, this.#servers, this.#auth));
  }

  get purchaseOrder(): PurchaseOrder {
    return (this.#purchaseOrder ??= new PurchaseOrder(this.#rawClient, this.#servers, this.#auth));
  }

  get quotation(): Quotation {
    return (this.#quotation ??= new Quotation(this.#rawClient, this.#servers, this.#auth));
  }

  get receipt(): Receipt {
    return (this.#receipt ??= new Receipt(this.#rawClient, this.#servers, this.#auth));
  }

  get receivableInvoiceApi(): ReceivableInvoiceApi {
    return (this.#receivableInvoiceApi ??= new ReceivableInvoiceApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get taxInvoice(): TaxInvoice {
    return (this.#taxInvoice ??= new TaxInvoice(this.#rawClient, this.#servers, this.#auth));
  }
}
