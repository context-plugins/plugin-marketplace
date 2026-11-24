import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { closeReasonSchema, type CloseReason } from "./close-reason.js";
import {
  entityRazorpayQrCodesApiSchema,
  type EntityRazorpayQrCodesApi,
} from "./entity-razorpay-qr-codes-api.js";
import {
  statusRazorpayQrCodesApiSchema,
  type StatusRazorpayQrCodesApi,
} from "./status-razorpay-qr-codes-api.js";
import { usageTypeSchema, type UsageType } from "./usage-type.js";

export type QrCode = {
  /** Unique QR code identifier. Prefix: qr_ */
  id?: string;
  entity?: EntityRazorpayQrCodesApi;
  /** Label for the QR code. */
  name?: string;
  description?: string;
  /** Hosted URL of the QR code image. */
  imageUrl?: string;
  /** Fixed payment amount in paise. Null for variable-amount QR codes. */
  paymentAmount?: number;
  status?: StatusRazorpayQrCodesApi;
  usageType?: UsageType;
  /** Unix timestamp when the QR code will auto-close. */
  closeBy?: number;
  /** Unix timestamp when the QR code was closed. */
  closedAt?: number;
  /** Why the QR code was closed. */
  closeReason?: CloseReason;
  /** Associated customer ID (cust_*). */
  customerId?: string;
  /** Total amount received via this QR code (paise). */
  paymentsAmountReceived?: number;
  /** Number of payments received. */
  paymentsCountReceived?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qrCodeProperties: s.Shape<QrCode> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayQrCodesApiSchema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  paymentAmount: s.optional(s.int()),
  status: s.optional(s.lazy(() => statusRazorpayQrCodesApiSchema)),
  usageType: s.optional(s.lazy(() => usageTypeSchema)),
  closeBy: s.optional(s.int()),
  closedAt: s.optional(s.int()),
  closeReason: s.optional(s.lazy(() => closeReasonSchema)),
  customerId: s.optional(s.string()),
  paymentsAmountReceived: s.optional(s.int()),
  paymentsCountReceived: s.optional(s.int()),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  _keysMap: {
    imageUrl: "image_url",
    paymentAmount: "payment_amount",
    usageType: "usage_type",
    closeBy: "close_by",
    closedAt: "closed_at",
    closeReason: "close_reason",
    customerId: "customer_id",
    paymentsAmountReceived: "payments_amount_received",
    paymentsCountReceived: "payments_count_received",
    createdAt: "created_at",
  },
};

export const qrCodeInternalSchema: Schema<QrCode> = s.object<QrCode>(qrCodeProperties, {
  additionalProperties: s.json(),
});

export const qrCodeSchema: Schema<QrCode> = s.lazySchema(() =>
  s.object<QrCode>(
    {
      ...qrCodeProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
