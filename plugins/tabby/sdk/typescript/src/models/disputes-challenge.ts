import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disputeNoHistorySchema, type DisputeNoHistory } from "./dispute-no-history.js";

export type DisputesChallenge = {
  disputes?: DisputeNoHistory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesChallengeSchema: Schema<DisputesChallenge> = s.object<DisputesChallenge>(
  {
    disputes: s.optional(s.array(s.lazy(() => disputeNoHistorySchema))),
  },
  { additionalProperties: s.json() },
);
