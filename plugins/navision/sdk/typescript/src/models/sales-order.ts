import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  salesOrderLineInternalSchema,
  salesOrderLineSchema,
  type SalesOrderLine,
} from "./sales-order-line.js";
import {
  statusDynamics365BusinessCentralApiV20SalesOrdersApiSchema,
  type StatusDynamics365BusinessCentralApiV20SalesOrdersApi,
} from "./status-dynamics365-business-central-api-v20-sales-orders-api.js";

export type SalesOrder = {
  odataEtag?: string;
  /** The unique identifier of the sales order */
  id?: string;
  /** The sales order number */
  number?: string;
  /** The external document number */
  externalDocumentNumber?: string;
  /** The order date */
  orderDate?: string;
  /** The posting date */
  postingDate?: string;
  /** The customer ID */
  customerId?: string;
  /** The customer number */
  customerNumber?: string;
  /** The customer name */
  customerName?: string;
  /** The bill-to name */
  billToName?: string;
  /** The bill-to customer ID */
  billToCustomerId?: string;
  /** The bill-to customer number */
  billToCustomerNumber?: string;
  /** The ship-to name */
  shipToName?: string;
  /** The ship-to contact */
  shipToContact?: string;
  sellToAddressLine1?: string;
  sellToAddressLine2?: string;
  sellToCity?: string;
  sellToCountry?: string;
  sellToState?: string;
  sellToPostCode?: string;
  currencyId?: string;
  currencyCode?: string;
  pricesIncludeTax?: boolean;
  paymentTermsId?: string;
  shipmentMethodId?: string;
  salesperson?: string;
  requestedDeliveryDate?: string;
  /** The total discount amount */
  discountAmount?: number;
  discountAppliedBeforeTax?: boolean;
  totalAmountExcludingTax?: number;
  totalTaxAmount?: number;
  totalAmountIncludingTax?: number;
  fullyShipped?: boolean;
  /** The order status */
  status?: StatusDynamics365BusinessCentralApiV20SalesOrdersApi;
  lastModifiedDateTime?: Date;
  phoneNumber?: string;
  email?: string;
  salesOrderLines?: SalesOrderLine[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const salesOrderProperties: s.Shape<SalesOrder> = {
  odataEtag: s.optional(s.string()),
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  externalDocumentNumber: s.optional(s.string()),
  orderDate: s.optional(s.dateOnly()),
  postingDate: s.optional(s.dateOnly()),
  customerId: s.optional(s.string()),
  customerNumber: s.optional(s.string()),
  customerName: s.optional(s.string()),
  billToName: s.optional(s.string()),
  billToCustomerId: s.optional(s.string()),
  billToCustomerNumber: s.optional(s.string()),
  shipToName: s.optional(s.string()),
  shipToContact: s.optional(s.string()),
  sellToAddressLine1: s.optional(s.string()),
  sellToAddressLine2: s.optional(s.string()),
  sellToCity: s.optional(s.string()),
  sellToCountry: s.optional(s.string()),
  sellToState: s.optional(s.string()),
  sellToPostCode: s.optional(s.string()),
  currencyId: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
  paymentTermsId: s.optional(s.string()),
  shipmentMethodId: s.optional(s.string()),
  salesperson: s.optional(s.string()),
  requestedDeliveryDate: s.optional(s.dateOnly()),
  discountAmount: s.optional(s.float64()),
  discountAppliedBeforeTax: s.optional(s.boolean()),
  totalAmountExcludingTax: s.optional(s.float64()),
  totalTaxAmount: s.optional(s.float64()),
  totalAmountIncludingTax: s.optional(s.float64()),
  fullyShipped: s.optional(s.boolean()),
  status: s.optional(s.lazy(() => statusDynamics365BusinessCentralApiV20SalesOrdersApiSchema)),
  lastModifiedDateTime: s.optional(s.dateTime()),
  phoneNumber: s.optional(s.string()),
  email: s.optional(s.string()),
  salesOrderLines: s.optional(s.array(s.lazy(() => salesOrderLineInternalSchema))),
  _keysMap: {
    odataEtag: "@odata.etag",
  },
};

export const salesOrderInternalSchema: Schema<SalesOrder> = s.object<SalesOrder>(salesOrderProperties, {
  additionalProperties: s.json(),
});

export const salesOrderSchema: Schema<SalesOrder> = s.lazySchema(() =>
  s.object<SalesOrder>(
    {
      ...salesOrderProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      externalDocumentNumber: s.optional(s.string().check(s.maxLength(35))),
      customerNumber: s.optional(s.string().check(s.maxLength(20))),
      customerName: s.optional(s.string().check(s.maxLength(100))),
      billToName: s.optional(s.string().check(s.maxLength(100))),
      billToCustomerNumber: s.optional(s.string().check(s.maxLength(20))),
      shipToName: s.optional(s.string().check(s.maxLength(100))),
      shipToContact: s.optional(s.string().check(s.maxLength(100))),
      sellToAddressLine1: s.optional(s.string().check(s.maxLength(100))),
      sellToAddressLine2: s.optional(s.string().check(s.maxLength(50))),
      sellToCity: s.optional(s.string().check(s.maxLength(30))),
      sellToCountry: s.optional(s.string().check(s.maxLength(10))),
      sellToState: s.optional(s.string().check(s.maxLength(20))),
      sellToPostCode: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
      salesperson: s.optional(s.string().check(s.maxLength(20))),
      phoneNumber: s.optional(s.string().check(s.maxLength(30))),
      email: s.optional(s.string().check(s.maxLength(80))),
      salesOrderLines: s.optional(s.array(s.lazy(() => salesOrderLineSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
