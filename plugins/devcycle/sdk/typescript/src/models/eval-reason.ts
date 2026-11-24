import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

/** The reason the User was Served this particular value */
export type EvalReason = {
  /** Evaluation reason */
  reason: Reason;
  /** Detailed description of evaluation */
  details?: string;
  /** ID of the targeting rule that matched */
  targetId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evalReasonSchema: Schema<EvalReason> = s.object<EvalReason>(
  {
    reason: reasonSchema,
    details: s.optional(s.string()),
    targetId: s.optional(s.string()),
    _keysMap: {
      targetId: "target_id",
    },
  },
  { additionalProperties: s.json() },
);
