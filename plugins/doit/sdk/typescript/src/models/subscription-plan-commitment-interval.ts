import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The start and end dates of an annual commitment term. */
export type SubscriptionPlanCommitmentInterval = {
  /** The end time of the commitment interval, in milliseconds since the epoch. */
  endTime?: number;
  /** The start time of the commitment interval, in milliseconds since the epoch. */
  startTime?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionPlanCommitmentIntervalSchema: Schema<SubscriptionPlanCommitmentInterval> =
  s.object<SubscriptionPlanCommitmentInterval>(
    {
      endTime: s.optional(s.int()),
      startTime: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
