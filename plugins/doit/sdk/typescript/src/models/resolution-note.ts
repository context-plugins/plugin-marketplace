import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

/** Optional reason and comment captured on a resolve transition. */
export type ResolutionNote = {
  /**
   * Feedback reason; must belong to the given `resolution`. `ANOMALY_CONFIRMED` accepts
   * `SECURITY_BREACH`, `MISCONFIGURATION`, `UNINTENTIONAL_PROVISIONING`, `EXPECTED_COST_SPIKE`,
   * `ANOMALOUS_OTHER`; `NOT_ANOMALY` accepts `FAULTY_ANOMALY_DETECTION_MODEL`, `INCORRECT_DATA`,
   * `LOW_IMPACT`, `NON_ANOMALOUS_OTHER`.
   */
  reason?: Reason;
  /**
   * Free-text resolution comment; stored as the tagged resolution comment on the anomaly feed.
   * Length-capped like console comments.
   */
  comment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resolutionNoteSchema: Schema<ResolutionNote> = s.object<ResolutionNote>(
  {
    reason: s.optional(s.lazy(() => reasonSchema)),
    comment: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
