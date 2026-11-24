import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { customer1Schema, type Customer1 } from "./customer1.js";
import { receiptDeliverySchema, type ReceiptDelivery } from "./receipt-delivery.js";
import { receiptTypeSchema, type ReceiptType } from "./receipt-type.js";

export type BillsRequest = {
  businessType: BusinessType;
  businessCategory?: string;
  customer: Customer1;
  receiptTimestamp?: number;
  receiptNumber?: string;
  receiptType?: ReceiptType;
  receiptDelivery?: ReceiptDelivery;
  storeCode?: string;
  orderNumber?: string;
  lineItems?: Record<string, unknown>[];
  receiptSummary?: Record<string, unknown>;
  taxes?: Record<string, unknown>[];
  payments?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billsRequestSchema: Schema<BillsRequest> = s.object<BillsRequest>(
  {
    businessType: businessTypeSchema,
    businessCategory: s.optional(s.string()),
    customer: customer1Schema,
    receiptTimestamp: s.optional(s.int()),
    receiptNumber: s.optional(s.string()),
    receiptType: s.optional(s.lazy(() => receiptTypeSchema)),
    receiptDelivery: s.optional(s.lazy(() => receiptDeliverySchema)),
    storeCode: s.optional(s.string()),
    orderNumber: s.optional(s.string()),
    lineItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
    receiptSummary: s.optional(s.record(s.string(), s.unknown())),
    taxes: s.optional(s.array(s.record(s.string(), s.unknown()))),
    payments: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      businessType: "business_type",
      businessCategory: "business_category",
      receiptTimestamp: "receipt_timestamp",
      receiptNumber: "receipt_number",
      receiptType: "receipt_type",
      receiptDelivery: "receipt_delivery",
      storeCode: "store_code",
      orderNumber: "order_number",
      lineItems: "line_items",
      receiptSummary: "receipt_summary",
    },
  },
  { additionalProperties: s.json() },
);
