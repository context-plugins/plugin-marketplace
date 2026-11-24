import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acquirerDataSchema, type AcquirerData } from "./acquirer-data.js";
import { cardDetailsSchema, type CardDetails } from "./card-details.js";
import {
  entity1RazorpayOrdersApiSchema,
  type Entity1RazorpayOrdersApi,
} from "./entity1-razorpay-orders-api.js";
import { methodSchema, type Method } from "./method.js";
import { refundStatusSchema, type RefundStatus } from "./refund-status.js";
import {
  status1RazorpayOrdersApiSchema,
  type Status1RazorpayOrdersApi,
} from "./status1-razorpay-orders-api.js";
import { upiDetailsSchema, type UpiDetails } from "./upi-details.js";

export type PaymentRazorpayOrdersApi = {
  /** Unique payment identifier. Prefix: pay_ */
  id?: string;
  entity?: Entity1RazorpayOrdersApi;
  /** Payment amount in paise. */
  amount?: number;
  currency?: string;
  /**
   * created: initiated. authorized: bank approved, not yet captured. captured: funds collected.
   * refunded: fully refunded. failed: transaction failed.
   */
  status?: Status1RazorpayOrdersApi;
  /** Associated order ID (order_*). */
  orderId?: string;
  invoiceId?: string;
  international?: boolean;
  method?: Method;
  /** Total refunded amount in paise. */
  amountRefunded?: number;
  refundStatus?: RefundStatus;
  captured?: boolean;
  description?: string;
  cardId?: string;
  card?: CardDetails;
  /** Bank code for netbanking. Example: HDFC. */
  bank?: string;
  /** Wallet name. Examples: paytm, mobikwik. */
  wallet?: string;
  vpa?: string;
  upi?: UpiDetails;
  email?: string;
  contact?: string;
  customerId?: string;
  tokenId?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Razorpay fee charged (paise). */
  fee?: number;
  /** GST on the fee (paise). */
  tax?: number;
  errorCode?: string;
  errorDescription?: string;
  errorSource?: string;
  errorStep?: string;
  errorReason?: string;
  acquirerData?: AcquirerData;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentRazorpayOrdersApiProperties: s.Shape<PaymentRazorpayOrdersApi> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity1RazorpayOrdersApiSchema)),
  amount: s.optional(s.int()),
  currency: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1RazorpayOrdersApiSchema)),
  orderId: s.optional(s.string()),
  invoiceId: s.optional(s.string()),
  international: s.optional(s.boolean()),
  method: s.optional(s.lazy(() => methodSchema)),
  amountRefunded: s.optional(s.int()),
  refundStatus: s.optional(s.lazy(() => refundStatusSchema)),
  captured: s.optional(s.boolean()),
  description: s.optional(s.string()),
  cardId: s.optional(s.string()),
  card: s.optional(s.lazy(() => cardDetailsSchema)),
  bank: s.optional(s.string()),
  wallet: s.optional(s.string()),
  vpa: s.optional(s.string()),
  upi: s.optional(s.lazy(() => upiDetailsSchema)),
  email: s.optional(s.string()),
  contact: s.optional(s.string()),
  customerId: s.optional(s.string()),
  tokenId: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  fee: s.optional(s.int()),
  tax: s.optional(s.int()),
  errorCode: s.optional(s.string()),
  errorDescription: s.optional(s.string()),
  errorSource: s.optional(s.string()),
  errorStep: s.optional(s.string()),
  errorReason: s.optional(s.string()),
  acquirerData: s.optional(s.lazy(() => acquirerDataSchema)),
  createdAt: s.optional(s.int()),
  _keysMap: {
    orderId: "order_id",
    invoiceId: "invoice_id",
    amountRefunded: "amount_refunded",
    refundStatus: "refund_status",
    cardId: "card_id",
    customerId: "customer_id",
    tokenId: "token_id",
    errorCode: "error_code",
    errorDescription: "error_description",
    errorSource: "error_source",
    errorStep: "error_step",
    errorReason: "error_reason",
    acquirerData: "acquirer_data",
    createdAt: "created_at",
  },
};

export const paymentRazorpayOrdersApiInternalSchema: Schema<PaymentRazorpayOrdersApi> =
  s.object<PaymentRazorpayOrdersApi>(paymentRazorpayOrdersApiProperties, { additionalProperties: s.json() });

export const paymentRazorpayOrdersApiSchema: Schema<PaymentRazorpayOrdersApi> = s.lazySchema(() =>
  s.object<PaymentRazorpayOrdersApi>(
    {
      ...paymentRazorpayOrdersApiProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
