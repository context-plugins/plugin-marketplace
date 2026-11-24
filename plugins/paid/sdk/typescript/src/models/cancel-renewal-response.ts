import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response after successfully cancelling an order's renewal */
export type CancelRenewalResponse = {
  /** The ID of the order */
  orderId: string;
  /** The ID of the amendment record */
  amendmentId: string;
  /** The new version of the order after the amendment */
  version: number;
  /** The new end date of the order */
  endDate: Date;
  /** The effective date of the cancellation */
  effectiveDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelRenewalResponseSchema: Schema<CancelRenewalResponse> = s.object<CancelRenewalResponse>(
  {
    orderId: s.string(),
    amendmentId: s.string(),
    version: s.int(),
    endDate: s.dateTime(),
    effectiveDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
