import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { payoutDetails2Schema, type PayoutDetails2 } from "./payout-details2.js";
import { statusSchema, type Status } from "./status.js";

export type PayoutDetailsResponse = {
  status?: Status;
  /** Response data for initiate payout request */
  data?: PayoutDetails2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutDetailsResponseSchema: Schema<PayoutDetailsResponse> = s.object<PayoutDetailsResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => payoutDetails2Schema)),
  },
  { additionalProperties: s.json() },
);
