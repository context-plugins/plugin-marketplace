import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { customerSchema, type Customer } from "./customer.js";
import { employeeSchema, type Employee } from "./employee.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { loyaltySchema, type Loyalty } from "./loyalty.js";
import { orderServiceTypeSchema, type OrderServiceType } from "./order-service-type.js";
import { paymentSchema, type Payment } from "./payment.js";
import { receiptDeliverySchema, type ReceiptDelivery } from "./receipt-delivery.js";
import { receiptSummarySchema, type ReceiptSummary } from "./receipt-summary.js";
import { receiptTypeSchema, type ReceiptType } from "./receipt-type.js";

/**
 * A Razorpay Billme digital receipt/bill. Used for retail, food & beverage, events, ecommerce, and
 * other use cases.
 */
export type Bill = {
  /** Bill ID with prefix bill_ */
  id?: string;
  businessType?: BusinessType;
  businessCategory?: string;
  customer?: Customer;
  employee?: Employee;
  loyalty?: Loyalty;
  storeCode?: string;
  /** Unix timestamp of the transaction */
  receiptTimestamp?: number;
  receiptNumber?: string;
  receiptType?: ReceiptType;
  receiptDelivery?: ReceiptDelivery;
  tags?: Record<string, unknown>;
  barCodeNumber?: string;
  qrCodeNumber?: string;
  billingPosNumber?: string;
  posCategory?: string;
  orderNumber?: string;
  orderServiceType?: OrderServiceType;
  deliveryStatusUrl?: string;
  lineItems?: LineItem[];
  receiptSummary?: ReceiptSummary;
  taxes?: Record<string, unknown>[];
  payments?: Payment[];
  /** Event details for events business type */
  event?: Record<string, unknown>;
  /** Invoice Reference Number for GST e-invoicing */
  irn?: string;
  receiptUrl?: string;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billSchema: Schema<Bill> = s.object<Bill>(
  {
    id: s.optional(s.string()),
    businessType: s.optional(s.lazy(() => businessTypeSchema)),
    businessCategory: s.optional(s.string()),
    customer: s.optional(s.lazy(() => customerSchema)),
    employee: s.optional(s.lazy(() => employeeSchema)),
    loyalty: s.optional(s.lazy(() => loyaltySchema)),
    storeCode: s.optional(s.string()),
    receiptTimestamp: s.optional(s.int()),
    receiptNumber: s.optional(s.string()),
    receiptType: s.optional(s.lazy(() => receiptTypeSchema)),
    receiptDelivery: s.optional(s.lazy(() => receiptDeliverySchema)),
    tags: s.optional(s.record(s.string(), s.unknown())),
    barCodeNumber: s.optional(s.string()),
    qrCodeNumber: s.optional(s.string()),
    billingPosNumber: s.optional(s.string()),
    posCategory: s.optional(s.string()),
    orderNumber: s.optional(s.string()),
    orderServiceType: s.optional(s.lazy(() => orderServiceTypeSchema)),
    deliveryStatusUrl: s.optional(s.string()),
    lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
    receiptSummary: s.optional(s.lazy(() => receiptSummarySchema)),
    taxes: s.optional(s.array(s.record(s.string(), s.unknown()))),
    payments: s.optional(s.array(s.lazy(() => paymentSchema))),
    event: s.optional(s.record(s.string(), s.unknown())),
    irn: s.optional(s.string()),
    receiptUrl: s.optional(s.string()),
    createdAt: s.optional(s.int()),
    _keysMap: {
      businessType: "business_type",
      businessCategory: "business_category",
      storeCode: "store_code",
      receiptTimestamp: "receipt_timestamp",
      receiptNumber: "receipt_number",
      receiptType: "receipt_type",
      receiptDelivery: "receipt_delivery",
      barCodeNumber: "bar_code_number",
      qrCodeNumber: "qr_code_number",
      billingPosNumber: "billing_pos_number",
      posCategory: "pos_category",
      orderNumber: "order_number",
      orderServiceType: "order_service_type",
      deliveryStatusUrl: "delivery_status_url",
      lineItems: "line_items",
      receiptSummary: "receipt_summary",
      receiptUrl: "receipt_url",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
