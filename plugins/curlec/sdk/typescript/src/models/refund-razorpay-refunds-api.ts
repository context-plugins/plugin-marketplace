import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acquirerDataRazorpayRefundsApiSchema,
  type AcquirerDataRazorpayRefundsApi,
} from "./acquirer-data-razorpay-refunds-api.js";
import {
  entityRazorpayRefundsApiSchema,
  type EntityRazorpayRefundsApi,
} from "./entity-razorpay-refunds-api.js";
import { speedProcessedSchema, type SpeedProcessed } from "./speed-processed.js";
import { speedRequestedSchema, type SpeedRequested } from "./speed-requested.js";
import {
  statusRazorpayRefundsApiSchema,
  type StatusRazorpayRefundsApi,
} from "./status-razorpay-refunds-api.js";

export type RefundRazorpayRefundsApi = {
  /** Unique refund identifier. Prefix: rfnd_ */
  id?: string;
  entity?: EntityRazorpayRefundsApi;
  /** Refund amount in paise. */
  amount?: number;
  currency?: string;
  /** The original payment ID (pay_*). */
  paymentId?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Your internal reference identifier. */
  receipt?: string;
  /** Bank reference numbers for tracking: RRN (UPI/netbanking), ARN (cards), UTR (NEFT/RTGS). */
  acquirerData?: AcquirerDataRazorpayRefundsApi;
  createdAt?: number;
  /** Set if refund was part of a batch upload. */
  batchId?: string;
  /** pending: being processed. processed: credited to customer. failed: refund failed. */
  status?: StatusRazorpayRefundsApi;
  /** normal: 5-7 business days. optimum: instant if available, falls back to normal. */
  speedRequested?: SpeedRequested;
  /** Actual processing mode used. */
  speedProcessed?: SpeedProcessed;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const refundRazorpayRefundsApiProperties: s.Shape<RefundRazorpayRefundsApi> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayRefundsApiSchema)),
  amount: s.optional(s.int()),
  currency: s.optional(s.string()),
  paymentId: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  receipt: s.optional(s.string()),
  acquirerData: s.optional(s.lazy(() => acquirerDataRazorpayRefundsApiSchema)),
  createdAt: s.optional(s.int()),
  batchId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusRazorpayRefundsApiSchema)),
  speedRequested: s.optional(s.lazy(() => speedRequestedSchema)),
  speedProcessed: s.optional(s.lazy(() => speedProcessedSchema)),
  _keysMap: {
    paymentId: "payment_id",
    acquirerData: "acquirer_data",
    createdAt: "created_at",
    batchId: "batch_id",
    speedRequested: "speed_requested",
    speedProcessed: "speed_processed",
  },
};

export const refundRazorpayRefundsApiInternalSchema: Schema<RefundRazorpayRefundsApi> =
  s.object<RefundRazorpayRefundsApi>(refundRazorpayRefundsApiProperties, { additionalProperties: s.json() });

export const refundRazorpayRefundsApiSchema: Schema<RefundRazorpayRefundsApi> = s.lazySchema(() =>
  s.object<RefundRazorpayRefundsApi>(
    {
      ...refundRazorpayRefundsApiProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
