import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  purchaseOrderLineInternalSchema,
  purchaseOrderLineSchema,
  type PurchaseOrderLine,
} from "./purchase-order-line.js";
import {
  statusDynamics365BusinessCentralApiV20PurchaseOrdersApiSchema,
  type StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi,
} from "./status-dynamics365-business-central-api-v20-purchase-orders-api.js";

export type PurchaseOrder = {
  odataEtag?: string;
  /** The unique identifier of the purchase order */
  id?: string;
  /** The purchase order number */
  number?: string;
  /** The order date */
  orderDate?: string;
  /** The posting date */
  postingDate?: string;
  /** The vendor ID */
  vendorId?: string;
  /** The vendor number */
  vendorNumber?: string;
  /** The vendor name */
  vendorName?: string;
  payToName?: string;
  payToVendorId?: string;
  payToVendorNumber?: string;
  shipToName?: string;
  shipToContact?: string;
  buyFromAddressLine1?: string;
  buyFromAddressLine2?: string;
  buyFromCity?: string;
  buyFromCountry?: string;
  buyFromState?: string;
  buyFromPostCode?: string;
  currencyId?: string;
  currencyCode?: string;
  pricesIncludeTax?: boolean;
  paymentTermsId?: string;
  shipmentMethodId?: string;
  purchaser?: string;
  requestedReceiptDate?: string;
  discountAmount?: number;
  discountAppliedBeforeTax?: boolean;
  totalAmountExcludingTax?: number;
  totalTaxAmount?: number;
  totalAmountIncludingTax?: number;
  fullyReceived?: boolean;
  status?: StatusDynamics365BusinessCentralApiV20PurchaseOrdersApi;
  lastModifiedDateTime?: Date;
  purchaseOrderLines?: PurchaseOrderLine[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const purchaseOrderProperties: s.Shape<PurchaseOrder> = {
  odataEtag: s.optional(s.string()),
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  orderDate: s.optional(s.dateOnly()),
  postingDate: s.optional(s.dateOnly()),
  vendorId: s.optional(s.string()),
  vendorNumber: s.optional(s.string()),
  vendorName: s.optional(s.string()),
  payToName: s.optional(s.string()),
  payToVendorId: s.optional(s.string()),
  payToVendorNumber: s.optional(s.string()),
  shipToName: s.optional(s.string()),
  shipToContact: s.optional(s.string()),
  buyFromAddressLine1: s.optional(s.string()),
  buyFromAddressLine2: s.optional(s.string()),
  buyFromCity: s.optional(s.string()),
  buyFromCountry: s.optional(s.string()),
  buyFromState: s.optional(s.string()),
  buyFromPostCode: s.optional(s.string()),
  currencyId: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
  paymentTermsId: s.optional(s.string()),
  shipmentMethodId: s.optional(s.string()),
  purchaser: s.optional(s.string()),
  requestedReceiptDate: s.optional(s.dateOnly()),
  discountAmount: s.optional(s.float64()),
  discountAppliedBeforeTax: s.optional(s.boolean()),
  totalAmountExcludingTax: s.optional(s.float64()),
  totalTaxAmount: s.optional(s.float64()),
  totalAmountIncludingTax: s.optional(s.float64()),
  fullyReceived: s.optional(s.boolean()),
  status: s.optional(s.lazy(() => statusDynamics365BusinessCentralApiV20PurchaseOrdersApiSchema)),
  lastModifiedDateTime: s.optional(s.dateTime()),
  purchaseOrderLines: s.optional(s.array(s.lazy(() => purchaseOrderLineInternalSchema))),
  _keysMap: {
    odataEtag: "@odata.etag",
  },
};

export const purchaseOrderInternalSchema: Schema<PurchaseOrder> = s.object<PurchaseOrder>(
  purchaseOrderProperties,
  { additionalProperties: s.json() },
);

export const purchaseOrderSchema: Schema<PurchaseOrder> = s.lazySchema(() =>
  s.object<PurchaseOrder>(
    {
      ...purchaseOrderProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      vendorNumber: s.optional(s.string().check(s.maxLength(20))),
      vendorName: s.optional(s.string().check(s.maxLength(100))),
      payToName: s.optional(s.string().check(s.maxLength(100))),
      payToVendorNumber: s.optional(s.string().check(s.maxLength(20))),
      shipToName: s.optional(s.string().check(s.maxLength(100))),
      shipToContact: s.optional(s.string().check(s.maxLength(100))),
      buyFromAddressLine1: s.optional(s.string().check(s.maxLength(100))),
      buyFromAddressLine2: s.optional(s.string().check(s.maxLength(50))),
      buyFromCity: s.optional(s.string().check(s.maxLength(30))),
      buyFromCountry: s.optional(s.string().check(s.maxLength(10))),
      buyFromState: s.optional(s.string().check(s.maxLength(20))),
      buyFromPostCode: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
      purchaser: s.optional(s.string().check(s.maxLength(20))),
      purchaseOrderLines: s.optional(s.array(s.lazy(() => purchaseOrderLineSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
