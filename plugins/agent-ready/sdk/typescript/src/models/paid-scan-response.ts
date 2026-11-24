import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentSettlementSchema, type PaymentSettlement } from "./payment-settlement.js";
import { scanInternalSchema, scanSchema, type Scan } from "./scan.js";

/** Result of a paid scan (x402 or MPP). */
export type PaidScanResponse = {
  /** Full scan result. Same shape returned for sync, async, and cached reads. */
  scan: Scan;
  shareUrl: string;
  /**
   * Signed token letting the payer claim this scan against an account. Present when claim signing
   * is configured.
   */
  claim?: string;
  /**
   * Present only when the scan succeeded but on-chain settlement did not. The result is still
   * returned rather than failing a paid caller.
   */
  paymentSettlement?: PaymentSettlement;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paidScanResponseProperties: s.Shape<PaidScanResponse> = {
  scan: scanInternalSchema,
  shareUrl: s.string(),
  claim: s.optional(s.string()),
  paymentSettlement: s.optional(s.lazy(() => paymentSettlementSchema)),
};

export const paidScanResponseInternalSchema: Schema<PaidScanResponse> = s.object<PaidScanResponse>(
  paidScanResponseProperties,
  { additionalProperties: s.json() },
);

export const paidScanResponseSchema: Schema<PaidScanResponse> = s.lazySchema(() =>
  s.object<PaidScanResponse>(
    {
      ...paidScanResponseProperties,
      scan: scanSchema,
    },
    { additionalProperties: s.json() },
  ),
);
