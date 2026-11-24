import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type PayoutModesResponse = {
  status?: Status;
  /** Available payout modes with eligibility details */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutModesResponseSchema: Schema<PayoutModesResponse> = s.object<PayoutModesResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
