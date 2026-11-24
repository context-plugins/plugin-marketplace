import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { freeTrialSchema, type FreeTrial } from "./free-trial.js";

export type PaidReads = {
  /**
   * Reads used this month by platforms read through paid data providers (Yelp, Tripadvisor,
   * Booking.com…) on live connections.
   */
  used: number;
  /** Reads included this month: the plan's plus read packs. */
  limit: number;
  /**
   * One-off free reads (100 per account, never renewed) to try Google Maps and Tripadvisor with
   * real data.
   */
  freeTrial?: FreeTrial;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paidReadsSchema: Schema<PaidReads> = s.object<PaidReads>(
  {
    used: s.int(),
    limit: s.int(),
    freeTrial: s.optional(s.lazy(() => freeTrialSchema)),
    _keysMap: {
      freeTrial: "free_trial",
    },
  },
  { additionalProperties: s.json() },
);
