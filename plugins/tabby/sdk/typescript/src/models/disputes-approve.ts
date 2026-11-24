import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disputeNoHistorySchema, type DisputeNoHistory } from "./dispute-no-history.js";

export type DisputesApprove = {
  disputes?: DisputeNoHistory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesApproveSchema: Schema<DisputesApprove> = s.object<DisputesApprove>(
  {
    disputes: s.optional(s.array(s.lazy(() => disputeNoHistorySchema))),
  },
  { additionalProperties: s.json() },
);
