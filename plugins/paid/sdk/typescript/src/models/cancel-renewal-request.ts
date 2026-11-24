import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request to cancel an order's renewal */
export type CancelRenewalRequest = {
  /** The current version of the order (for optimistic locking) */
  orderVersion: number;
  /** The date from which the renewal should be cancelled (ISO 8601 format) */
  cancelFromDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelRenewalRequestSchema: Schema<CancelRenewalRequest> = s.object<CancelRenewalRequest>(
  {
    orderVersion: s.int(),
    cancelFromDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
