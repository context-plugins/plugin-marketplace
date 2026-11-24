import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type PaymentsQrCodesRequest = {
  /**
   * QR code type. Only upi_qr is supported (on-demand feature requiring merchant activation).
   *
   * @default "upi_qr"
   */
  type?: "upi_qr";
  /** Label for the QR code. */
  name: string;
  /**
   * single_use: auto-closes after first successful payment (requires fixed_amount=true).
   * multiple_use: stays open for multiple payments.
   */
  usage: Usage;
  /**
   * true: fixed amount QR (required for single_use). false: customer enters amount at scan time.
   */
  fixedAmount: boolean;
  /** Fixed payment amount in paise. Required when fixed_amount=true. */
  paymentAmount?: number;
  description?: string;
  /** Associate QR code with a customer (cust_*). */
  customerId?: string;
  /** Unix timestamp for auto-close. Maximum 45 days from creation for single_use. */
  closeBy?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsQrCodesRequestProperties: s.Shape<PaymentsQrCodesRequest> = {
  type: s.defaulted(s.literal("upi_qr"), "upi_qr"),
  name: s.string(),
  usage: usageSchema,
  fixedAmount: s.boolean(),
  paymentAmount: s.optional(s.int()),
  description: s.optional(s.string()),
  customerId: s.optional(s.string()),
  closeBy: s.optional(s.int()),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    fixedAmount: "fixed_amount",
    paymentAmount: "payment_amount",
    customerId: "customer_id",
    closeBy: "close_by",
  },
};

export const paymentsQrCodesRequestInternalSchema: Schema<PaymentsQrCodesRequest> =
  s.object<PaymentsQrCodesRequest>(paymentsQrCodesRequestProperties, { additionalProperties: s.json() });

export const paymentsQrCodesRequestSchema: Schema<PaymentsQrCodesRequest> = s.lazySchema(() =>
  s.object<PaymentsQrCodesRequest>(
    {
      ...paymentsQrCodesRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
